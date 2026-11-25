/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import Swal from "sweetalert2";

// interface VisitorUser {
//   id: number;
//   name: string;
//   email: string;
//   user_number: number;
// }

// interface BrandVoucher {
//   slug: string;
//   name: string;
//   rule_summary: string;
//   claimed: boolean;
//   code: string | null;
//   is_used: boolean;
//   claimed_at: string | null;
// }

// const API_BASE = "https://back.back2eras.com/api";

// // Urutan kerangka 7 Brand (fallback tampilan awal sebelum API selesai memuat)
// const DEFAULT_BRANDS: BrandVoucher[] = [
//   { slug: "back2eras", name: "Back2eras", rule_summary: "Berlaku 1x klaim per akun untuk promo resmi BACK2ERAS 2026.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "solher", name: "Solher", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Solher.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "gycora", name: "Gycora", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Gycora.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "glamoire", name: "Glamoire", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Glamoire.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "wdp", name: "WDP", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan WDP.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "kecilung", name: "Kecilung", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Kecilung.", claimed: false, code: null, is_used: false, claimed_at: null },
//   { slug: "malaijia", name: "Malaijia", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Malaijia.", claimed: false, code: null, is_used: false, claimed_at: null },
// ];

// export default function VoucherPage() {
//   const [user, setUser] = useState<VisitorUser | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [checkingAuth, setCheckingAuth] = useState(true);

//   const [brands, setBrands] = useState<BrandVoucher[]>(DEFAULT_BRANDS);
//   const [loadingVouchers, setLoadingVouchers] = useState(false);
//   const [claimingSlug, setClaimingSlug] = useState<string | null>(null);

//   const fetchVouchersAndMe = useCallback(async () => {
//     const token = localStorage.getItem("visitor_token");
//     if (!token) {
//       setIsAuthenticated(false);
//       setUser(null);
//       setCheckingAuth(false);
//       return;
//     }

//     setLoadingVouchers(true);
//     try {
//       const [meRes, voucherRes] = await Promise.all([
//         fetch(`${API_BASE}/visitor/me`, {
//           headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
//         }),
//         fetch(`${API_BASE}/vouchers`, {
//           headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
//         }),
//       ]);

//       if (!meRes.ok) {
//         // Token tidak valid / expired
//         localStorage.removeItem("visitor_token");
//         localStorage.removeItem("visitor_user");
//         window.dispatchEvent(new Event("visitor-auth-changed"));
//         setIsAuthenticated(false);
//         setUser(null);
//         return;
//       }

//       const meData = await meRes.json();
//       setUser(meData.user);
//       localStorage.setItem("visitor_user", JSON.stringify(meData.user));
//       setIsAuthenticated(true);

//       if (voucherRes.ok) {
//         const voucherData = await voucherRes.json();
//         setBrands(voucherData.brands);
//       }
//     } catch (error) {
//       console.error("Failed loading voucher page:", error);
//     } finally {
//       setLoadingVouchers(false);
//       setCheckingAuth(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchVouchersAndMe();
//     window.addEventListener("visitor-auth-changed", fetchVouchersAndMe);
//     return () => window.removeEventListener("visitor-auth-changed", fetchVouchersAndMe);
//   }, [fetchVouchersAndMe]);

//   const handleClaim = async (brand: BrandVoucher) => {
//     const token = localStorage.getItem("visitor_token");
//     if (!token) return;

//     setClaimingSlug(brand.slug);
//     try {
//       const res = await fetch(`${API_BASE}/vouchers/claim`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ brand_slug: brand.slug }),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message || "Gagal mengklaim voucher.");
//       }

//       await fetchVouchersAndMe();

