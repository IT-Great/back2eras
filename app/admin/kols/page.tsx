// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Swal from "sweetalert2";

// interface KolItem {
//   id: number;
//   user_id: number | null;
//   name: string;
//   address: string;
//   icon: string;
//   email: string;
//   whatsapp: string;
//   social_media_link: string | null;
//   can_claim_voucher: boolean;
//   vouchers_count: number;
//   created_at: string;
// }

// const API_BASE = "https://back.back2eras.com/api";

// const formatSafeUrl = (link: string): string => {
//   const trimmed = link.trim();
//   if (/^https?:\/\//i.test(trimmed)) return trimmed;
//   return `https://${trimmed}`;
// };

// export default function AdminKolsPage() {
//   const [kols, setKols] = useState<KolItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filterEligibility, setFilterEligibility] = useState<"all" | "eligible" | "locked">("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Modal Create / Edit State
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingId, setEditingId] = useState<number | null>(null);
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [icon, setIcon] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [socialMediaLink, setSocialMediaLink] = useState("");
//   const [saving, setSaving] = useState(false);

//   const getToken = () => localStorage.getItem("admin_token") || "";

//   const fetchKols = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/admin/kols`, {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setKols(data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch KOLs:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchKols();
//   }, [fetchKols]);

//   const openCreateModal = () => {
//     setEditingId(null);
//     setName("");
//     setAddress("");
//     setIcon("");
//     setEmail("");
//     setPassword("");
//     setWhatsapp("");
//     setSocialMediaLink("");
//     setIsModalOpen(true);
//   };

//   const openEditModal = (item: KolItem) => {
//     setEditingId(item.id);
//     setName(item.name);
//     setAddress(item.address);
//     setIcon(item.icon);
//     setEmail(item.email);
//     setPassword("");
//     setWhatsapp(item.whatsapp);
//     setSocialMediaLink(item.social_media_link || "");
//     setIsModalOpen(true);
//   };

//   const handleSave = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const payload: Record<string, string | null> = {
//         name,
//         address,
//         icon,
//         email,
//         whatsapp,
//         social_media_link: socialMediaLink.trim() || null,
//       };
//       if (password.trim() !== "") {
//         payload.password = password;
//       }

//       const url = editingId ? `${API_BASE}/admin/kols/${editingId}` : `${API_BASE}/admin/kols`;
//       const method = editingId ? "PUT" : "POST";

//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Gagal menyimpan data KOL.");

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
//       fetchKols();
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

//   const handleDelete = async (item: KolItem) => {
//     const confirm = await Swal.fire({
//       title: `Hapus KOL "${item.name}"?`,
//       text: "Data KOL dan akun login KOL terkait akan dihapus permanen.",
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
//       const res = await fetch(`${API_BASE}/admin/kols/${item.id}`, {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${getToken()}`,
//         },
//       });

//       if (!res.ok) throw new Error("Gagal menghapus data KOL.");

//       Swal.fire({
//         title: "Terhapus!",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         timer: 1200,
//         showConfirmButton: false,
//       });

//       fetchKols();
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Gagal menghapus.";
//       Swal.fire({ title: "Error", text: msg, icon: "error", background: "#144333", color: "#eaddce" });
//     }
//   };

//   const totalCount = kols.length;
//   const eligibleCount = kols.filter((k) => k.can_claim_voucher).length;
//   const lockedCount = totalCount - eligibleCount;

//   const filteredKols = kols.filter((k) => {
//     if (filterEligibility === "eligible" && !k.can_claim_voucher) return false;
//     if (filterEligibility === "locked" && k.can_claim_voucher) return false;
//     if (searchQuery.trim() !== "") {
//       const q = searchQuery.toLowerCase();
//       return (
//         k.name.toLowerCase().includes(q) ||
//         k.email.toLowerCase().includes(q) ||
//         k.whatsapp.toLowerCase().includes(q) ||
//         k.icon.toLowerCase().includes(q) ||
//         k.address.toLowerCase().includes(q)
//       );
//     }
//     return true;
//   });

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//         <div>
//           <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//             Manage KOLs
//           </h1>
//           <p className="text-gray-300 text-sm mt-1">
//             Kelola data pendaftaran KOL, link media sosial, dan status akses klaim voucher.
//           </p>
//         </div>

