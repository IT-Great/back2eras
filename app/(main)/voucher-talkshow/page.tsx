/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

interface VisitorUser {
  id: number;
  name: string;
  email: string;
  role?: string;
  has_talkshow_registration?: boolean;
}

interface BrandVoucher {
  slug: string;
  name: string;
  prefix: string;
  code_placeholder?: string;
  category: "event" | "dine_in";
  location: string;
  phone: string | null;
  instagram: string | null;
  website: string | null;
  promo_highlight: string | null;
  special_menus: string[];
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
const VOUCHER_BANNER_DIR = "/assets/images/vouchers";

// Banner khusus halaman Talkshow (WDP memakai wdp-2.png)
const TALKSHOW_BRAND_BANNERS: Record<string, string> = {
  back2eras: `${VOUCHER_BANNER_DIR}/back2eras.png`,
  solher: `${VOUCHER_BANNER_DIR}/solher.png`,
  gycora: `${VOUCHER_BANNER_DIR}/gycora.png`,
  wdp: `${VOUCHER_BANNER_DIR}/wdp-2.png`,
  kecilung: `${VOUCHER_BANNER_DIR}/kecilung.png`,
  malaijia: `${VOUCHER_BANNER_DIR}/malaijia.png`,
};

const formatDateID = (isoString: string | null): string => {
  if (!isoString) return "-";
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default function TalkshowVoucherPage() {
  const [user, setUser] = useState<VisitorUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [isParticipant, setIsParticipant] = useState(false);
  const [brands, setBrands] = useState<BrandVoucher[]>([]);
  const [loadingVouchers, setLoadingVouchers] = useState(false);
  const [claimingSlug, setClaimingSlug] = useState<string | null>(null);

  // Modal Detail E-Voucher & Syarat Ketentuan
  const [detailBrand, setDetailBrand] = useState<BrandVoucher | null>(null);
  const [bannerLoadFailed, setBannerLoadFailed] = useState(false);

  const [canClaimVoucher, setCanClaimVoucher] = useState(false);
  const [claimBlockReason, setClaimBlockReason] = useState<string | null>(null);
  const [hasTalkshowGoodiebag, setHasTalkshowGoodiebag] = useState(false);
  const [talkshowRank, setTalkshowRank] = useState<number | null>(null);

  const openDetailModal = (brand: BrandVoucher) => {
    setBannerLoadFailed(false);
    setDetailBrand(brand);
  };

  const fetchTalkshowVouchersAndMe = useCallback(async () => {
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
        fetch(`${API_BASE}/talkshow/vouchers`, {
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
        setIsParticipant(Boolean(voucherData.is_talkshow_participant));
        setBrands(voucherData.brands || []);
        setCanClaimVoucher(Boolean(voucherData.can_claim_voucher));
        setClaimBlockReason(voucherData.claim_block_reason ?? null);
        setHasTalkshowGoodiebag(Boolean(voucherData.has_talkshow_goodiebag));
        setTalkshowRank(voucherData.talkshow_rank ?? null);
      }
    } catch (error) {
      console.error("Failed loading talkshow voucher page:", error);
    } finally {
      setLoadingVouchers(false);
      setCheckingAuth(false);
    }
  }, []);

  useEffect(() => {
    fetchTalkshowVouchersAndMe();
    window.addEventListener("visitor-auth-changed", fetchTalkshowVouchersAndMe);
    return () => window.removeEventListener("visitor-auth-changed", fetchTalkshowVouchersAndMe);
  }, [fetchTalkshowVouchersAndMe]);

  const handleClaim = async (brand: BrandVoucher) => {
    const token = localStorage.getItem("visitor_token");
    if (!token) return;

    setClaimingSlug(brand.slug);
    try {
      const res = await fetch(`${API_BASE}/talkshow/vouchers/claim`, {
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
        throw new Error(data.message || "Gagal mengklaim voucher Talkshow.");
      }

      await fetchTalkshowVouchersAndMe();

      const issuedText = formatDateID(data.voucher.created_at);
      const expiredText = formatDateID(data.voucher.expires_at);

      Swal.fire({
        title: `Voucher ${brand.name} Diklaim!`,
        html: `
          <div class="text-[#eaddce] font-roboto text-left">
            <p class="mb-3 text-sm text-center">Kode unik Talkshow Anda (hanya berlaku 1x pakai):</p>
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

  // PROTEKSI 1: Belum login
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-[#000000] text-[#eaddce] font-roboto flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full bg-[#144333]/60 border-4 border-[#ff1493] rounded-2xl p-8 md:p-10 text-center shadow-[8px_8px_0px_#0fdff8]">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase tracking-wider mb-3">
            Login Required
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            Halaman Voucher Talkshow hanya dapat diakses oleh peserta Talkshow yang sudah login. Silakan daftar Talkshow atau login lewat ikon profil di kanan atas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/talkshow"
              className="px-6 py-3 bg-[#fadf29] hover:bg-yellow-300 text-black font-anton text-lg uppercase tracking-widest rounded shadow-[4px_4px_0px_#0fdff8]"
            >
              Ke Halaman Talkshow
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

  // PROTEKSI 2: Sudah login, tetapi belum terdaftar di sesi Talkshow manapun
  if (!loadingVouchers && !isParticipant) {
    return (
      <div className="min-h-screen bg-[#000000] text-[#eaddce] font-roboto flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full bg-[#144333]/60 border-4 border-[#0fdff8] rounded-2xl p-8 md:p-10 text-center shadow-[8px_8px_0px_#ff1493]">
          <div className="text-5xl mb-4">🎙️</div>
          <h1 className="font-anton text-3xl md:text-4xl text-[#fadf29] uppercase tracking-wider mb-3">
            Khusus Peserta Talkshow
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            {claimBlockReason || "Akun Anda belum terdaftar pada sesi Talkshow mana pun. Daftar Talkshow terlebih dahulu untuk mengakses voucher Talkshow."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/talkshow"
              className="px-6 py-3 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton text-lg uppercase tracking-widest rounded shadow-[4px_4px_0px_#0fdff8]"
            >
              Daftar Talkshow Sekarang
            </Link>
            <Link
              href="/voucher"
              className="px-6 py-3 bg-black border-2 border-[#fadf29] text-[#fadf29] font-anton text-lg uppercase tracking-widest rounded hover:bg-gray-900"
            >
              Ke Voucher Reguler
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const activeBannerSrc = detailBrand ? TALKSHOW_BRAND_BANNERS[detailBrand.slug] : undefined;

  return (
    <div className="min-h-screen bg-[#144333] text-[#eaddce] font-roboto py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* BANNER IDENTITAS TALKSHOW */}
        <div className="bg-black border-4 border-[#0fdff8] rounded-2xl p-6 md:p-8 mb-10 shadow-[6px_6px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-anton uppercase tracking-widest text-[#0fdff8] mb-1">
              BACK2ERAS 2026 &bull; Talkshow Participant Pass
            </p>
            <h1 className="font-anton text-3xl md:text-5xl text-[#fadf29] uppercase tracking-wider">
              Claim Talkshow Vouchers
            </h1>
            <p className="text-gray-300 text-sm mt-2 max-w-2xl">
              Halo <strong className="text-white">{user.name}</strong>! Ini adalah halaman khusus voucher peserta Talkshow (kode urutan 101–999, berlaku 1x pakai). Klik{" "}
              <span className="text-[#0fdff8] font-bold">Syarat &amp; Ketentuan</span> pada tiap kartu untuk melihat detail lengkapnya.
            </p>
          </div>

          <div className="shrink-0 bg-[#144333] border-2 border-[#fadf29] rounded-xl px-6 py-4 text-center md:text-right shadow-[4px_4px_0px_#0fdff8] max-w-full md:max-w-xs">
            <span className="inline-block px-2.5 py-0.5 bg-[#ff1493] text-white font-anton text-[10px] uppercase tracking-widest rounded mb-1">
              Talkshow Pass{talkshowRank ? ` • #${talkshowRank}` : ""}
            </span>
            <p className="font-anton text-2xl text-[#fadf29] uppercase truncate">
              {user.name}
            </p>
            <p className="text-xs text-[#eaddce] mt-0.5 truncate">
              {user.email}
            </p>
          </div>
        </div>

        {/* PERINGATAN KLAIM TERKUNCI (PENDING / REJECTED) */}
        {!canClaimVoucher && (
          <div className="bg-black border-2 border-[#fadf29] rounded-xl p-5 mb-8 shadow-[4px_4px_0px_#ff1493] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-anton text-lg text-[#fadf29] uppercase tracking-wider">
                  Akses Klaim Voucher Talkshow Belum Aktif
                </p>
                <p className="text-sm text-gray-300 mt-0.5">
                  {claimBlockReason || "Pendaftaran Talkshow Anda masih menunggu persetujuan admin."}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* INFORMASI FREE GOODIE BAG TALKSHOW (INFORMASI SAJA, TANPA KLAIM / REDEEM) */}
        {hasTalkshowGoodiebag ? (
          <div className="bg-black border-2 border-dashed border-[#0fdff8] rounded-xl p-5 mb-8 shadow-[4px_4px_0px_#fadf29] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0">🎁</span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-anton text-xl text-[#fadf29] uppercase tracking-wider">
                    Free Goodie Bag — Top 5 Peserta Talkshow
                  </p>
                  <span className="px-2.5 py-0.5 bg-green-600/30 border border-green-400 text-green-300 text-[11px] font-bold uppercase rounded-full">
                    ✓ Berhak Mendapatkan{talkshowRank ? ` (Urutan #${talkshowRank})` : ""}
                  </span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Selamat! Anda termasuk dalam <strong className="text-[#0fdff8]">5 pendaftar pertama Talkshow</strong> yang disetujui admin dan berhak mendapatkan <strong className="text-[#fadf29]">Free Goodie Bag</strong> serta akses ke seluruh <strong>7 voucher brand</strong> (termasuk Back2eras).
                </p>
                <p className="text-xs text-gray-400 mt-1.5">
                  ℹ️ Free Goodie Bag tidak perlu klaim kode atau redeem. Cukup tunjukkan nama &amp; email akun ini kepada panitia di Booth Registrasi BACK2ERAS (27 – 29 November 2026).
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-black/80 border border-gray-700 rounded-xl p-4 mb-8 flex items-start gap-3">
            <span className="text-xl shrink-0">🎁</span>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              <strong className="text-[#fadf29] uppercase">Info Free Goodie Bag &amp; Voucher Talkshow:</strong> Free Goodie Bag serta voucher Back2eras khusus diberikan kepada <strong className="text-white">5 pendaftar pertama Talkshow</strong> yang disetujui admin (tanpa perlu klaim/redeem untuk Goodie Bag). Pendaftar urutan <strong className="text-[#0fdff8]">6–25</strong> mendapatkan akses klaim ke <strong className="text-white">6 voucher brand partner</strong>.
            </p>
          </div>
        )}

        {/* DAFTAR KARTU BRAND */}
        {loadingVouchers ? (
          <p className="text-center text-[#0fdff8] font-anton text-xl animate-pulse py-10">
            Memuat daftar voucher Talkshow...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, idx) => {
              const badge = getStatusBadge(brand);
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

                    <h2 className="font-anton text-3xl text-white uppercase tracking-wide mb-1">
                      {brand.name}
                    </h2>

                    {brand.promo_highlight && (
                      <div className="mb-2.5 px-2.5 py-1.5 bg-[#ff1493]/20 border border-[#ff1493] rounded text-[11px] font-bold text-[#fadf29]">
                        ✨ {brand.promo_highlight}
                      </div>
                    )}

                    <p className="text-xs font-bold text-[#0fdff8] mb-1">
                      🕒 {brand.validity_label}
                    </p>
                    <p className="text-xs text-gray-300 mb-3">
                      📍 {brand.location}
                    </p>

                    {(brand.phone || brand.instagram || brand.website) && (
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#fadf29] mb-3 bg-gray-900/80 px-3 py-1.5 rounded border border-gray-800">
                        {brand.website && <span>🌐 {brand.website}</span>}
                        {brand.phone && <span>📞 {brand.phone}</span>}
                        {brand.instagram && <span>📷 {brand.instagram}</span>}
                      </div>
                    )}

                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {brand.rule_summary}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {brand.claimed && brand.code ? (
                      <>
                        <div className="bg-gray-900 border-2 border-dashed border-[#0fdff8] rounded-lg px-4 py-3 text-center">
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                            Kode Unik Talkshow Anda
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
                            onClick={() => openDetailModal(brand)}
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
                          {!canClaimVoucher
                            ? "Menunggu Approval"
                            : claimingSlug === brand.slug
                            ? "Mengklaim..."
                            : brand.is_expired
                            ? "Periode Berakhir"
                            : brand.remaining_quota <= 0
                            ? "Kuota Habis"
                            : `Klaim ${brand.name}`}
                        </button>

                        <button
                          onClick={() => openDetailModal(brand)}
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
            className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 border-b border-gray-800 pb-4 mb-5">
              <div>
                <span className="text-xs font-anton uppercase tracking-widest text-[#ff1493]">
                  Official Digital Voucher &bull; Talkshow Pass
                </span>
                <h2 className="font-anton text-3xl text-[#fadf29] uppercase tracking-wider mt-0.5">
                  {detailBrand.name}
                </h2>
                <p className="text-xs text-gray-300 mt-1">📍 {detailBrand.location}</p>
                {(detailBrand.website || detailBrand.phone || detailBrand.instagram) && (
                  <p className="text-xs text-[#0fdff8] mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {detailBrand.website && <span>🌐 {detailBrand.website}</span>}
                    {detailBrand.phone && <span>📞 {detailBrand.phone}</span>}
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

            {activeBannerSrc && !bannerLoadFailed && (
              <div className="mb-5 rounded-xl overflow-hidden border-2 border-[#13bbad] bg-gray-950 shadow-[4px_4px_0px_rgba(15,223,248,0.25)]">
                <img
                  key={activeBannerSrc}
                  src={activeBannerSrc}
                  alt={`Banner Voucher ${detailBrand.name}`}
                  onError={() => setBannerLoadFailed(true)}
                  className="w-full h-auto max-h-72 object-contain block mx-auto"
                />
              </div>
            )}

            <div className="bg-[#144333]/50 border-2 border-dashed border-[#fadf29] rounded-xl p-4 mb-5">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-400 uppercase tracking-wider text-[10px]">Kode Unik</p>
                  <p className="font-anton text-2xl text-[#fadf29] tracking-widest mt-0.5">
                    {detailBrand.claimed && detailBrand.code
                      ? detailBrand.code
                      : detailBrand.code_placeholder || `${detailBrand.prefix}---`}
                  </p>
                </div>

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

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
              {detailBrand.claimed && detailBrand.code ? (
                <button
                  onClick={() => handleCopyCode(detailBrand.code!, detailBrand.name)}
                  className="px-5 py-2.5 bg-[#13bbad] hover:bg-teal-400 text-black font-anton uppercase tracking-wider rounded cursor-pointer"
                >
                  Salin Kode ({detailBrand.code})
                </button>
              ) : (
                canClaimVoucher &&
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