//       Swal.fire({
//         title: `Voucher ${brand.name} Diklaim!`,
//         html: `
//           <div class="text-[#eaddce] font-roboto">
//             <p class="mb-3 text-sm">Kode unik Anda (hanya berlaku 1x pakai):</p>
//             <div class="bg-black border-2 border-[#0fdff8] py-3 px-4 rounded font-anton text-2xl text-[#fadf29] tracking-widest">
//               ${data.voucher.code}
//             </div>
//           </div>
//         `,
//         icon: "success",
//         background: "#144333",
//         color: "#0fdff8",
//         confirmButtonColor: "#ff1493",
//         confirmButtonText: "Mantap!",
//       });
//     } catch (error: unknown) {
//       const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
//       Swal.fire({
//         title: "Klaim Gagal",
//         text: msg,
//         icon: "error",
//         background: "#144333",
//         color: "#eaddce",
//         confirmButtonColor: "#ff1493",
//       });
//     } finally {
//       setClaimingSlug(null);
//     }
//   };

//   const handleCopyCode = (code: string, brandName: string) => {
//     navigator.clipboard.writeText(code);
//     Swal.fire({
//       title: "Kode Disalin!",
//       text: `Kode ${brandName} (${code}) berhasil disalin ke clipboard.`,
//       icon: "success",
//       background: "#144333",
//       color: "#eaddce",
//       timer: 1300,
//       showConfirmButton: false,
//     });
//   };

//   if (checkingAuth) {
//     return (
//       <div className="min-h-screen bg-[#000000] flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">
//         Verifying Access...
//       </div>
//     );
//   }

//   // PROTEKSI: Jika belum login
//   if (!isAuthenticated || !user) {
//     return (
//       <div className="min-h-screen bg-[#000000] text-[#eaddce] font-roboto flex items-center justify-center px-6 py-20">
//         <div className="max-w-lg w-full bg-[#144333]/60 border-4 border-[#ff1493] rounded-2xl p-8 md:p-10 text-center shadow-[8px_8px_0px_#0fdff8]">
//           <div className="text-5xl mb-4">🔒</div>
//           <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase tracking-wider mb-3">
//             Login Required
//           </h1>
//           <p className="text-gray-300 text-sm md:text-base mb-8">
//             Halaman Klaim Voucher hanya dapat diakses oleh pengunjung yang sudah terdaftar dan login. Silakan daftar atau klik ikon profil di kanan atas untuk login.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               href="/register"
//               className="px-6 py-3 bg-[#fadf29] hover:bg-yellow-300 text-black font-anton text-lg uppercase tracking-widest rounded shadow-[4px_4px_0px_#0fdff8]"
//             >
//               Register Sekarang
//             </Link>
//             <Link
//               href="/"
//               className="px-6 py-3 bg-black border-2 border-[#13bbad] text-white font-anton text-lg uppercase tracking-widest rounded hover:bg-gray-900"
//             >
//               Ke Halaman Utama
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
//       <div className="max-w-5xl mx-auto">
//         {/* BANNER IDENTITAS & URUTAN USER */}
//         <div className="bg-black border-4 border-[#0fdff8] rounded-2xl p-6 md:p-8 mb-10 shadow-[6px_6px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-6">
//           <div>
//             <p className="text-xs font-anton uppercase tracking-widest text-[#0fdff8] mb-1">
//               BACK2ERAS 2026 Member Pass
//             </p>
//             <h1 className="font-anton text-3xl md:text-5xl text-[#fadf29] uppercase tracking-wider">
//               Claim Brand Vouchers
//             </h1>
//             <p className="text-gray-300 text-sm mt-2">
//               Halo <strong className="text-white">{user.name}</strong>! Pilih brand di bawah ini untuk mengklaim kode unik Anda. Setiap kode berbeda tiap user dan hanya berlaku 1x pakai.
//             </p>
//           </div>

//           <div className="shrink-0 bg-[#144333] border-2 border-[#fadf29] rounded-xl px-6 py-4 text-center shadow-[4px_4px_0px_#0fdff8]">
//             <p className="text-xs uppercase tracking-widest text-[#eaddce]">Status Pendaftar</p>
//             <p className="font-anton text-3xl text-[#fadf29] uppercase mt-1">
//               Anda User ke-{user.user_number}
//             </p>
//           </div>
//         </div>