//         <button
//           onClick={openCreateModal}
//           className="px-6 py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
//         >
//           + Tambah KOL
//         </button>
//       </div>

//       {/* STATISTIK */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         <div className="bg-black border-2 border-gray-700 rounded-xl p-4">
//           <p className="text-xs uppercase text-gray-400">Total KOL Terdaftar</p>
//           <p className="font-anton text-3xl text-white mt-1">{totalCount}</p>
//         </div>
//         <div className="bg-black border-2 border-green-500/60 rounded-xl p-4">
//           <p className="text-xs uppercase text-green-400">Bisa Klaim Voucher (Ada Link Medsos)</p>
//           <p className="font-anton text-3xl text-green-400 mt-1">{eligibleCount}</p>
//         </div>
//         <div className="bg-black border-2 border-[#fadf29]/60 rounded-xl p-4">
//           <p className="text-xs uppercase text-[#fadf29]">Terkunci (Tanpa Link Medsos)</p>
//           <p className="font-anton text-3xl text-[#fadf29] mt-1">{lockedCount}</p>
//         </div>
//       </div>

//       {/* FILTER & SEARCH */}
//       <div className="flex flex-col md:flex-row justify-between gap-3 mb-5">
//         <div className="flex flex-wrap gap-2">
//           {[
//             { key: "all", label: "Semua" },
//             { key: "eligible", label: "Bisa Klaim Voucher" },
//             { key: "locked", label: "Belum Ada Medsos" },
//           ].map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setFilterEligibility(tab.key as "all" | "eligible" | "locked")}
//               className={`px-4 py-2 rounded font-anton uppercase text-xs tracking-wider cursor-pointer transition-colors ${
//                 filterEligibility === tab.key
//                   ? "bg-[#0fdff8] text-black"
//                   : "bg-black text-gray-400 border border-gray-700 hover:text-white"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Cari nama / icon / email / WA / alamat..."
//           className="px-4 py-2 bg-black border border-gray-700 focus:border-[#0fdff8] rounded text-sm text-white outline-none min-w-[260px]"
//         />
//       </div>

//       {/* TABEL DATA KOL */}
//       <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
//                 <th className="p-4">Nama &amp; Icon</th>
//                 <th className="p-4">Kontak</th>
//                 <th className="p-4">Alamat</th>
//                 <th className="p-4">Media Sosial</th>
//                 <th className="p-4">Akses Voucher</th>
//                 <th className="p-4 text-center">Aksi</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-800 text-sm">
//               {loading ? (
//                 <tr>
//                   <td colSpan={6} className="p-8 text-center text-[#0fdff8] font-anton text-xl animate-pulse">
//                     Memuat data KOL...
//                   </td>
//                 </tr>
//               ) : filteredKols.length === 0 ? (
//                 <tr>
//                   <td colSpan={6} className="p-8 text-center text-gray-400">
//                     Tidak ada data KOL ditemukan.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredKols.map((item) => (
//                   <tr key={item.id} className="hover:bg-gray-900/60 transition-colors">
//                     <td className="p-4">
//                       <p className="font-bold text-white">{item.name}</p>
//                       <p className="text-xs text-[#0fdff8] mt-0.5">{item.icon}</p>
//                     </td>
//                     <td className="p-4">
//                       <p className="text-gray-200">{item.email}</p>
//                       <p className="text-xs text-gray-400 mt-0.5">WA: {item.whatsapp}</p>
//                     </td>
//                     <td className="p-4 max-w-xs text-xs text-gray-300">{item.address}</td>
//                     <td className="p-4 max-w-[200px] truncate">
//                       {item.social_media_link ? (
//                         <a
//                           href={formatSafeUrl(item.social_media_link)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-[#0fdff8] hover:text-[#fadf29] underline text-xs"
//                         >
//                           {item.social_media_link}
//                         </a>
//                       ) : (
//                         <span className="text-xs text-gray-500 italic">Tidak diisi</span>
//                       )}
//                     </td>
//                     <td className="p-4 whitespace-nowrap">
//                       {item.can_claim_voucher ? (
//                         <div>
//                           <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-600/30 text-green-300 border border-green-400">
//                             Aktif
//                           </span>
//                           <p className="text-[11px] text-gray-400 mt-1">
//                             Diklaim: {item.vouchers_count} voucher
//                           </p>
//                         </div>
//                       ) : (
//                         <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]">
//                           Terkunci
//                         </span>
//                       )}
//                     </td>
//                     <td className="p-4 text-center whitespace-nowrap">
//                       <div className="flex items-center justify-center gap-2">
//                         <button
//                           onClick={() => openEditModal(item)}
//                           className="px-3 py-1.5 bg-[#0fdff8] hover:bg-cyan-400 text-black text-xs font-bold rounded cursor-pointer"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(item)}
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

