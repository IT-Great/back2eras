/* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full p-4 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
//         {/* Hamburger Button (Kiri) */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] transition-colors"
//           aria-label="Open Menu"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo (Tengah) - Menggunakan Font Anton */}
//         <div className="absolute left-1/2 -translate-x-1/2">
//           <Link href="/" className="font-anton text-2xl tracking-wider text-[#fadf29] uppercase drop-shadow-[2px_2px_0px_#fe9d04]">
//             80s Thrift Fest
//           </Link>
//         </div>

//         {/* Ruang kosong di kanan untuk menyeimbangkan flexbox */}
//         <div className="w-8"></div>
//       </header>

//       {/* SIDEBAR OVERLAY */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         >
//           <div 
//             className="fixed top-0 left-0 w-72 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform"
//             onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam sidebar menutup overlay
//           >
//             <div className="flex justify-between items-center mb-10">
//               <span className="font-pacifico text-2xl text-[#144333]">Menu</span>
//               <button 
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#144333] hover:text-[#ff1493] transition-colors"
//               >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <nav className="flex flex-col gap-6 font-anton text-xl tracking-wide uppercase">
//               {menuLinks.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   href={link.path}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
            
//             <div className="mt-auto pt-6 border-t border-[#144333]/20 text-[#144333] font-roboto font-bold text-sm">
//               <p>Waroeng Depe &copy; 2026</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Mengimpor komponen Image dari Next.js

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 py-3 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
//         {/* Hamburger Button (Kiri) */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] transition-colors focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-102 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} // Dimensi lebar default
//               height={100} // Dimensi tinggi default
//               priority // Mengoptimalkan pemuatan gambar penting (LCP)
//               className="h-8 md:h-12 w-auto object-contain" // Tinggi 32px di HP dan 48px di Desktop
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan untuk menyeimbangkan posisi absolute logo */}
//         <div className="w-12 h-12"></div>
//       </header>

//       {/* SIDEBAR OVERLAY */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         >
//           <div 
//             className="fixed top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam sidebar menutup overlay
//           >
//             {/* Bagian Atas Sidebar */}
//             <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#144333]/20">
//               {/* Logo di dalam Sidebar */}
//               <Image 
//                 src="/assets/images/back2eras.png" 
//                 alt="80s Thrift Festival Menu" 
//                 width={400} 
//                 height={100} 
//                 className="h-7 w-auto object-contain"
//               />
//               <button 
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="p-1 text-[#144333] hover:text-[#ff1493] transition-colors focus:outline-none"
//               >
//                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Link Navigasi */}
//             <nav className="flex flex-col gap-5 font-anton text-xl tracking-wide uppercase">
//               {menuLinks.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   href={link.path}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
            
//             {/* Footer Sidebar */}
//             <div className="mt-auto pt-6 border-t border-[#144333]/20 text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//               <span className="text-xs text-white bg-[#144333] px-2 py-0.5 rounded font-mono">v1.0</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Mengimpor komponen Image dari Next.js

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR - Padding vertikal (py) diperbesar agar ruang logo lebih lega */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
//         {/* Hamburger Button (Kiri) - Ikon sedikit diperbesar menjadi w-10 h-10 */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] transition-colors focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               // PERUBAHAN: Class h- diperbesar (Tinggi 48px di HP, 64px layar sedang, 80px di Desktop)
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan untuk menyeimbangkan posisi absolute logo (Disamakan dengan ukuran area hamburger) */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR OVERLAY */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         >
//           <div 
//             className="fixed top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             {/* Bagian Atas Sidebar */}
//             <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#144333]/20">
//               {/* Logo di dalam Sidebar */}
//               <Image 
//                 src="/assets/images/back2eras.png" 
//                 alt="80s Thrift Festival Menu" 
//                 width={600} 
//                 height={150} 
//                 // PERUBAHAN: Class height diperbesar dari h-7 menjadi h-12 agar menonjol di sidebar
//                 className="h-12 w-auto object-contain"
//               />
//               <button 
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="p-1 text-[#144333] hover:text-[#ff1493] transition-colors focus:outline-none"
//               >
//                 <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Link Navigasi */}
//             <nav className="flex flex-col gap-5 font-anton text-xl tracking-wide uppercase">
//               {menuLinks.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   href={link.path}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
            
