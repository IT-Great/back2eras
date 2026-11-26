/* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable react/no-unescaped-entities */
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// interface DashboardStats {
//   visitors: number;
//   tenants: number;
//   partners: number;
//   media: number;
//   contacts: number;
//   stories: number;
//   categories: number;
// }

// export default function AdminDashboard() {
//   const [stats, setStats] = useState<DashboardStats | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await fetch("https://back.back2eras.com/api/dashboard/stats", {
//           headers: { "Accept": "application/json" }
//         });
//         const data = await res.json();
//         setStats(data);
//       } catch (error) {
//         console.error("Failed to fetch dashboard stats", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Analytics...</div>;

//   const statCards = [
//     { title: "Registered Visitors", count: stats?.visitors, icon: "🎟️", color: "#0fdff8", link: "/admin/visitors" },
//     { title: "Tenant Applications", count: stats?.tenants, icon: "🏪", color: "#fadf29", link: "/admin/tenants" },
//     { title: "Partnership Inquiries", count: stats?.partners, icon: "🤝", color: "#ff1493", link: "/admin/partners" },
//     { title: "Media Registrations", count: stats?.media, icon: "📸", color: "#13bbad", link: "/admin/media" },
//     { title: "Contact Messages", count: stats?.contacts, icon: "✉️", color: "#fe9d04", link: "/admin/contacts" },
//     { title: "Published Stories", count: stats?.stories, icon: "📰", color: "#0fdff8", link: "/admin/stories" },
//     { title: "Vendor Categories", count: stats?.categories, icon: "📁", color: "#fadf29", link: "/admin/categories" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto text-[#eaddce]">
      
//       <div className="mb-10">
//         <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//           Overview Dashboard
//         </h1>
//         <p className="text-gray-400 mt-2">Welcome! Here is the live summary of your BACK2ERAS event data.</p>
//       </div>

//       {/* Grid Kartu Analitik */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {statCards.map((card, index) => (
//           <Link 
//             key={index} 
//             href={card.link}
//             className="group relative bg-[#000] border-2 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2"
//             style={{ borderColor: card.color, boxShadow: `4px 4px 0px ${card.color}` }}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <div 
//                 className="w-12 h-12 rounded flex items-center justify-center text-2xl"
//                 style={{ backgroundColor: `${card.color}20`, border: `1px solid ${card.color}` }}
//               >
//                 {card.icon}
//               </div>
//               <div className="text-right">
//                 <span className="font-anton text-4xl" style={{ color: card.color }}>
//                   {card.count || 0}
//                 </span>
//               </div>
//             </div>
            
//             <h3 className="font-roboto font-bold text-lg uppercase tracking-wider text-white group-hover:text-[#fadf29] transition-colors">
//               {card.title}
//             </h3>
//             <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 group-hover:text-gray-300">
//               Manage Data <span className="text-lg leading-none">&rarr;</span>
//             </p>
//           </Link>
//         ))}
//       </div>

//       {/* Pesan Tambahan / Dekorasi Bawah */}
//       <div className="mt-12 p-6 bg-[#144333]/50 border-l-4 border-[#ff1493] rounded">
//         <p className="text-[#eaddce] text-sm md:text-base italic">
//           <strong className="text-[#ff1493] not-italic mr-2">TIP:</strong> 
//           Click on any of the cards above to navigate directly to their respective management pages. Ensure you regularly review 'Pending' applications in the Tenants and Partners sections.
//         </p>
//       </div>

//     </div>
//   );
// }

/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface DashboardStats {
  visitors: number;
  tenants: number;
  partners: number;
  media: number;
  contacts: number;
  stories: number;
  categories: number;

  // Tambahan Modul KOL, Talkshow, Voucher & Visitor
  kols?: number;
  kols_verified?: number;
  kols_unverified?: number;

  talkshows?: number;
  talkshow_registrations?: number;
  talkshow_pending?: number;
  talkshow_approved?: number;
  talkshow_rejected?: number;

  vouchers_total?: number;
  vouchers_unused?: number;
  vouchers_used?: number;
  vouchers_expired?: number;
  vouchers_regular?: number;
  vouchers_talkshow?: number;

  visitors_community?: number;
  visitors_newsletter?: number;
}