//         {/* KERANGKA 7 TOMBOL BRAND BERURUTAN */}
//         {loadingVouchers ? (
//           <p className="text-center text-[#0fdff8] font-anton text-xl animate-pulse py-10">
//             Memuat daftar voucher...
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {brands.map((brand, idx) => (
//               <div
//                 key={brand.slug}
//                 className="bg-black border-2 border-[#13bbad] rounded-xl p-6 shadow-[4px_4px_0px_#ff1493] flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="px-2.5 py-0.5 bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton text-xs rounded">
//                       #{idx + 1}
//                     </span>
//                     <span
//                       className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${
//                         brand.claimed
//                           ? "bg-green-600/30 text-green-300 border border-green-400"
//                           : "bg-yellow-600/20 text-[#fadf29] border border-[#fadf29]"
//                       }`}
//                     >
//                       {brand.claimed ? "Claimed" : "Available"}
//                     </span>
//                   </div>

//                   <h2 className="font-anton text-3xl text-white uppercase tracking-wide mb-2">
//                     {brand.name}
//                   </h2>
//                   <p className="text-xs text-gray-400 leading-relaxed mb-6">
//                     {brand.rule_summary}
//                   </p>
//                 </div>

//                 {brand.claimed && brand.code ? (
//                   <div className="space-y-2">
//                     <div className="bg-gray-900 border-2 border-dashed border-[#0fdff8] rounded-lg px-4 py-3 text-center">
//                       <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
//                         Kode Unik Anda
//                       </p>
//                       <p className="font-anton text-xl text-[#fadf29] tracking-widest">
//                         {brand.code}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => handleCopyCode(brand.code!, brand.name)}
//                       className="w-full py-2.5 bg-[#13bbad] hover:bg-teal-400 text-black font-anton text-sm uppercase tracking-widest rounded cursor-pointer transition-colors"
//                     >
//                       Salin Kode
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={() => handleClaim(brand)}
//                     disabled={claimingSlug === brand.slug}
//                     className="w-full py-3 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-lg uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 transition-all cursor-pointer"
//                   >
//                     {claimingSlug === brand.slug ? "Mengklaim..." : `Klaim ${brand.name}`}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

interface VisitorUser {
  id: number;
  name: string;
  email: string;
  user_number: number;
}

interface BrandVoucher {
  slug: string;
  name: string;
  prefix: string;
  category: "event" | "dine_in";
  location: string;
  phone: string | null;
  instagram: string | null;
  validity_label: string;
  rule_summary: string;
  terms: string[];
  max_quota: number;
  remaining_quota: number;
  claimed: boolean;
  code: string | null;
  is_used: boolean;
  is_expired: boolean;
  claimed_at: string | null;
  expires_at: string | null;
}

const API_BASE = "https://back.back2eras.com/api";

const formatDateID = (isoString: string | null): string => {
  if (!isoString) return "-";
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default function VoucherPage() {
  const [user, setUser] = useState<VisitorUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [brands, setBrands] = useState<BrandVoucher[]>([]);
  const [loadingVouchers, setLoadingVouchers] = useState(false);
  const [claimingSlug, setClaimingSlug] = useState<string | null>(null);

  // Modal Detail E-Voucher & Syarat Ketentuan
  const [detailBrand, setDetailBrand] = useState<BrandVoucher | null>(null);

  const [canClaimVoucher, setCanClaimVoucher] = useState(true);
  const [claimBlockReason, setClaimBlockReason] = useState<string | null>(null);

  const fetchVouchersAndMe = useCallback(async () => {
    const token = localStorage.getItem("visitor_token");
    if (!token) {
      setIsAuthenticated(false);
      setUser(null);
      setCheckingAuth(false);
      return;
    }

    setLoadingVouchers(true);
    try {
      const [meRes, voucherRes] = await Promise.all([
        fetch(`${API_BASE}/visitor/me`, {
          headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE}/vouchers`, {
          headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!meRes.ok) {
        localStorage.removeItem("visitor_token");
        localStorage.removeItem("visitor_user");
        window.dispatchEvent(new Event("visitor-auth-changed"));
        setIsAuthenticated(false);
        setUser(null);
        return;
      }

      const meData = await meRes.json();
      setUser(meData.user);
      localStorage.setItem("visitor_user", JSON.stringify(meData.user));
      setIsAuthenticated(true);

      if (voucherRes.ok) {
        const voucherData = await voucherRes.json();
        setBrands(voucherData.brands);
        setCanClaimVoucher(voucherData.can_claim_voucher ?? true);
        setClaimBlockReason(voucherData.claim_block_reason ?? null);
        setBrands(voucherData.brands);
      }
    } catch (error) {
      console.error("Failed loading voucher page:", error);
    } finally {
      setLoadingVouchers(false);
      setCheckingAuth(false);
    }
  }, []);

  useEffect(() => {
    fetchVouchersAndMe();
    window.addEventListener("visitor-auth-changed", fetchVouchersAndMe);
    return () => window.removeEventListener("visitor-auth-changed", fetchVouchersAndMe);
  }, [fetchVouchersAndMe]);

  const handleClaim = async (brand: BrandVoucher) => {
    const token = localStorage.getItem("visitor_token");
    if (!token) return;

    setClaimingSlug(brand.slug);
    try {
      const res = await fetch(`${API_BASE}/vouchers/claim`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ brand_slug: brand.slug }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Gagal mengklaim voucher.");
      }

      await fetchVouchersAndMe();

      const issuedText = formatDateID(data.voucher.created_at);
      const expiredText = formatDateID(data.voucher.expires_at);

      Swal.fire({
        title: `Voucher ${brand.name} Diklaim!`,
        html: `
          <div class="text-[#eaddce] font-roboto text-left">
            <p class="mb-3 text-sm text-center">Kode unik Anda (hanya berlaku 1x pakai):</p>
            <div class="bg-black border-2 border-[#0fdff8] py-3 px-4 rounded font-anton text-3xl text-[#fadf29] tracking-widest text-center mb-4">
              ${data.voucher.code}
            </div>
            <div class="bg-black/60 border border-gray-700 rounded p-3 text-xs space-y-1">
              <p><span class="text-gray-400">Tanggal Terbit:</span> <strong class="text-white">${issuedText}</strong></p>
              <p><span class="text-gray-400">Berlaku s/d:</span> <strong class="text-[#0fdff8]">${expiredText}</strong></p>
              <p><span class="text-gray-400">Lokasi:</span> <strong class="text-white">${brand.location}</strong></p>
            </div>
          </div>
        `,
        icon: "success",
        background: "#144333",
        color: "#0fdff8",
        confirmButtonColor: "#ff1493",
        confirmButtonText: "Mantap!",
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
      Swal.fire({
        title: "Klaim Gagal",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setClaimingSlug(null);
    }
  };

  const handleCopyCode = (code: string, brandName: string) => {
    navigator.clipboard.writeText(code);
    Swal.fire({
      title: "Kode Disalin!",
      text: `Kode ${brandName} (${code}) berhasil disalin ke clipboard.`,
      icon: "success",
      background: "#144333",
      color: "#eaddce",
      timer: 1300,
      showConfirmButton: false,
    });
  };

  const getStatusBadge = (brand: BrandVoucher) => {
    if (brand.is_used) {
      return { label: "Used", className: "bg-gray-700/60 text-gray-300 border border-gray-500" };
    }
    if (brand.claimed && brand.is_expired) {
      return { label: "Expired", className: "bg-red-700/40 text-red-300 border border-red-400" };
    }
    if (brand.claimed) {
      return { label: "Claimed", className: "bg-green-600/30 text-green-300 border border-green-400" };
    }
    if (brand.is_expired) {
      return { label: "Event Ended", className: "bg-red-700/40 text-red-300 border border-red-400" };
    }
    if (brand.remaining_quota <= 0) {
      return { label: "Kuota Habis", className: "bg-orange-700/40 text-orange-300 border border-orange-400" };
    }
    return { label: "Available", className: "bg-yellow-600/20 text-[#fadf29] border border-[#fadf29]" };
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">
        Verifying Access...
      </div>
    );
  }

  // PROTEKSI: Jika belum login
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-[#000000] text-[#eaddce] font-roboto flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full bg-[#144333]/60 border-4 border-[#ff1493] rounded-2xl p-8 md:p-10 text-center shadow-[8px_8px_0px_#0fdff8]">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase tracking-wider mb-3">
            Login Required
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            Halaman Klaim Voucher hanya dapat diakses oleh pengunjung yang sudah terdaftar dan login. Silakan daftar atau klik ikon profil di kanan atas untuk login.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-[#fadf29] hover:bg-yellow-300 text-black font-anton text-lg uppercase tracking-widest rounded shadow-[4px_4px_0px_#0fdff8]"
            >
              Register Sekarang
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-black border-2 border-[#13bbad] text-white font-anton text-lg uppercase tracking-widest rounded hover:bg-gray-900"
            >
              Ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* BANNER IDENTITAS & URUTAN USER */}
        <div className="bg-black border-4 border-[#0fdff8] rounded-2xl p-6 md:p-8 mb-10 shadow-[6px_6px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-anton uppercase tracking-widest text-[#0fdff8] mb-1">
              BACK2ERAS 2026 Member Pass
            </p>
            <h1 className="font-anton text-3xl md:text-5xl text-[#fadf29] uppercase tracking-wider">
              Claim Brand Vouchers
            </h1>
            <p className="text-gray-300 text-sm mt-2 max-w-2xl">
              Halo <strong className="text-white">{user.name}</strong>! Pilih brand di bawah ini untuk mengklaim kode unik Anda (format 3 huruf + 001–999). Klik{" "}
              <span className="text-[#0fdff8] font-bold">Syarat &amp; Ketentuan</span> pada tiap kartu untuk melihat aturan lengkap masing-masing brand.
            </p>
          </div>

          {/* <div className="shrink-0 bg-[#144333] border-2 border-[#fadf29] rounded-xl px-6 py-4 text-center shadow-[4px_4px_0px_#0fdff8]">
            <p className="text-xs uppercase tracking-widest text-[#eaddce]">Status Pendaftar</p>
            <p className="font-anton text-3xl text-[#fadf29] uppercase mt-1">
              Anda User ke-{user.user_number}
            </p>
          </div> */}

          <div className="shrink-0 bg-[#144333] border-2 border-[#fadf29] rounded-xl px-6 py-4 text-center md:text-right shadow-[4px_4px_0px_#0fdff8] max-w-full md:max-w-xs">
            <p className="text-xs uppercase tracking-widest text-[#0fdff8]">Akun Terdaftar</p>
            <p className="font-anton text-2xl text-[#fadf29] uppercase mt-1 truncate">
              {user.name}
            </p>
            <p className="text-xs text-[#eaddce] mt-0.5 truncate">
              {user.email}
            </p>
          </div>
        </div>

        {/* PERINGATAN KHUSUS KOL TANPA LINK MEDIA SOSIAL */}
        {/* {
        !canClaimVoucher
         && (
          <div className="bg-black border-2 border-[#fadf29] rounded-xl p-5 mb-8 shadow-[4px_4px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-anton text-lg text-[#fadf29] uppercase tracking-wider">
                  Klaim Voucher Terkunci untuk Akun KOL
                </p>
                <p className="text-sm text-gray-300 mt-0.5">
                  {claimBlockReason || "Akun KOL wajib mengisi Link Media Sosial terlebih dahulu agar dapat mengklaim voucher."} Klik ikon profil di pojok kanan atas lalu pilih <strong className="text-[#0fdff8]">Edit Profil</strong> untuk menambahkan link media sosial Anda.
                </p>
              </div>
            </div>
          </div>
        )} */}

        {/* PERINGATAN KLAIM VOUCHER TERKUNCI (KOL / TALKSHOW PENDING) */}
        {!canClaimVoucher && (
          <div className="bg-black border-2 border-[#fadf29] rounded-xl p-5 mb-8 shadow-[4px_4px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-anton text-lg text-[#fadf29] uppercase tracking-wider">
                  Akses Klaim Voucher Belum Aktif
                </p>
                <p className="text-sm text-gray-300 mt-0.5">
                  {claimBlockReason || "Akun Anda belum memenuhi syarat untuk mengklaim voucher."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 7 KARTU BRAND BERURUTAN */}
        {loadingVouchers ? (
          <p className="text-center text-[#0fdff8] font-anton text-xl animate-pulse py-10">
            Memuat daftar voucher...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, idx) => {
              const badge = getStatusBadge(brand);
              // const isClaimDisabled =
              //   claimingSlug === brand.slug || brand.is_expired || brand.remaining_quota <= 0;

              const isClaimDisabled =
                !canClaimVoucher ||
                claimingSlug === brand.slug ||
                brand.is_expired ||
                brand.remaining_quota <= 0;

              return (
                <div
                  key={brand.slug}
                  className="bg-black border-2 border-[#13bbad] rounded-xl p-6 shadow-[4px_4px_0px_#ff1493] flex flex-col justify-between"
                >
                  <div>
                    {/* Baris Atas: Nomor & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton text-xs rounded">
                          #{idx + 1}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400">
                          Sisa {brand.remaining_quota}/{brand.max_quota}
                        </span>
                      </div>
                      <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Nama Brand */}
                    <h2 className="font-anton text-3xl text-white uppercase tracking-wide mb-1">
                      {brand.name}
                    </h2>

                    {/* Masa Berlaku & Lokasi */}
                    <p className="text-xs font-bold text-[#0fdff8] mb-1">
                      🕒 {brand.validity_label}
                    </p>
                    <p className="text-xs text-gray-300 mb-3">
                      📍 {brand.location}
                    </p>

                    {/* Kontak / IG (Kecilung & Malaijia) */}
                    {(brand.phone || brand.instagram) && (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#fadf29] mb-3 bg-gray-900/80 px-3 py-1.5 rounded border border-gray-800">
                        {brand.phone && <span>📞 {brand.phone}</span>}
                        {brand.instagram && <span>📷 {brand.instagram}</span>}
                      </div>
                    )}

                    {/* Ringkasan Aturan */}
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {brand.rule_summary}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {brand.claimed && brand.code ? (
                      <>
                        <div className="bg-gray-900 border-2 border-dashed border-[#0fdff8] rounded-lg px-4 py-3 text-center">
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                            Kode Unik Anda
                          </p>
                          <p className="font-anton text-2xl text-[#fadf29] tracking-widest">
                            {brand.code}
                          </p>
                          <div className="mt-2 pt-2 border-t border-gray-800 flex justify-between text-[10px] text-gray-400">
                            <span>Terbit: {formatDateID(brand.claimed_at)}</span>
                            <span className="text-[#0fdff8]">
                              Exp: {formatDateID(brand.expires_at)}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleCopyCode(brand.code!, brand.name)}
                            className="py-2.5 bg-[#13bbad] hover:bg-teal-400 text-black font-anton text-xs uppercase tracking-widest rounded cursor-pointer transition-colors"
                          >
                            Salin Kode
                          </button>
                          <button
                            onClick={() => setDetailBrand(brand)}
                            className="py-2.5 bg-gray-900 hover:bg-gray-800 border border-[#fadf29] text-[#fadf29] font-anton text-xs uppercase tracking-widest rounded cursor-pointer transition-colors"
                          >
                            E-Voucher &amp; S&amp;K
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleClaim(brand)}
                          disabled={isClaimDisabled}
                          className="w-full py-3 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 disabled:cursor-not-allowed text-white font-anton text-lg uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 transition-all cursor-pointer"
                        >
                          {claimingSlug === brand.slug
                            ? "Mengklaim..."
                            : brand.is_expired
                            ? "Periode Berakhir"
                            : brand.remaining_quota <= 0
                            ? "Kuota Habis"
                            : `Klaim ${brand.name}`}
                        </button>

                        <button
                          onClick={() => setDetailBrand(brand)}
                          className="w-full py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-[#fadf29] text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors"
                        >
                          Lihat Syarat &amp; Ketentuan ({brand.terms.length} Poin)
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* MODAL DETAIL E-VOUCHER & SYARAT KETENTUAN */}
      {detailBrand && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setDetailBrand(null)}
        >
          <div
            className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex justify-between items-start gap-4 border-b border-gray-800 pb-4 mb-5">
              <div>
                <span className="text-xs font-anton uppercase tracking-widest text-[#ff1493]">
                  Official Digital Voucher
                </span>
                <h2 className="font-anton text-3xl text-[#fadf29] uppercase tracking-wider mt-0.5">
                  {detailBrand.name}
                </h2>
                <p className="text-xs text-gray-300 mt-1">📍 {detailBrand.location}</p>
                {(detailBrand.phone || detailBrand.instagram) && (
                  <p className="text-xs text-[#0fdff8] mt-1">
                    {detailBrand.phone && <span>📞 {detailBrand.phone}</span>}
                    {detailBrand.phone && detailBrand.instagram && <span> &bull; </span>}
                    {detailBrand.instagram && <span>📷 {detailBrand.instagram}</span>}
                  </p>
                )}
              </div>
              <button
                onClick={() => setDetailBrand(null)}
                className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
                aria-label="Tutup"
              >
                &times;
              </button>
            </div>

            {/* Kotak Info Voucher (Kode Unik, Tanggal Terbit, Expired Date, Authorized Signature) */}
            <div className="bg-[#144333]/50 border-2 border-dashed border-[#fadf29] rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Kode Unik</p>
                  <p className="font-anton text-2xl text-[#fadf29] tracking-widest mt-0.5">
                    {detailBrand.claimed && detailBrand.code ? detailBrand.code : `${detailBrand.prefix}---`}
                  </p>
                </div>

                {/* <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Pemilik Akun</p>
                  <p className="font-bold text-white mt-1 truncate">{user.name}</p>
                  <p className="text-[11px] text-[#0fdff8]">User ke-{user.user_number}</p>
                </div> */}

                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Pemilik Akun</p>
                  <p className="font-bold text-white mt-1 truncate">{user.name}</p>
                  <p className="text-[11px] text-[#0fdff8] truncate">{user.email}</p>
                </div>

                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Tanggal Terbit</p>
                  <p className="font-bold text-white mt-0.5">
                    {detailBrand.claimed ? formatDateID(detailBrand.claimed_at) : "Belum diklaim"}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Expired Date</p>
                  <p className="font-bold text-[#0fdff8] mt-0.5">
                    {detailBrand.expires_at
                      ? formatDateID(detailBrand.expires_at)
                      : detailBrand.validity_label}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#fadf29]/30 flex items-center justify-between text-[11px]">
                <span className="text-gray-300 uppercase tracking-wider">Authorized Signature</span>
                <span className="font-anton tracking-wider text-green-300 uppercase">
                  {detailBrand.claimed ? "✓ Verified Digital Pass" : "Pending Claim"}
                </span>
              </div>
            </div>

            {/* Daftar Lengkap Syarat & Ketentuan */}
            <div className="mb-6">
              <h3 className="font-anton text-lg text-[#0fdff8] uppercase tracking-wider mb-3">
                Syarat &amp; Ketentuan
              </h3>
              <ol className="list-decimal list-outside pl-5 space-y-2 text-sm text-gray-200 leading-relaxed">
                {detailBrand.terms.map((term, i) => (
                  <li key={i}>{term}</li>
                ))}
              </ol>
            </div>

            {/* Tombol Aksi Modal */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
              {detailBrand.claimed && detailBrand.code ? (
                <button
                  onClick={() => handleCopyCode(detailBrand.code!, detailBrand.name)}
                  className="px-5 py-2.5 bg-[#13bbad] hover:bg-teal-400 text-black font-anton uppercase tracking-wider rounded cursor-pointer"
                >
                  Salin Kode ({detailBrand.code})
                </button>
              ) : (
                !detailBrand.is_expired &&
                detailBrand.remaining_quota > 0 && (
                  <button
                    onClick={async () => {
                      const target = detailBrand;
                      setDetailBrand(null);
                      await handleClaim(target);
                    }}
                    className="px-5 py-2.5 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton uppercase tracking-wider rounded cursor-pointer"
                  >
                    Klaim {detailBrand.name} Sekarang
                  </button>
                )
              )}
              <button
                onClick={() => setDetailBrand(null)}
                className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-bold rounded cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}