//             {/* Footer Sidebar */}
//             <div className="mt-auto pt-6 border-t border-[#144333]/20 text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//               <span className="text-xs text-white bg-[#144333] px-2 py-0.5 rounded font-mono">v1.0</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Mengimpor komponen Image dari Next.js

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR - Padding vertikal (py) diperbesar agar ruang logo lebih lega */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
//         {/* Hamburger Button (Kiri) - Ikon sedikit diperbesar menjadi w-10 h-10 */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] transition-colors focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               // PERUBAHAN: Class h- diperbesar (Tinggi 48px di HP, 64px layar sedang, 80px di Desktop)
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan untuk menyeimbangkan posisi absolute logo (Disamakan dengan ukuran area hamburger) */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR OVERLAY */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         >
//           <div 
//             className="fixed top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             {/* Bagian Atas Sidebar */}
//             <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#144333]/20">
//               {/* Logo di dalam Sidebar */}
//               <Image 
//                 src="/assets/images/back2eras.png" 
//                 alt="80s Thrift Festival Menu" 
//                 width={600} 
//                 height={150} 
//                 // PERUBAHAN: Class height diperbesar dari h-7 menjadi h-12 agar menonjol di sidebar
//                 className="h-12 w-auto object-contain"
//               />
//               <button 
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="p-1 text-[#144333] hover:text-[#ff1493] transition-colors focus:outline-none"
//               >
//                 <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Link Navigasi */}
//             <nav className="flex flex-col gap-5 font-anton text-xl tracking-wide uppercase">
//               {menuLinks.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   href={link.path}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
            
//             {/* Bagian Bawah Sidebar (Social & Footer) */}
//             <div className="mt-auto flex flex-col gap-6">
              
//               {/* Ikon Sosial Media (IG & TikTok) */}
//               <div className="flex gap-4">
//                 <a 
//                   href="https://www.instagram.com/waroengdepesby" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all"
//                   aria-label="Instagram"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                   </svg>
//                 </a>
//                 <a 
//                   href="https://www.tiktok.com/@waroengdepesby" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all"
//                   aria-label="TikTok"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                     <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Footer Sidebar */}
//               <div className="pt-5 border-t border-[#144333]/20 text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//                 <span>Waroeng Depe &copy; 2026</span>
//                 {/* <span className="text-xs text-white bg-[#144333] px-2 py-0.5 rounded font-mono">v1.0</span> */}
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     // { name: "Apply for The Event", path: "/apply" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
//         {/* Hamburger Button (Kiri) */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] transition-colors focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR OVERLAY */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         >
//           <div 
//             className="fixed top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()} 
//           >
//             {/* Bagian Atas Sidebar */}
//             <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//               <Image 
//                 src="/assets/images/back2eras.png" 
//                 alt="80s Thrift Festival Menu" 
//                 width={600} 
//                 height={150} 
//                 className="h-12 w-auto object-contain"
//               />
//               <button 
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="p-1 text-[#144333] hover:text-[#ff1493] transition-colors focus:outline-none"
//               >
//                 <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Link Navigasi - PERUBAHAN ADA DI SINI */}
//             {/* Ditambahkan flex-1 dan overflow-y-auto agar area ini bisa di-scroll jika menu terlalu banyak */}
//             <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//               {menuLinks.map((link, index) => (
//                 <Link 
//                   key={index} 
//                   href={link.path}
//                   onClick={() => setIsSidebarOpen(false)}
//                   className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
            
//             {/* Bagian Bawah Sidebar (Social & Footer) */}
//             <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
              
//               {/* Ikon Sosial Media (IG & TikTok) */}
//               <div className="flex gap-4">
//                 <a 
//                   href="https://www.instagram.com/waroengdepesby" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all"
//                   aria-label="Instagram"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                   </svg>
//                 </a>
//                 <a 
//                   href="https://www.tiktok.com/@waroengdepesby" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all"
//                   aria-label="TikTok"
//                 >
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                     <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                   </svg>
//                 </a>
//               </div>

//               {/* Footer Sidebar */}
//               <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//                 <span>Waroeng Depe &copy; 2026</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* HEADER BAR */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
        
//         {/* Hamburger Button (Kiri) - Ditambahkan cursor-pointer dan animasi hover scale */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER (Tidak lagi menggunakan '&&' agar animasi penutup bisa berjalan) */}
//       <div 
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
        
//         {/* Backdrop (Latar Belakang Hitam Transparan) - Animasi Fade In/Out */}
//         <div 
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         {/* Sidebar Panel - Animasi Slide dari Kiri */}
//         <div 
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* Bagian Atas Sidebar */}
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="80s Thrift Festival Menu" 
//               width={600} 
//               height={150} 
//               className="h-12 w-auto object-contain"
//             />
//             {/* Tombol Tutup (X) - Ditambahkan cursor-pointer dan hover scale */}
//             <button 
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Link Navigasi */}
//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link 
//                 key={index} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Bagian Bawah Sidebar (Social & Footer) */}
//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
            
