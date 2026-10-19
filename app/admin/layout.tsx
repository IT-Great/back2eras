"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const adminLinks = [
    { name: "Applications", path: "/admin/apply", icon: "📋" },
    { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
    { name: "Stories", path: "/admin/stories", icon: "📰" },
  ];

  return (
    <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
      {/* Mobile Header & Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#000000] border-b-2 border-[#ff1493] z-50 flex items-center justify-between px-4">
        <span className="font-anton text-xl text-[#0fdff8] uppercase">Admin Panel</span>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-[#fadf29] focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${
          isSidebarOpen ? "translate-x-0 top-16" : "-translate-x-full"
        }`}
      >
        <div className="p-6 hidden md:block border-b-2 border-gray-800">
          <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-widest drop-shadow-[2px_2px_0px_#ff1493]">
            Admin Panel
          </h2>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2 mt-4 md:mt-0">
          {adminLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
                  isActive 
                    ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" 
                    : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Back to Main Website */}
        <div className="p-4 border-t-2 border-gray-800">
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest"
          >
            <span>&larr;</span> Back to Site
          </Link>
        </div>
      </aside>

      {/* Overlay untuk mobile saat sidebar terbuka */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden mt-16"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-[#144333] pt-16 md:pt-0">
        <div className="p-6 md:p-10">
          {children}
        </div>
      </main>

    </div>
  );
}