//       {/* MODAL CREATE / EDIT KOL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
//           <div className="bg-black border-4 border-[#0fdff8] rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 shadow-[6px_6px_0px_#ff1493]">
//             <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
//               <h2 className="font-anton text-2xl text-[#fadf29] uppercase">
//                 {editingId ? "Edit Data KOL" : "Tambah KOL Baru"}
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
//                   Nama Lengkap *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Icon / Niche *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={icon}
//                   onChange={(e) => setIcon(e.target.value)}
//                   placeholder="Contoh: Fashion Creator"
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Alamat *
//                 </label>
//                 <textarea
//                   rows={2}
//                   required
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                     WhatsApp *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={whatsapp}
//                     onChange={(e) => setWhatsapp(e.target.value)}
//                     className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#fadf29] mb-1">
//                   Link Media Sosial (Opsional — syarat klaim voucher)
//                 </label>
//                 <input
//                   type="text"
//                   value={socialMediaLink}
//                   onChange={(e) => setSocialMediaLink(e.target.value)}
//                   placeholder="https://instagram.com/username"
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
//                   Password {editingId ? "(Kosongkan jika tidak diubah)" : "(Kosongkan untuk default: back2eras2026)"}
//                 </label>
//                 <input
//                   type="password"
//                   minLength={6}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Minimal 6 karakter"
//                   className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
//                 />
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

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";

interface KolItem {
  id: number;
  user_id: number | null;
  name: string;
  address: string;
  icon: string;
  email: string;
  whatsapp: string;
  social_media_link: string | null;
  can_claim_voucher: boolean;
  vouchers_count: number;
  created_at: string;
}

const API_BASE = "https://back.back2eras.com/api";

