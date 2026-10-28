/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const pathname = usePathname();

//   // const adminLinks = [
//   //   { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//   //   { name: "Applications", path: "/admin/apply", icon: "📋" },
//   //   { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//   //   { name: "Stories", path: "/admin/stories", icon: "📰" },
//   //   { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//   // ];

//   // const adminLinks = [
//   //   { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//   //   { name: "Tenants", path: "/admin/tenants", icon: "🏪" }, // <-- TAMBAHKAN BARIS INI
//   //   { name: "Applications", path: "/admin/apply", icon: "📋" },
//   //   { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//   //   { name: "Stories", path: "/admin/stories", icon: "📰" },
//   //   { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//   // ];

//   // const adminLinks = [
//   //   { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//   //   { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//   //   { name: "Partners", path: "/admin/partners", icon: "🤝" }, // <-- TAMBAHKAN BARIS INI
//   //   { name: "Applications", path: "/admin/apply", icon: "📋" },
//   //   { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//   //   { name: "Stories", path: "/admin/stories", icon: "📰" },
//   //   { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//   // ];

//   const adminLinks = [
//     { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//     { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//     { name: "Partners", path: "/admin/partners", icon: "🤝" },
//     { name: "Media", path: "/admin/media", icon: "📸" }, // <-- TAMBAHKAN BARIS INI
//     { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//     { name: "Stories", path: "/admin/stories", icon: "📰" },
//     { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//   ];

//   return (
//     <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
//       {/* Mobile Header & Hamburger */}
//       <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#000000] border-b-2 border-[#ff1493] z-50 flex items-center justify-between px-4">
//         <span className="font-anton text-xl text-[#0fdff8] uppercase">Admin Panel</span>
//         <button 
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="text-[#fadf29] focus:outline-none"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside 
//         className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${
//           isSidebarOpen ? "translate-x-0 top-16" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-6 hidden md:block border-b-2 border-gray-800">
//           <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-widest drop-shadow-[2px_2px_0px_#ff1493]">
//             Admin Panel
//           </h2>
//         </div>

//         <nav className="flex-1 p-4 flex flex-col gap-2 mt-4 md:mt-0">
//           {adminLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link 
//                 key={link.path} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
//                   isActive 
//                     ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" 
//                     : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
//                 }`}
//               >
//                 <span className="text-xl">{link.icon}</span>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Tombol Back to Main Website */}
//         <div className="p-4 border-t-2 border-gray-800">
//           <Link 
//             href="/"
//             className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest"
//           >
//             <span>&larr;</span> Back to Site
//           </Link>
//         </div>
//       </aside>

//       {/* Overlay untuk mobile saat sidebar terbuka */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-30 md:hidden mt-16"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Content Area */}
//       <main className="flex-1 h-screen overflow-y-auto bg-[#144333] pt-16 md:pt-0">
//         <div className="p-6 md:p-10">
//           {children}
//         </div>
//       </main>

//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation"; // TAMBAHKAN useRouter
// import Swal from "sweetalert2";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // State Proteksi
//   const pathname = usePathname();
//   const router = useRouter();

//   // PENGECEKAN TOKEN SAAT HALAMAN DIBUKA
//   useEffect(() => {
//     const token = localStorage.getItem("admin_token");
//     if (!token) {
//       router.push("/login"); // Jika tidak ada token, usir ke halaman login
//     } else {
//       setIsAuthenticated(true); // Jika ada, izinkan masuk
//     }
//   }, [router]);

//   const handleLogout = async () => {
//     const token = localStorage.getItem("admin_token");
    
//     // Panggil API Logout (Opsional, tapi bagus untuk menghapus token di database)
//     if (token) {
//       await fetch("https://back.back2eras.com/api/logout", {
//         method: "POST",
//         headers: {
//           "Accept": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//       });
//     }

//     // Hapus data dari Local Storage
//     localStorage.removeItem("admin_token");
//     localStorage.removeItem("admin_user");
    
//     Swal.fire({ title: "Logged Out", icon: "success", background: "#144333", color: "#eaddce", timer: 1500, showConfirmButton: false });
//     router.push("/login");
//   };