//             {/* Ikon Sosial Media (IG & TikTok) */}
//             <div className="flex gap-4">
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>

//             {/* Footer Sidebar */}
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [announcementIndex, setAnnouncementIndex] = useState(0);

//   // Daftar teks pengumuman yang akan ditampilkan bergantian
//   const announcements = [
//     "BACK2ERAS 2026 OPEN IN 27 NOV – 1 DEC: SEE NOW",
//     "APPLY NOW: BACK TO 80'S THRIFT FEST 2026"
//   ];

//   // Efek untuk mengganti teks setiap 4 detik (4000 ms)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//     }, 4000);
//     return () => clearInterval(interval); // Membersihkan interval saat komponen dibongkar
//   }, [announcements.length]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* ANNOUNCEMENT BAR (Bar Hitam Paling Atas) */}
//       <div className="bg-[#000000] w-full py-2 px-4 text-center z-50 relative border-b border-[#333]">
//         <p 
//           key={announcementIndex} // Key memaksa animasi berjalan ulang saat teks berganti
//           className="font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-pulse"
//         >
//           {announcements[announcementIndex]}
//         </p>
//       </div>

//       {/* HEADER BAR */}
//       <header className="sticky top-0 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
        
//         {/* Hamburger Button (Kiri) */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo Menggunakan Gambar Lokal (Tengah) */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer di kanan untuk penyeimbang posisi logo */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER */}
//       <div 
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
        
//         {/* Backdrop (Latar Belakang Hitam Transparan) */}
//         <div 
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         {/* Sidebar Panel */}
//         <div 
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* Bagian Atas Sidebar */}
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="80s Thrift Festival Menu" 
//               width={600} 
//               height={150} 
//               className="h-12 w-auto object-contain"
//             />
//             {/* Tombol Tutup (X) */}
//             <button 
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           {/* Link Navigasi */}
//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link 
//                 key={index} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Bagian Bawah Sidebar (Social & Footer) */}
//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
            
//             {/* Ikon Sosial Media (IG & TikTok) */}
//             <div className="flex gap-4">
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>

//             {/* Footer Sidebar */}
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [announcementIndex, setAnnouncementIndex] = useState(0);

//   // Daftar teks pengumuman
//   const announcements = [
//     "BACK2ERAS 2026 OPEN IN 27 NOV – 1 DEC: SEE NOW",
//     "APPLY NOW: BACK TO 80'S THRIFT FEST 2026"
//   ];

//   // Ganti pengumuman tiap 4 detik
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [announcements.length]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* 
//         ANNOUNCEMENT BAR (FIXED TOP) 
//         Menggunakan h-8 (32px) agar ukurannya konsisten.
//       */}
//       <div className="fixed top-0 left-0 right-0 h-8 bg-[#000000] z-50 border-b border-[#333] flex items-center justify-between px-4">
        
//         {/* Panah Kiri */}
//         <button 
//           onClick={() => setAnnouncementIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1))}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-colors focus:outline-none"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Teks Animasi Floating */}
//         <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
//           <p 
//             key={announcementIndex}
//             // Animasi dari Tailwind: animate-[nama_keyframe_durasi_easing_forwards]
//             className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-[floatUp_0.5s_ease-out_forwards]"
//           >
//             {announcements[announcementIndex]}
//           </p>
//         </div>

//         {/* Panah Kanan */}
//         <button 
//           onClick={() => setAnnouncementIndex((prev) => (prev + 1) % announcements.length)}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-colors focus:outline-none"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* 
//         HEADER BAR 
//         Karena Announcement Bar fixed dan tingginya h-8 (32px), 
//         maka Header ini diberi mt-8 (margin-top: 32px) dan tetap sticky top-8.
//       */}
//       <header className="sticky top-8 mt-8 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-lg border-b-4 border-[#ff1493]">
        
//         {/* Hamburger Button */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain" 
//             />
//           </Link>
//         </div>

//         {/* Spacer Kanan */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER */}
//       <div 
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
//         <div 
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         <div 
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="80s Thrift Festival Menu" 
//               width={600} 
//               height={150} 
//               className="h-12 w-auto object-contain"
//             />
//             <button 
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link 
//                 key={index} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
//             <div className="flex gap-4">
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [announcementIndex, setAnnouncementIndex] = useState(0);
//   const [animateKey, setAnimateKey] = useState(0); // Kunci unik untuk memicu ulang animasi

