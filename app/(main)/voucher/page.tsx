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
  rule_summary: string;
  claimed: boolean;
  code: string | null;
  is_used: boolean;
  claimed_at: string | null;
}

const API_BASE = "https://back.back2eras.com/api";

// Urutan kerangka 7 Brand (fallback tampilan awal sebelum API selesai memuat)
const DEFAULT_BRANDS: BrandVoucher[] = [
  { slug: "back2eras", name: "Back2eras", rule_summary: "Berlaku 1x klaim per akun untuk promo resmi BACK2ERAS 2026.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "solher", name: "Solher", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Solher.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "gycora", name: "Gycora", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Gycora.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "glamoire", name: "Glamoire", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Glamoire.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "wdp", name: "WDP", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan WDP.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "kecilung", name: "Kecilung", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Kecilung.", claimed: false, code: null, is_used: false, claimed_at: null },
  { slug: "malaijia", name: "Malaijia", rule_summary: "Berlaku 1x klaim per akun sesuai syarat & ketentuan Malaijia.", claimed: false, code: null, is_used: false, claimed_at: null },
];

export default function VoucherPage() {
  const [user, setUser] = useState<VisitorUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [brands, setBrands] = useState<BrandVoucher[]>(DEFAULT_BRANDS);
  const [loadingVouchers, setLoadingVouchers] = useState(false);
  const [claimingSlug, setClaimingSlug] = useState<string | null>(null);

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
        // Token tidak valid / expired
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

      Swal.fire({
        title: `Voucher ${brand.name} Diklaim!`,
        html: `
          <div class="text-[#eaddce] font-roboto">
            <p class="mb-3 text-sm">Kode unik Anda (hanya berlaku 1x pakai):</p>
            <div class="bg-black border-2 border-[#0fdff8] py-3 px-4 rounded font-anton text-2xl text-[#fadf29] tracking-widest">
              ${data.voucher.code}
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
      <div className="max-w-5xl mx-auto">
        {/* BANNER IDENTITAS & URUTAN USER */}
        <div className="bg-black border-4 border-[#0fdff8] rounded-2xl p-6 md:p-8 mb-10 shadow-[6px_6px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-anton uppercase tracking-widest text-[#0fdff8] mb-1">
              BACK2ERAS 2026 Member Pass
            </p>
            <h1 className="font-anton text-3xl md:text-5xl text-[#fadf29] uppercase tracking-wider">
              Claim Brand Vouchers
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              Halo <strong className="text-white">{user.name}</strong>! Pilih brand di bawah ini untuk mengklaim kode unik Anda. Setiap kode berbeda tiap user dan hanya berlaku 1x pakai.
            </p>
          </div>

          <div className="shrink-0 bg-[#144333] border-2 border-[#fadf29] rounded-xl px-6 py-4 text-center shadow-[4px_4px_0px_#0fdff8]">
            <p className="text-xs uppercase tracking-widest text-[#eaddce]">Status Pendaftar</p>
            <p className="font-anton text-3xl text-[#fadf29] uppercase mt-1">
              Anda User ke-{user.user_number}
            </p>
          </div>
        </div>

        {/* KERANGKA 7 TOMBOL BRAND BERURUTAN */}
        {loadingVouchers ? (
          <p className="text-center text-[#0fdff8] font-anton text-xl animate-pulse py-10">
            Memuat daftar voucher...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, idx) => (
              <div
                key={brand.slug}
                className="bg-black border-2 border-[#13bbad] rounded-xl p-6 shadow-[4px_4px_0px_#ff1493] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton text-xs rounded">
                      #{idx + 1}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded-full ${
                        brand.claimed
                          ? "bg-green-600/30 text-green-300 border border-green-400"
                          : "bg-yellow-600/20 text-[#fadf29] border border-[#fadf29]"
                      }`}
                    >
                      {brand.claimed ? "Claimed" : "Available"}
                    </span>
                  </div>

                  <h2 className="font-anton text-3xl text-white uppercase tracking-wide mb-2">
                    {brand.name}
                  </h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {brand.rule_summary}
                  </p>
                </div>

                {brand.claimed && brand.code ? (
                  <div className="space-y-2">
                    <div className="bg-gray-900 border-2 border-dashed border-[#0fdff8] rounded-lg px-4 py-3 text-center">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                        Kode Unik Anda
                      </p>
                      <p className="font-anton text-xl text-[#fadf29] tracking-widest">
                        {brand.code}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyCode(brand.code!, brand.name)}
                      className="w-full py-2.5 bg-[#13bbad] hover:bg-teal-400 text-black font-anton text-sm uppercase tracking-widest rounded cursor-pointer transition-colors"
                    >
                      Salin Kode
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleClaim(brand)}
                    disabled={claimingSlug === brand.slug}
                    className="w-full py-3 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton text-lg uppercase tracking-widest rounded shadow-[3px_3px_0px_#0fdff8] active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    {claimingSlug === brand.slug ? "Mengklaim..." : `Klaim ${brand.name}`}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}