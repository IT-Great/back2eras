// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// interface Visitor {
//   id: number;
//   full_name: string;
//   email: string;
//   whatsapp: string;
//   instagram: string | null;
//   subscribe_newsletter: boolean;
//   created_at: string;
// }

// export default function ManageVisitors() {
//   const [visitors, setVisitors] = useState<Visitor[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchVisitors = async () => {
//     try {
//       const res = await fetch("https://back.back2eras.com/api/visitors", {
//         headers: { "Accept": "application/json" }
//       });
//       const data = await res.json();
//       setVisitors(data);
//     } catch (error) {
//       console.error("Failed to fetch visitors:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVisitors();
//   }, []);

//   const handleDelete = async (id: number) => {
//     const res = await Swal.fire({
//       title: "Delete Visitor?",
//       text: "Are you sure? This action cannot be undone.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ff1493",
//       cancelButtonColor: "#13bbad",
//       confirmButtonText: "Yes, delete it!"
//     });

//     if (res.isConfirmed) {
//       try {
//         await fetch(`https://back.back2eras.com/api/visitors/${id}`, {
//           method: "DELETE",
//           headers: { "Accept": "application/json" }
//         });
//         Swal.fire("Deleted!", "Visitor data has been deleted.", "success");
//         fetchVisitors();
//       } catch (error) {
//         Swal.fire("Error!", "Failed to delete visitor.", "error");
//       }
//     }
//   };

//   // Helper untuk memformat tanggal pendaftaran
//   const formatDate = (dateStr: string) => {
//     return new Date(dateStr).toLocaleDateString('en-US', {
//       year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
//     });
//   };

//   if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Visitors...</div>;

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
      
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
//         <div>
//           <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//             Registered Visitors
//           </h1>
//           <p className="text-gray-400 mt-2">Manage all attendees registered for BACK2ERAS event.</p>
//         </div>
//         <div className="bg-[#144333] border-2 border-[#fadf29] px-6 py-3 rounded-lg text-center shadow-[4px_4px_0px_#fadf29]">
//           <span className="block font-roboto text-sm uppercase tracking-widest text-[#fadf29]">Total Registered</span>
//           <span className="block font-anton text-3xl text-white">{visitors.length}</span>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
//               <th className="p-4 border-b-2 border-black w-48">Reg Date</th>
//               <th className="p-4 border-b-2 border-black">Visitor Info</th>
//               <th className="p-4 border-b-2 border-black">Contacts</th>
//               <th className="p-4 border-b-2 border-black text-center w-32">Newsletter</th>
//               <th className="p-4 border-b-2 border-black text-center w-32">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {visitors.length === 0 ? (
//               <tr><td colSpan={5} className="p-8 text-center text-gray-400">No visitors registered yet.</td></tr>
//             ) : (
//               visitors.map((visitor) => (
//                 <tr key={visitor.id} className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors">
//                   <td className="p-4 text-sm text-gray-300">{formatDate(visitor.created_at)}</td>
                  
//                   <td className="p-4">
//                     <div className="font-bold text-[#fadf29] text-lg mb-1">{visitor.full_name}</div>
//                     <div className="text-sm text-[#0fdff8]">{visitor.email}</div>
//                   </td>
                  
//                   <td className="p-4">
//                     <div className="text-sm text-gray-200 mb-1">WA: <span className="text-white">{visitor.whatsapp}</span></div>
//                     <div className="text-sm text-gray-400">IG: <span className="text-white">{visitor.instagram || "-"}</span></div>
//                   </td>

//                   <td className="p-4 text-center">
//                     {visitor.subscribe_newsletter ? (
//                       <span className="bg-[#144333] text-[#0fdff8] border border-[#0fdff8] px-2 py-1 text-xs uppercase font-bold rounded">YES</span>
//                     ) : (
//                       <span className="bg-gray-800 text-gray-400 border border-gray-600 px-2 py-1 text-xs uppercase font-bold rounded">NO</span>
//                     )}
//                   </td>
                  
//                   <td className="p-4 flex gap-2 justify-center items-center h-full mt-2">
//                     <button onClick={() => handleDelete(visitor.id)} className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors">Del</button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }

// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Swal from "sweetalert2";