//   // Daftar teks pengumuman
//   const announcements = [
//     "BACK2ERAS 2026 OPEN IN 27 NOV – 1 DEC: SEE NOW",
//     "APPLY NOW: BACK TO 80'S THRIFT FEST 2026"
//   ];

//   // Ganti pengumuman tiap 4 detik dan perbarui trigger animasi
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//       setAnimateKey((prev) => prev + 1);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [announcements.length]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   // CSS Keyframes lokal agar tidak perlu mengubah tailwind.config.ts
//   const slideUpAnimation = `
//     @keyframes slideUpFade {
//       0% { transform: translateY(100%); opacity: 0; }
//       15% { transform: translateY(0); opacity: 1; }
//       85% { transform: translateY(0); opacity: 1; }
//       100% { transform: translateY(-100%); opacity: 0; }
//     }
//     .animate-slide-up-fade {
//       animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     }
//   `;

//   return (
//     <>
//       {/* Inject gaya CSS kustom ke dokumen */}
//       <style>{slideUpAnimation}</style>

//       {/* ANNOUNCEMENT BAR (FIXED TOP) */}
//       <div className="fixed top-0 left-0 right-0 h-10 bg-[#000000] z-50 border-b-2 border-[#13bbad] flex items-center justify-between px-4">
        
//         {/* Panah Kiri */}
//         <button 
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:-translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Teks Animasi - Menggunakan kontainer tersembunyi agar teks yang muncul dari bawah tidak meluber */}
//         <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
//           <p 
//             key={animateKey}
//             className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-slide-up-fade"
//           >
//             {announcements[announcementIndex]}
//           </p>
//         </div>

//         {/* Panah Kanan */}
//         <button 
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* HEADER BAR Utama */}
//       <header className="sticky top-10 mt-10 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-[0px_4px_20px_rgba(255,20,147,0.3)] border-b-4 border-[#ff1493]">
        
//         {/* Hamburger Button */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[2px_2px_0px_#fadf29]" 
//             />
//           </Link>
//         </div>

//         {/* Spacer Kanan */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER */}
//       <div 
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
//         <div 
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         <div 
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="80s Thrift Festival Menu" 
//               width={600} 
//               height={150} 
//               className="h-12 w-auto object-contain"
//             />
//             <button 
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link 
//                 key={index} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
//             <div className="flex gap-4">
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [announcementIndex, setAnnouncementIndex] = useState(0);
//   const [animateKey, setAnimateKey] = useState(0);

//   // State untuk Timer
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [isHydrated, setIsHydrated] = useState(false);

//   // Tanggal target: 27 Nov 2026, 08:00 AM
//   const targetDate = new Date("2026-11-27T08:00:00").getTime();

//   // Logika Countdown Timer
//   useEffect(() => {
//     setIsHydrated(true);

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         // Jika waktu sudah lewat
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     updateTimer(); // Panggil sekali langsung
//     const timerInterval = setInterval(updateTimer, 1000);
//     return () => clearInterval(timerInterval);
//   }, []);

//   // Format string timer: "14D 05H 22M 10S"
//   const timerString = isHydrated 
//     ? `${String(timeLeft.days).padStart(2, '0')}D ${String(timeLeft.hours).padStart(2, '0')}H ${String(timeLeft.minutes).padStart(2, '0')}M ${String(timeLeft.seconds).padStart(2, '0')}S` 
//     : "LOADING...";

//   // Daftar teks pengumuman (digabung dengan timer)
//   const announcements = [
//     `BACK2ERAS 2026 OPEN IN ${timerString}`,
//     "APPLY NOW: BACK TO 80'S THRIFT FEST 2026"
//   ];

//   // Ganti pengumuman tiap 4 detik dan perbarui trigger animasi
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//       setAnimateKey((prev) => prev + 1);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [announcements.length]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   // CSS Keyframes lokal
//   const slideUpAnimation = `
//     @keyframes slideUpFade {
//       0% { transform: translateY(100%); opacity: 0; }
//       15% { transform: translateY(0); opacity: 1; }
//       85% { transform: translateY(0); opacity: 1; }
//       100% { transform: translateY(-100%); opacity: 0; }
//     }
//     .animate-slide-up-fade {
//       animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     }
//   `;

//   return (
//     <>
//       {/* Inject gaya CSS kustom */}
//       <style>{slideUpAnimation}</style>