//   const adminLinks = [
//     { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//     { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//     { name: "Partners", path: "/admin/partners", icon: "🤝" },
//     { name: "Media", path: "/admin/media", icon: "📸" },
//     { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//     { name: "Stories", path: "/admin/stories", icon: "📰" },
//     { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//     { name: "My Profile", path: "/admin/profile", icon: "⚙️" }, // Tautan untuk update profil
//   ];

//   // Jangan render anak-anaknya (children) sebelum dipastikan otentik (mencegah kedipan UI)
//   if (!isAuthenticated) return <div className="h-screen w-screen bg-black flex items-center justify-center text-[#0fdff8] font-anton text-2xl">Checking Authorization...</div>;

//   return (
//     <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
//       {/* Mobile Header & Hamburger */}
//       <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#000000] border-b-2 border-[#ff1493] z-50 flex items-center justify-between px-4">
//         <span className="font-anton text-xl text-[#0fdff8] uppercase">Admin Panel</span>
//         <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#fadf29] focus:outline-none">
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0 top-16" : "-translate-x-full"}`}>
//         <div className="p-6 hidden md:block border-b-2 border-gray-800">
//           <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-widest drop-shadow-[2px_2px_0px_#ff1493]">
//             Admin Panel
//           </h2>
//         </div>

//         <nav className="flex-1 p-4 flex flex-col gap-2 mt-4 md:mt-0 overflow-y-auto">
//           {adminLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link 
//                 key={link.path} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
//                   isActive ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
//                 }`}
//               >
//                 <span className="text-xl">{link.icon}</span>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Tombol Logout & Back to Site */}
//         <div className="p-4 border-t-2 border-gray-800 flex flex-col gap-2">
//           <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors uppercase tracking-widest rounded text-left w-full">
//             <span>🚪</span> Logout
//           </button>
//           <Link href="/" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest rounded">
//             <span>&larr;</span> Back to Site
//           </Link>
//         </div>
//       </aside>

//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 z-30 md:hidden mt-16" onClick={() => setIsSidebarOpen(false)}></div>
//       )}

//       {/* Main Content Area */}
//       <main className="flex-1 h-screen overflow-y-auto bg-[#144333] pt-16 md:pt-0">
//         <div className="p-6 md:p-10">
//           {children}
//         </div>
//       </main>

//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   // State untuk menyimpan data admin yang login
//   const [adminUser, setAdminUser] = useState<{name: string, email: string} | null>(null); 
  
//   const pathname = usePathname();
//   const router = useRouter();

//   // Cek token dan ambil data user dari LocalStorage
//   useEffect(() => {
//     const token = localStorage.getItem("admin_token");
//     const userStr = localStorage.getItem("admin_user");
    
//     if (!token) {
//       router.push("/login"); 
//     } else {
//       setIsAuthenticated(true); 
//       if (userStr) {
//         setAdminUser(JSON.parse(userStr));
//       }
//     }
//   }, [router]);

//   const handleLogout = async () => {
//     const token = localStorage.getItem("admin_token");
//     if (token) {
//       await fetch("https://backend-back2eras.vercel.app/api/logout", {
//         method: "POST",
//         headers: { "Accept": "application/json", "Authorization": `Bearer ${token}` }
//       });
//     }
//     localStorage.removeItem("admin_token");
//     localStorage.removeItem("admin_user");
    
//     Swal.fire({ title: "Logged Out", icon: "success", background: "#144333", color: "#eaddce", timer: 1500, showConfirmButton: false });
//     router.push("/login");
//   };

//   const adminLinks = [
//     { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//     { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//     { name: "Partners", path: "/admin/partners", icon: "🤝" },
//     { name: "Media", path: "/admin/media", icon: "📸" },
//     { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//     { name: "Stories", path: "/admin/stories", icon: "📰" },
//     { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//     { name: "My Profile", path: "/admin/profile", icon: "⚙️" },
//   ];

//   if (!isAuthenticated) return <div className="h-screen w-screen bg-black flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">Checking Authorization...</div>;