// interface Visitor {
//   id: number;
//   full_name: string;
//   email: string;
//   whatsapp: string;
//   instagram: string | null;
//   community_code: string | null;
//   subscribe_newsletter: boolean;
//   created_at: string;
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function ManageVisitors() {
//   const [visitors, setVisitors] = useState<Visitor[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [communityFilter, setCommunityFilter] = useState("all");

//   const getHeaders = () => {
//     const token = localStorage.getItem("admin_token");
//     const headers: Record<string, string> = { Accept: "application/json" };
//     if (token) headers.Authorization = `Bearer ${token}`;
//     return headers;
//   };

//   const fetchVisitors = useCallback(async () => {
//     try {
//       const res = await fetch(`${API_BASE}/visitors`, {
//         headers: getHeaders(),
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setVisitors(Array.isArray(data) ? data : []);
//       }
//     } catch (error) {
//       console.error("Failed to fetch visitors:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchVisitors();
//   }, [fetchVisitors]);

//   const handleDelete = async (id: number) => {
//     const res = await Swal.fire({
//       title: "Delete Visitor?",
//       text: "Are you sure? This action cannot be undone.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#ff1493",
//       cancelButtonColor: "#13bbad",
//       confirmButtonText: "Yes, delete it!",
//       background: "#144333",
//       color: "#eaddce",
//     });

//     if (res.isConfirmed) {
//       try {
//         const delRes = await fetch(`${API_BASE}/visitors/${id}`, {
//           method: "DELETE",
//           headers: getHeaders(),
//         });
//         if (!delRes.ok) throw new Error("Failed to delete visitor.");

//         Swal.fire({
//           title: "Deleted!",
//           text: "Visitor data has been deleted.",
//           icon: "success",
//           background: "#144333",
//           color: "#eaddce",
//           timer: 1400,
//           showConfirmButton: false,
//         });
//         fetchVisitors();
//       } catch {
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to delete visitor.",
//           icon: "error",
//           background: "#144333",
//           color: "#eaddce",
//         });
//       }
//     }
//   };

//   const formatDate = (dateStr: string) => {
//     return new Date(dateStr).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   // Ambil daftar kode komunitas unik untuk opsi filter dropdown
//   const uniqueCommunityCodes = Array.from(
//     new Set(
//       visitors
//         .map((v) => v.community_code?.trim())
//         .filter((code): code is string => Boolean(code))
//     )
//   ).sort((a, b) => a.localeCompare(b));

//   const withCommunityCount = visitors.filter(
//     (v) => Boolean(v.community_code?.trim())
//   ).length;

//   const filteredVisitors = visitors.filter((v) => {
//     const code = v.community_code?.trim() || "";

//     if (communityFilter === "with_code" && !code) return false;
//     if (communityFilter === "without_code" && code) return false;
//     if (
//       communityFilter !== "all" &&
//       communityFilter !== "with_code" &&
//       communityFilter !== "without_code" &&
//       code.toLowerCase() !== communityFilter.toLowerCase()
//     ) {
//       return false;
//     }

//     if (searchQuery.trim() !== "") {
//       const q = searchQuery.toLowerCase();
//       const matchName = v.full_name.toLowerCase().includes(q);
//       const matchEmail = v.email.toLowerCase().includes(q);
//       const matchWa = v.whatsapp.toLowerCase().includes(q);
//       const matchIg = (v.instagram || "").toLowerCase().includes(q);
//       const matchCode = code.toLowerCase().includes(q);
//       if (!matchName && !matchEmail && !matchWa && !matchIg && !matchCode) {
//         return false;
//       }
//     }

//     return true;
//   });

//   if (loading) {
//     return (
//       <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">
//         Loading Visitors...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
//       {/* HEADER & RINGKASAN */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//         <div>
//           <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//             Registered Visitors
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Manage all attendees registered for BACK2ERAS event.
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-3">
//           <div className="bg-[#144333] border-2 border-[#0fdff8] px-5 py-3 rounded-lg text-center shadow-[4px_4px_0px_#ff1493]">
//             <span className="block font-roboto text-xs uppercase tracking-widest text-[#0fdff8]">
//               Community Code
//             </span>
//             <span className="block font-anton text-3xl text-white">
//               {withCommunityCount}
//             </span>
//           </div>

//           <div className="bg-[#144333] border-2 border-[#fadf29] px-6 py-3 rounded-lg text-center shadow-[4px_4px_0px_#fadf29]">
//             <span className="block font-roboto text-xs uppercase tracking-widest text-[#fadf29]">
//               Total Registered
//             </span>
//             <span className="block font-anton text-3xl text-white">
//               {visitors.length}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* FILTER & PENCARIAN */}
//       <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-between items-stretch sm:items-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Cari nama / email / WA / IG / community code..."
//           className="flex-1 px-4 py-2.5 bg-black border-2 border-[#13bbad] focus:border-[#fadf29] rounded text-sm text-white outline-none placeholder:text-gray-500"
//         />

//         <select
//           value={communityFilter}
//           onChange={(e) => setCommunityFilter(e.target.value)}
//           className="px-4 py-2.5 bg-black border-2 border-[#13bbad] focus:border-[#fadf29] rounded text-sm text-white outline-none min-w-[230px]"
//         >
//           <option value="all">Semua Visitor ({visitors.length})</option>
//           <option value="with_code">Pakai Community Code ({withCommunityCount})</option>
//           <option value="without_code">
//             Tanpa Community Code ({visitors.length - withCommunityCount})
//           </option>
//           {uniqueCommunityCodes.length > 0 && (
//             <optgroup label="Filter per Kode">
//               {uniqueCommunityCodes.map((code) => (
//                 <option key={code} value={code}>
//                   Kode: {code}
//                 </option>
//               ))}
//             </optgroup>
//           )}
//         </select>
//       </div>

//       {/* TABEL VISITORS */}
//       <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
//               <th className="p-4 border-b-2 border-black w-44">Reg Date</th>
//               <th className="p-4 border-b-2 border-black">Visitor Info</th>
//               <th className="p-4 border-b-2 border-black">Contacts</th>
//               <th className="p-4 border-b-2 border-black text-center w-44">
//                 Community Code
//               </th>
//               <th className="p-4 border-b-2 border-black text-center w-28">
//                 Newsletter
//               </th>
//               <th className="p-4 border-b-2 border-black text-center w-28">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredVisitors.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="p-8 text-center text-gray-400">
//                   {visitors.length === 0
//                     ? "No visitors registered yet."
//                     : "Tidak ada visitor yang cocok dengan filter ini."}
//                 </td>
//               </tr>
//             ) : (
//               filteredVisitors.map((visitor) => (
//                 <tr
//                   key={visitor.id}
//                   className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors"
//                 >
//                   <td className="p-4 text-sm text-gray-300 whitespace-nowrap">
//                     {formatDate(visitor.created_at)}
//                   </td>

//                   <td className="p-4">
//                     <div className="font-bold text-[#fadf29] text-lg mb-1">
//                       {visitor.full_name}
//                     </div>
//                     <div className="text-sm text-[#0fdff8]">{visitor.email}</div>
//                   </td>

//                   <td className="p-4">
//                     <div className="text-sm text-gray-200 mb-1">
//                       WA: <span className="text-white">{visitor.whatsapp}</span>
//                     </div>
//                     <div className="text-sm text-gray-400">
//                       IG:{" "}
//                       <span className="text-white">
//                         {visitor.instagram || "-"}
//                       </span>
//                     </div>
//                   </td>

//                   <td className="p-4 text-center whitespace-nowrap">
//                     {visitor.community_code?.trim() ? (
//                       <span className="inline-block bg-[#ff1493]/20 text-[#fadf29] border border-[#ff1493] px-3 py-1 text-xs font-anton tracking-widest uppercase rounded">
//                         {visitor.community_code}
//                       </span>
//                     ) : (
//                       <span className="text-sm text-gray-500">-</span>
//                     )}
//                   </td>

//                   <td className="p-4 text-center">
//                     {visitor.subscribe_newsletter ? (
//                       <span className="bg-[#144333] text-[#0fdff8] border border-[#0fdff8] px-2 py-1 text-xs uppercase font-bold rounded">
//                         YES
//                       </span>
//                     ) : (
//                       <span className="bg-gray-800 text-gray-400 border border-gray-600 px-2 py-1 text-xs uppercase font-bold rounded">
//                         NO
//                       </span>
//                     )}
//                   </td>

//                   <td className="p-4 text-center">
//                     <div className="flex gap-2 justify-center items-center">
//                       <button
//                         onClick={() => handleDelete(visitor.id)}
//                         className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors cursor-pointer"
//                       >
//                         Del
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";

interface Visitor {
  id: number;
  full_name: string;
  email: string;
  whatsapp: string;
  instagram: string | null;
  community_code: string | null;
  subscribe_newsletter: boolean;
  created_at: string;
}

const API_BASE = "https://back.back2eras.com/api";

export default function ManageVisitors() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [communityFilter, setCommunityFilter] = useState("all");
  const [exportingExcel, setExportingExcel] = useState(false);
  const [exportingPdf, setExportingPdf] = useState(false);

  const getHeaders = () => {
    const token = localStorage.getItem("admin_token");
    const headers: Record<string, string> = { Accept: "application/json" };
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
  };

  const fetchVisitors = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/visitors`, {
        headers: getHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setVisitors(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch visitors:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVisitors();
  }, [fetchVisitors]);

  const handleDelete = async (id: number) => {
    const res = await Swal.fire({
      title: "Delete Visitor?",
      text: "Are you sure? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff1493",
      cancelButtonColor: "#13bbad",
      confirmButtonText: "Yes, delete it!",
      background: "#144333",
      color: "#eaddce",
    });

    if (res.isConfirmed) {
      try {
        const delRes = await fetch(`${API_BASE}/visitors/${id}`, {
          method: "DELETE",
          headers: getHeaders(),
        });
        if (!delRes.ok) throw new Error("Failed to delete visitor.");

        Swal.fire({
          title: "Deleted!",
          text: "Visitor data has been deleted.",
          icon: "success",
          background: "#144333",
          color: "#eaddce",
          timer: 1400,
          showConfirmButton: false,
        });
        fetchVisitors();
      } catch {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete visitor.",
          icon: "error",
          background: "#144333",
          color: "#eaddce",
        });
      }
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDateID = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getFileTimestamp = () => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(
      now.getHours()
    )}${pad(now.getMinutes())}`;
  };

  const getFilterLabel = () => {
    if (communityFilter === "all") return "Semua Visitor";
    if (communityFilter === "with_code") return "Pakai Community Code";
    if (communityFilter === "without_code") return "Tanpa Community Code";
    return `Kode: ${communityFilter}`;
  };

  // Ambil daftar kode komunitas unik untuk opsi filter dropdown
  const uniqueCommunityCodes = Array.from(
    new Set(
      visitors
        .map((v) => v.community_code?.trim())
        .filter((code): code is string => Boolean(code))
    )
  ).sort((a, b) => a.localeCompare(b));

  const withCommunityCount = visitors.filter(
    (v) => Boolean(v.community_code?.trim())
  ).length;

  const filteredVisitors = visitors.filter((v) => {
    const code = v.community_code?.trim() || "";

    if (communityFilter === "with_code" && !code) return false;
    if (communityFilter === "without_code" && code) return false;
    if (
      communityFilter !== "all" &&
      communityFilter !== "with_code" &&
      communityFilter !== "without_code" &&
      code.toLowerCase() !== communityFilter.toLowerCase()
    ) {
      return false;
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = v.full_name.toLowerCase().includes(q);
      const matchEmail = v.email.toLowerCase().includes(q);
      const matchWa = v.whatsapp.toLowerCase().includes(q);
      const matchIg = (v.instagram || "").toLowerCase().includes(q);
      const matchCode = code.toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchWa && !matchIg && !matchCode) {
        return false;
      }
    }

    return true;
  });

  // --- EXPORT TO EXCEL (.xlsx) ---
  const handleExportExcel = async () => {
    if (filteredVisitors.length === 0) {
      Swal.fire({
        title: "Tidak Ada Data",
        text: "Tidak ada data visitor untuk diekspor pada filter saat ini.",
        icon: "info",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#13bbad",
      });
      return;
    }

    setExportingExcel(true);
    try {
      const XLSX = await import("xlsx");

      const rows = filteredVisitors.map((v, idx) => ({
        No: idx + 1,
        "ID Visitor": v.id,
        "Tanggal Daftar": formatDateID(v.created_at),
        "Nama Lengkap": v.full_name,
        Email: v.email,
        "No. WhatsApp": String(v.whatsapp || "-"),
        Instagram: v.instagram?.trim() || "-",
        "Community Code": v.community_code?.trim() || "-",
        Newsletter: v.subscribe_newsletter ? "Ya" : "Tidak",
      }));

      const worksheet = XLSX.utils.json_to_sheet(rows);

      // Atur lebar kolom agar rapi saat dibuka di Excel
      worksheet["!cols"] = [
        { wch: 5 },  // No
        { wch: 11 }, // ID Visitor
        { wch: 20 }, // Tanggal Daftar
        { wch: 28 }, // Nama Lengkap
        { wch: 32 }, // Email
        { wch: 18 }, // No. WhatsApp
        { wch: 20 }, // Instagram
        { wch: 18 }, // Community Code
        { wch: 12 }, // Newsletter
      ];

      // Pastikan kolom WhatsApp tersimpan sebagai teks murni (angka 0 & +62 aman)
      const range = XLSX.utils.decode_range(worksheet["!ref"] || "A1");
      for (let r = 1; r <= range.e.r; r++) {
        const waCell = worksheet[XLSX.utils.encode_cell({ r, c: 5 })];
        if (waCell) {
          waCell.t = "s";
          waCell.z = "@";
        }
      }

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data Visitors");

      // Tambahkan sheet ringkasan singkat
      const summaryRows = [
        { Keterangan: "Event", Nilai: "BACK2ERAS 2026" },
        { Keterangan: "Waktu Ekspor", Nilai: formatDateID(new Date().toISOString()) },
        { Keterangan: "Filter Aktif", Nilai: getFilterLabel() },
        { Keterangan: "Kata Kunci Pencarian", Nilai: searchQuery.trim() || "-" },
        { Keterangan: "Total Data Diekspor", Nilai: filteredVisitors.length },
        {
          Keterangan: "Visitor Pakai Community Code",
          Nilai: filteredVisitors.filter((v) => Boolean(v.community_code?.trim())).length,
        },
        {
          Keterangan: "Subscribe Newsletter",
          Nilai: filteredVisitors.filter((v) => v.subscribe_newsletter).length,
        },
      ];
      const summarySheet = XLSX.utils.json_to_sheet(summaryRows);
      summarySheet["!cols"] = [{ wch: 28 }, { wch: 35 }];
      XLSX.utils.book_append_sheet(workbook, summarySheet, "Ringkasan");

      XLSX.writeFile(workbook, `BACK2ERAS_Visitors_${getFileTimestamp()}.xlsx`);
    } catch (error) {
      console.error("Export Excel error:", error);
      Swal.fire({
        title: "Ekspor Gagal",
        text: "Terjadi kesalahan saat membuat file Excel.",
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setExportingExcel(false);
    }
  };

  // --- EXPORT TO PDF (.pdf) ---
  const handleExportPdf = async () => {
    if (filteredVisitors.length === 0) {
      Swal.fire({
        title: "Tidak Ada Data",
        text: "Tidak ada data visitor untuk diekspor pada filter saat ini.",
        icon: "info",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#13bbad",
      });
      return;
    }

    setExportingPdf(true);
    try {
      const { default: jsPDF } = await import("jspdf");
      const { default: autoTable } = await import("jspdf-autotable");

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const exportedWithCode = filteredVisitors.filter((v) =>
        Boolean(v.community_code?.trim())
      ).length;

      // Header Dokumen
      doc.setFillColor(20, 67, 51); // #144333
      doc.rect(0, 0, 297, 28, "F");

      doc.setTextColor(250, 223, 41); // #fadf29
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("BACK2ERAS 2026 - REGISTERED VISITORS", 14, 13);

      doc.setTextColor(234, 221, 206); // #eaddce
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.text(
        `Dicetak: ${formatDateID(new Date().toISOString())} WIB  |  Filter: ${getFilterLabel()}${
          searchQuery.trim() ? ` (Cari: "${searchQuery.trim()}")` : ""
        }`,
        14,
        21
      );

      doc.setTextColor(15, 223, 248); // #0fdff8
      doc.setFont("helvetica", "bold");
      doc.text(
        `Total: ${filteredVisitors.length} Visitor  |  Community Code: ${exportedWithCode}`,
        283,
        21,
        { align: "right" }
      );

      // Tabel Data Visitor
      const tableBody = filteredVisitors.map((v, idx) => [
        String(idx + 1),
        formatDateID(v.created_at),
        v.full_name,
        v.email,
        v.whatsapp || "-",
        v.instagram?.trim() || "-",
        v.community_code?.trim() || "-",
        v.subscribe_newsletter ? "YES" : "NO",
      ]);

      autoTable(doc, {
        startY: 34,
        head: [
          [
            "No",
            "Reg Date",
            "Full Name",
            "Email",
            "WhatsApp",
            "Instagram",
            "Community Code",
            "Newsletter",
          ],
        ],
        body: tableBody,
        theme: "grid",
        styles: {
          fontSize: 8.5,
          cellPadding: 2.5,
          textColor: [30, 30, 30],
          valign: "middle",
          overflow: "linebreak",
        },
        headStyles: {
          fillColor: [19, 187, 173], // #13bbad
          textColor: [0, 0, 0],
          fontStyle: "bold",
          halign: "center",
        },
        alternateRowStyles: {
          fillColor: [242, 248, 247],
        },
        columnStyles: {
          0: { halign: "center", cellWidth: 10 },
          1: { cellWidth: 32 },
          2: { cellWidth: 42 },
          3: { cellWidth: 52 },
          4: { cellWidth: 33 },
          5: { cellWidth: 34 },
          6: { halign: "center", cellWidth: 30 },
          7: { halign: "center", cellWidth: 20 },
        },
        margin: { left: 14, right: 14, bottom: 16 },
        didDrawPage: (data) => {
          const pageCount = doc.getNumberOfPages();
          doc.setFontSize(8);
          doc.setTextColor(120, 120, 120);
          doc.text(
            `BACK2ERAS Admin Report — Halaman ${data.pageNumber} dari ${pageCount}`,
            14,
            203
          );
        },
      });

      doc.save(`BACK2ERAS_Visitors_${getFileTimestamp()}.pdf`);
    } catch (error) {
      console.error("Export PDF error:", error);
      Swal.fire({
        title: "Ekspor Gagal",
        text: "Terjadi kesalahan saat membuat file PDF.",
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setExportingPdf(false);
    }
  };

  if (loading) {
    return (
      <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">
        Loading Visitors...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* HEADER & RINGKASAN */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Registered Visitors
          </h1>
          <p className="text-gray-400 mt-2">
            Manage all attendees registered for BACK2ERAS event.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="bg-[#144333] border-2 border-[#0fdff8] px-5 py-3 rounded-lg text-center shadow-[4px_4px_0px_#ff1493]">
            <span className="block font-roboto text-xs uppercase tracking-widest text-[#0fdff8]">
              Community Code
            </span>
            <span className="block font-anton text-3xl text-white">
              {withCommunityCount}
            </span>
          </div>

          <div className="bg-[#144333] border-2 border-[#fadf29] px-6 py-3 rounded-lg text-center shadow-[4px_4px_0px_#fadf29]">
            <span className="block font-roboto text-xs uppercase tracking-widest text-[#fadf29]">
              Total Registered
            </span>
            <span className="block font-anton text-3xl text-white">
              {visitors.length}
            </span>
          </div>
        </div>
      </div>

      {/* FILTER, PENCARIAN & TOMBOL EKSPOR */}
      <div className="flex flex-col lg:flex-row gap-3 mb-6 justify-between items-stretch lg:items-center">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama / email / WA / IG / community code..."
            className="flex-1 px-4 py-2.5 bg-black border-2 border-[#13bbad] focus:border-[#fadf29] rounded text-sm text-white outline-none placeholder:text-gray-500"
          />

          <select
            value={communityFilter}
            onChange={(e) => setCommunityFilter(e.target.value)}
            className="px-4 py-2.5 bg-black border-2 border-[#13bbad] focus:border-[#fadf29] rounded text-sm text-white outline-none min-w-[220px]"
          >
            <option value="all">Semua Visitor ({visitors.length})</option>
            <option value="with_code">Pakai Community Code ({withCommunityCount})</option>
            <option value="without_code">
              Tanpa Community Code ({visitors.length - withCommunityCount})
            </option>
            {uniqueCommunityCodes.length > 0 && (
              <optgroup label="Filter per Kode">
                {uniqueCommunityCodes.map((code) => (
                  <option key={code} value={code}>
                    Kode: {code}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        </div>

        {/* TOMBOL EXPORT EXCEL & PDF */}
        <div className="flex gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleExportExcel}
            disabled={exportingExcel || filteredVisitors.length === 0}
            className="flex-1 lg:flex-none px-4 py-2.5 bg-[#13bbad] hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-anton text-sm uppercase tracking-wider rounded shadow-[3px_3px_0px_#fadf29] active:translate-y-0.5 transition-all cursor-pointer"
          >
            {exportingExcel ? "Exporting..." : "📊 Export Excel"}
          </button>

          <button
            type="button"
            onClick={handleExportPdf}
            disabled={exportingPdf || filteredVisitors.length === 0}
            className="flex-1 lg:flex-none px-4 py-2.5 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 disabled:cursor-not-allowed text-white font-anton text-sm uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 transition-all cursor-pointer"
          >
            {exportingPdf ? "Exporting..." : "📄 Export PDF"}
          </button>
        </div>
      </div>

      {/* TABEL VISITORS */}
      <div className="overflow-x-auto bg-black border-4 border-[#13bbad] shadow-[10px_10px_0px_#fadf29]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#13bbad] text-black font-anton uppercase tracking-widest">
              <th className="p-4 border-b-2 border-black w-44">Reg Date</th>
              <th className="p-4 border-b-2 border-black">Visitor Info</th>
              <th className="p-4 border-b-2 border-black">Contacts</th>
              <th className="p-4 border-b-2 border-black text-center w-44">
                Community Code
              </th>
              <th className="p-4 border-b-2 border-black text-center w-28">
                Newsletter
              </th>
              <th className="p-4 border-b-2 border-black text-center w-28">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-400">
                  {visitors.length === 0
                    ? "No visitors registered yet."
                    : "Tidak ada visitor yang cocok dengan filter ini."}
                </td>
              </tr>
            ) : (
              filteredVisitors.map((visitor) => (
                <tr
                  key={visitor.id}
                  className="border-b border-[#13bbad]/30 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 text-sm text-gray-300 whitespace-nowrap">
                    {formatDate(visitor.created_at)}
                  </td>

                  <td className="p-4">
                    <div className="font-bold text-[#fadf29] text-lg mb-1">
                      {visitor.full_name}
                    </div>
                    <div className="text-sm text-[#0fdff8]">{visitor.email}</div>
                  </td>

                  <td className="p-4">
                    <div className="text-sm text-gray-200 mb-1">
                      WA: <span className="text-white">{visitor.whatsapp}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      IG:{" "}
                      <span className="text-white">
                        {visitor.instagram || "-"}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 text-center whitespace-nowrap">
                    {visitor.community_code?.trim() ? (
                      <span className="inline-block bg-[#ff1493]/20 text-[#fadf29] border border-[#ff1493] px-3 py-1 text-xs font-anton tracking-widest uppercase rounded">
                        {visitor.community_code}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">-</span>
                    )}
                  </td>

                  <td className="p-4 text-center">
                    {visitor.subscribe_newsletter ? (
                      <span className="bg-[#144333] text-[#0fdff8] border border-[#0fdff8] px-2 py-1 text-xs uppercase font-bold rounded">
                        YES
                      </span>
                    ) : (
                      <span className="bg-gray-800 text-gray-400 border border-gray-600 px-2 py-1 text-xs uppercase font-bold rounded">
                        NO
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        onClick={() => handleDelete(visitor.id)}
                        className="bg-[#ff1493] text-white font-anton px-4 py-2 text-sm uppercase hover:bg-red-500 transition-colors cursor-pointer"
                      >
                        Del
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
  );
}