//       {/* ANNOUNCEMENT BAR (FIXED TOP) */}
//       <div className="fixed top-0 left-0 right-0 h-10 bg-[#000000] z-50 border-b-2 border-[#13bbad] flex items-center justify-between px-4">

//         {/* Panah Kiri */}
//         <button 
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:-translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Teks Animasi - Menggunakan kontainer tersembunyi agar teks yang muncul dari bawah tidak meluber */}
//         <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
//           <p 
//             key={animateKey}
//             className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-slide-up-fade text-center w-full"
//           >
//             {announcements[announcementIndex]}
//           </p>
//         </div>

//         {/* Panah Kanan */}
//         <button 
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* HEADER BAR Utama */}
//       <header className="sticky top-10 mt-10 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-[0px_4px_20px_rgba(255,20,147,0.3)] border-b-4 border-[#ff1493]">

//         {/* Hamburger Button */}
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="Back to 80's Era Thrift Festival" 
//               width={400} 
//               height={100} 
//               priority 
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[2px_2px_0px_#fadf29]" 
//             />
//           </Link>
//         </div>

//         {/* Spacer Kanan */}
//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER */}
//       <div 
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
//         <div 
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         <div 
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image 
//               src="/assets/images/back2eras.png" 
//               alt="80s Thrift Festival Menu" 
//               width={600} 
//               height={150} 
//               className="h-12 w-auto object-contain"
//             />
//             <button 
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link 
//                 key={index} 
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
          
//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
//             <div className="flex gap-4">
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [announcementIndex, setAnnouncementIndex] = useState(0);
//   const [animateKey, setAnimateKey] = useState(0);

//   // State untuk Timer
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [isHydrated, setIsHydrated] = useState(false);

//   // Tanggal target: 27 Nov 2026, 08:00 AM
//   const targetDate = new Date("2026-11-27T08:00:00").getTime();

//   // Logika Countdown Timer
//   useEffect(() => {
//     setIsHydrated(true);

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance > 0) {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     updateTimer();
//     const timerInterval = setInterval(updateTimer, 1000);
//     return () => clearInterval(timerInterval);
//   }, []);

//   const timerString = isHydrated
//     ? `${String(timeLeft.days).padStart(2, "0")}D ${String(timeLeft.hours).padStart(2, "0")}H ${String(timeLeft.minutes).padStart(2, "0")}M ${String(timeLeft.seconds).padStart(2, "0")}S`
//     : "LOADING...";

//   const announcements = [
//     `BACK2ERAS 2026 OPEN IN ${timerString}`,
//     "APPLY NOW: BACK TO 80'S THRIFT FEST 2026",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//       setAnimateKey((prev) => prev + 1);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [announcements.length]);

//   const menuLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Talkshow", path: "/talkshow" },
//     { name: "Visitor Registration", path: "/register" },
//     { name: "Tenant Registration", path: "/tenants" },
//     { name: "Sponsorship & Partnership", path: "/partners" },
//     { name: "Media Partnership", path: "/media" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const slideUpAnimation = `
//     @keyframes slideUpFade {
//       0% { transform: translateY(100%); opacity: 0; }
//       15% { transform: translateY(0); opacity: 1; }
//       85% { transform: translateY(0); opacity: 1; }
//       100% { transform: translateY(-100%); opacity: 0; }
//     }
//     .animate-slide-up-fade {
//       animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//     }
//   `;

//   return (
//     <>
//       <style>{slideUpAnimation}</style>

//       {/* ANNOUNCEMENT BAR (FIXED TOP) */}
//       <div className="fixed top-0 left-0 right-0 h-10 bg-[#000000] z-50 border-b-2 border-[#13bbad] flex items-center justify-between px-4">
//         <button
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:-translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
//           <p
//             key={animateKey}
//             className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-slide-up-fade text-center w-full"
//           >
//             {announcements[announcementIndex]}
//           </p>
//         </div>

//         <button
//           onClick={() => {
//             setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
//             setAnimateKey((prev) => prev + 1);
//           }}
//           className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:translate-x-1 focus:outline-none p-2"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* HEADER BAR Utama */}
//       <header className="sticky top-10 mt-10 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-[0px_4px_20px_rgba(255,20,147,0.3)] border-b-4 border-[#ff1493]">
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//           aria-label="Open Menu"
//         >
//           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>

//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
//           <Link href="/" className="inline-block hover:scale-105 transition-transform">
//             <Image
//               src="/assets/images/back2eras.png"
//               alt="Back to 80's Era Thrift Festival"
//               width={400}
//               height={100}
//               priority
//               className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[2px_2px_0px_#fadf29]"
//             />
//           </Link>
//         </div>

//         <div className="w-14 h-14"></div>
//       </header>

//       {/* SIDEBAR WRAPPER */}
//       <div
//         className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "visible" : "invisible pointer-events-none"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>

//         <div
//           className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
//             <Image
//               src="/assets/images/back2eras.png"
//               alt="80s Thrift Festival Menu"
//               width={600}
//               height={150}
//               className="h-12 w-auto object-contain"
//             />
//             <button
//               onClick={() => setIsSidebarOpen(false)}
//               className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
//             >
//               <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
//             {menuLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.path}
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
//             <div className="flex gap-4">
//               <a
//                 href="https://www.instagram.com/waroengdepesby"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                 </svg>
//               </a>
//               <a
//                 href="https://www.tiktok.com/@waroengdepesby"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
//                 </svg>
//               </a>
//             </div>
//             <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
//               <span>Waroeng Depe &copy; 2026</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";

interface VisitorUser {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  instagram: string;
  user_number: number;
}

const API_BASE = "https://back.back2eras.com/api";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  // State Auth Visitor
  const [visitorUser, setVisitorUser] = useState<VisitorUser | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

  // State Pop-up Login
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // State Pop-up Edit Profil
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editWhatsapp, setEditWhatsapp] = useState("");
  const [editInstagram, setEditInstagram] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  // State Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHydrated, setIsHydrated] = useState(false);

  const targetDate = new Date("2026-11-27T08:00:00").getTime();

  // Sinkronisasi state auth dari localStorage
  const syncAuthState = () => {
    const token = localStorage.getItem("visitor_token");
    const userStr = localStorage.getItem("visitor_user");
    if (token && userStr) {
      try {
        setVisitorUser(JSON.parse(userStr));
      } catch {
        setVisitorUser(null);
      }
    } else {
      setVisitorUser(null);
    }
  };

  useEffect(() => {
    setIsHydrated(true);
    syncAuthState();

    window.addEventListener("visitor-auth-changed", syncAuthState);
    window.addEventListener("storage", syncAuthState);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerInterval);
      window.removeEventListener("visitor-auth-changed", syncAuthState);
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  // Tutup dropdown profil saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const timerString = isHydrated
    ? `${String(timeLeft.days).padStart(2, "0")}D ${String(timeLeft.hours).padStart(2, "0")}H ${String(timeLeft.minutes).padStart(2, "0")}M ${String(timeLeft.seconds).padStart(2, "0")}S`
    : "LOADING...";

  const announcements = [
    `BACK2ERAS 2026 OPEN IN ${timerString}`,
    "APPLY NOW: BACK TO 80'S THRIFT FEST 2026",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      setAnimateKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Talkshow", path: "/talkshow" },
    { name: "Visitor Registration", path: "/register" },
    ...(visitorUser ? [{ name: "Claim Vouchers", path: "/voucher" }] : []),
    { name: "Tenant Registration", path: "/tenants" },
    { name: "Sponsorship & Partnership", path: "/partners" },
    { name: "Media Partnership", path: "/media" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Handler Login Modal
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await fetch(`${API_BASE}/visitor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Email atau password salah.");
      }

      localStorage.setItem("visitor_token", data.token);
      localStorage.setItem("visitor_user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("visitor-auth-changed"));

      setIsLoginModalOpen(false);
      setLoginEmail("");
      setLoginPassword("");

      Swal.fire({
        title: "Login Berhasil!",
        text: `Selamat datang kembali, ${data.user.name} (Anda user ke-${data.user.user_number})!`,
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
        timer: 1800,
        showConfirmButton: false,
      });

      router.push("/voucher");
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Gagal terhubung ke server.";
      Swal.fire({
        title: "Login Gagal",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  // Handler Buka Modal Edit Profil
  const openEditProfileModal = () => {
    if (!visitorUser) return;
    setEditName(visitorUser.name || "");
    setEditEmail(visitorUser.email || "");
    setEditWhatsapp(visitorUser.whatsapp || "");
    setEditInstagram(visitorUser.instagram || "");
    setEditPassword("");
    setIsProfileMenuOpen(false);
    setIsEditProfileOpen(true);
  };

  // Handler Simpan Edit Profil
  const handleEditProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("visitor_token");
    if (!token) return;

    setEditLoading(true);
    try {
      const payload: Record<string, string> = {
        full_name: editName,
        email: editEmail,
        whatsapp: editWhatsapp,
        instagram: editInstagram,
      };
      if (editPassword.trim() !== "") {
        payload.password = editPassword;
      }

      const res = await fetch(`${API_BASE}/visitor/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Gagal memperbarui profil.");
      }

      localStorage.setItem("visitor_user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("visitor-auth-changed"));
      setIsEditProfileOpen(false);

      Swal.fire({
        title: "Profil Diperbarui!",
        icon: "success",
        background: "#144333",
        color: "#eaddce",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Terjadi kesalahan.";
      Swal.fire({
        title: "Gagal",
        text: msg,
        icon: "error",
        background: "#144333",
        color: "#eaddce",
        confirmButtonColor: "#ff1493",
      });
    } finally {
      setEditLoading(false);
    }
  };

  // Handler Logout
  const handleLogout = async () => {
    const token = localStorage.getItem("visitor_token");
    setIsProfileMenuOpen(false);

    if (token) {
      try {
        await fetch(`${API_BASE}/visitor/logout`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error("Logout error:", err);
      }
    }

    localStorage.removeItem("visitor_token");
    localStorage.removeItem("visitor_user");
    window.dispatchEvent(new Event("visitor-auth-changed"));

    Swal.fire({
      title: "Berhasil Logout",
      icon: "success",
      background: "#144333",
      color: "#eaddce",
      timer: 1400,
      showConfirmButton: false,
    });

    if (pathname === "/voucher") {
      router.push("/");
    }
  };

  const slideUpAnimation = `
    @keyframes slideUpFade {
      0% { transform: translateY(100%); opacity: 0; }
      15% { transform: translateY(0); opacity: 1; }
      85% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-100%); opacity: 0; }
    }
    .animate-slide-up-fade {
      animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `;

  return (
    <>
      <style>{slideUpAnimation}</style>

      {/* ANNOUNCEMENT BAR (FIXED TOP) */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-[#000000] z-50 border-b-2 border-[#13bbad] flex items-center justify-between px-4">
        <button
          onClick={() => {
            setAnnouncementIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
            setAnimateKey((prev) => prev + 1);
          }}
          className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:-translate-x-1 focus:outline-none p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
          <p
            key={animateKey}
            className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-slide-up-fade text-center w-full"
          >
            {announcements[announcementIndex]}
          </p>
        </div>

        <button
          onClick={() => {
            setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
            setAnimateKey((prev) => prev + 1);
          }}
          className="text-[#fadf29] hover:text-[#ff1493] transition-transform hover:translate-x-1 focus:outline-none p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* HEADER BAR Utama */}
      <header className="sticky top-10 mt-10 z-40 flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 bg-[#144333] text-[#eaddce] shadow-[0px_4px_20px_rgba(255,20,147,0.3)] border-b-4 border-[#ff1493]">
        {/* Kiri: Hamburger Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
          aria-label="Open Menu"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Tengah: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="inline-block hover:scale-105 transition-transform">
            <Image
              src="/assets/images/back2eras.png"
              alt="Back to 80's Era Thrift Festival"
              width={400}
              height={100}
              priority
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[2px_2px_0px_#fadf29]"
            />
          </Link>
        </div>

        {/* Kanan: Ikon Profil Lingkaran + Dropdown */}
        <div className="relative flex items-center gap-3" ref={profileDropdownRef}>
          {visitorUser && (
            <span className="hidden lg:inline-block px-3 py-1 bg-black/70 border border-[#fadf29] text-[#fadf29] font-anton text-xs tracking-wider uppercase rounded-full">
              User ke-{visitorUser.user_number}
            </span>
          )}

          <button
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-black border-2 border-[#0fdff8] hover:border-[#ff1493] text-[#0fdff8] hover:text-[#fadf29] flex items-center justify-center shadow-[2px_2px_0px_#ff1493] transition-all cursor-pointer focus:outline-none"
            aria-label="Profile Menu"
          >
            {visitorUser ? (
              <span className="font-anton text-lg text-[#fadf29]">
                {visitorUser.name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </button>

          {/* DROPDOWN MENU PROFIL */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-14 w-60 bg-black border-2 border-[#0fdff8] rounded-xl shadow-[5px_5px_0px_#ff1493] overflow-hidden z-50">
              {visitorUser ? (
                <div>
                  <div className="px-4 py-3 border-b border-gray-800 bg-gray-900/70">
                    <p className="font-anton text-sm text-[#fadf29] uppercase truncate">
                      {visitorUser.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{visitorUser.email}</p>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-[#ff1493] text-white font-anton text-[11px] uppercase rounded">
                      Anda User ke-{visitorUser.user_number}
                    </span>
                  </div>

                  <div className="flex flex-col py-1">
                    <Link
                      href="/voucher"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="px-4 py-2.5 text-sm font-bold text-[#0fdff8] hover:bg-gray-900 transition-colors"
                    >
                      🎟️ Klaim Voucher
                    </Link>
                    <button
                      onClick={openEditProfileModal}
                      className="w-full text-left px-4 py-2.5 text-sm font-bold text-[#eaddce] hover:bg-gray-900 hover:text-[#fadf29] transition-colors cursor-pointer"
                    >
                      ✏️ Edit Profil
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm font-bold text-[#ff1493] hover:bg-[#ff1493] hover:text-white transition-colors border-t border-gray-800 cursor-pointer"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col py-1">
                  <button
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="w-full text-left px-4 py-3 text-sm font-anton uppercase tracking-wider text-[#0fdff8] hover:bg-gray-900 hover:text-[#fadf29] transition-colors cursor-pointer"
                  >
                    🔐 Login
                  </button>
                  <Link
                    href="/register"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-anton uppercase tracking-wider text-[#ff1493] hover:bg-gray-900 hover:text-white transition-colors border-t border-gray-800"
                  >
                    📝 Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* SIDEBAR WRAPPER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <div
          className={`absolute top-0 left-0 w-80 h-full bg-[#13bbad] p-6 shadow-2xl border-r-8 border-[#fadf29] flex flex-col transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#144333]/20 shrink-0">
            <Image
              src="/assets/images/back2eras.png"
              alt="80s Thrift Festival Menu"
              width={600}
              height={150}
              className="h-12 w-auto object-contain"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1 text-[#144333] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto flex flex-col gap-4 font-anton text-xl tracking-wide uppercase pr-2 pb-4">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setIsSidebarOpen(false)}
                className="text-[#ffffff] hover:text-[#fadf29] hover:translate-x-2 transition-all duration-200 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#144333]/20 flex flex-col gap-5 shrink-0">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/waroengdepesby"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@waroengdepesby"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[#144333] text-[#144333] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all hover:-translate-y-1"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
            </div>
            <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
              <span>Waroeng Depe &copy; 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* POP-UP MODAL LOGIN */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className="bg-black border-4 border-[#0fdff8] rounded-2xl w-full max-w-md p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
              <h2 className="font-anton text-2xl text-[#fadf29] uppercase tracking-wider">
                Visitor Login
              </h2>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase tracking-wider mb-1.5">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Masukkan password Anda"
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full mt-2 py-3 bg-[#fadf29] hover:bg-yellow-300 disabled:opacity-50 text-black font-anton text-lg uppercase tracking-widest rounded shadow-[4px_4px_0px_#ff1493] cursor-pointer"
              >
                {loginLoading ? "Memproses..." : "Login Sekarang"}
              </button>

              <p className="text-center text-xs text-gray-400 pt-2">
                Belum punya akun?{" "}
                <Link
                  href="/register"
                  onClick={() => setIsLoginModalOpen(false)}
                  className="text-[#0fdff8] underline hover:text-[#ff1493]"
                >
                  Register di sini
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* POP-UP MODAL EDIT PROFIL */}
      {isEditProfileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsEditProfileOpen(false)}
        >
          <div
            className="bg-black border-4 border-[#13bbad] rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-[8px_8px_0px_#ff1493]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-3">
              <h2 className="font-anton text-2xl text-[#fadf29] uppercase tracking-wider">
                Edit Profil
              </h2>
              <button
                onClick={() => setIsEditProfileOpen(false)}
                className="text-gray-400 hover:text-[#ff1493] text-3xl leading-none font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleEditProfileSubmit} className="space-y-4">
              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={editWhatsapp}
                  onChange={(e) => setEditWhatsapp(e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase mb-1">
                  Instagram (Opsional)
                </label>
                <input
                  type="text"
                  value={editInstagram}
                  onChange={(e) => setEditInstagram(e.target.value)}
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div>
                <label className="block font-anton text-xs text-[#0fdff8] uppercase mb-1">
                  Password Baru (Kosongkan jika tidak diubah)
                </label>
                <input
                  type="password"
                  minLength={6}
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  className="w-full px-3 py-2.5 bg-gray-900 border border-gray-700 focus:border-[#0fdff8] rounded text-white outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setIsEditProfileOpen(false)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={editLoading}
                  className="px-6 py-2 bg-[#ff1493] hover:bg-[#e01082] disabled:opacity-50 text-white font-anton uppercase tracking-wider rounded cursor-pointer"
                >
                  {editLoading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}