//   return (
//     <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
//       {/* 1. SIDEBAR KIRI */}
//       <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
//         <div className="p-6 border-b-2 border-gray-800 flex justify-between items-center">
//           <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-widest drop-shadow-[2px_2px_0px_#ff1493]">
//             Admin Panel
//           </h2>
//         </div>

//         <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
//           {adminLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link 
//                 key={link.path} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
//                   isActive ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
//                 }`}
//               >
//                 <span className="text-xl">{link.icon}</span>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t-2 border-gray-800 flex flex-col gap-2">
//           <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors uppercase tracking-widest rounded text-left w-full">
//             <span>🚪</span> Logout
//           </button>
//           <Link href="/" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest rounded">
//             <span>&larr;</span> Back to Site
//           </Link>
//         </div>
//       </aside>

//       {/* Overlay penutup saat sidebar terbuka di mobile */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
//       )}

//       {/* 2. AREA KONTEN KANAN (Header + Main) */}
//       <div className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* TOP HEADER ADMIN */}
//         <header className="h-16 bg-[#000000] border-b-2 border-[#ff1493] shrink-0 flex items-center justify-between px-4 md:px-8 z-20">
          
//           {/* Kiri: Judul Halaman */}
//           <div>
//             <span className="font-anton text-xl text-[#0fdff8] uppercase tracking-widest hidden md:block">BACK2ERAS Dashboard</span>
//             <span className="font-anton text-xl text-[#0fdff8] uppercase tracking-widest md:hidden">Admin</span>
//           </div>

//           {/* Kanan: Profil & Hamburger */}
//           <div className="flex items-center gap-4">
            
//             {/* Tombol Profil */}
//             <Link href="/admin/profile" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
//               <div className="text-right hidden sm:block">
//                 <p className="text-sm font-bold text-[#fadf29] uppercase">{adminUser?.name || "Admin"}</p>
//                 <p className="text-xs text-gray-400">{adminUser?.email}</p>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-[#13bbad] border-2 border-[#0fdff8] flex items-center justify-center shadow-[2px_2px_0px_#ff1493] text-black font-anton text-lg">
//                 {/* Menampilkan huruf pertama dari nama */}
//                 {adminUser?.name ? adminUser.name.charAt(0).toUpperCase() : "A"}
//               </div>
//             </Link>

//             {/* Tombol Hamburger (Hanya Mobile) */}
//             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-[#fadf29] focus:outline-none ml-2">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>

//           </div>
//         </header>

//         {/* MAIN CONTENT BAWAH */}
//         <main className="flex-1 overflow-y-auto bg-[#144333] p-4 md:p-10 relative z-10">
//           {children}
//         </main>
        
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   // State untuk menyimpan data admin yang login
//   const [adminUser, setAdminUser] = useState<{name: string, email: string} | null>(null); 
  
//   const pathname = usePathname();
//   const router = useRouter();

//   // Cek token dan ambil data user dari LocalStorage
//   useEffect(() => {
//     const token = localStorage.getItem("admin_token");
//     const userStr = localStorage.getItem("admin_user");
    
//     if (!token) {
//       router.push("/login"); 
//     } else {
//       setIsAuthenticated(true); 
//       if (userStr) {
//         setAdminUser(JSON.parse(userStr));
//       }
//     }
//   }, [router]);

//   const handleLogout = async () => {
//     const token = localStorage.getItem("admin_token");
//     if (token) {
//       await fetch("https://backend-back2eras.vercel.app/api/logout", {
//         method: "POST",
//         headers: { "Accept": "application/json", "Authorization": `Bearer ${token}` }
//       });
//     }
//     localStorage.removeItem("admin_token");
//     localStorage.removeItem("admin_user");
    
//     Swal.fire({ title: "Logged Out", icon: "success", background: "#144333", color: "#eaddce", timer: 1500, showConfirmButton: false });
//     router.push("/login");
//   };

//   const adminLinks = [
//     { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//     { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//     { name: "Partners", path: "/admin/partners", icon: "🤝" },
//     { name: "Media", path: "/admin/media", icon: "📸" },
//     { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//     { name: "Stories", path: "/admin/stories", icon: "📰" },
//     { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//     { name: "My Profile", path: "/admin/profile", icon: "⚙️" },
//   ];

