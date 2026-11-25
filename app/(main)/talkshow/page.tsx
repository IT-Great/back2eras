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

"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface Talkshow {
  id: number;
  poster: string;
  poster_url: string;
  speaker_name: string;
  icon: string;
  theme: string;
  schedule: string;
  approved_participants_count?: number;
}

const API_BASE = "https://back.back2eras.com/api";

export default function TalkshowPage() {
  const [talkshows, setTalkshows] = useState<Talkshow[]>([]);
  const [loadingList, setLoadingList] = useState(true);

  // State Modal Pendaftaran Peserta
  const [selectedTalkshow, setSelectedTalkshow] = useState<Talkshow | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchTalkshows = async () => {
    try {
      const res = await fetch(`${API_BASE}/talkshows`, {
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        setTalkshows(data);
      }
    } catch (error) {
      console.error("Failed to fetch talkshows:", error);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchTalkshows();
  }, []);

  const openRegisterModal = (talkshow: Talkshow) => {
    setSelectedTalkshow(talkshow);
    setName("");
    setEmail("");
    setPhone("");
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
      const res = await fetch(`${API_BASE}/talkshows/${selectedTalkshow.id}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          institution,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Gagal mengirim pendaftaran.");
      }

      setSelectedTalkshow(null);

      Swal.fire({
        title: "Pendaftaran Berhasil!",
        text: `Data diri Anda untuk sesi "${selectedTalkshow.theme}" telah terkirim dan menunggu persetujuan admin.`,
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#13bbad",
      });
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
        <div className="text-center mb-12">
          <h1 className="font-anton text-4xl md:text-6xl text-[#0fdff8] uppercase tracking-wider drop-shadow-[3px_3px_0px_#ff1493]">
            BACK2ERAS Talkshow
          </h1>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Pilih sesi talkshow inspiratif bersama para ikon skena thrift &amp; budaya retro di BACK2ERAS 2026, lalu klik tombol daftar untuk mengamankan kursi Anda.
          </p>
        </div>

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
              {talkshows.map((item) => (
                <div
                  key={item.id}
                  className="bg-black border-2 border-[#0fdff8] rounded-xl overflow-hidden shadow-[4px_4px_0px_#ff1493] flex flex-col"
                >
                  <div className="h-60 w-full bg-gray-900 overflow-hidden">
                    <img
                      src={item.poster_url}
                      alt={item.theme}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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

                      <button
                        onClick={() => openRegisterModal(item)}
                        className="w-full py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton text-lg uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] transition-transform active:translate-y-0.5 cursor-pointer"
                      >
                        Daftar Talkshow
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

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