const API_BASE = "https://back.back2eras.com/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStats = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    try {
      const token = localStorage.getItem("admin_token");
      const headers: Record<string, string> = { Accept: "application/json" };
      if (token) headers.Authorization = `Bearer ${token}`;

      const res = await fetch(`${API_BASE}/dashboard/stats`, { headers });
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard stats", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  if (loading) {
    return (
      <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">
        Loading Analytics...
      </div>
    );
  }

  const totalVisitors = stats?.visitors ?? 0;
  const communityVisitors = stats?.visitors_community ?? 0;
  const newsletterVisitors = stats?.visitors_newsletter ?? 0;

  const totalKols = stats?.kols ?? 0;
  const verifiedKols = stats?.kols_verified ?? 0;
  const unverifiedKols = stats?.kols_unverified ?? 0;

  const totalTalkshows = stats?.talkshows ?? 0;
  const talkshowRegs = stats?.talkshow_registrations ?? 0;
  const talkshowPending = stats?.talkshow_pending ?? 0;
  const talkshowApproved = stats?.talkshow_approved ?? 0;
  const talkshowRejected = stats?.talkshow_rejected ?? 0;

  const vouchersTotal = stats?.vouchers_total ?? 0;
  const vouchersUnused = stats?.vouchers_unused ?? 0;
  const vouchersUsed = stats?.vouchers_used ?? 0;
  const vouchersExpired = stats?.vouchers_expired ?? 0;
  const vouchersRegular = stats?.vouchers_regular ?? 0;
  const vouchersTalkshow = stats?.vouchers_talkshow ?? 0;

  const redeemPercentage =
    vouchersTotal > 0 ? Math.round((vouchersUsed / vouchersTotal) * 100) : 0;

  const statCards = [
    {
      title: "Registered Visitors",
      count: totalVisitors,
      sub: `${communityVisitors} pakai Community Code`,
      icon: "🎟️",
      color: "#0fdff8",
      link: "/admin/visitors",
    },
    {
      title: "Registered KOLs",
      count: totalKols,
      sub: `${verifiedKols} siap klaim voucher`,
      icon: "🌟",
      color: "#ff1493",
      link: "/admin/kols",
    },
    {
      title: "Talkshow Participants",
      count: talkshowRegs,
      sub: `${totalTalkshows} sesi • ${talkshowPending} pending`,
      icon: "🎙️",
      color: "#a855f7",
      link: "/admin/talkshows",
    },
    {
      title: "Claimed Vouchers",
      count: vouchersTotal,
      sub: `${vouchersUsed} used • ${vouchersUnused} unused`,
      icon: "🏷️",
      color: "#fadf29",
      link: "/admin/vouchers",
    },
    {
      title: "Tenant Applications",
      count: stats?.tenants ?? 0,
      sub: "Booth & tenant fest",
      icon: "🏪",
      color: "#fadf29",
      link: "/admin/tenants",
    },
    {
      title: "Partnership Inquiries",
      count: stats?.partners ?? 0,
      sub: "Sponsor & kolaborasi",
      icon: "🤝",
      color: "#ff1493",
      link: "/admin/partners",
    },
    {
      title: "Media Registrations",
      count: stats?.media ?? 0,
      sub: "Media partner & press",
      icon: "📸",
      color: "#13bbad",
      link: "/admin/media",
    },
    {
      title: "Contact Messages",
      count: stats?.contacts ?? 0,
      sub: "Pesan masuk pengunjung",
      icon: "✉️",
      color: "#fe9d04",
      link: "/admin/contacts",
    },
    {
      title: "Published Stories",
      count: stats?.stories ?? 0,
      sub: "Artikel & publikasi",
      icon: "📰",
      color: "#0fdff8",
      link: "/admin/stories",
    },
    {
      title: "Vendor Categories",
      count: stats?.categories ?? 0,
      sub: "Kategori kurasi tenant",
      icon: "📁",
      color: "#13bbad",
      link: "/admin/categories",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      {/* HEADER & AKSI CEPAT */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
            Overview Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Ringkasan real-time seluruh pendaftaran, talkshow, KOL, dan status voucher BACK2ERAS 2026.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/vouchers"
            className="px-5 py-3 bg-[#fadf29] hover:bg-yellow-300 text-black font-anton text-sm uppercase tracking-wider rounded-lg shadow-[3px_3px_0px_#ff1493] transition-transform active:translate-y-0.5"
          >
            🏷️ Verifikasi / Redeem Voucher
          </Link>
          <Link
            href="/admin/talkshows"
            className="px-5 py-3 bg-[#13bbad] hover:bg-teal-400 text-black font-anton text-sm uppercase tracking-wider rounded-lg shadow-[3px_3px_0px_#0fdff8] transition-transform active:translate-y-0.5"
          >
            🎙️ Kelola Talkshow
          </Link>
          <button
            onClick={() => fetchStats(true)}
            disabled={refreshing}
            className="px-4 py-3 bg-black hover:bg-gray-900 border-2 border-gray-700 text-gray-200 font-anton text-sm uppercase tracking-wider rounded-lg cursor-pointer disabled:opacity-50"
          >
            {refreshing ? "Refreshing..." : "↻ Refresh"}
          </button>
        </div>
      </div>

      {/* NOTIFIKASI TINDAKAN CEPAT (JIKA ADA PESERTA TALKSHOW PENDING) */}
      {talkshowPending > 0 && (
        <div className="mb-8 p-4 bg-black border-2 border-[#fadf29] rounded-xl shadow-[4px_4px_0px_#ff1493] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏳</span>
            <div>
              <p className="font-anton text-base text-[#fadf29] uppercase tracking-wider">
                {talkshowPending} Peserta Talkshow Menunggu Approval
              </p>
              <p className="text-xs text-gray-300">
                Voucher peserta Talkshow baru aktif setelah status pendaftaran di-Approve oleh admin.
              </p>
            </div>
          </div>
          <Link
            href="/admin/talkshows"
            className="shrink-0 px-4 py-2 bg-[#ff1493] hover:bg-[#e01082] text-white font-anton text-xs uppercase tracking-widest rounded text-center"
          >
            Tinjau Sekarang &rarr;
          </Link>
        </div>
      )}

      {/* GRID KARTU ANALITIK UTAMA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
        {statCards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className="group relative bg-[#000] border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            style={{ borderColor: card.color, boxShadow: `4px 4px 0px ${card.color}` }}
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center text-xl"
                  style={{ backgroundColor: `${card.color}20`, border: `1px solid ${card.color}` }}
                >
                  {card.icon}
                </div>
                <span className="font-anton text-3xl md:text-4xl" style={{ color: card.color }}>
                  {card.count}
                </span>
              </div>

              <h3 className="font-roboto font-bold text-base uppercase tracking-wider text-white group-hover:text-[#fadf29] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
            </div>

            <p className="text-xs text-gray-500 mt-4 pt-2 border-t border-gray-800/80 flex items-center justify-between group-hover:text-gray-300">
              <span>Manage Data</span>
              <span className="text-base leading-none">&rarr;</span>
            </p>
          </Link>
        ))}
      </div>

      {/* PANEL RINGKASAN OPERASIONAL (3 KOLOM) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* PANEL 1: ANALITIK VOUCHER */}
        <div className="bg-black border-2 border-[#fadf29] rounded-xl p-6 shadow-[5px_5px_0px_#ff1493] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider">
                🏷️ Status Voucher
              </h2>
              <Link
                href="/admin/vouchers"
                className="text-xs font-bold text-[#0fdff8] hover:underline"
              >
                Detail &rarr;
              </Link>
            </div>

            {/* Progress Bar Redeem */}
            <div className="mb-5">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-400">Tingkat Pemakaian (Redeem)</span>
                <span className="font-bold text-green-400">
                  {vouchersUsed}/{vouchersTotal} ({redeemPercentage}%)
                </span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <div
                  className="h-full bg-gradient-to-r from-[#13bbad] to-[#0fdff8] transition-all duration-500"
                  style={{ width: `${redeemPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
              <div className="bg-gray-900 border border-[#fadf29]/40 rounded-lg p-2.5">
                <p className="text-gray-400 text-[10px] uppercase">Unused</p>
                <p className="font-anton text-xl text-[#fadf29] mt-0.5">{vouchersUnused}</p>
              </div>
              <div className="bg-gray-900 border border-green-500/40 rounded-lg p-2.5">
                <p className="text-gray-400 text-[10px] uppercase">Used</p>
                <p className="font-anton text-xl text-green-400 mt-0.5">{vouchersUsed}</p>
              </div>
              <div className="bg-gray-900 border border-red-500/40 rounded-lg p-2.5">
                <p className="text-gray-400 text-[10px] uppercase">Expired</p>
                <p className="font-anton text-xl text-red-400 mt-0.5">{vouchersExpired}</p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-800 flex justify-between text-xs text-gray-300">
            <span>
              Reguler (001–999): <strong className="text-[#13bbad]">{vouchersRegular}</strong>
            </span>
            <span>
              Talkshow (101–999): <strong className="text-purple-300">{vouchersTalkshow}</strong>
            </span>
          </div>
        </div>

        {/* PANEL 2: STATUS TALKSHOW & KOL */}
        <div className="bg-black border-2 border-[#ff1493] rounded-xl p-6 shadow-[5px_5px_0px_#0fdff8] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-anton text-xl text-[#ff1493] uppercase tracking-wider">
                🎙️ Talkshow &amp; KOL
              </h2>
              <Link
                href="/admin/talkshows"
                className="text-xs font-bold text-[#0fdff8] hover:underline"
              >
                Kelola &rarr;
              </Link>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-3">
                <p className="font-bold text-purple-300 uppercase mb-2">
                  Peserta Talkshow ({totalTalkshows} Sesi)
                </p>
                <div className="flex justify-between text-gray-300">
                  <span>
                    Pending: <strong className="text-[#fadf29]">{talkshowPending}</strong>
                  </span>
                  <span>
                    Approved: <strong className="text-green-400">{talkshowApproved}</strong>
                  </span>
                  <span>
                    Rejected: <strong className="text-red-400">{talkshowRejected}</strong>
                  </span>
                </div>
              </div>

              <div className="bg-gray-900/90 border border-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-pink-300 uppercase">
                    Key Opinion Leaders ({totalKols})
                  </p>
                  <Link href="/admin/kols" className="text-[11px] text-[#0fdff8] hover:underline">
                    Lihat KOL
                  </Link>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>
                    Link Terisi: <strong className="text-green-400">{verifiedKols}</strong>
                  </span>
                  <span>
                    Belum Isi Link: <strong className="text-yellow-300">{unverifiedKols}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="pt-3 mt-4 border-t border-gray-800 text-[11px] text-gray-400">
            Top 5 pendaftar approved per sesi Talkshow berhak Free Goodie Bag.
          </p>
        </div>

        {/* PANEL 3: INSIGHT VISITOR & KOMUNITAS */}
        <div className="bg-black border-2 border-[#0fdff8] rounded-xl p-6 shadow-[5px_5px_0px_#13bbad] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-anton text-xl text-[#0fdff8] uppercase tracking-wider">
                👥 Visitor &amp; Komunitas
              </h2>
              <Link
                href="/admin/visitors"
                className="text-xs font-bold text-[#fadf29] hover:underline"
              >
                Data Visitor &rarr;
              </Link>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between bg-gray-900/90 border border-gray-800 rounded-lg p-3">
                <span className="text-gray-300">Dengan Community Code</span>
                <span className="font-anton text-lg text-[#fadf29]">{communityVisitors}</span>
              </div>

              <div className="flex items-center justify-between bg-gray-900/90 border border-gray-800 rounded-lg p-3">
                <span className="text-gray-300">Visitor Umum (Tanpa Kode)</span>
                <span className="font-anton text-lg text-white">
                  {Math.max(0, totalVisitors - communityVisitors)}
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-900/90 border border-gray-800 rounded-lg p-3">
                <span className="text-gray-300">Subscribe Newsletter</span>
                <span className="font-anton text-lg text-[#13bbad]">{newsletterVisitors}</span>
              </div>
            </div>
          </div>

          <p className="pt-3 mt-4 border-t border-gray-800 text-[11px] text-gray-400">
            50 visitor pre-registered pertama yang check-in berhak Free Goodie Bag.
          </p>
        </div>
      </div>

      {/* PESAN TAMBAHAN / DEKORASI BAWAH */}
      <div className="p-6 bg-[#144333]/50 border-l-4 border-[#ff1493] rounded">
        <p className="text-[#eaddce] text-sm md:text-base italic">
          <strong className="text-[#ff1493] not-italic mr-2">TIP:</strong>
          Click on any of the cards above to navigate directly to their respective management pages. Ensure you regularly review 'Pending' applications in the Talkshows, Tenants, and Partners sections.
        </p>
      </div>
    </div>
  );
}