//   if (!isAuthenticated) return <div className="h-screen w-screen bg-black flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">Checking Authorization...</div>;

//   return (
//     <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
//       {/* 1. SIDEBAR KIRI */}
//       <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
//         <div className="p-6 border-b-2 border-gray-800 flex justify-between items-center">
//           <h2 className="font-anton text-2xl text-[#0fdff8] uppercase tracking-widest drop-shadow-[2px_2px_0px_#ff1493]">
//             Admin Panel
//           </h2>
//         </div>

//         <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
//           {adminLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link 
//                 key={link.path} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
//                   isActive ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
//                 }`}
//               >
//                 <span className="text-xl">{link.icon}</span>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t-2 border-gray-800 flex flex-col gap-2">
//           <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors uppercase tracking-widest rounded text-left w-full">
//             <span>🚪</span> Logout
//           </button>
//           <Link href="/" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest rounded">
//             <span>&larr;</span> Back to Site
//           </Link>
//         </div>
//       </aside>

//       {/* Overlay penutup saat sidebar terbuka di mobile */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
//       )}

//       {/* 2. AREA KONTEN KANAN (Header + Main Content) */}
//       <div className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* TOP HEADER ADMIN */}
//         <header className="h-16 bg-[#000000] border-b-2 border-[#ff1493] shrink-0 flex items-center justify-between px-4 md:px-8 z-20">
          
//           {/* Kiri: Judul Halaman */}
//           <div>
//             <span className="font-anton text-xl text-[#0fdff8] uppercase tracking-widest hidden md:block">BACK2ERAS Dashboard</span>
//             <span className="font-anton text-xl text-[#0fdff8] uppercase tracking-widest md:hidden">Admin</span>
//           </div>

//           {/* Kanan: Profil & Hamburger */}
//           <div className="flex items-center gap-4">
            
//             {/* Tombol Profil */}
//             <Link href="/admin/profile" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
//               <div className="text-right hidden sm:block">
//                 <p className="text-sm font-bold text-[#fadf29] uppercase">{adminUser?.name || "Admin"}</p>
//                 <p className="text-xs text-gray-400">{adminUser?.email}</p>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-[#13bbad] border-2 border-[#0fdff8] flex items-center justify-center shadow-[2px_2px_0px_#ff1493] text-black font-anton text-lg">
//                 {/* Menampilkan huruf pertama dari nama */}
//                 {adminUser?.name ? adminUser.name.charAt(0).toUpperCase() : "A"}
//               </div>
//             </Link>

//             {/* Tombol Hamburger (Hanya untuk Mobile) */}
//             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-[#fadf29] focus:outline-none ml-2">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>

//           </div>
//         </header>

//         {/* MAIN CONTENT BAWAH */}
//         <main className="flex-1 overflow-y-auto bg-[#144333] p-4 md:p-10 relative z-10">
//           {children}
//         </main>
        
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image"; // TAMBAHKAN IMPORT INI
// import { usePathname, useRouter } from "next/navigation";
// import Swal from "sweetalert2";

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   // State untuk menyimpan data admin yang login
//   const [adminUser, setAdminUser] = useState<{name: string, email: string} | null>(null); 
  
//   const pathname = usePathname();
//   const router = useRouter();

//   // Cek token dan ambil data user dari LocalStorage
//   useEffect(() => {
//     const token = localStorage.getItem("admin_token");
//     const userStr = localStorage.getItem("admin_user");
    
//     if (!token) {
//       router.push("/login"); 
//     } else {
//       setIsAuthenticated(true); 
//       if (userStr) {
//         setAdminUser(JSON.parse(userStr));
//       }
//     }
//   }, [router]);

//   const handleLogout = async () => {
//     const token = localStorage.getItem("admin_token");
//     if (token) {
//       await fetch("https://back.back2eras.com/api/logout", {
//         method: "POST",
//         headers: { "Accept": "application/json", "Authorization": `Bearer ${token}` }
//       });
//     }
//     localStorage.removeItem("admin_token");
//     localStorage.removeItem("admin_user");
    
