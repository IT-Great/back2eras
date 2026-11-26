// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Swal from "sweetalert2";

// interface TalkshowRegistration {
//   id: number;
//   talkshow_id: number;
//   name: string;
//   email: string;
//   phone: string;
//   institution: string | null;
//   status: "pending" | "approved" | "rejected";
//   created_at: string;
// }

// interface TalkshowDetail {
//   id: number;
//   poster: string;
//   poster_url: string;
//   speaker_name: string;
//   icon: string;
//   theme: string;
//   schedule: string;
//   registrations: TalkshowRegistration[];
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function AdminTalkshowDetailPage() {
//   const params = useParams();
//   const talkshowId = params?.id as string;

//   const [talkshow, setTalkshow] = useState<TalkshowDetail | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [filterStatus, setFilterStatus] = useState<string>("all");

//   const getToken = () => localStorage.getItem("admin_token") || "";

//   const fetchDetail = useCallback(async () => {
//     if (!talkshowId) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/admin/talkshows/${talkshowId}`, {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setTalkshow(data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch talkshow detail:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [talkshowId]);

//   useEffect(() => {
//     fetchDetail();
//   }, [fetchDetail]);

//   const handleUpdateStatus = async (
//     registrationId: number,
//     newStatus: "approved" | "rejected"
//   ) => {
//     try {
//       const res = await fetch(
//         `${API_BASE}/admin/talkshow-registrations/${registrationId}/status`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: `Bearer ${getToken()}`,
//           },
//           body: JSON.stringify({ status: newStatus }),
//         }
//       );

//       if (!res.ok) throw new Error("Gagal mengubah status peserta.");

//       Swal.fire({
//         title: newStatus === "approved" ? "Peserta Disetujui!" : "Peserta Ditolak!",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       fetchDetail();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
//       Swal.fire({
//         title: "Error",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//       });
//     }
//   };

//   const handleDeleteRegistration = async (registrationId: number) => {
//     const confirm = await Swal.fire({
//       title: "Hapus Peserta?",
//       text: "Data pendaftaran peserta ini akan dihapus permanen.",
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
//       const res = await fetch(
//         `${API_BASE}/admin/talkshow-registrations/${registrationId}`,
//         {
//           method: "DELETE",
//           headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${getToken()}`,
//           },
//         }
//       );

//       if (!res.ok) throw new Error("Gagal menghapus peserta.");

//       Swal.fire({
//         title: "Terhapus!",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       fetchDetail();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Gagal menghapus.";
//       Swal.fire({
//         title: "Error",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//       });
//     }
//   };

//   const statusBadge = (st: string) => {
//     if (st === "approved") return "bg-green-600/30 text-green-300 border border-green-400";
//     if (st === "rejected") return "bg-red-600/30 text-red-300 border border-red-400";
//     return "bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]";
//   };

//   if (loading) {
//     return (
//       <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">
//         Memuat detail talkshow...
//       </div>
//     );
//   }

//   if (!talkshow) {
//     return (
//       <div className="max-w-4xl mx-auto text-[#eaddce]">
//         <p className="text-xl text-[#ff1493] font-bold mb-4">Data talkshow tidak ditemukan.</p>
//         <Link
//           href="/admin/talkshows"
//           className="inline-block px-4 py-2 bg-[#0fdff8] text-black font-anton uppercase rounded"
//         >
//           &larr; Kembali ke Daftar Talkshow
//         </Link>
//       </div>
//     );
//   }

//   const registrations = talkshow.registrations || [];
//   const totalCount = registrations.length;
//   const pendingCount = registrations.filter((r) => r.status === "pending").length;
//   const approvedCount = registrations.filter((r) => r.status === "approved").length;
//   const rejectedCount = registrations.filter((r) => r.status === "rejected").length;

//   const filteredRegistrations = registrations.filter((r) =>
//     filterStatus === "all" ? true : r.status === filterStatus
//   );

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
//       {/* TOMBOL KEMBALI */}
//       <div className="mb-6">
//         <Link
//           href="/admin/talkshows"
//           className="inline-flex items-center gap-2 text-sm font-bold text-[#0fdff8] hover:text-[#fadf29] uppercase tracking-wider"
//         >
//           <span>&larr;</span> Kembali ke Manage Talkshows
//         </Link>
//       </div>

//       {/* KARTU INFO DETAIL TALKSHOW */}
//       <div className="bg-black border-2 border-[#0fdff8] rounded-xl p-6 mb-8 shadow-[5px_5px_0px_#ff1493] flex flex-col md:flex-row gap-6">
//         <img
//           src={talkshow.poster_url}
//           alt={talkshow.theme}
//           className="w-full md:w-52 h-64 object-cover rounded-lg border-2 border-[#13bbad] shrink-0"
//         />

//         <div className="flex-1 flex flex-col justify-between">
//           <div>
//             <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
//               {new Date(talkshow.schedule).toLocaleString("id-ID", {
//                 day: "2-digit",
//                 month: "long",
//                 year: "numeric",
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}{" "}
//               WIB
//             </span>
//             <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase leading-tight">
//               {talkshow.theme}
//             </h1>
//             <p className="text-white font-bold text-lg mt-2">{talkshow.speaker_name}</p>
//             <p className="text-sm text-[#0fdff8] uppercase tracking-wider">{talkshow.icon}</p>
//           </div>

