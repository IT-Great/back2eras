/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";

interface AdminVoucher {
  id: number;
  code: string;
  brand_slug: string;
  brand_name: string;
  location: string;
  terms: string[];
  is_used: boolean;
  is_expired: boolean;
  can_redeem: boolean;
  status: "unused" | "used" | "expired";
  claimed_at: string | null;
  expires_at: string | null;
  used_at: string | null;
  user: {
    id: number | null;
    name: string;
    email: string;
    whatsapp: string;
  };
}

interface VoucherStats {
  total: number;
  unused: number;
  used: number;
  expired: number;
}

const API_BASE = "https://back.back2eras.com/api";

const BRAND_OPTIONS = [
  { slug: "all", name: "Semua Brand" },
  { slug: "back2eras", name: "Back2eras" },
  { slug: "solher", name: "Solher" },
  { slug: "gycora", name: "Gycora" },
  { slug: "glamoire", name: "Glamoire" },
  { slug: "wdp", name: "WDP" },
  { slug: "kecilung", name: "Kecilung" },
  { slug: "malaijia", name: "Malaijia" },
];

const formatDateTimeID = (isoString: string | null): string => {
  if (!isoString) return "-";
  return new Date(isoString).toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDateID = (isoString: string | null): string => {
  if (!isoString) return "-";
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function AdminVouchersPage() {
  const [vouchers, setVouchers] = useState<AdminVoucher[]>([]);
  const [stats, setStats] = useState<VoucherStats>({
    total: 0,
    unused: 0,
    used: 0,
    expired: 0,
  });
  const [loading, setLoading] = useState(true);

  // Panel Kasir: Input Verifikasi Kode
  const [codeInput, setCodeInput] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifiedVoucher, setVerifiedVoucher] = useState<AdminVoucher | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [redeemingCode, setRedeemingCode] = useState<string | null>(null);

  // Filter Tabel
  const [brandFilter, setBrandFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getToken = () => localStorage.getItem("admin_token") || "";

  const fetchVouchers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/admin/vouchers`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setVouchers(data.vouchers || []);
        setStats(data.stats || { total: 0, unused: 0, used: 0, expired: 0 });
      }
    } catch (error) {
      console.error("Failed loading admin vouchers:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVouchers();
  }, [fetchVouchers]);

  // Handler Verifikasi Kode di Panel Kasir
  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = codeInput.trim().toUpperCase();
    if (!cleaned) return;

    setVerifying(true);
    setVerifyError(null);
    setVerifiedVoucher(null);

    try {
      const res = await fetch(`${API_BASE}/admin/vouchers/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ code: cleaned }),
      });

      const data = await res.json();
      if (!res.ok) {
        setVerifyError(data.message || "Kode voucher tidak ditemukan.");
        return;
      }

      setVerifiedVoucher(data.voucher);
    } catch {
      setVerifyError("Gagal terhubung ke server. Coba lagi.");
    } finally {
      setVerifying(false);
    }
  };

  // Handler Redeem (bisa dipanggil dari Panel Kasir maupun dari baris Tabel)
  const handleRedeem = async (target: AdminVoucher) => {
    const confirm = await Swal.fire({
      title: `Redeem ${target.code}?`,
      html: `
        <div class="text-left text-sm text-[#eaddce] space-y-1.5">
          <p><span class="text-gray-400">Brand:</span> <strong class="text-[#fadf29]">${target.brand_name}</strong></p>
          <p><span class="text-gray-400">Pemilik:</span> <strong class="text-white">${target.user.name}</strong> (${target.user.email})</p>
          <p class="text-xs text-[#0fdff8] pt-2">Setelah ditandai terpakai, kode ini tidak dapat digunakan lagi.</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#13bbad",
      cancelButtonColor: "#555",
      confirmButtonText: "Ya, Tandai Terpakai!",
      cancelButtonText: "Batal",
      background: "#144333",
      color: "#eaddce",
    });

    if (!confirm.isConfirmed) return;

    setRedeemingCode(target.code);
    try {
      const res = await fetch(`${API_BASE}/admin/vouchers/redeem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ code: target.code }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Gagal melakukan redeem.");
      }

      // Perbarui kartu hasil verifikasi jika sedang menampilkan kode yang sama
      if (verifiedVoucher && verifiedVoucher.code === target.code) {
        setVerifiedVoucher(data.voucher);
      }

      await fetchVouchers();

      Swal.fire({
        title: "Voucher Terpakai!",
        text: data.message,
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
      Swal.fire({
        title: "Redeem Gagal",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setRedeemingCode(null);
    }
  };

  const filteredVouchers = vouchers.filter((v) => {
    if (brandFilter !== "all" && v.brand_slug !== brandFilter) return false;
    if (statusFilter !== "all" && v.status !== statusFilter) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchCode = v.code.toLowerCase().includes(q);
      const matchName = v.user.name.toLowerCase().includes(q);
      const matchEmail = v.user.email.toLowerCase().includes(q);
      const matchWa = v.user.whatsapp.toLowerCase().includes(q);
      if (!matchCode && !matchName && !matchEmail && !matchWa) return false;
    }
    return true;
  });

  const statusBadge = (status: AdminVoucher["status"]) => {
    if (status === "used") {
      return { label: "Used", className: "bg-green-600/30 text-green-300 border border-green-400" };
    }
    if (status === "expired") {
      return { label: "Expired", className: "bg-red-600/30 text-red-300 border border-red-400" };
    }
    return { label: "Unused", className: "bg-yellow-600/30 text-[#fadf29] border border-[#fadf29]" };
  };

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="font-anton text-4xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          Verify &amp; Redeem Vouchers
        </h1>
        {/* <p className="text-gray-300 text-sm mt-1">
          Masukkan kode unik voucher dari pengunjung (misal: <span className="text-[#fadf29] font-bold">KCL001</span>) untuk mengecek keaslian dan menandainya sebagai sudah terpakai.
        </p> */}
        <p className="text-gray-300 text-sm mt-1">
          Masukkan kode unik voucher dari pengunjung (misal: <span className="text-[#fadf29] font-bold">B2E261</span> atau <span className="text-[#fadf29] font-bold">KCLXB11</span>) untuk mengecek keaslian dan menandainya sebagai sudah terpakai.
        </p>
      </div>

      {/* PANEL KASIR: INPUT VERIFIKASI KODE */}
      <section className="bg-black border-4 border-[#0fdff8] rounded-2xl p-6 md:p-8 mb-8 shadow-[6px_6px_0px_#ff1493]">
        <h2 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-4">
          Cek &amp; Redeem Kode Cepat (Kasir / Panitia)
        </h2>

        <form onSubmit={handleVerifySubmit} className="flex flex-col sm:flex-row gap-3">
          {/* <input
            type="text"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
            placeholder="Ketik kode voucher, contoh: KCL001, B2E001, WDP005..."
            className="flex-1 px-5 py-4 bg-gray-900 border-2 border-[#13bbad] focus:border-[#fadf29] rounded-lg text-white font-anton text-xl tracking-widest uppercase outline-none placeholder:font-roboto placeholder:text-sm placeholder:tracking-normal placeholder:text-gray-500"
          /> */}
          <input
            type="text"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value.toUpperCase())}
            placeholder="Ketik kode voucher, contoh: B2E261, SHLB11, GYC110, GLMB211, WDPE011, KCLXB11, MLHXB26..."
            className="flex-1 px-5 py-4 bg-gray-900 border-2 border-[#13bbad] focus:border-[#fadf29] rounded-lg text-white font-anton text-xl tracking-widest uppercase outline-none placeholder:font-roboto placeholder:text-sm placeholder:tracking-normal placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={verifying || !codeInput.trim()}
            className="px-8 py-4 bg-[#fadf29] hover:bg-yellow-300 disabled:opacity-50 text-black font-anton text-xl uppercase tracking-widest rounded-lg shadow-[4px_4px_0px_#ff1493] cursor-pointer transition-transform active:translate-y-0.5"
          >
            {verifying ? "Mengecek..." : "Cek Kode"}
          </button>
          {(verifiedVoucher || verifyError) && (
            <button
              type="button"
              onClick={() => {
                setCodeInput("");
                setVerifiedVoucher(null);
                setVerifyError(null);
              }}
              className="px-5 py-4 bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold text-sm uppercase rounded-lg cursor-pointer"
            >
              Reset
            </button>
          )}
        </form>

        {/* PESAN JIKA KODE TIDAK DITEMUKAN */}
        {verifyError && (
          <div className="mt-5 p-4 bg-red-950/70 border-2 border-red-500 rounded-xl text-red-200 flex items-center gap-3">
            <span className="text-2xl">❌</span>
            <div>
              <p className="font-bold uppercase text-sm">Verifikasi Gagal</p>
              <p className="text-sm">{verifyError}</p>
            </div>
          </div>
        )}

        {/* KARTU HASIL VERIFIKASI */}
        {verifiedVoucher && (
          <div
            className={`mt-6 rounded-xl border-2 p-6 ${
              verifiedVoucher.can_redeem
                ? "bg-[#144333]/50 border-green-400"
                : "bg-gray-900/90 border-red-500"
            }`}
          >
            {/* Status Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b border-gray-700">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-black border-2 border-[#0fdff8] rounded-lg font-anton text-3xl text-[#fadf29] tracking-widest">
                  {verifiedVoucher.code}
                </span>
                <div>
                  <p className="font-anton text-2xl text-white uppercase">
                    {verifiedVoucher.brand_name}
                  </p>
                  <p className="text-xs text-gray-300">📍 {verifiedVoucher.location}</p>
                </div>
              </div>

              <div>
                {verifiedVoucher.can_redeem ? (
                  <span className="inline-block px-4 py-1.5 bg-green-600 text-white font-anton text-sm uppercase tracking-widest rounded-full">
                    ✓ VALID &amp; SIAP DIPAKAI
                  </span>
                ) : verifiedVoucher.is_used ? (
                  <span className="inline-block px-4 py-1.5 bg-red-600 text-white font-anton text-sm uppercase tracking-widest rounded-full">
                    ✕ SUDAH DIPAKAI ({formatDateTimeID(verifiedVoucher.used_at)} WIB)
                  </span>
                ) : (
                  <span className="inline-block px-4 py-1.5 bg-orange-600 text-white font-anton text-sm uppercase tracking-widest rounded-full">
                    ✕ KEDALUWARSA ({formatDateID(verifiedVoucher.expires_at)})
                  </span>
                )}
              </div>
            </div>

            {/* Detail Pemilik & Tanggal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-5">
              <div className="bg-black/60 p-3.5 rounded-lg border border-gray-800">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Pemilik Voucher</p>
                <p className="font-bold text-white mt-1">{verifiedVoucher.user.name}</p>
                <p className="text-xs text-[#0fdff8]">{verifiedVoucher.user.email}</p>
                <p className="text-xs text-gray-300 mt-0.5">WA: {verifiedVoucher.user.whatsapp}</p>
              </div>

              <div className="bg-black/60 p-3.5 rounded-lg border border-gray-800">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Masa Berlaku</p>
                <p className="text-xs text-gray-300 mt-1">
                  Terbit: <strong className="text-white">{formatDateTimeID(verifiedVoucher.claimed_at)}</strong>
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Expired: <strong className="text-[#fadf29]">{formatDateID(verifiedVoucher.expires_at)}</strong>
                </p>
              </div>

              <div className="bg-black/60 p-3.5 rounded-lg border border-gray-800 flex flex-col justify-center">
                {verifiedVoucher.can_redeem ? (
                  <button
                    onClick={() => handleRedeem(verifiedVoucher)}
                    disabled={redeemingCode === verifiedVoucher.code}
                    className="w-full py-3.5 bg-[#13bbad] hover:bg-teal-400 disabled:opacity-50 text-black font-anton text-lg uppercase tracking-widest rounded-lg shadow-[3px_3px_0px_#fadf29] cursor-pointer transition-transform active:translate-y-0.5"
                  >
                    {redeemingCode === verifiedVoucher.code
                      ? "Memproses..."
                      : "✓ Tandai Sudah Dipakai"}
                  </button>
                ) : (
                  <p className="text-center text-xs font-bold uppercase text-red-300">
                    Voucher tidak dapat di-redeem lagi.
                  </p>
                )}
              </div>
            </div>

            {/* Ringkasan S&K Brand untuk Referensi Kasir */}
            {verifiedVoucher.terms.length > 0 && (
              <details className="bg-black/50 border border-gray-800 rounded-lg p-3 text-xs text-gray-300">
                <summary className="cursor-pointer font-bold text-[#0fdff8] uppercase tracking-wider">
                  Lihat Syarat &amp; Ketentuan {verifiedVoucher.brand_name} ({verifiedVoucher.terms.length} Poin)
                </summary>
                <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-300">
                  {verifiedVoucher.terms.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ol>
              </details>
            )}
          </div>
        )}
      </section>

      {/* RINGKASAN STATISTIK */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-black border-2 border-gray-700 rounded-xl p-4">
          <p className="text-xs uppercase text-gray-400">Total Diklaim</p>
          <p className="font-anton text-3xl text-white mt-1">{stats.total}</p>
        </div>
        <div className="bg-black border-2 border-[#fadf29]/60 rounded-xl p-4">
          <p className="text-xs uppercase text-[#fadf29]">Belum Dipakai (Unused)</p>
          <p className="font-anton text-3xl text-[#fadf29] mt-1">{stats.unused}</p>
        </div>
        <div className="bg-black border-2 border-green-500/60 rounded-xl p-4">
          <p className="text-xs uppercase text-green-400">Sudah Dipakai (Used)</p>
          <p className="font-anton text-3xl text-green-400 mt-1">{stats.used}</p>
        </div>
        <div className="bg-black border-2 border-red-500/60 rounded-xl p-4">
          <p className="text-xs uppercase text-red-400">Kedaluwarsa (Expired)</p>
          <p className="font-anton text-3xl text-red-400 mt-1">{stats.expired}</p>
        </div>
      </div>

      {/* FILTER & PENCARIAN TABEL */}
      <div className="flex flex-col lg:flex-row gap-3 mb-5 justify-between">
        <div className="flex flex-wrap gap-2">
          {["all", "unused", "used", "expired"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-4 py-2 rounded font-anton uppercase text-xs tracking-wider cursor-pointer transition-colors ${
                statusFilter === st
                  ? "bg-[#0fdff8] text-black"
                  : "bg-black text-gray-400 border border-gray-700 hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="px-4 py-2 bg-black border border-gray-700 focus:border-[#0fdff8] rounded text-sm text-white outline-none"
          >
            {BRAND_OPTIONS.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kode / nama / email / WA..."
            className="px-4 py-2 bg-black border border-gray-700 focus:border-[#0fdff8] rounded text-sm text-white outline-none min-w-[240px]"
          />
        </div>
      </div>

      {/* TABEL DAFTAR SELURUH VOUCHER */}
      <div className="bg-black border-2 border-[#13bbad] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0fdff8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 border-b-2 border-[#ff1493] font-anton text-[#fadf29] uppercase text-sm tracking-wider">
                <th className="p-4">Kode Unik</th>
                <th className="p-4">Brand</th>
                <th className="p-4">Pemilik</th>
                <th className="p-4">Terbit &amp; Expired</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-[#0fdff8] font-anton text-xl animate-pulse">
                    Memuat data voucher...
                  </td>
                </tr>
              ) : filteredVouchers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-400">
                    Tidak ada data voucher ditemukan.
                  </td>
                </tr>
              ) : (
                filteredVouchers.map((v) => {
                  const badge = statusBadge(v.status);
                  return (
                    <tr key={v.id} className="hover:bg-gray-900/60 transition-colors">
                      <td className="p-4 font-anton text-lg text-[#fadf29] tracking-widest whitespace-nowrap">
                        {v.code}
                      </td>
                      <td className="p-4 font-bold text-white whitespace-nowrap">{v.brand_name}</td>
                      <td className="p-4">
                        <p className="font-bold text-white">{v.user.name}</p>
                        <p className="text-xs text-[#0fdff8]">{v.user.email}</p>
                        <p className="text-xs text-gray-400">{v.user.whatsapp}</p>
                      </td>
                      <td className="p-4 whitespace-nowrap text-xs text-gray-300">
                        <p>Terbit: {formatDateID(v.claimed_at)}</p>
                        <p className="text-[#0fdff8]">Exp: {formatDateID(v.expires_at)}</p>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${badge.className}`}>
                          {badge.label}
                        </span>
                        {v.is_used && v.used_at && (
                          <p className="text-[11px] text-gray-400 mt-1">
                            {formatDateTimeID(v.used_at)} WIB
                          </p>
                        )}
                      </td>
                      <td className="p-4 text-center whitespace-nowrap">
                        {v.can_redeem ? (
                          <button
                            onClick={() => handleRedeem(v)}
                            disabled={redeemingCode === v.code}
                            className="px-4 py-1.5 bg-[#13bbad] hover:bg-teal-400 disabled:opacity-50 text-black text-xs font-bold uppercase rounded cursor-pointer"
                          >
                            {redeemingCode === v.code ? "..." : "Redeem"}
                          </button>
                        ) : (
                          <span className="text-xs text-gray-500 italic">Selesai</span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}