//     Swal.fire({ title: "Logged Out", icon: "success", background: "#144333", color: "#eaddce", timer: 1500, showConfirmButton: false });
//     router.push("/login");
//   };

//   // const adminLinks = [
//   //   { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//   //   { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//   //   { name: "Partners", path: "/admin/partners", icon: "🤝" },
//   //   { name: "Media", path: "/admin/media", icon: "📸" },
//   //   { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//   //   { name: "Stories", path: "/admin/stories", icon: "📰" },
//   //   { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//   //   { name: "My Profile", path: "/admin/profile", icon: "⚙️" },
//   // ];

//   const adminLinks = [
//     { name: "Dashboard", path: "/admin/dashboard", icon: "📊" }, // <-- TAMBAHKAN INI DI ATAS
//     { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
//     { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
//     { name: "Partners", path: "/admin/partners", icon: "🤝" },
//     { name: "Media", path: "/admin/media", icon: "📸" },
//     { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
//     { name: "Stories", path: "/admin/stories", icon: "📰" },
//     { name: "Messages", path: "/admin/contacts", icon: "✉️" },
//     { name: "My Profile", path: "/admin/profile", icon: "⚙️" },
//   ];

//   if (!isAuthenticated) return <div className="h-screen w-screen bg-black flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">Checking Authorization...</div>;

//   return (
//     <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
//       {/* 1. SIDEBAR KIRI */}
//       <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#000000] border-r-4 border-[#13bbad] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
//         {/* BAGIAN LOGO SIDEBAR */}
//         <div className="p-6 border-b-2 border-gray-800 flex justify-center items-center h-24">
//           <Link href="/admin/visitors" className="hover:scale-105 transition-transform duration-300">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="BACK2ERAS Admin Panel" 
//               width={180} 
//               height={60} 
//               className="h-10 w-auto object-contain drop-shadow-[2px_2px_0px_#ff1493]"
//               priority
//             />
//           </Link>
//         </div>

//         <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
//           {adminLinks.map((link) => {
//             const isActive = pathname === link.path;
//             return (
//               <Link 
//                 key={link.path} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded font-anton uppercase tracking-wide transition-colors ${
//                   isActive ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
//                 }`}
//               >
//                 <span className="text-xl">{link.icon}</span>
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="p-4 border-t-2 border-gray-800 flex flex-col gap-2">
//           <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors uppercase tracking-widest rounded text-left w-full">
//             <span>🚪</span> Logout
//           </button>
//           <Link href="/" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest rounded">
//             <span>&larr;</span> Back to Site
//           </Link>
//         </div>
//       </aside>

//       {/* Overlay penutup saat sidebar terbuka di mobile */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
//       )}

//       {/* 2. AREA KONTEN KANAN (Header + Main Content) */}
//       <div className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
//         {/* TOP HEADER ADMIN */}
//         <header className="h-16 bg-[#000000] border-b-2 border-[#ff1493] shrink-0 flex items-center justify-between px-4 md:px-8 z-20">
          
//           {/* Kiri: Judul Halaman & Logo Mobile */}
//           <div className="flex items-center">
//             {/* Teks untuk Desktop */}
//             <span className="font-anton text-xl text-[#0fdff8] uppercase tracking-widest hidden md:block">BACK2ERAS Dashboard</span>
            
//             {/* Logo untuk Mobile (Menggantikan teks 'Admin') */}
//             <div className="md:hidden">
//               <Link href="/admin/visitors">
//                 <Image 
//                   src="/assets/images/back2eras.png" 
//                   alt="BACK2ERAS Mobile" 
//                   width={120} 
//                   height={40} 
//                   className="h-8 w-auto object-contain"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Kanan: Profil & Hamburger */}
//           <div className="flex items-center gap-4">
            
//             {/* Tombol Profil */}
//             <Link href="/admin/profile" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
//               <div className="text-right hidden sm:block">
//                 <p className="text-sm font-bold text-[#fadf29] uppercase">{adminUser?.name || "Admin"}</p>
//                 <p className="text-xs text-gray-400">{adminUser?.email}</p>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-[#13bbad] border-2 border-[#0fdff8] flex items-center justify-center shadow-[2px_2px_0px_#ff1493] text-black font-anton text-lg">
//                 {/* Menampilkan huruf pertama dari nama */}
//                 {adminUser?.name ? adminUser.name.charAt(0).toUpperCase() : "A"}
//               </div>
//             </Link>

