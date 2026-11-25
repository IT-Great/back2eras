/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface LoggedUser {
  id: number;
  name: string;
  email: string;
  role?: string;
  can_claim_voucher?: boolean;
}

const API_BASE = "https://back.back2eras.com/api";

export default function KolRegisterPage() {
  const router = useRouter();

  const [loggedInUser, setLoggedInUser] = useState<LoggedUser | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Form States
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [icon, setIcon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const checkAuth = () => {
    const token = localStorage.getItem("visitor_token");
    const userStr = localStorage.getItem("visitor_user");
    if (token && userStr) {
      try {
        setLoggedInUser(JSON.parse(userStr));
      } catch {
        setLoggedInUser(null);
      }
    } else {
      setLoggedInUser(null);
    }
    setCheckingAuth(false);
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener("visitor-auth-changed", checkAuth);
    return () => window.removeEventListener("visitor-auth-changed", checkAuth);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/kols`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          address,
          icon,
          email,
          password,
          whatsapp,
          social_media_link: socialMediaLink.trim() || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal mendaftar sebagai KOL.");
      }

      // Auto-login user KOL
      localStorage.setItem("visitor_token", data.token);
      localStorage.setItem("visitor_user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("visitor-auth-changed"));

      const canClaim = Boolean(data.user.can_claim_voucher);

      await Swal.fire({
        title: "Pendaftaran KOL Berhasil!",
        html: `
          <div class="text-left text-[#eaddce] font-roboto space-y-3 text-sm">
            <p>Selamat bergabung di BACK2ERAS 2026, <strong class="text-white">${data.user.name}</strong>!</p>
            ${
              canClaim
                ? `<div class="bg-green-950/70 border border-green-400 p-3 rounded text-green-200">
                    ✓ Link media sosial terverifikasi. Anda langsung dapat mengklaim voucher dari 7 brand partner!
                  </div>`
                : `<div class="bg-yellow-950/70 border border-[#fadf29] p-3 rounded text-[#fadf29]">
                    ⚠️ Anda belum mengisi Link Media Sosial. Anda belum dapat mengklaim voucher sebelum melengkapinya melalui menu <strong>Edit Profil</strong>.
                  </div>`
            }
          </div>
        `,
        icon: "success",
        background: "#144333",
        color: "#0fdff8",
        confirmButtonColor: "#ff1493",
        confirmButtonText: canClaim ? "Klaim Voucher Sekarang →" : "Lihat Halaman Voucher →",
      });

      router.push("/voucher");
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gagal terhubung ke server.";
      Swal.fire({
        title: "Pendaftaran Gagal",
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

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        {checkingAuth ? (
          <div className="text-center py-24 text-[#0fdff8] font-anton text-2xl animate-pulse">
            Checking Account Status...
          </div>
        ) : loggedInUser ? (
          <div className="max-w-2xl mx-auto bg-[#144333]/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border-4 border-[#0fdff8] shadow-[10px_10px_0px_#ff1493] text-center">
            <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase tracking-wider mb-3">
              Akun Anda Sudah Aktif!
            </h1>
            <p className="text-[#eaddce]/90 text-base md:text-lg mb-6">
              Halo <strong className="text-white">{loggedInUser.name}</strong> ({loggedInUser.email}), Anda sudah masuk ke dalam akun BACK2ERAS 2026.
            </p>

            {loggedInUser.role === "kol" && !loggedInUser.can_claim_voucher && (
              <div className="bg-black/70 border-2 border-dashed border-[#fadf29] p-4 rounded-xl mb-6 text-sm text-[#fadf29]">
                ⚠️ Anda belum mengisi Link Media Sosial. Klik ikon profil di pojok kanan atas lalu pilih <strong>Edit Profil</strong> untuk menambahkan link media sosial agar bisa mengklaim voucher.
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/voucher"
                className="px-8 py-4 bg-[#fadf29] hover:bg-yellow-300 text-black font-anton text-xl uppercase tracking-widest rounded shadow-[5px_5px_0px_#0fdff8] transition-transform active:translate-y-0.5"
              >
                🎟️ Ke Halaman Voucher
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-black hover:bg-gray-900 border-2 border-[#13bbad] text-[#eaddce] font-anton text-xl uppercase tracking-widest rounded transition-colors"
              >
                Kembali ke Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* KOLOM KIRI */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8">
              <div>
                <p className="font-roboto font-bold tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff1493] rounded-full animate-pulse"></span>
                  Key Opinion Leader • Creator Program
                </p>
                <h1 className="font-anton text-5xl md:text-6xl text-[#0fdff8] uppercase drop-shadow-[3px_3px_0px_#144333] leading-tight mb-4">
                  Join As <br />
                  <span className="text-[#ff1493]">BACK2ERAS</span> <br />
                  Official KOL.
                </h1>
              </div>

              <p className="text-base md:text-lg text-[#eaddce]/90 leading-relaxed font-light">
                Daftarkan diri Anda sebagai KOL resmi <span className="font-anton tracking-wider text-[#0fdff8]">BACK2ERAS 2026</span> untuk berkolaborasi, meliput keseruan festival thrift 80-an, dan menikmati akses voucher eksklusif dari 7 brand partner.
              </p>

              {/* Kotak Ketentuan Voucher KOL */}
              <div className="bg-[#144333]/80 border-2 border-dashed border-[#fadf29] p-6 rounded-lg relative shadow-[6px_6px_0px_rgba(250,223,41,0.2)]">
                <div className="absolute -top-4 left-6 bg-[#fadf29] text-black font-anton uppercase px-4 py-1 tracking-widest text-sm transform -rotate-2">
                  Ketentuan Voucher KOL
                </div>
                <ul className="text-[#eaddce] mt-2 space-y-2 text-sm leading-relaxed">
                  <li>
                    ✅ <strong className="text-[#0fdff8]">Isi Link Media Sosial:</strong> Langsung mendapatkan akses klaim kode unik voucher dari 7 brand partner.
                  </li>
                  <li>
                    ⚠️ <strong className="text-[#fadf29]">Tanpa Link Media Sosial:</strong> Pendaftaran akun tetap berhasil, namun fitur klaim voucher terkunci sampai link media sosial dilengkapi.
                  </li>
                </ul>
              </div>
            </div>

            {/* KOLOM KANAN: FORMULIR KOL */}
            <div className="w-full lg:w-7/12">
              <div className="bg-[#144333]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border-4 border-[#0fdff8] shadow-[10px_10px_0px_#ff1493]">
                <div className="text-center mb-8">
                  <h2 className="font-anton text-3xl text-white uppercase tracking-widest">
                    KOL Registration
                  </h2>
                  <p className="text-sm text-[#eaddce]/70 mt-2">
                    Lengkapi data diri Anda di bawah ini untuk membuat akun KOL.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Nama */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kolName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Nama Lengkap <span className="text-[#ff1493]">*</span>
                    </label>
                    <input
                      type="text"
                      id="kolName"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama lengkap Anda"
                      className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                    />
                  </div>

                  {/* Alamat */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kolAddress" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Alamat <span className="text-[#ff1493]">*</span>
                    </label>
                    <textarea
                      id="kolAddress"
                      rows={2}
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Masukkan alamat lengkap / domisili Anda"
                      className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                    />
                  </div>

                  {/* Icon */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kolIcon" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Icon / Niche Konten <span className="text-[#ff1493]">*</span>
                    </label>
                    <input
                      type="text"
                      id="kolIcon"
                      required
                      value={icon}
                      onChange={(e) => setIcon(e.target.value)}
                      placeholder="Contoh: Fashion Enthusiast / Food Blogger / Lifestyle Creator"
                      className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                    />
                  </div>

                  {/* Email & Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="kolEmail" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                        Email <span className="text-[#ff1493]">*</span>
                      </label>
                      <input
                        type="email"
                        id="kolEmail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="kol@example.com"
                        className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="kolPassword" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                        Password <span className="text-[#ff1493]">*</span>
                      </label>
                      <input
                        type="password"
                        id="kolPassword"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimal 6 karakter"
                        className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kolWa" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Nomor WhatsApp <span className="text-[#ff1493]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="kolWa"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+62 812 3456 7890"
                      className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-600"
                    />
                  </div>

                  {/* Link Media Sosial (Opsional) */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="kolSocial" className="font-anton tracking-wide text-[#fadf29] uppercase text-sm">
                      Link Media Sosial <span className="text-gray-400 lowercase">(opsional — wajib diisi jika ingin klaim voucher)</span>
                    </label>
                    <input
                      type="text"
                      id="kolSocial"
                      value={socialMediaLink}
                      onChange={(e) => setSocialMediaLink(e.target.value)}
                      placeholder="https://www.instagram.com/username atau https://www.tiktok.com/@username"
                      className="bg-black/60 border-2 border-[#fadf29] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded placeholder:text-gray-500"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-4 w-full py-4 bg-[#fadf29] disabled:opacity-50 text-black font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
                  >
                    {submitting ? "Memproses..." : "Daftar Sebagai KOL"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}