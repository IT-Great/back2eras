/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// interface Talkshow {
//   id: number;
//   poster: string;
//   poster_url: string;
//   speaker_name: string;
//   icon: string;
//   theme: string;
//   schedule: string;
//   status: "pending" | "approved" | "rejected";
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function AdminTalkshowsPage() {
//   const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState<string>("all");

//   // Modal Create / Edit State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingId, setEditingId] = useState<number | null>(null);
//   const [speakerName, setSpeakerName] = useState("");
//   const [icon, setIcon] = useState("");
//   const [theme, setTheme] = useState("");
//   const [schedule, setSchedule] = useState("");
//   const [status, setStatus] = useState<"pending" | "approved" | "rejected">("approved");
//   const [posterFile, setPosterFile] = useState<File | null>(null);
//   const [posterPreview, setPosterPreview] = useState<string | null>(null);
//   const [saving, setSaving] = useState(false);

//   const getToken = () => localStorage.getItem("admin_token") || "";

//   const fetchTalkshows = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/admin/talkshows`, {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setTalkshows(data);
//       }
//     } catch (error) {
//       console.error("Error loading talkshows:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTalkshows();
//   }, []);

//   // Konversi format DB ("2026-11-28 14:00:00") ke format datetime-local ("2026-11-28T14:00")
//   const toDateTimeLocal = (dbDate: string) => {
//     if (!dbDate) return "";
//     return dbDate.replace(" ", "T").slice(0, 16);
//   };

//   const openCreateModal = () => {
//     setEditingId(null);
//     setSpeakerName("");
//     setIcon("");
//     setTheme("");
//     setSchedule("");
//     setStatus("approved");
//     setPosterFile(null);
//     setPosterPreview(null);
//     setIsModalOpen(true);
//   };

//   const openEditModal = (item: Talkshow) => {
//     setEditingId(item.id);
//     setSpeakerName(item.speaker_name);
//     setIcon(item.icon);
//     setTheme(item.theme);
//     setSchedule(toDateTimeLocal(item.schedule));
//     setStatus(item.status);
//     setPosterFile(null);
//     setPosterPreview(item.poster_url);
//     setIsModalOpen(true);
//   };

//   const handleSave = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!editingId && !posterFile) {
//       Swal.fire({
//         title: "Poster Diperlukan",
//         text: "Unggah poster untuk data talkshow baru.",
//         icon: "warning",
//         background: "#144333",
//         color: "#eaddce",
//       });
//       return;
//     }

//     setSaving(true);
//     try {
//       const formData = new FormData();
//       formData.append("speaker_name", speakerName);
//       formData.append("icon", icon);
//       formData.append("theme", theme);
//       formData.append("schedule", schedule);
//       formData.append("status", status);
//       if (posterFile) {
//         formData.append("poster", posterFile);
//       }

//       let url = `${API_BASE}/admin/talkshows`;
//       if (editingId) {
//         url = `${API_BASE}/admin/talkshows/${editingId}`;
//         formData.append("_method", "PUT"); // Method spoofing Laravel untuk multipart/form-data
//       }

//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//         body: formData,
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Gagal menyimpan data.");

//       Swal.fire({
//         title: "Berhasil!",
//         text: result.message,
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       setIsModalOpen(false);
//       fetchTalkshows();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
//       Swal.fire({
//         title: "Error",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//       });
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleStatusChange = async (id: number, newStatus: "approved" | "rejected") => {
//     try {
//       const res = await fetch(`${API_BASE}/admin/talkshows/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!res.ok) throw new Error("Gagal mengubah status.");

//       Swal.fire({
//         title: newStatus === "approved" ? "Disetujui!" : "Ditolak!",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       fetchTalkshows();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Gagal memperbarui status.";
//       Swal.fire({ title: "Error", text: msg, icon: "error", background: "#144333", color: "#eaddce" });
//     }
//   };

//   const handleDelete = async (id: number) => {
//     const confirm = await Swal.fire({
//       title: "Hapus Talkshow?",
//       text: "Data dan gambar poster akan dihapus permanen.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ff1493",
//       cancelButtonColor: "#555",
//       confirmButtonText: "Ya, Hapus!",
//       background: "#144333",
//       color: "#eaddce",
//     });

//     if (!confirm.isConfirmed) return;

//     try {
//       const res = await fetch(`${API_BASE}/admin/talkshows/${id}`, {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });

//       if (!res.ok) throw new Error("Gagal menghapus data.");

//       Swal.fire({
//         title: "Terhapus!",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       fetchTalkshows();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Gagal menghapus.";
//       Swal.fire({ title: "Error", text: msg, icon: "error", background: "#144333", color: "#eaddce" });
//     }
//   };

//   const filteredTalkshows = talkshows.filter((item) =>
//     filterStatus === "all" ? true : item.status === filterStatus
//   );

//   const statusBadge = (st: string) => {
//     if (st === "approved") return "bg-green-600/30 text-green-300 border border-green-400";
//     if (st === "rejected") return "bg-red-600/30 text-red-300 border border-red-400";
//     return "bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]";
//   };

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//         <div>
//           <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//             Manage Talkshows
//           </h1>
//           <p className="text-gray-300 text-sm mt-1">
//             Kelola jadwal, data narasumber, dan persetujuan pengajuan talkshow.
//           </p>
//         </div>

//         <button
//           onClick={openCreateModal}
//           className="px-6 py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
//         >
//           + Tambah Talkshow
//         </button>
//       </div>

//       {/* FILTER STATUS */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {["all", "pending", "approved", "rejected"].map((st) => (
//           <button
//             key={st}
//             onClick={() => setFilterStatus(st)}
//             className={`px-4 py-2 rounded font-anton uppercase text-sm tracking-wider cursor-pointer transition-colors ${
//               filterStatus === st
//                 ? "bg-[#0fdff8] text-black"
//                 : "bg-black text-gray-400 border border-gray-700 hover:text-white"
//             }`}
//           >
//             {st}
//           </button>
//         ))}
//       </div>

//       {/* TABEL DATA */}
//       <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
//                 <th className="p-4">Poster</th>
//                 <th className="p-4">Narasumber &amp; Icon</th>
//                 <th className="p-4">Tema</th>
//                 <th className="p-4">Waktu</th>
//                 <th className="p-4">Status</th>
//                 <th className="p-4 text-center">Aksi &amp; Approval</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-800 text-sm">
//               {loading ? (
//                 <tr>
//                   <td colSpan={6} className="p-8 text-center text-[#0fdff8] font-anton text-xl animate-pulse">
//                     Memuat data talkshow...
//                   </td>
//                 </tr>
//               ) : filteredTalkshows.length === 0 ? (
//                 <tr>
//                   <td colSpan={6} className="p-8 text-center text-gray-400">
//                     Tidak ada data talkshow ditemukan.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredTalkshows.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-900/60 transition-colors">
//                     <td className="p-4">
//                       <img
//                         src={item.poster_url}
//                         alt={item.theme}
//                         className="w-16 h-20 object-cover rounded border border-[#0fdff8]"
//                       />
//                     </td>
//                     <td className="p-4">
//                       <p className="font-bold text-white">{item.speaker_name}</p>
//                       <p className="text-xs text-[#0fdff8] mt-1">{item.icon}</p>
//                     </td>
//                     <td className="p-4 max-w-xs font-medium text-[#eaddce]">{item.theme}</td>
//                     <td className="p-4 whitespace-nowrap text-gray-300">
//                       {new Date(item.schedule).toLocaleString("id-ID", {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </td>
//                     <td className="p-4">
//                       <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusBadge(item.status)}`}>
//                         {item.status}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex flex-wrap items-center justify-center gap-2">
//                         {item.status !== "approved" && (
//                           <button
//                             onClick={() => handleStatusChange(item.id, "approved")}
//                             className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded cursor-pointer"
//                           >
//                             Approve
//                           </button>
//                         )}
//                         {item.status !== "rejected" && (
//                           <button
//                             onClick={() => handleStatusChange(item.id, "rejected")}
//                             className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded cursor-pointer"
//                           >
//                             Reject
//                           </button>
//                         )}
//                         <button
//                           onClick={() => openEditModal(item)}
//                           className="px-3 py-1 bg-[#0fdff8] hover:bg-cyan-400 text-black text-xs font-bold rounded cursor-pointer"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(item.id)}
//                           className="px-3 py-1 bg-[#ff1493] hover:bg-pink-600 text-white text-xs font-bold rounded cursor-pointer"
//                         >
//                           Hapus
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* MODAL CREATE / EDIT */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
//           <div className="bg-black border-4 border-[#0fdff8] rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 shadow-[6px_6px_0px_#ff1493]">
//             <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
//               <h2 className="font-anton text-2xl text-[#fadf29] uppercase">
//                 {editingId ? "Edit Talkshow" : "Tambah Talkshow"}
//               </h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-gray-400 hover:text-[#ff1493] text-2xl font-bold cursor-pointer"
//               >
//                 &times;
//               </button>
//             </div>

//             <form onSubmit={handleSave} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Nama Narasumber *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={speakerName}
//                   onChange={(e) => setSpeakerName(e.target.value)}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Icon / Jabatan *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={icon}
//                   onChange={(e) => setIcon(e.target.value)}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Tema *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={theme}
//                   onChange={(e) => setTheme(e.target.value)}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                     Waktu *
//                   </label>
//                   <input
//                     type="datetime-local"
//                     required
//                     value={schedule}
//                     onChange={(e) => setSchedule(e.target.value)}
//                     className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                     Status Approval *
//                   </label>
//                   <select
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value as "pending" | "approved" | "rejected")}
//                     className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="approved">Approved</option>
//                     <option value="rejected">Rejected</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Poster {editingId ? "(Opsional jika tidak diganti)" : "*"}
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/jpeg,image/png,image/webp"
//                   onChange={(e) => {
//                     const file = e.target.files?.[0] || null;
//                     setPosterFile(file);
//                     if (file) setPosterPreview(URL.createObjectURL(file));
//                   }}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-gray-300 text-xs"
//                 />
//                 {posterPreview && (
//                   <img
//                     src={posterPreview}
//                     alt="Preview"
//                     className="mt-3 h-36 w-auto rounded border border-[#13bbad] object-cover"
//                   />
//                 )}
//               </div>