//             {/* Tombol Hamburger (Hanya untuk Mobile) */}
//             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-[#fadf29] focus:outline-none ml-2">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>

//           </div>
//         </header>

//         {/* MAIN CONTENT BAWAH */}
//         <main className="flex-1 overflow-y-auto bg-[#144333] p-4 md:p-10 relative z-10">
//           {children}
//         </main>
        
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle untuk Mobile
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false); // Toggle untuk Desktop
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // State untuk menyimpan data admin yang login
  const [adminUser, setAdminUser] = useState<{name: string, email: string} | null>(null); 
  
  const pathname = usePathname();
  const router = useRouter();

  // Cek token dan ambil data user dari LocalStorage
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const userStr = localStorage.getItem("admin_user");
    
    if (!token) {
      router.push("/login"); 
    } else {
      setIsAuthenticated(true); 
      if (userStr) {
        setAdminUser(JSON.parse(userStr));
      }
    }
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      await fetch("https://backend-back2eras.vercel.app/api/logout", {
        method: "POST",
        headers: { "Accept": "application/json", "Authorization": `Bearer ${token}` }
      });
    }
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    
    Swal.fire({ title: "Logged Out", icon: "success", background: "#144333", color: "#eaddce", timer: 1500, showConfirmButton: false });
    router.push("/login");
  };

  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Visitors", path: "/admin/visitors", icon: "🎟️" },
    { name: "Tenants", path: "/admin/tenants", icon: "🏪" },
    { name: "Partners", path: "/admin/partners", icon: "🤝" },
    { name: "Media", path: "/admin/media", icon: "📸" },
    { name: "Vendor Categories", path: "/admin/categories", icon: "📁" },
    { name: "Stories", path: "/admin/stories", icon: "📰" },
    { name: "Messages", path: "/admin/contacts", icon: "✉️" },
    { name: "My Profile", path: "/admin/profile", icon: "⚙️" },
  ];

  if (!isAuthenticated) return <div className="h-screen w-screen bg-black flex items-center justify-center text-[#0fdff8] font-anton text-2xl animate-pulse">Checking Authorization...</div>;

  return (
    <div className="flex h-screen bg-[#144333] font-roboto overflow-hidden">
      
      {/* 1. SIDEBAR KIRI (Dengan transisi lebar adaptif) */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 bg-[#000000] border-r-4 border-[#13bbad] transform transition-all duration-300 ease-in-out md:relative flex flex-col 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        ${isDesktopSidebarCollapsed ? "md:w-20" : "md:w-64"} w-64`}
      >
        
        {/* BAGIAN LOGO SIDEBAR */}
        <div className="p-6 border-b-2 border-gray-800 flex justify-center items-center h-24 overflow-hidden">
          <Link href="/admin/dashboard" className="hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full">
            
            {/* Logo Lengkap (Ditampilkan jika sidebar besar / di mobile) */}
            <div className={`transition-opacity duration-300 ${isDesktopSidebarCollapsed ? "md:hidden" : "block"}`}>
              <Image 
                src="/assets/images/back2eras.png" 
                alt="BACK2ERAS Admin Panel" 
                width={180} 
                height={60} 
                className="h-10 w-auto object-contain drop-shadow-[2px_2px_0px_#ff1493]"
                priority
              />
            </div>
            
            {/* Ikon Logo Singkat (Ditampilkan HANYA saat sidebar diciutkan di desktop) */}
            <div className={`hidden transition-opacity duration-300 ${isDesktopSidebarCollapsed ? "md:block" : "hidden"}`}>
              <span className="font-anton text-3xl text-[#ff1493] drop-shadow-[2px_2px_0px_#0fdff8]">B2</span>
            </div>

          </Link>
        </div>

        {/* NAVIGASI MENU */}
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {adminLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                title={isDesktopSidebarCollapsed ? link.name : ""} // Menampilkan tooltip nama saat dihover di mode kecil
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center py-3 rounded font-anton uppercase tracking-wide transition-colors ${
                  isDesktopSidebarCollapsed ? "md:justify-center px-0 md:px-2 gap-0" : "gap-3 px-4"
                } ${
                  isActive ? "bg-[#ff1493] text-white shadow-[2px_2px_0px_#0fdff8]" : "text-gray-400 hover:text-[#fadf29] hover:bg-gray-900"
                }`}
              >
                <span className="text-xl shrink-0">{link.icon}</span>
                {/* Teks disembunyikan perlahan jika sidebar collapse */}
                <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${
                  isDesktopSidebarCollapsed ? "md:w-0 md:opacity-0" : "w-auto opacity-100 ml-3"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* TOMBOL BAWAH */}
        <div className="p-4 border-t-2 border-gray-800 flex flex-col gap-2">
          
          <button 
            onClick={handleLogout} 
            title={isDesktopSidebarCollapsed ? "Logout" : ""}
            className={`flex items-center py-3 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors uppercase tracking-widest rounded ${
              isDesktopSidebarCollapsed ? "md:justify-center px-0 md:px-2 gap-0" : "gap-2 px-4 text-left w-full"
            }`}
          >
            <span className="text-lg shrink-0">🚪</span>
            <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${isDesktopSidebarCollapsed ? "md:w-0 md:opacity-0" : "w-auto opacity-100 ml-2"}`}>
              Logout
            </span>
          </button>
          
          <Link 
            href="/" 
            title={isDesktopSidebarCollapsed ? "Back to Site" : ""}
            className={`flex items-center py-3 text-sm font-bold text-[#eaddce] hover:text-[#0fdff8] transition-colors uppercase tracking-widest rounded ${
              isDesktopSidebarCollapsed ? "md:justify-center px-0 md:px-2 gap-0" : "gap-2 px-4"
            }`}
          >
            <span className="text-lg shrink-0">&larr;</span>
            <span className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${isDesktopSidebarCollapsed ? "md:w-0 md:opacity-0" : "w-auto opacity-100 ml-2"}`}>
              Back to Site
            </span>
          </Link>
        </div>
      </aside>

      {/* Overlay penutup saat sidebar terbuka di mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* 2. AREA KONTEN KANAN (Header + Main Content) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden w-full relative">
        
        {/* TOP HEADER ADMIN */}
        <header className="h-16 bg-[#000000] border-b-2 border-[#ff1493] shrink-0 flex items-center justify-between px-4 md:px-6 z-20 transition-all duration-300">
          
          {/* Kiri: Hamburger Desktop & Logo Mobile */}
          <div className="flex items-center gap-4">
            
            {/* Tombol Hamburger Desktop (Menggantikan Teks) */}
            <button 
              onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)} 
              className="hidden md:block text-[#0fdff8] hover:text-[#ff1493] focus:outline-none transition-colors"
              aria-label="Toggle Sidebar"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Logo untuk Mobile */}
            <div className="md:hidden">
              <Link href="/admin/dashboard">
                <Image 
                  src="/assets/images/back2eras.png" 
                  alt="BACK2ERAS Mobile" 
                  width={120} 
                  height={40} 
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Kanan: Profil & Hamburger Mobile */}
          <div className="flex items-center gap-4">
            
            {/* Tombol Profil */}
            <Link href="/admin/profile" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#fadf29] uppercase">{adminUser?.name || "Admin"}</p>
                <p className="text-xs text-gray-400">{adminUser?.email}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#13bbad] border-2 border-[#0fdff8] flex items-center justify-center shadow-[2px_2px_0px_#ff1493] text-black font-anton text-lg">
                {adminUser?.name ? adminUser.name.charAt(0).toUpperCase() : "A"}
              </div>
            </Link>

            {/* Tombol Hamburger (Hanya untuk Mobile) */}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-[#fadf29] focus:outline-none ml-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </header>

        {/* MAIN CONTENT BAWAH */}
        <main className="flex-1 overflow-y-auto bg-[#144333] p-4 md:p-10 relative z-10 transition-all duration-300">
          {children}
        </main>
        
      </div>
    </div>
  );
}