const formatSafeUrl = (link: string): string => {
  const trimmed = link.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const formatDateID = (dateStr?: string | null): string => {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getFileTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(
    now.getHours()
  )}${pad(now.getMinutes())}`;
};

export default function AdminKolsPage() {
  const [kols, setKols] = useState<KolItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterEligibility, setFilterEligibility] = useState<"all" | "eligible" | "locked">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [exportingExcel, setExportingExcel] = useState(false);
  const [exportingPdf, setExportingPdf] = useState(false);

  // Modal Create / Edit State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [icon, setIcon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [saving, setSaving] = useState(false);

  const getToken = () => localStorage.getItem("admin_token") || "";

  const fetchKols = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/kols`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setKols(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch KOLs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchKols();
  }, [fetchKols]);

  const openCreateModal = () => {
    setEditingId(null);
    setName("");
    setAddress("");
    setIcon("");
    setEmail("");
    setPassword("");
    setWhatsapp("");
    setSocialMediaLink("");
    setIsModalOpen(true);
  };

  const openEditModal = (item: KolItem) => {
    setEditingId(item.id);
    setName(item.name);
    setAddress(item.address);
    setIcon(item.icon);
    setEmail(item.email);
    setPassword("");
    setWhatsapp(item.whatsapp);
    setSocialMediaLink(item.social_media_link || "");
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const payload: Record<string, string | null> = {
        name,
        address,
        icon,
        email,
        whatsapp,
        social_media_link: socialMediaLink.trim() || null,
      };
      if (password.trim() !== "") {
        payload.password = password;
      }

      const url = editingId ? `${API_BASE}/admin/kols/${editingId}` : `${API_BASE}/admin/kols`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Gagal menyimpan data KOL.");

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
      fetchKols();
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

  const handleDelete = async (item: KolItem) => {
    const confirm = await Swal.fire({
      title: `Hapus KOL "${item.name}"?`,
      text: "Data KOL dan akun login KOL terkait akan dihapus permanen.",
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
      const res = await fetch(`${API_BASE}/admin/kols/${item.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!res.ok) throw new Error("Gagal menghapus data KOL.");

      Swal.fire({
        title: "Terhapus!",
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1200,
        showConfirmButton: false,
      });

      fetchKols();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gagal menghapus.";
      Swal.fire({ title: "Error", text: msg, icon: "error", background: "#144333", color: "#eaddce" });
    }
  };

  const getFilterLabel = (): string => {
    if (filterEligibility === "eligible") return "Bisa Klaim Voucher";
    if (filterEligibility === "locked") return "Belum Ada Medsos (Terkunci)";
    return "Semua KOL";
  };

  const totalCount = kols.length;
  const eligibleCount = kols.filter((k) => k.can_claim_voucher).length;
  const lockedCount = totalCount - eligibleCount;

  const filteredKols = kols.filter((k) => {
    if (filterEligibility === "eligible" && !k.can_claim_voucher) return false;
    if (filterEligibility === "locked" && k.can_claim_voucher) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        k.name.toLowerCase().includes(q) ||
        k.email.toLowerCase().includes(q) ||
        k.whatsapp.toLowerCase().includes(q) ||
        k.icon.toLowerCase().includes(q) ||
        k.address.toLowerCase().includes(q) ||
        (k.social_media_link || "").toLowerCase().includes(q)
      );
    }
    return true;
  });

  // --- EXPORT TO EXCEL (.xlsx) ---
  const handleExportExcel = async () => {
    if (filteredKols.length === 0) {
      Swal.fire({
        title: "Tidak Ada Data",
        text: "Tidak ada data KOL untuk diekspor pada filter saat ini.",
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

      const rows = filteredKols.map((k, idx) => ({
        No: idx + 1,
        "ID KOL": k.id,
        "Tanggal Daftar": formatDateID(k.created_at),
        "Nama Lengkap": k.name,
        "Icon / Niche": k.icon,
        Email: k.email,
        "No. WhatsApp": String(k.whatsapp || "-"),
        Alamat: k.address,
        "Link Media Sosial": k.social_media_link?.trim() || "-",
        "Akses Voucher": k.can_claim_voucher ? "Aktif" : "Terkunci",
        "Voucher Diklaim": k.vouchers_count ?? 0,
      }));

      const worksheet = XLSX.utils.json_to_sheet(rows);

      worksheet["!cols"] = [
        { wch: 5 },  // No
        { wch: 9 },  // ID KOL
        { wch: 20 }, // Tanggal Daftar
        { wch: 28 }, // Nama Lengkap
        { wch: 22 }, // Icon / Niche
        { wch: 30 }, // Email
        { wch: 18 }, // No. WhatsApp
        { wch: 42 }, // Alamat
        { wch: 45 }, // Link Media Sosial
        { wch: 15 }, // Akses Voucher
        { wch: 16 }, // Voucher Diklaim
      ];

      // Pastikan kolom WhatsApp (kolom index 6) disimpan sebagai teks murni agar 0 & +62 aman
      const range = XLSX.utils.decode_range(worksheet["!ref"] || "A1");
      for (let r = 1; r <= range.e.r; r++) {
        const waCell = worksheet[XLSX.utils.encode_cell({ r, c: 6 })];
        if (waCell) {
          waCell.t = "s";
          waCell.z = "@";
        }
      }

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data KOL");

      const exportedEligible = filteredKols.filter((k) => k.can_claim_voucher).length;
      const totalClaimedVouchers = filteredKols.reduce(
        (acc, k) => acc + (k.vouchers_count ?? 0),
        0
      );

      const summaryRows = [
        { Keterangan: "Event", Nilai: "BACK2ERAS 2026" },
        { Keterangan: "Waktu Ekspor", Nilai: formatDateID(new Date().toISOString()) },
        { Keterangan: "Filter Aktif", Nilai: getFilterLabel() },
        { Keterangan: "Kata Kunci Pencarian", Nilai: searchQuery.trim() || "-" },
        { Keterangan: "Total KOL Diekspor", Nilai: filteredKols.length },
        { Keterangan: "Bisa Klaim Voucher (Aktif)", Nilai: exportedEligible },
        { Keterangan: "Terkunci (Tanpa Link Medsos)", Nilai: filteredKols.length - exportedEligible },
        { Keterangan: "Total Voucher Diklaim", Nilai: totalClaimedVouchers },
      ];
      const summarySheet = XLSX.utils.json_to_sheet(summaryRows);
      summarySheet["!cols"] = [{ wch: 30 }, { wch: 35 }];
      XLSX.utils.book_append_sheet(workbook, summarySheet, "Ringkasan");

      XLSX.writeFile(workbook, `BACK2ERAS_KOLs_${getFileTimestamp()}.xlsx`);
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
    if (filteredKols.length === 0) {
      Swal.fire({
        title: "Tidak Ada Data",
        text: "Tidak ada data KOL untuk diekspor pada filter saat ini.",
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

      const exportedEligible = filteredKols.filter((k) => k.can_claim_voucher).length;

      // Header Dokumen
      doc.setFillColor(20, 67, 51); // #144333
      doc.rect(0, 0, 297, 28, "F");

      doc.setTextColor(250, 223, 41); // #fadf29
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("BACK2ERAS 2026 - REGISTERED KOLs", 14, 13);

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
        `Total: ${filteredKols.length} KOL  |  Aktif: ${exportedEligible}  |  Terkunci: ${
          filteredKols.length - exportedEligible
        }`,
        283,
        21,
        { align: "right" }
      );

      const tableBody = filteredKols.map((k, idx) => [
        String(idx + 1),
        formatDateID(k.created_at),
        k.name,
        k.icon,
        k.email,
        k.whatsapp || "-",
        k.address,
        k.social_media_link?.trim() || "-",
        k.can_claim_voucher ? `Aktif (${k.vouchers_count ?? 0})` : "Terkunci",
      ]);

      autoTable(doc, {
        startY: 34,
        head: [
          [
            "No",
            "Reg Date",
            "Nama KOL",
            "Icon / Niche",
            "Email",
            "WhatsApp",
            "Alamat",
            "Link Media Sosial",
            "Akses Voucher",
          ],
        ],
        body: tableBody,
        theme: "grid",
        styles: {
          fontSize: 8,
          cellPadding: 2.2,
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
          0: { halign: "center", cellWidth: 9 },
          1: { cellWidth: 26 },
          2: { cellWidth: 32 },
          3: { cellWidth: 24 },
          4: { cellWidth: 40 },
          5: { cellWidth: 28 },
          6: { cellWidth: 44 },
          7: { cellWidth: 42 },
          8: { halign: "center", cellWidth: 24 },
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

      doc.save(`BACK2ERAS_KOLs_${getFileTimestamp()}.pdf`);
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

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Manage KOLs
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            Kelola data pendaftaran KOL, link media sosial, dan status akses klaim voucher.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="px-6 py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
        >
          + Tambah KOL
        </button>
      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-black border-2 border-gray-700 rounded-xl p-4">
          <p className="text-xs uppercase text-gray-400">Total KOL Terdaftar</p>
          <p className="font-anton text-3xl text-white mt-1">{totalCount}</p>
        </div>
        <div className="bg-black border-2 border-green-500/60 rounded-xl p-4">
          <p className="text-xs uppercase text-green-400">Bisa Klaim Voucher (Ada Link Medsos)</p>
          <p className="font-anton text-3xl text-green-400 mt-1">{eligibleCount}</p>
        </div>
        <div className="bg-black border-2 border-[#fadf29]/60 rounded-xl p-4">
          <p className="text-xs uppercase text-[#fadf29]">Terkunci (Tanpa Link Medsos)</p>
          <p className="font-anton text-3xl text-[#fadf29] mt-1">{lockedCount}</p>
        </div>
      </div>

      {/* FILTER, SEARCH & EXPORT */}
      <div className="flex flex-col xl:flex-row justify-between gap-3 mb-5">
        <div className="flex flex-wrap gap-2">
          {[
            { key: "all", label: "Semua" },
            { key: "eligible", label: "Bisa Klaim Voucher" },
            { key: "locked", label: "Belum Ada Medsos" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterEligibility(tab.key as "all" | "eligible" | "locked")}
              className={`px-4 py-2 rounded font-anton uppercase text-xs tracking-wider cursor-pointer transition-colors ${
                filterEligibility === tab.key
                  ? "bg-[#0fdff8] text-black"
                  : "bg-black text-gray-400 border border-gray-700 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama / icon / email / WA / alamat..."
            className="px-4 py-2 bg-black border border-gray-700 focus:border-[#0fdff8] rounded text-sm text-white outline-none min-w-[260px]"
          />

          <div className="flex gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleExportExcel}
              disabled={exportingExcel || filteredKols.length === 0}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#13bbad] hover:bg-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-anton text-sm uppercase tracking-wider rounded shadow-[3px_3px_0px_#fadf29] active:translate-y-0.5 transition-all cursor-pointer"
            >
              {exportingExcel ? "Exporting..." : "📊 Export Excel"}
            </button>

            <button
              type="button"
              onClick={handleExportPdf}
              disabled={exportingPdf || filteredKols.length === 0}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 disabled:cursor-not-allowed text-white font-anton text-sm uppercase tracking-wider rounded shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 transition-all cursor-pointer"
            >
              {exportingPdf ? "Exporting..." : "📄 Export PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* TABEL DATA KOL */}
      <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
                <th className="p-4">Nama &amp; Icon</th>
                <th className="p-4">Kontak</th>
                <th className="p-4">Alamat</th>
                <th className="p-4">Media Sosial</th>
                <th className="p-4">Akses Voucher</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#0fdff8] font-anton text-xl animate-pulse">
                    Memuat data KOL...
                  </td>
                </tr>
              ) : filteredKols.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">
                    Tidak ada data KOL ditemukan.
                  </td>
                </tr>
              ) : (
                filteredKols.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-900/60 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-xs text-[#0fdff8] mt-0.5">{item.icon}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-gray-200">{item.email}</p>
                      <p className="text-xs text-gray-400 mt-0.5">WA: {item.whatsapp}</p>
                    </td>
                    <td className="p-4 max-w-xs text-xs text-gray-300">{item.address}</td>
                    <td className="p-4 max-w-[200px] truncate">
                      {item.social_media_link ? (
                        <a
                          href={formatSafeUrl(item.social_media_link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0fdff8] hover:text-[#fadf29] underline text-xs"
                        >
                          {item.social_media_link}
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 italic">Tidak diisi</span>
                      )}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {item.can_claim_voucher ? (
                        <div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-600/30 text-green-300 border border-green-400">
                            Aktif
                          </span>
                          <p className="text-[11px] text-gray-400 mt-1">
                            Diklaim: {item.vouchers_count} voucher
                          </p>
                        </div>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]">
                          Terkunci
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="px-3 py-1.5 bg-[#0fdff8] hover:bg-cyan-400 text-black text-xs font-bold rounded cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item)}
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

      {/* MODAL CREATE / EDIT KOL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black border-4 border-[#0fdff8] rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 shadow-[6px_6px_0px_#ff1493]">
            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
              <h2 className="font-anton text-2xl text-[#fadf29] uppercase">
                {editingId ? "Edit Data KOL" : "Tambah KOL Baru"}
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
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Icon / Niche *
                </label>
                <input
                  type="text"
                  required
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  placeholder="Contoh: Fashion Creator"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Alamat *
                </label>
                <textarea
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#fadf29] mb-1">
                  Link Media Sosial (Opsional — syarat klaim voucher)
                </label>
                <input
                  type="text"
                  value={socialMediaLink}
                  onChange={(e) => setSocialMediaLink(e.target.value)}
                  placeholder="https://instagram.com/username"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-anton uppercase text-[#0fdff8] mb-1">
                  Password {editingId ? "(Kosongkan jika tidak diubah)" : "(Kosongkan untuk default: back2eras2026)"}
                </label>
                <input
                  type="password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded text-white focus:border-[#0fdff8] outline-none"
                />
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