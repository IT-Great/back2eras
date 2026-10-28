/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface DashboardStats {
  visitors: number;
  tenants: number;
  partners: number;
  media: number;
  contacts: number;
  stories: number;
  categories: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://back.back2eras.com/api/dashboard/stats", {
          headers: { "Accept": "application/json" }
        });
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="text-[#0fdff8] font-anton text-2xl animate-pulse">Loading Analytics...</div>;

  const statCards = [
    { title: "Registered Visitors", count: stats?.visitors, icon: "🎟️", color: "#0fdff8", link: "/admin/visitors" },
    { title: "Tenant Applications", count: stats?.tenants, icon: "🏪", color: "#fadf29", link: "/admin/tenants" },
    { title: "Partnership Inquiries", count: stats?.partners, icon: "🤝", color: "#ff1493", link: "/admin/partners" },
    { title: "Media Registrations", count: stats?.media, icon: "📸", color: "#13bbad", link: "/admin/media" },
    { title: "Contact Messages", count: stats?.contacts, icon: "✉️", color: "#fe9d04", link: "/admin/contacts" },
    { title: "Published Stories", count: stats?.stories, icon: "📰", color: "#0fdff8", link: "/admin/stories" },
    { title: "Vendor Categories", count: stats?.categories, icon: "📁", color: "#fadf29", link: "/admin/categories" },
  ];

  return (
    <div className="max-w-7xl mx-auto text-[#eaddce]">
      
      <div className="mb-10">
        <h1 className="font-anton text-4xl md:text-5xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493]">
          Overview Dashboard
        </h1>
        <p className="text-gray-400 mt-2">Welcome! Here is the live summary of your BACK2ERAS event data.</p>
      </div>

      {/* Grid Kartu Analitik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <Link 
            key={index} 
            href={card.link}
            className="group relative bg-[#000] border-2 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2"
            style={{ borderColor: card.color, boxShadow: `4px 4px 0px ${card.color}` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-12 h-12 rounded flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${card.color}20`, border: `1px solid ${card.color}` }}
              >
                {card.icon}
              </div>
              <div className="text-right">
                <span className="font-anton text-4xl" style={{ color: card.color }}>
                  {card.count || 0}
                </span>
              </div>
            </div>
            
            <h3 className="font-roboto font-bold text-lg uppercase tracking-wider text-white group-hover:text-[#fadf29] transition-colors">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1 group-hover:text-gray-300">
              Manage Data <span className="text-lg leading-none">&rarr;</span>
            </p>
          </Link>
        ))}
      </div>

      {/* Pesan Tambahan / Dekorasi Bawah */}
      <div className="mt-12 p-6 bg-[#144333]/50 border-l-4 border-[#ff1493] rounded">
        <p className="text-[#eaddce] text-sm md:text-base italic">
          <strong className="text-[#ff1493] not-italic mr-2">TIP:</strong> 
          Click on any of the cards above to navigate directly to their respective management pages. Ensure you regularly review 'Pending' applications in the Tenants and Partners sections.
        </p>
      </div>

    </div>
  );
}