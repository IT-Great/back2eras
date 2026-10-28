/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface MediaPartner {
  id: number;
  media_name: string;
  contact_person: string;
  email: string;
  whatsapp: string;
  social_links: string;
  media_category: string;
  audience_size: string | null;
  media_kit: string;
  coverage_format: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export default function ManageMedia() {
  const [medias, setMedias] = useState<MediaPartner[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMedias = async () => {
    try {
      const res = await fetch("https://back.back2eras.com/api/media", {
        headers: { "Accept": "application/json" }
      });
      const data = await res.json();
      setMedias(data);
    } catch (error) {
      console.error("Failed to fetch media partners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedias();
  }, []);

  const handleStatusChange = async (id: number, currentStatus: string) => {
    const { value: newStatus } = await Swal.fire({
      title: "Update Media Status",
      input: "select",
      inputOptions: {
        pending: "Pending (Under Review)",
        approved: "Approved (Accredited)",
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
        await fetch(`https://back.back2eras.com/api/media/${id}/status`, {
          method: "PUT",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" 
          },
          body: JSON.stringify({ status: newStatus })
        });
        Swal.fire("Updated!", "Media status has been updated.", "success");
        fetchMedias();
      } catch (error) {
        Swal.fire("Error!", "Failed to update status.", "error");
      }
    }
  };

  const handleViewDetails = (media: MediaPartner) => {
    Swal.fire({
      title: media.media_name,
      html: `
        <div style="text-align:left; color:#eaddce; font-family:sans-serif; line-height:1.6; font-size:14px;">
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:15px; background:#000; padding:15px; border-radius:5px; border:1px solid #13bbad;">
            <div><strong style="color:#0fdff8;">Contact:</strong> ${media.contact_person}</div>
            <div><strong style="color:#0fdff8;">Category:</strong> ${media.media_category}</div>
            <div><strong style="color:#0fdff8;">Email:</strong> ${media.email}</div>
            <div><strong style="color:#0fdff8;">WhatsApp:</strong> ${media.whatsapp}</div>
            <div><strong style="color:#0fdff8;">Socials/Web:</strong> <a href="${media.social_links}" target="_blank" style="color:#fadf29; text-decoration:underline;">Link</a></div>
            <div><strong style="color:#0fdff8;">Media Kit:</strong> <a href="${media.media_kit}" target="_blank" style="color:#fadf29; text-decoration:underline;">View Portfolio</a></div>
            <div style="grid-column: span 2;"><strong style="color:#0fdff8;">Audience Size:</strong> ${media.audience_size || 'Not specified'}</div>
          </div>
          
          <div style="background:#000; padding:15px; border-radius:5px; border:1px solid #ff1493;">
            <strong style="color:#ff1493; text-transform:uppercase;">Proposed Coverage Format:</strong><br>
            ${media.coverage_format}
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
        await fetch(`https://back.back2eras.com/api/media/${id}`, {
          method: "DELETE",
          headers: { "Accept": "application/json" }
        });
        Swal.fire("Deleted!", "Media application has been deleted.", "success");
        fetchMedias();
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

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Media Applications...</div>;

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Media Partners
          </h1>
          <p className="text-gray-400 mt-2">Manage press, creators, and media coverage applications.</p>
        </div>
      </div>

      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-32">Date</th>
              <th className="p-4 border-b-2 border-black">Media Outlet</th>
              <th className="p-4 border-b-2 border-black w-32 text-center">Status</th>
              <th className="p-4 border-b-2 border-black text-center w-56">Actions</th>
            </tr>
          </thead>
          <tbody>
            {medias.length === 0 ? (
              <tr><td colSpan={4} className="p-8 text-center text-gray-400">No media applications found.</td></tr>
            ) : (
              medias.map((media) => (
                <tr key={media.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-sm text-gray-300">{formatDate(media.created_at)}</td>
                  
                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] text-lg mb-1">{media.media_name}</div>
                    <div className="text-xs text-[#0fdff8] uppercase">{media.media_category}</div>
                  </td>

                  <td className="p-4 text-center cursor-pointer hover:opacity-80" onClick={() => handleStatusChange(media.id, media.status)} title="Click to change status">
                    {getStatusBadge(media.status)}
                  </td>
                  
                  <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
                    <button onClick={() => handleViewDetails(media)} className="bg-[#0fdff8] text-black font-anton px-4 py-2 text-sm uppercase hover:bg-white transition-colors">View</button>
                    <button onClick={() => handleDelete(media.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
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