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
//   status: string;
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function TalkshowPage() {
//   const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
//   const [loadingList, setLoadingList] = useState(true);

//   // State Form Pendaftaran
//   const [speakerName, setSpeakerName] = useState("");
//   const [icon, setIcon] = useState("");
//   const [theme, setTheme] = useState("");
//   const [schedule, setSchedule] = useState("");
//   const [posterFile, setPosterFile] = useState<File | null>(null);
//   const [posterPreview, setPosterPreview] = useState<string | null>(null);
//   const [submitting, setSubmitting] = useState(false);

//   const fetchApprovedTalkshows = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/talkshows/approved`, {
//         headers: { Accept: "application/json" },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setTalkshows(data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch talkshows:", error);
//     } finally {
//       setLoadingList(false);
//     }
//   };

//   useEffect(() => {
//     fetchApprovedTalkshows();
//   }, []);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setPosterFile(file);
//     if (file) {
//       setPosterPreview(URL.createObjectURL(file));
//     } else {
//       setPosterPreview(null);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!posterFile) {
//       Swal.fire({
//         title: "Poster Wajib Diunggah",
//         text: "Silakan pilih gambar poster talkshow terlebih dahulu.",
//         icon: "warning",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#ff1493",
//       });
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const formData = new FormData();
//       formData.append("poster", posterFile);
//       formData.append("speaker_name", speakerName);
//       formData.append("icon", icon);
//       formData.append("theme", theme);
//       formData.append("schedule", schedule);

//       const res = await fetch(`${API_BASE}/talkshows/register`, {
//         method: "POST",
//         headers: { Accept: "application/json" },
//         body: formData,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Gagal mengirim pendaftaran talkshow.");
//       }

//       Swal.fire({
//         title: "Berhasil Terdaftar!",
//         text: "Pengajuan talkshow Anda telah masuk dan sedang menunggu persetujuan admin.",
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#13bbad",
//       });

//       // Reset form
//       setSpeakerName("");
//       setIcon("");
//       setTheme("");
//       setSchedule("");
//       setPosterFile(null);
//       setPosterPreview(null);
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
//       Swal.fire({
//         title: "Gagal",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#ff1493",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const formatSchedule = (dateStr: string) => {
//     const date = new Date(dateStr);
//     return date.toLocaleString("id-ID", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* HERO SECTION */}
//         <div className="text-center mb-12">
//           <h1 className="font-anton text-4xl md:text-6xl text-[#0fdff8] uppercase tracking-wider drop-shadow-[3px_3px_0px_#ff1493]">
//             BACK2ERAS Talkshow
//           </h1>
//           <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
//             Simak jadwal sesi inspiratif bersama ikon skena thrift &amp; budaya retro, atau daftarkan sesi talkshow Anda sendiri di BACK2ERAS 2026.
//           </p>
//         </div>

//         {/* SECTION 1: APPROVED TALKSHOW LINEUP */}
//         <section className="mb-16">
//           <h2 className="font-anton text-2xl md:text-3xl text-[#fadf29] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
//             Official Talkshow Lineup
//           </h2>

//           {loadingList ? (
//             <p className="text-[#0fdff8] font-anton text-xl animate-pulse">Loading Talkshows...</p>
//           ) : talkshows.length === 0 ? (
//             <div className="bg-black/60 border-2 border-[#13bbad] rounded-xl p-8 text-center text-gray-300">
//               Belum ada jadwal talkshow yang dipublikasikan. Jadilah pembicara pertama dengan mendaftar di bawah!
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {talkshows.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-black border-2 border-[#0fdff8] rounded-xl overflow-hidden shadow-[4px_4px_0px_#ff1493] flex flex-col"
//                 >
//                   <div className="h-56 w-full bg-gray-900 overflow-hidden">
//                     <img
//                       src={item.poster_url}
//                       alt={item.theme}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-5 flex-1 flex flex-col justify-between">
//                     <div>
//                       <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
//                         {formatSchedule(item.schedule)} WIB
//                       </span>
//                       <h3 className="font-anton text-2xl text-[#fadf29] uppercase leading-snug mb-2">
//                         {item.theme}
//                       </h3>
//                     </div>
//                     <div className="mt-4 pt-3 border-t border-gray-800">
//                       <p className="font-bold text-white text-base">{item.speaker_name}</p>
//                       <p className="text-xs text-[#0fdff8] uppercase tracking-wider">{item.icon}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* SECTION 2: FORM PENDAFTARAN TALKSHOW */}
//         <section className="max-w-3xl mx-auto bg-black border-4 border-[#13bbad] rounded-2xl p-6 md:p-10 shadow-[8px_8px_0px_#ff1493]">
//           <h2 className="font-anton text-3xl text-[#0fdff8] uppercase tracking-wider mb-2">
//             Talkshow Registration
//           </h2>
//           <p className="text-sm text-gray-400 mb-8">
//             Isi detail narasumber, tema, waktu, dan unggah poster. Data akan tampil setelah disetujui oleh tim admin.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Nama Narasumber */}
//             <div>
//               <label className="block font-anton text-sm text-[#fadf29] uppercase tracking-wider mb-2">
//                 Nama Narasumber *
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={speakerName}
//                 onChange={(e) => setSpeakerName(e.target.value)}
//                 placeholder="Contoh: Budi Santoso"
//                 className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//               />
//             </div>

//             {/* Icon (Jabatan) */}
//             <div>
//               <label className="block font-anton text-sm text-[#fadf29] uppercase tracking-wider mb-2">
//                 Icon / Jabatan *
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={icon}
//                 onChange={(e) => setIcon(e.target.value)}
//                 placeholder="Contoh: Founder Vintage Wear / Fashion Stylist"
//                 className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//               />
//             </div>

//             {/* Tema */}
//             <div>
//               <label className="block font-anton text-sm text-[#fadf29] uppercase tracking-wider mb-2">
//                 Tema Talkshow *
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={theme}
//                 onChange={(e) => setTheme(e.target.value)}
//                 placeholder="Contoh: Membangun Brand Thrift Berkelanjutan di Era Modern"
//                 className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//               />
//             </div>

//             {/* Waktu */}
//             <div>
//               <label className="block font-anton text-sm text-[#fadf29] uppercase tracking-wider mb-2">
//                 Waktu Pelaksanaan *
//               </label>
//               <input
//                 type="datetime-local"
//                 required
//                 value={schedule}
//                 onChange={(e) => setSchedule(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//               />
//             </div>

//             {/* Poster */}
//             <div>
//               <label className="block font-anton text-sm text-[#fadf29] uppercase tracking-wider mb-2">
//                 Gambar Poster (JPG/PNG/WEBP, maks. 2MB) *
//               </label>
//               <input
//                 type="file"
//                 accept="image/jpeg,image/png,image/webp"
//                 required
//                 onChange={handleFileChange}
//                 className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#ff1493] file:text-white file:font-bold hover:file:bg-[#e01082]"
//               />
//               {posterPreview && (
//                 <div className="mt-4">
//                   <p className="text-xs text-gray-400 mb-2">Preview Poster:</p>
//                   <img
//                     src={posterPreview}
//                     alt="Preview Poster"
//                     className="h-48 w-auto rounded border-2 border-[#0fdff8] object-cover"
//                   />
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full py-4 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-xl uppercase tracking-widest rounded shadow-[4px_4px_0px_#0fdff8] transition-transform active:translate-y-1 cursor-pointer"
//             >
//               {submitting ? "Mengirim Data..." : "Daftar Talkshow Sekarang"}
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }

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
//   approved_participants_count?: number;
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function TalkshowPage() {
//   const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
//   const [loadingList, setLoadingList] = useState(true);

//   // State Modal Pendaftaran Peserta
//   const [selectedTalkshow, setSelectedTalkshow] = useState<Talkshow | null>(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [institution, setInstitution] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   const fetchTalkshows = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/talkshows`, {
//         headers: { Accept: "application/json" },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setTalkshows(data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch talkshows:", error);
//     } finally {
//       setLoadingList(false);
//     }
//   };

//   useEffect(() => {
//     fetchTalkshows();
//   }, []);

//   const openRegisterModal = (talkshow: Talkshow) => {
//     setSelectedTalkshow(talkshow);
//     setName("");
//     setEmail("");
//     setPhone("");
//     setInstitution("");
//   };

//   const closeRegisterModal = () => {
//     if (submitting) return;
//     setSelectedTalkshow(null);
//   };

//   const handleRegisterSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedTalkshow) return;

//     setSubmitting(true);
//     try {
//       const res = await fetch(`${API_BASE}/talkshows/${selectedTalkshow.id}/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           institution,
//         }),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Gagal mengirim pendaftaran.");
//       }

//       setSelectedTalkshow(null);

//       Swal.fire({
//         title: "Pendaftaran Berhasil!",
//         text: `Data diri Anda untuk sesi "${selectedTalkshow.theme}" telah terkirim dan menunggu persetujuan admin.`,
//         icon: "success",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#13bbad",
//       });
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
//       Swal.fire({
//         title: "Gagal Mendaftar",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#ff1493",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const formatSchedule = (dateStr: string) => {
//     const date = new Date(dateStr);
//     return date.toLocaleString("id-ID", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* HERO SECTION */}
//         <div className="text-center mb-12">
//           <h1 className="font-anton text-4xl md:text-6xl text-[#0fdff8] uppercase tracking-wider drop-shadow-[3px_3px_0px_#ff1493]">
//             BACK2ERAS Talkshow
//           </h1>
//           <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
//             Pilih sesi talkshow inspiratif bersama para ikon skena thrift &amp; budaya retro di BACK2ERAS 2026, lalu klik tombol daftar untuk mengamankan kursi Anda.
//           </p>
//         </div>

//         {/* DAFTAR TALKSHOW */}
//         <section>
//           <h2 className="font-anton text-2xl md:text-3xl text-[#fadf29] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
//             Official Talkshow Lineup
//           </h2>

//           {loadingList ? (
//             <p className="text-[#0fdff8] font-anton text-xl animate-pulse">Loading Talkshows...</p>
//           ) : talkshows.length === 0 ? (
//             <div className="bg-black/60 border-2 border-[#13bbad] rounded-xl p-10 text-center text-gray-300">
//               Jadwal talkshow belum tersedia saat ini. Nantikan pembaruan dari tim BACK2ERAS!
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {talkshows.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-black border-2 border-[#0fdff8] rounded-xl overflow-hidden shadow-[4px_4px_0px_#ff1493] flex flex-col"
//                 >
//                   <div className="h-60 w-full bg-gray-900 overflow-hidden">
//                     <img
//                       src={item.poster_url}
//                       alt={item.theme}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   <div className="p-5 flex-1 flex flex-col justify-between">
//                     <div>
//                       <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
//                         {formatSchedule(item.schedule)} WIB
//                       </span>
//                       <h3 className="font-anton text-2xl text-[#fadf29] uppercase leading-snug mb-3">
//                         {item.theme}
//                       </h3>
//                     </div>

//                     <div>
//                       <div className="pt-3 border-t border-gray-800 mb-5">
//                         <p className="font-bold text-white text-base">{item.speaker_name}</p>
//                         <p className="text-xs text-[#0fdff8] uppercase tracking-wider">{item.icon}</p>
//                       </div>

//                       <button
//                         onClick={() => openRegisterModal(item)}
//                         className="w-full py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton text-lg uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] transition-transform active:translate-y-0.5 cursor-pointer"
//                       >
//                         Daftar Talkshow
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>

//       {/* POP-UP MODAL PENDAFTARAN PESERTA */}
//       {selectedTalkshow && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={closeRegisterModal}
//         >
//           <div
//             className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start gap-4 mb-5 border-b border-gray-800 pb-4">
//               <div>
//                 <span className="text-xs font-anton uppercase tracking-widest text-[#ff1493]">
//                   Pendaftaran Peserta Talkshow
//                 </span>
//                 <h2 className="font-anton text-2xl text-[#fadf29] uppercase mt-1 leading-tight">
//                   {selectedTalkshow.theme}
//                 </h2>
//                 <p className="text-xs text-[#0fdff8] mt-1">
//                   {selectedTalkshow.speaker_name} ({selectedTalkshow.icon}) &bull;{" "}
//                   {formatSchedule(selectedTalkshow.schedule)} WIB
//                 </p>
//               </div>
//               <button
//                 onClick={closeRegisterModal}
//                 className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
//                 aria-label="Tutup"
//               >
//                 &times;
//               </button>
//             </div>

//             <form onSubmit={handleRegisterSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Nama Lengkap *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Masukkan nama lengkap Anda"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Email Aktif *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="contoh@email.com"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Nomor WhatsApp / HP *
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="08xxxxxxxxxx"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Instansi / Komunitas (Opsional)
//                 </label>
//                 <input
//                   type="text"
//                   value={institution}
//                   onChange={(e) => setInstitution(e.target.value)}
//                   placeholder="Contoh: Mahasiswa / Brand Thrift / Umum"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
//                 <button
//                   type="button"
//                   onClick={closeRegisterModal}
//                   className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
//                 >
//                   Batal
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="px-6 py-2.5 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-base uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
//                 >
//                   {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// interface Talkshow {
//   id: number;
//   poster: string;
//   poster_url: string;
//   speaker_name: string;
//   icon: string;
//   theme: string;
//   schedule: string;
//   active_registrations_count?: number;
//   approved_participants_count?: number;
//   max_participants?: number;
//   remaining_slots?: number;
//   is_full?: boolean;
//   goodie_bag_remaining?: number;
// }

// interface LoggedUser {
//   id: number;
//   name: string;
//   email: string;
//   whatsapp?: string;
// }

// const API_BASE = "https://back.back2eras.com/api";

// export default function TalkshowPage() {
//   const router = useRouter();

//   const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
//   const [loadingList, setLoadingList] = useState(true);
//   const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

//   // State Modal Pendaftaran Peserta
//   const [selectedTalkshow, setSelectedTalkshow] = useState<Talkshow | null>(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [institution, setInstitution] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   const syncUser = () => {
//     const token = localStorage.getItem("visitor_token");
//     const userStr = localStorage.getItem("visitor_user");
//     if (token && userStr) {
//       try {
//         setLoggedUser(JSON.parse(userStr));
//       } catch {
//         setLoggedUser(null);
//       }
//     } else {
//       setLoggedUser(null);
//     }
//   };

//   const fetchTalkshows = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/talkshows`, {
//         headers: { Accept: "application/json" },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setTalkshows(data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch talkshows:", error);
//     } finally {
//       setLoadingList(false);
//     }
//   };

//   useEffect(() => {
//     syncUser();
//     fetchTalkshows();
//     window.addEventListener("visitor-auth-changed", syncUser);
//     return () => window.removeEventListener("visitor-auth-changed", syncUser);
//   }, []);

//   const openRegisterModal = (talkshow: Talkshow) => {
//     if (talkshow.is_full) return;
//     setSelectedTalkshow(talkshow);
//     setName(loggedUser?.name || "");
//     setEmail(loggedUser?.email || "");
//     setPhone(loggedUser?.whatsapp || "");
//     setPassword("");
//     setInstitution("");
//   };

//   const closeRegisterModal = () => {
//     if (submitting) return;
//     setSelectedTalkshow(null);
//   };

//   const handleRegisterSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedTalkshow) return;

//     setSubmitting(true);
//     try {
//       const token = localStorage.getItem("visitor_token");
//       const headers: Record<string, string> = {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       };
//       if (token) {
//         headers.Authorization = `Bearer ${token}`;
//       }

//       const body: Record<string, string> = {
//         name,
//         email,
//         phone,
//         institution,
//       };
//       if (!token) {
//         body.password = password;
//       }

//       const res = await fetch(`${API_BASE}/talkshows/${selectedTalkshow.id}/register`, {
//         method: "POST",
//         headers,
//         body: JSON.stringify(body),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Gagal mengirim pendaftaran.");
//       }

//       // Auto-login jika baru saja dibuatkan akun talkshow
//       if (result.token && result.user) {
//         localStorage.setItem("visitor_token", result.token);
//         localStorage.setItem("visitor_user", JSON.stringify(result.user));
//         window.dispatchEvent(new Event("visitor-auth-changed"));
//       }

//       const bookedTheme = selectedTalkshow.theme;
//       setSelectedTalkshow(null);
//       await fetchTalkshows();

//       const swalRes = await Swal.fire({
//         title: "Pendaftaran Berhasil!",
//         html: `
//           <div class="text-left text-sm text-[#eaddce] space-y-2.5">
//             <p>Data diri Anda untuk sesi <strong class="text-[#fadf29]">"${bookedTheme}"</strong> telah diterima.</p>
//             <div class="bg-black/60 border border-[#0fdff8] rounded p-3 text-xs space-y-1">
//               <p class="text-[#0fdff8] font-bold uppercase">Info Klaim Voucher:</p>
//               <p>• Voucher baru dapat diklaim setelah status pendaftaran Anda <strong>di-Accept (Approve)</strong> oleh admin.</p>
//               <p>• <strong>5 Pendaftar Pertama (Approved):</strong> Free Goodie Bag + Semua 7 Voucher Brand.</p>
//               <p>• <strong>Pendaftar ke 6–25 (Approved):</strong> 6 Voucher Brand Partner (kecuali Back2eras).</p>
//             </div>
//           </div>
//         `,
//         icon: "success",
//         showCancelButton: true,
//         confirmButtonText: "Lihat Halaman Voucher",
//         cancelButtonText: "Tutup",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#13bbad",
//         cancelButtonColor: "#555",
//       });

//       if (swalRes.isConfirmed) {
//         router.push("/voucher");
//       }
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
//       Swal.fire({
//         title: "Gagal Mendaftar",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#ff1493",
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const formatSchedule = (dateStr: string) => {
//     const date = new Date(dateStr);
//     return date.toLocaleString("id-ID", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* HERO SECTION */}
//         <div className="text-center mb-8">
//           <h1 className="font-anton text-4xl md:text-6xl text-[#0fdff8] uppercase tracking-wider drop-shadow-[3px_3px_0px_#ff1493]">
//             BACK2ERAS Talkshow
//           </h1>
//           <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
//             Pilih sesi talkshow inspiratif bersama para ikon skena thrift &amp; budaya retro di BACK2ERAS 2026. Kuota terbatas hanya <strong className="text-[#fadf29]">25 peserta per sesi</strong>!
//           </p>
//         </div>

//         {/* BANNER BENEFIT VOUCHER TALKSHOW */}
//         <div className="bg-black border-2 border-dashed border-[#fadf29] rounded-xl p-5 mb-12 shadow-[4px_4px_0px_#ff1493]">
//           <p className="font-anton text-lg text-[#fadf29] uppercase tracking-wider mb-2">
//             🎁 Benefit Voucher Peserta Talkshow (Maks. 25 Orang / Sesi)
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-200">
//             <div className="bg-gray-900/90 border border-[#0fdff8]/40 rounded-lg p-3">
//               <p className="font-bold text-[#0fdff8] uppercase mb-1">Pendaftar ke 1–5</p>
//               <p>Berhak klaim <strong>Voucher Free Goodie Bag</strong> + <strong>semua 7 voucher brand</strong> (termasuk Back2eras).</p>
//             </div>
//             <div className="bg-gray-900/90 border border-[#13bbad]/40 rounded-lg p-3">
//               <p className="font-bold text-[#13bbad] uppercase mb-1">Pendaftar ke 6–25</p>
//               <p>Berhak klaim <strong>6 voucher brand partner</strong> (Solher, Gycora, Glamoire, WDP, Kecilung, Malaijia) tanpa Back2eras.</p>
//             </div>
//             <div className="bg-gray-900/90 border border-[#ff1493]/40 rounded-lg p-3">
//               <p className="font-bold text-[#ff1493] uppercase mb-1">Syarat Aktivasi</p>
//               <p>Akses klaim voucher otomatis terbuka di halaman <strong>Voucher</strong> setelah pendaftaran Anda <strong>disetujui (Accept)</strong> oleh admin.</p>
//             </div>
//           </div>
//         </div>

//         {/* DAFTAR TALKSHOW */}
//         <section>
//           <h2 className="font-anton text-2xl md:text-3xl text-[#fadf29] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
//             Official Talkshow Lineup
//           </h2>

//           {loadingList ? (
//             <p className="text-[#0fdff8] font-anton text-xl animate-pulse">Loading Talkshows...</p>
//           ) : talkshows.length === 0 ? (
//             <div className="bg-black/60 border-2 border-[#13bbad] rounded-xl p-10 text-center text-gray-300">
//               Jadwal talkshow belum tersedia saat ini. Nantikan pembaruan dari tim BACK2ERAS!
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {talkshows.map((item) => {
//                 const maxSlot = item.max_participants ?? 25;
//                 const activeCount = item.active_registrations_count ?? 0;
//                 const remaining = item.remaining_slots ?? Math.max(0, maxSlot - activeCount);
//                 const isFull = item.is_full ?? activeCount >= maxSlot;

//                 return (
//                   <div
//                     key={item.id}
//                     className="bg-black border-2 border-[#0fdff8] rounded-xl overflow-hidden shadow-[4px_4px_0px_#ff1493] flex flex-col"
//                   >
//                     <div className="relative h-60 w-full bg-gray-900 overflow-hidden">
//                       <img
//                         src={item.poster_url}
//                         alt={item.theme}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                       <span
//                         className={`absolute top-3 right-3 px-3 py-1 rounded-full font-anton text-xs uppercase tracking-wider shadow ${
//                           isFull
//                             ? "bg-red-600 text-white"
//                             : "bg-black/85 text-[#fadf29] border border-[#fadf29]"
//                         }`}
//                       >
//                         {isFull ? "KUOTA PENUH (25/25)" : `Sisa ${remaining}/${maxSlot} Kursi`}
//                       </span>
//                     </div>

//                     <div className="p-5 flex-1 flex flex-col justify-between">
//                       <div>
//                         <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
//                           {formatSchedule(item.schedule)} WIB
//                         </span>
//                         <h3 className="font-anton text-2xl text-[#fadf29] uppercase leading-snug mb-3">
//                           {item.theme}
//                         </h3>
//                       </div>

//                       <div>
//                         <div className="pt-3 border-t border-gray-800 mb-5">
//                           <p className="font-bold text-white text-base">{item.speaker_name}</p>
//                           <p className="text-xs text-[#0fdff8] uppercase tracking-wider">{item.icon}</p>
//                         </div>

//                         <button
//                           onClick={() => openRegisterModal(item)}
//                           disabled={isFull}
//                           className={`w-full py-3 font-anton text-lg uppercase tracking-widest rounded transition-transform ${
//                             isFull
//                               ? "bg-gray-700 text-gray-400 cursor-not-allowed"
//                               : "bg-[#ff1493] hover:bg-[#e01082] text-white shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 cursor-pointer"
//                           }`}
//                         >
//                           {isFull ? "Kuota Penuh (25/25)" : "Daftar Talkshow"}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </section>
//       </div>

//       {/* POP-UP MODAL PENDAFTARAN PESERTA */}
//       {selectedTalkshow && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={closeRegisterModal}
//         >
//           <div
//             className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start gap-4 mb-5 border-b border-gray-800 pb-4">
//               <div>
//                 <span className="text-xs font-anton uppercase tracking-widest text-[#ff1493]">
//                   Pendaftaran Peserta Talkshow
//                 </span>
//                 <h2 className="font-anton text-2xl text-[#fadf29] uppercase mt-1 leading-tight">
//                   {selectedTalkshow.theme}
//                 </h2>
//                 <p className="text-xs text-[#0fdff8] mt-1">
//                   {selectedTalkshow.speaker_name} ({selectedTalkshow.icon}) &bull;{" "}
//                   {formatSchedule(selectedTalkshow.schedule)} WIB
//                 </p>
//               </div>
//               <button
//                 onClick={closeRegisterModal}
//                 className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
//                 aria-label="Tutup"
//               >
//                 &times;
//               </button>
//             </div>

//             <form onSubmit={handleRegisterSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Nama Lengkap *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Masukkan nama lengkap Anda"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Email Aktif *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   readOnly={Boolean(loggedUser)}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="contoh@email.com"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none read-only:opacity-70"
//                 />
//               </div>

//               {/* Password wajib diisi jika belum login (untuk akses akun ke halaman /voucher) */}
//               {!loggedUser && (
//                 <div>
//                   <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                     Buat Password Akun (Untuk Klaim Voucher) *
//                   </label>
//                   <input
//                     type="password"
//                     required
//                     minLength={6}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Minimal 6 karakter"
//                     className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                   />
//                 </div>
//               )}

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Nomor WhatsApp / HP *
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="08xxxxxxxxxx"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
//                   Instansi / Komunitas (Opsional)
//                 </label>
//                 <input
//                   type="text"
//                   value={institution}
//                   onChange={(e) => setInstitution(e.target.value)}
//                   placeholder="Contoh: Mahasiswa / Brand Thrift / Umum"
//                   className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
//                 />
//               </div>

//               <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
//                 <button
//                   type="button"
//                   onClick={closeRegisterModal}
//                   className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
//                 >
//                   Batal
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="px-6 py-2.5 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-base uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
//                 >
//                   {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface Talkshow {
  id: number;
  poster: string;
  poster_url: string;
  speaker_name: string;
  icon: string;
  theme: string;
  schedule: string;
  active_registrations_count?: number;
  approved_participants_count?: number;
  max_participants?: number;
  remaining_slots?: number;
  is_full?: boolean;
  goodie_bag_remaining?: number;
  my_registration_status?: "pending" | "approved" | "rejected" | null;
  my_approved_rank?: number | null;
}

interface LoggedUser {
  id: number;
  name: string;
  email: string;
  whatsapp?: string;
}

const API_BASE = "https://back.back2eras.com/api";

export default function TalkshowPage() {
  const router = useRouter();

  const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

  // State Modal Pendaftaran Peserta
  const [selectedTalkshow, setSelectedTalkshow] = useState<Talkshow | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const syncUser = useCallback(() => {
    const token = localStorage.getItem("visitor_token");
    const userStr = localStorage.getItem("visitor_user");
    if (token && userStr) {
      try {
        setLoggedUser(JSON.parse(userStr));
      } catch {
        setLoggedUser(null);
      }
    } else {
      setLoggedUser(null);
    }
  }, []);

  const fetchTalkshows = useCallback(async () => {
    try {
      const token = localStorage.getItem("visitor_token");
      const headers: Record<string, string> = {
        Accept: "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await fetch(`${API_BASE}/talkshows`, { headers });
      if (res.ok) {
        const data = await res.json();
        setTalkshows(data);
      }
    } catch (error) {
      console.error("Failed to fetch talkshows:", error);
    } finally {
      setLoadingList(false);
    }
  }, []);

  useEffect(() => {
    const handleAuthChange = () => {
      syncUser();
      fetchTalkshows();
    };

    handleAuthChange();
    window.addEventListener("visitor-auth-changed", handleAuthChange);
    return () => window.removeEventListener("visitor-auth-changed", handleAuthChange);
  }, [syncUser, fetchTalkshows]);

  const openRegisterModal = (talkshow: Talkshow) => {
    if (talkshow.is_full || talkshow.my_registration_status) return;
    setSelectedTalkshow(talkshow);
    setName(loggedUser?.name || "");
    setEmail(loggedUser?.email || "");
    setPhone(loggedUser?.whatsapp || "");
    setPassword("");
    setInstitution("");
  };

  const closeRegisterModal = () => {
    if (submitting) return;
    setSelectedTalkshow(null);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTalkshow) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem("visitor_token");
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const body: Record<string, string> = {
        name,
        email,
        phone,
        institution,
      };
      if (!token) {
        body.password = password;
      }

      const res = await fetch(`${API_BASE}/talkshows/${selectedTalkshow.id}/register`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Gagal mengirim pendaftaran.");
      }

      // Auto-login jika baru saja dibuatkan akun talkshow
      if (result.token && result.user) {
        localStorage.setItem("visitor_token", result.token);
        localStorage.setItem("visitor_user", JSON.stringify(result.user));
        window.dispatchEvent(new Event("visitor-auth-changed"));
      }

      const bookedTheme = selectedTalkshow.theme;
      setSelectedTalkshow(null);
      await fetchTalkshows();

      const swalRes = await Swal.fire({
        title: "Pendaftaran Berhasil!",
        html: `
          <div class="text-left text-sm text-[#eaddce] space-y-2.5">
            <p>Data diri Anda untuk sesi <strong class="text-[#fadf29]">"${bookedTheme}"</strong> telah diterima.</p>
            <div class="bg-black/60 border border-[#0fdff8] rounded p-3 text-xs space-y-1">
              <p class="text-[#0fdff8] font-bold uppercase">Info Klaim Voucher:</p>
              <p>• Voucher baru dapat diklaim setelah status pendaftaran Anda <strong>di-Accept (Approve)</strong> oleh admin.</p>
              <p>• <strong>5 Pendaftar Pertama (Approved):</strong> Free Goodie Bag + Semua 7 Voucher Brand.</p>
              <p>• <strong>Pendaftar ke 6–25 (Approved):</strong> 6 Voucher Brand Partner (kecuali Back2eras).</p>
            </div>
          </div>
        `,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Lihat Halaman Voucher",
        cancelButtonText: "Tutup",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#13bbad",
        cancelButtonColor: "#555",
      });

      if (swalRes.isConfirmed) {
        router.push("/voucher");
      }
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan pada server.";
      Swal.fire({
        title: "Gagal Mendaftar",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatSchedule = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* HERO SECTION */}
        <div className="text-center mb-8">
          <h1 className="font-anton text-4xl md:text-6xl text-[#0fdff8] uppercase tracking-wider drop-shadow-[3px_3px_0px_#ff1493]">
            BACK2ERAS Talkshow
          </h1>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Pilih sesi talkshow inspiratif bersama para ikon skena thrift &amp; budaya retro di BACK2ERAS 2026. Kuota terbatas hanya <strong className="text-[#fadf29]">25 peserta per sesi</strong>!
          </p>
        </div>

        {/* BANNER BENEFIT VOUCHER TALKSHOW */}
        {/* <div className="bg-black border-2 border-dashed border-[#fadf29] rounded-xl p-5 mb-12 shadow-[4px_4px_0px_#ff1493]">
          <p className="font-anton text-lg text-[#fadf29] uppercase tracking-wider mb-2">
            🎁 Benefit Voucher Peserta Talkshow (Maks. 25 Orang / Sesi)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-200">
            <div className="bg-gray-900/90 border border-[#0fdff8]/40 rounded-lg p-3">
              <p className="font-bold text-[#0fdff8] uppercase mb-1">Pendaftar ke 1–5</p>
              <p>Berhak klaim <strong>Voucher Free Goodie Bag</strong> + <strong>semua 7 voucher brand</strong> (termasuk Back2eras).</p>
            </div>
            <div className="bg-gray-900/90 border border-[#13bbad]/40 rounded-lg p-3">
              <p className="font-bold text-[#13bbad] uppercase mb-1">Pendaftar ke 6–25</p>
              <p>Berhak klaim <strong>6 voucher brand partner</strong> (Solher, Gycora, Glamoire, WDP, Kecilung, Malaijia) tanpa Back2eras.</p>
            </div>
            <div className="bg-gray-900/90 border border-[#ff1493]/40 rounded-lg p-3">
              <p className="font-bold text-[#ff1493] uppercase mb-1">Syarat Aktivasi</p>
              <p>Akses klaim voucher otomatis terbuka di halaman <strong>Voucher</strong> setelah pendaftaran Anda <strong>disetujui (Accept)</strong> oleh admin.</p>
            </div>
          </div>
        </div> */}

        {/* DAFTAR TALKSHOW */}
        <section>
          <h2 className="font-anton text-2xl md:text-3xl text-[#fadf29] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
            Official Talkshow Lineup
          </h2>

          {loadingList ? (
            <p className="text-[#0fdff8] font-anton text-xl animate-pulse">Loading Talkshows...</p>
          ) : talkshows.length === 0 ? (
            <div className="bg-black/60 border-2 border-[#13bbad] rounded-xl p-10 text-center text-gray-300">
              Jadwal talkshow belum tersedia saat ini. Nantikan pembaruan dari tim BACK2ERAS!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talkshows.map((item) => {
                const maxSlot = item.max_participants ?? 25;
                const activeCount = item.active_registrations_count ?? 0;
                const remaining = item.remaining_slots ?? Math.max(0, maxSlot - activeCount);
                const isFull = item.is_full ?? activeCount >= maxSlot;
                const myStatus = item.my_registration_status ?? null;
                const myRank = item.my_approved_rank ?? null;

                return (
                  <div
                    key={item.id}
                    className="bg-black border-2 border-[#0fdff8] rounded-xl overflow-hidden shadow-[4px_4px_0px_#ff1493] flex flex-col"
                  >
                    <div className="relative h-60 w-full bg-gray-900 overflow-hidden">
                      <img
                        src={item.poster_url}
                        alt={item.theme}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />

                      {/* Badge Status Pendaftaran User (Kiri Atas) */}
                      {myStatus && (
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full font-anton text-xs uppercase tracking-wider shadow ${
                            myStatus === "approved"
                              ? "bg-green-600 text-white"
                              : myStatus === "rejected"
                              ? "bg-red-600 text-white"
                              : "bg-[#fadf29] text-black"
                          }`}
                        >
                          {myStatus === "approved"
                            ? `✓ Approved${myRank ? ` #${myRank}` : ""}`
                            : myStatus === "rejected"
                            ? "✕ Ditolak"
                            : "⏳ Pending"}
                        </span>
                      )}

                      {/* Badge Sisa Kuota (Kanan Atas) */}
                      <span
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full font-anton text-xs uppercase tracking-wider shadow ${
                          isFull
                            ? "bg-red-600 text-white"
                            : "bg-black/85 text-[#fadf29] border border-[#fadf29]"
                        }`}
                      >
                        {isFull ? "KUOTA PENUH (25/25)" : `Sisa ${remaining}/${maxSlot} Kursi`}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#ff1493] text-white font-anton text-xs tracking-wider uppercase rounded mb-3">
                          {formatSchedule(item.schedule)} WIB
                        </span>
                        <h3 className="font-anton text-2xl text-[#fadf29] uppercase leading-snug mb-3">
                          {item.theme}
                        </h3>
                      </div>

                      <div>
                        <div className="pt-3 border-t border-gray-800 mb-5">
                          <p className="font-bold text-white text-base">{item.speaker_name}</p>
                          <p className="text-xs text-[#0fdff8] uppercase tracking-wider">{item.icon}</p>
                        </div>

                        {myStatus === "approved" ? (
                          <div className="space-y-2">
                            <div className="w-full py-2.5 px-3 bg-green-950/70 border border-green-400 text-green-300 text-center text-xs font-bold uppercase rounded">
                              ✓ Terdaftar (Approved{myRank ? ` — Urutan #${myRank}` : ""})
                            </div>
                            <Link
                              href="/voucher"
                              className="block w-full py-2.5 bg-[#fadf29] hover:bg-yellow-300 text-black text-center font-anton text-base uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] transition-colors"
                            >
                              🎟️ Klaim Voucher Sekarang
                            </Link>
                          </div>
                        ) : myStatus === "pending" ? (
                          <button
                            type="button"
                            disabled
                            className="w-full py-3 bg-yellow-900/40 border border-[#fadf29] text-[#fadf29] font-anton text-base uppercase tracking-widest rounded cursor-not-allowed"
                          >
                            ⏳ Menunggu Approval Admin
                          </button>
                        ) : myStatus === "rejected" ? (
                          <button
                            type="button"
                            disabled
                            className="w-full py-3 bg-red-950/60 border border-red-500 text-red-300 font-anton text-base uppercase tracking-widest rounded cursor-not-allowed"
                          >
                            ✕ Pendaftaran Ditolak
                          </button>
                        ) : (
                          <button
                            onClick={() => openRegisterModal(item)}
                            disabled={isFull}
                            className={`w-full py-3 font-anton text-lg uppercase tracking-widest rounded transition-transform ${
                              isFull
                                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                : "bg-[#ff1493] hover:bg-[#e01082] text-white shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 cursor-pointer"
                            }`}
                          >
                            {isFull ? "Kuota Penuh (25/25)" : "Daftar Talkshow"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* POP-UP MODAL PENDAFTARAN PESERTA */}
      {selectedTalkshow && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeRegisterModal}
        >
          <div
            className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-5 border-b border-gray-800 pb-4">
              <div>
                <span className="text-xs font-anton uppercase tracking-widest text-[#ff1493]">
                  Pendaftaran Peserta Talkshow
                </span>
                <h2 className="font-anton text-2xl text-[#fadf29] uppercase mt-1 leading-tight">
                  {selectedTalkshow.theme}
                </h2>
                <p className="text-xs text-[#0fdff8] mt-1">
                  {selectedTalkshow.speaker_name} ({selectedTalkshow.icon}) &bull;{" "}
                  {formatSchedule(selectedTalkshow.schedule)} WIB
                </p>
              </div>
              <button
                onClick={closeRegisterModal}
                className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
                  Email Aktif *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  readOnly={Boolean(loggedUser)}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none read-only:opacity-70"
                />
              </div>

              {/* Password wajib diisi jika belum login (untuk akses akun ke halaman /voucher) */}
              {!loggedUser && (
                <div>
                  <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
                    Buat Password Akun (Untuk Klaim Voucher) *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimal 6 karakter"
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
                  Nomor WhatsApp / HP *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#fadf29] uppercase tracking-wider mb-1.5">
                  Instansi / Komunitas (Opsional)
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Contoh: Mahasiswa / Brand Thrift / Umum"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  type="button"
                  onClick={closeRegisterModal}
                  className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-base uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] cursor-pointer"
                >
                  {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}