//           {/* RINGKASAN STATISTIK PENDAFTAR */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-gray-800">
//             <div className="bg-gray-900 rounded p-3 border border-gray-700">
//               <p className="text-xs text-gray-400 uppercase">Total Pendaftar</p>
//               <p className="font-anton text-2xl text-white">{totalCount}</p>
//             </div>
//             <div className="bg-gray-900 rounded p-3 border border-[#fadf29]/50">
//               <p className="text-xs text-[#fadf29] uppercase">Pending</p>
//               <p className="font-anton text-2xl text-[#fadf29]">{pendingCount}</p>
//             </div>
//             <div className="bg-gray-900 rounded p-3 border border-green-500/50">
//               <p className="text-xs text-green-400 uppercase">Approved</p>
//               <p className="font-anton text-2xl text-green-400">{approvedCount}</p>
//             </div>
//             <div className="bg-gray-900 rounded p-3 border border-red-500/50">
//               <p className="text-xs text-red-400 uppercase">Rejected</p>
//               <p className="font-anton text-2xl text-red-400">{rejectedCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FILTER STATUS PESERTA */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
//         <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-wider">
//           Daftar Peserta Mendaftar
//         </h2>

//         <div className="flex flex-wrap gap-2">
//           {["all", "pending", "approved", "rejected"].map((st) => (
//             <button
//               key={st}
//               onClick={() => setFilterStatus(st)}
//               className={`px-4 py-1.5 rounded font-anton uppercase text-sm tracking-wider cursor-pointer transition-colors ${
//                 filterStatus === st
//                   ? "bg-[#0fdff8] text-black"
//                   : "bg-black text-gray-400 border border-gray-700 hover:text-white"
//               }`}
//             >
//               {st}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* TABEL PESERTA & APPROVAL */}
//       <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
//                 <th className="p-4">Nama Peserta</th>
//                 <th className="p-4">Kontak (Email &amp; WA)</th>
//                 <th className="p-4">Instansi / Komunitas</th>
//                 <th className="p-4">Tanggal Daftar</th>
//                 <th className="p-4">Status</th>
//                 <th className="p-4 text-center">Approval &amp; Aksi</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-800 text-sm">
//               {filteredRegistrations.length === 0 ? (
//                 <tr>
//                   <td colSpan={6} className="p-8 text-center text-gray-400">
//                     Belum ada peserta yang mendaftar pada kategori ini.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredRegistrations.map((reg) => (
//                   <tr key={reg.id} className="hover:bg-gray-900/60 transition-colors">
//                     <td className="p-4 font-bold text-white">{reg.name}</td>
//                     <td className="p-4">
//                       <p className="text-[#0fdff8]">{reg.email}</p>
//                       <p className="text-xs text-gray-300 mt-0.5">{reg.phone}</p>
//                     </td>
//                     <td className="p-4 text-gray-300">{reg.institution || "-"}</td>
//                     <td className="p-4 whitespace-nowrap text-gray-400 text-xs">
//                       {new Date(reg.created_at).toLocaleString("id-ID", {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </td>
//                     <td className="p-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusBadge(
//                           reg.status
//                         )}`}
//                       >
//                         {reg.status}
//                       </span>
//                     </td>
//                     <td className="p-4">
//                       <div className="flex flex-wrap items-center justify-center gap-2">
//                         {reg.status !== "approved" && (
//                           <button
//                             onClick={() => handleUpdateStatus(reg.id, "approved")}
//                             className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded cursor-pointer"
//                           >
//                             Approve
//                           </button>
//                         )}
//                         {reg.status !== "rejected" && (
//                           <button
//                             onClick={() => handleUpdateStatus(reg.id, "rejected")}
//                             className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded cursor-pointer"
//                           >
//                             Reject
//                           </button>
//                         )}
//                         <button
//                           onClick={() => handleDeleteRegistration(reg.id)}
//                           className="px-3 py-1.5 bg-[#ff1493] hover:bg-pink-600 text-white text-xs font-bold rounded cursor-pointer"
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
//     </div>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

