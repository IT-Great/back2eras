/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface Tenant {
  id: number;
  brand_name: string;
  contact_person: string;
  email: string;
  whatsapp: string;
  social_link: string;
  category: string;
  photo_link: string;
  description: string;
  booth_size: string;
  special_req: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export default function ManageTenants() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTenants = async () => {
    try {
      const res = await fetch("https://back.back2eras.com/api/tenants", {
        headers: { "Accept": "application/json" }
      });
      const data = await res.json();
      setTenants(data);
    } catch (error) {
      console.error("Failed to fetch tenants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  const handleStatusChange = async (id: number, currentStatus: string) => {
    const { value: newStatus } = await Swal.fire({
      title: "Update Application Status",
      input: "select",
      inputOptions: {
        pending: "Pending (Under Review)",
        approved: "Approved (Accepted)",
        rejected: "Rejected (Declined)"
      },
      inputValue: currentStatus,
      showCancelButton: true,
      background: "#144333",
      color: "#eaddce",
      confirmButtonColor: "#0fdff8",
      cancelButtonColor: "#555"
    });

    if (newStatus && newStatus !== currentStatus) {
      try {
        await fetch(`https://back.back2eras.com/api/tenants/${id}/status`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" 
          },
          body: JSON.stringify({ status: newStatus })
        });
        Swal.fire("Updated!", "Tenant status has been updated.", "success");
        fetchTenants();
      } catch (error) {
        Swal.fire("Error!", "Failed to update status.", "error");
      }
    }
  };

  const handleViewDetails = (tenant: Tenant) => {
    Swal.fire({
      title: tenant.brand_name,
      html: `
        <div style="text-align:left; color:#eaddce; font-family:sans-serif; line-height:1.6; font-size:14px;">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:15px; background:#000; padding:15px; border-radius:5px; border:1px solid #13bbad;">
            <div><strong style="color:#0fdff8;">Contact:</strong> ${tenant.contact_person}</div>
            <div><strong style="color:#0fdff8;">Category:</strong> ${tenant.category}</div>
            <div><strong style="color:#0fdff8;">Email:</strong> ${tenant.email}</div>
            <div><strong style="color:#0fdff8;">WhatsApp:</strong> ${tenant.whatsapp}</div>
            <div><strong style="color:#0fdff8;">Social:</strong> <a href="${tenant.social_link}" target="_blank" style="color:#fadf29; text-decoration:underline;">Link</a></div>
            <div><strong style="color:#0fdff8;">Photo/Drive:</strong> <a href="${tenant.photo_link}" target="_blank" style="color:#fadf29; text-decoration:underline;">View File</a></div>
            <div><strong style="color:#0fdff8;">Booth Size:</strong> ${tenant.booth_size}</div>
            <div><strong style="color:#0fdff8;">Reqs:</strong> ${tenant.special_req || '-'}</div>
          </div>
          <div style="background:#000; padding:15px; border-radius:5px; border:1px solid #ff1493;">
            <strong style="color:#ff1493;">Brand Description:</strong><br>
            ${tenant.description}
          </div>
        </div>
      `,
      background: "#144333",
      width: '700px',
      showCloseButton: true,
      showConfirmButton: false
    });
  };

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({
      title: "Delete Application?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#13bbad"
    });

    if (res.isConfirmed) {
      try {
        await fetch(`https://back.back2eras.com/api/tenants/${id}`, {
          method: "DELETE",
          headers: { "Accept": "application/json" }
        });
        Swal.fire("Deleted!", "Application has been deleted.", "success");
        fetchTenants();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete application.", "error");
      }
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <span className="bg-green-600 text-white px-2 py-1 text-xs uppercase font-bold rounded">Approved</span>;
      case 'rejected': return <span className="bg-red-600 text-white px-2 py-1 text-xs uppercase font-bold rounded">Rejected</span>;
      default: return <span className="bg-yellow-500 text-black px-2 py-1 text-xs uppercase font-bold rounded">Pending</span>;
    }
  };

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Tenants...</div>;

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Tenant Applications
          </h1>
          <p className="text-gray-400 mt-2">Manage incoming brand/booth applications and approvals.</p>
        </div>
      </div>

      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-32">Date</th>
              <th className="p-4 border-b-2 border-black">Brand & Category</th>
              <th className="p-4 border-b-2 border-black w-32 text-center">Status</th>
              <th className="p-4 border-b-2 border-black text-center w-56">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-400">No applications found.</td></tr>
            ) : (
              tenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-sm text-gray-300">{formatDate(tenant.created_at)}</td>
                  
                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] text-lg mb-1">{tenant.brand_name}</div>
                    <div className="text-xs text-[#0fdff8] uppercase">{tenant.category}</div>
                  </td>

                  <td className="p-4 text-center cursor-pointer hover:opacity-80" onClick={() => handleStatusChange(tenant.id, tenant.status)} title="Click to change status">
                    {getStatusBadge(tenant.status)}
                  </td>
                  
                  <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
                    <button onClick={() => handleViewDetails(tenant)} className="bg-[#0fdff8] text-black font-anton px-4 py-2 text-sm uppercase hover:bg-white transition-colors">View</button>
                    <button onClick={() => handleDelete(tenant.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}