//               <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
//                 >
//                   Batal
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={saving}
//                   className="px-6 py-2 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton uppercase tracking-wider rounded cursor-pointer"
//                 >
//                   {saving ? "Menyimpan..." : "Simpan"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

interface Talkshow {
  id: number;
  poster: string;
  poster_url: string;
  speaker_name: string;
  icon: string;
  theme: string;
  schedule: string;
  registrations_count: number;
  pending_count: number;
  approved_count: number;
  active_count?: number;
  max_participants?: number;
}

const API_BASE = "https://back.back2eras.com/api";

export default function AdminTalkshowsPage() {
  const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal Create / Edit State (tanpa status approval)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [speakerName, setSpeakerName] = useState("");
  const [icon, setIcon] = useState("");
  const [theme, setTheme] = useState("");
  const [schedule, setSchedule] = useState("");
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const getToken = () => localStorage.getItem("admin_token") || "";

  const fetchTalkshows = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/talkshows`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setTalkshows(data);
      }
    } catch (error) {
      console.error("Error loading talkshows:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTalkshows();
  }, []);

  const toDateTimeLocal = (dbDate: string) => {
    if (!dbDate) return "";
    return dbDate.replace(" ", "T").slice(0, 16);
  };

  const openCreateModal = () => {
    setEditingId(null);
    setSpeakerName("");
    setIcon("");
    setTheme("");
    setSchedule("");
    setPosterFile(null);
    setPosterPreview(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: Talkshow) => {
    setEditingId(item.id);
    setSpeakerName(item.speaker_name);
    setIcon(item.icon);
    setTheme(item.theme);
    setSchedule(toDateTimeLocal(item.schedule));
    setPosterFile(null);
    setPosterPreview(item.poster_url);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingId && !posterFile) {
      Swal.fire({
        title: "Poster Diperlukan",
        text: "Unggah poster untuk data talkshow baru.",
        icon: "warning",
        background: "#144333",
        color: "#eaddce",
      });
      return;
    }

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append("speaker_name", speakerName);
      formData.append("icon", icon);
      formData.append("theme", theme);
      formData.append("schedule", schedule);
      if (posterFile) {
        formData.append("poster", posterFile);
      }

      let url = `${API_BASE}/admin/talkshows`;
      if (editingId) {
        url = `${API_BASE}/admin/talkshows/${editingId}`;
        formData.append("_method", "PUT");
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Gagal menyimpan data.");

      Swal.fire({
        title: "Berhasil!",
        text: result.message,
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1500,
        showConfirmButton: false,
      });

      setIsModalOpen(false);
      fetchTalkshows();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
      Swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      title: "Hapus Talkshow?",
      text: "Data talkshow, poster, serta seluruh data pendaftarnya akan dihapus permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#555",
      confirmButtonText: "Ya, Hapus!",
      background: "#144333",
      color: "#eaddce",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(`${API_BASE}/admin/talkshows/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!res.ok) throw new Error("Gagal menghapus data.");

      Swal.fire({
        title: "Terhapus!",
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1200,
        showConfirmButton: false,
      });

      fetchTalkshows();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gagal menghapus.";
      Swal.fire({ title: "Error", text: msg, icon: "error", background: "#144333", color: "#eaddce" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Manage Talkshows
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            Kelola jadwal talkshow dan klik &ldquo;Detail &amp; Peserta&rdquo; untuk menyetujui atau menolak pendaftar.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-6 py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
        >
          (+) Tambah Talkshow
        </button>
      </div>

      {/* TABEL DATA TALKSHOW */}
      <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
                <th className="p-4">Poster</th>
                <th className="p-4">Narasumber &amp; Icon</th>
                <th className="p-4">Tema</th>
                <th className="p-4">Waktu</th>
                <th className="p-4">Pendaftar</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#0fdff8] font-anton text-xl animate-pulse">
                    Memuat data talkshow...
                  </td>
                </tr>
              ) : talkshows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">
                    Belum ada data talkshow. Klik &ldquo;+ Tambah Talkshow&rdquo; untuk membuat jadwal pertama.
                  </td>
                </tr>
              ) : (
                talkshows.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-900/60 transition-colors">
                    <td className="p-4">
                      <img
                        src={item.poster_url}
                        alt={item.theme}
                        className="w-16 h-20 object-cover rounded border border-[#0fdff8]"
                      />
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-white">{item.speaker_name}</p>
                      <p className="text-xs text-[#0fdff8] mt-1">{item.icon}</p>
                    </td>
                    <td className="p-4 max-w-xs font-medium text-[#eaddce]">{item.theme}</td>
                    <td className="p-4 whitespace-nowrap text-gray-300">
                      {new Date(item.schedule).toLocaleString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    {/* <td className="p-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="text-white font-bold">Total: {item.registrations_count ?? 0}</span>
                        <div className="flex gap-2">
                          <span className="text-[#fadf29]">Pending: {item.pending_count ?? 0}</span>
                          <span className="text-green-400">Approved: {item.approved_count ?? 0}</span>
                        </div>
                      </div>
                    </td> */}
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold">
                            Slot: {item.active_count ?? 0} / {item.max_participants ?? 25}
                          </span>
                          {(item.active_count ?? 0) >= (item.max_participants ?? 25) && (
                            <span className="px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded uppercase">
                              Penuh
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[#fadf29]">Pending: {item.pending_count ?? 0}</span>
                          <span className="text-green-400">Approved: {item.approved_count ?? 0}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <Link
                          href={`/admin/talkshows/${item.id}`}
                          className="px-3 py-1.5 bg-[#fadf29] hover:bg-yellow-300 text-black text-xs font-bold rounded"
                        >
                          Detail &amp; Peserta
                        </Link>
                        <button
                          onClick={() => openEditModal(item)}
                          className="px-3 py-1.5 bg-[#0fdff8] hover:bg-cyan-400 text-black text-xs font-bold rounded cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1.5 bg-[#ff1493] hover:bg-pink-600 text-white text-xs font-bold rounded cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL CREATE / EDIT TALKSHOW (TANPA STATUS APPROVAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black border-4 border-[#0fdff8] rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 shadow-[6px_6px_0px_#ff1493]">
            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
              <h2 className="font-anton text-2xl text-[#fadf29] uppercase">
                {editingId ? "Edit Talkshow" : "Tambah Talkshow"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-[#ff1493] text-2xl font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Nama Narasumber *
                </label>
                <input
                  type="text"
                  required
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Icon / Jabatan *
                </label>
                <input
                  type="text"
                  required
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  placeholder="Contoh: Founder Vintage Wear"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Tema *
                </label>
                <input
                  type="text"
                  required
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  placeholder="Contoh: Tren Fashion Retro & Thrift 2026"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Waktu *
                </label>
                <input
                  type="datetime-local"
                  required
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Poster {editingId ? "(Opsional jika tidak diganti)" : "*"}
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setPosterFile(file);
                    if (file) setPosterPreview(URL.createObjectURL(file));
                  }}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-gray-300 text-xs"
                />
                {posterPreview && (
                  <img
                    src={posterPreview}
                    alt="Preview"
                    className="mt-3 h-36 w-auto rounded border border-[#13bbad] object-cover"
                  />
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton uppercase tracking-wider rounded cursor-pointer"
                >
                  {saving ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}