interface TalkshowRegistration {
  id: number;
  talkshow_id: number;
  name: string;
  email: string;
  phone: string;
  institution: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  approved_rank: number | null;
}

interface TalkshowDetail {
  id: number;
  poster: string;
  poster_url: string;
  speaker_name: string;
  icon: string;
  theme: string;
  schedule: string;
  registrations: TalkshowRegistration[];
  max_participants?: number;
}

const API_BASE = "https://back.back2eras.com/api";

export default function AdminTalkshowDetailPage() {
  const params = useParams();
  const talkshowId = params?.id as string;

  const [talkshow, setTalkshow] = useState<TalkshowDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const getToken = () => localStorage.getItem("admin_token") || "";

  const fetchDetail = useCallback(async () => {
    if (!talkshowId) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/talkshows/${talkshowId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setTalkshow(data);
      }
    } catch (error) {
      console.error("Failed to fetch talkshow detail:", error);
    } finally {
      setLoading(false);
    }
  }, [talkshowId]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  const handleUpdateStatus = async (
    registrationId: number,
    newStatus: "approved" | "rejected"
  ) => {
    try {
      const res = await fetch(
        `${API_BASE}/admin/talkshow-registrations/${registrationId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal mengubah status peserta.");

      Swal.fire({
        title: newStatus === "approved" ? "Peserta Disetujui!" : "Peserta Ditolak!",
        text: data.message,
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1800,
        showConfirmButton: false,
      });

      fetchDetail();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
      Swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
      });
    }
  };

  const handleDeleteRegistration = async (registrationId: number) => {
    const confirm = await Swal.fire({
      title: "Hapus Peserta?",
      text: "Data pendaftaran peserta ini akan dihapus permanen.",
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
      const res = await fetch(
        `${API_BASE}/admin/talkshow-registrations/${registrationId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (!res.ok) throw new Error("Gagal menghapus peserta.");

      Swal.fire({
        title: "Terhapus!",
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1200,
        showConfirmButton: false,
      });

      fetchDetail();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gagal menghapus.";
      Swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
      });
    }
  };

  const statusBadge = (st: string) => {
    if (st === "approved") return "bg-green-600/30 text-green-300 border border-green-400";
    if (st === "rejected") return "bg-red-600/30 text-red-300 border border-red-400";
    return "bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]";
  };

  if (loading) {
    return (
      <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">
        Memuat detail talkshow...
      </div>
    );
  }

  if (!talkshow) {
    return (
      <div className="max-w-4xl mx-auto text-[#eaddce]">
        <p className="text-xl text-[#ff1493] font-bold mb-4">Data talkshow tidak ditemukan.</p>
        <Link
          href="/admin/talkshows"
          className="inline-block px-4 py-2 bg-[#0fdff8] text-black font-anton uppercase rounded"
        >
          &larr; Kembali ke Daftar Talkshow
        </Link>
      </div>
    );
  }

  const registrations = talkshow.registrations || [];
  const totalCount = registrations.length;
  const pendingCount = registrations.filter((r) => r.status === "pending").length;
  const approvedCount = registrations.filter((r) => r.status === "approved").length;
  const rejectedCount = registrations.filter((r) => r.status === "rejected").length;

  const maxParticipants = talkshow.max_participants ?? 25;
  const isApprovedFull = approvedCount >= maxParticipants;

  const filteredRegistrations = registrations.filter((r) =>
    filterStatus === "all" ? true : r.status === filterStatus
  );

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* TOMBOL KEMBALI */}
      <div className="mb-6">
        <Link
          href="/admin/talkshows"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0fdff8] hover:text-[#fadf29] uppercase tracking-wider"
        >
          <span>&larr;</span> Kembali ke Manage Talkshows
        </Link>
      </div>

      {/* KARTU INFO DETAIL TALKSHOW */}
      <div className="bg-black border-2 border-[#0fdff8] rounded-xl p-6 mb-8 shadow-[5px_5px_0px_#ff1493] flex flex-col md:flex-row gap-6">
        <img
          src={talkshow.poster_url}
          alt={talkshow.theme}
          className="w-full md:w-52 h-64 object-cover rounded-lg border-2 border-[#13bbad] shrink-0"
        />

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
              {new Date(talkshow.schedule).toLocaleString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              WIB
            </span>
            <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase leading-tight">
              {talkshow.theme}
            </h1>
            <p className="text-white font-bold text-lg mt-2">{talkshow.speaker_name}</p>
            <p className="text-sm text-[#0fdff8] uppercase tracking-wider">{talkshow.icon}</p>
          </div>

          {/* RINGKASAN STATISTIK PENDAFTAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-gray-800">
            <div className="bg-gray-900 rounded p-3 border border-gray-700">
              <p className="text-xs text-gray-400 uppercase">Total Pendaftar</p>
              <p className="font-anton text-2xl text-white">{totalCount}</p>
            </div>
            <div className="bg-gray-900 rounded p-3 border border-[#fadf29]/50">
              <p className="text-xs text-[#fadf29] uppercase">Pending</p>
              <p className="font-anton text-2xl text-[#fadf29]">{pendingCount}</p>
            </div>
            <div className="bg-gray-900 rounded p-3 border border-green-500/50">
              <p className="text-xs text-green-400 uppercase">Approved</p>
              <p className="font-anton text-2xl text-green-400">
                {approvedCount} / {maxParticipants}
              </p>
            </div>
            <div className="bg-gray-900 rounded p-3 border border-red-500/50">
              <p className="text-xs text-red-400 uppercase">Rejected</p>
              <p className="font-anton text-2xl text-red-400">{rejectedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER STATUS PESERTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-wider">
          Daftar Peserta Mendaftar
        </h2>

        <div className="flex flex-wrap gap-2">
          {["all", "pending", "approved", "rejected"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-4 py-1.5 rounded font-anton uppercase text-sm tracking-wider cursor-pointer transition-colors ${
                filterStatus === st
                  ? "bg-[#0fdff8] text-black"
                  : "bg-black text-gray-400 border border-gray-700 hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* TABEL PESERTA & APPROVAL */}
      <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
                <th className="p-4">Nama Peserta</th>
                <th className="p-4">Kontak (Email &amp; WA)</th>
                <th className="p-4">Instansi / Komunitas</th>
                <th className="p-4">Tanggal Daftar</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Approval &amp; Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {filteredRegistrations.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">
                    Belum ada peserta yang mendaftar pada kategori ini.
                  </td>
                </tr>
              ) : (
                filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-gray-900/60 transition-colors">
                    <td className="p-4 font-bold text-white">{reg.name}</td>
                    <td className="p-4">
                      <p className="text-[#0fdff8]">{reg.email}</p>
                      <p className="text-xs text-gray-300 mt-0.5">{reg.phone}</p>
                    </td>
                    <td className="p-4 text-gray-300">{reg.institution || "-"}</td>
                    <td className="p-4 whitespace-nowrap text-gray-400 text-xs">
                      {new Date(reg.created_at).toLocaleString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statusBadge(
                          reg.status
                        )}`}
                      >
                        {reg.status}
                      </span>
                      {reg.status === "approved" && reg.approved_rank && (
                        <p
                          className={`text-[11px] font-bold mt-1.5 ${
                            reg.approved_rank <= 5 ? "text-[#fadf29]" : "text-[#0fdff8]"
                          }`}
                        >
                          {reg.approved_rank <= 5
                            ? `Urutan #${reg.approved_rank} • Goodie Bag + Semua Voucher`
                            : `Urutan #${reg.approved_rank} • 6 Voucher (Tanpa Back2eras)`}
                        </p>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {reg.status !== "approved" && (
                          <button
                            onClick={() => handleUpdateStatus(reg.id, "approved")}
                            disabled={isApprovedFull}
                            className="px-3 py-1.5 bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold rounded cursor-pointer"
                          >
                            Approve
                          </button>
                        )}
                        {reg.status !== "rejected" && (
                          <button
                            onClick={() => handleUpdateStatus(reg.id, "rejected")}
                            className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded cursor-pointer"
                          >
                            Reject
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteRegistration(reg.id)}
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
    </div>
  );
}