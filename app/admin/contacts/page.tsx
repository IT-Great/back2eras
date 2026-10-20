/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  type: string;
  message: string;
  created_at: string;
}

export default function ManageContacts() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await fetch("https://backend-back2eras.vercel.app/api/contacts", {
        headers: { "Accept": "application/json" }
      });
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleViewMessage = (msg: ContactMessage) => {
    Swal.fire({
      title: "Message Details",
      html: `
        <div style="text-align:left; color:#eaddce; font-family:sans-serif; line-height:1.6;">
          <p><strong>From:</strong> ${msg.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${msg.email}" style="color:#0fdff8;">${msg.email}</a></p>
          <p><strong>Topic:</strong> <span style="text-transform:uppercase; color:#fadf29;">${msg.type}</span></p>
          <hr style="border-color:#13bbad; margin: 15px 0;">
          <p style="white-space: pre-wrap; background:#000; padding:15px; border-radius:5px; border:1px solid #13bbad;">${msg.message}</p>
        </div>
      `,
      background: "#144333",
      color: "#eaddce",
      showCancelButton: true,
      confirmButtonText: "Reply via Email",
      cancelButtonText: "Close",
      confirmButtonColor: "#0fdff8",
      cancelButtonColor: "#ff1493",
      width: '600px'
    }).then((result) => {
      if (result.isConfirmed) {
        // Otomatis membuka aplikasi email (Gmail, Outlook, dll)
        window.location.href = `mailto:${msg.email}?subject=Reply from BACK2ERAS: Regarding your inquiry (${msg.type.toUpperCase()})`;
      }
    });
  };

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({
      title: "Delete Message?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#13bbad",
      confirmButtonText: "Yes, delete it!"
    });

    if (res.isConfirmed) {
      try {
        await fetch(`https://backend-back2eras.vercel.app/api/contacts/${id}`, {
          method: "DELETE",
          headers: { "Accept": "application/json" }
        });
        Swal.fire("Deleted!", "Message has been deleted.", "success");
        fetchMessages();
      } catch (error) {
        Swal.fire("Error!", "Failed to delete message.", "error");
      }
    }
  };

  // Helper format tanggal
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Messages...</div>;

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="mb-10">
        <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          Contact Messages
        </h1>
        <p className="text-gray-400 mt-2">Manage inquiries and questions from your website visitors.</p>
      </div>

      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-48">Date</th>
              <th className="p-4 border-b-2 border-black w-64">Sender</th>
              <th className="p-4 border-b-2 border-black w-40">Topic</th>
              <th className="p-4 border-b-2 border-black">Message Snippet</th>
              <th className="p-4 border-b-2 border-black text-center w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-gray-400">No messages found.</td></tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-sm text-gray-300">{formatDate(msg.created_at)}</td>
                  
                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] mb-1">{msg.name}</div>
                    <div className="text-xs text-[#0fdff8]">{msg.email}</div>
                  </td>
                  
                  <td className="p-4">
                    <span className="bg-[#144333] text-white border border-[#13bbad] px-2 py-1 text-xs uppercase font-bold rounded">
                      {msg.type}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-gray-300">
                    {/* Tampilkan pesan dipotong max 1 baris */}
                    <div className="line-clamp-1 max-w-sm">{msg.message}</div>
                  </td>
                  
                  <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
                    <button onClick={() => handleViewMessage(msg)} className="bg-[#fadf29] text-black font-anton px-4 py-2 text-sm uppercase hover:bg-white transition-colors">Read</button>
                    <button onClick={() => handleDelete(msg.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
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