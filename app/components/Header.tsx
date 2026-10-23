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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  // State untuk Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHydrated, setIsHydrated] = useState(false);

  // Tanggal target: 27 Nov 2026, 08:00 AM
  const targetDate = new Date("2026-11-27T08:00:00").getTime();

  // Logika Countdown Timer
  useEffect(() => {
    setIsHydrated(true);

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
        // Jika waktu sudah lewat
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // Panggil sekali langsung
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Format string timer: "14D 05H 22M 10S"
  const timerString = isHydrated 
    ? `${String(timeLeft.days).padStart(2, '0')}D ${String(timeLeft.hours).padStart(2, '0')}H ${String(timeLeft.minutes).padStart(2, '0')}M ${String(timeLeft.seconds).padStart(2, '0')}S` 
    : "LOADING...";

  // Daftar teks pengumuman (digabung dengan timer)
  const announcements = [
    `BACK2ERAS 2026 OPEN IN ${timerString}`,
    "APPLY NOW: BACK TO 80'S THRIFT FEST 2026"
  ];

  // Ganti pengumuman tiap 4 detik dan perbarui trigger animasi
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
    { name: "Visitor Registration", path: "/register" },
    { name: "Tenant Registration", path: "/tenants" },
    { name: "Sponsorship & Partnership", path: "/partners" },
    { name: "Media Partnership", path: "/media" },
    { name: "Contact Us", path: "/contact" },
  ];

  // CSS Keyframes lokal
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
      {/* Inject gaya CSS kustom */}
      <style>{slideUpAnimation}</style>

      {/* ANNOUNCEMENT BAR (FIXED TOP) */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-[#000000] z-50 border-b-2 border-[#13bbad] flex items-center justify-between px-4">

        {/* Panah Kiri */}
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

        {/* Teks Animasi - Menggunakan kontainer tersembunyi agar teks yang muncul dari bawah tidak meluber */}
        <div className="flex-1 overflow-hidden relative flex items-center justify-center h-full">
          <p 
            key={animateKey}
            className="absolute font-anton text-[#fadf29] text-xs md:text-sm tracking-widest uppercase animate-slide-up-fade text-center w-full"
          >
            {announcements[announcementIndex]}
          </p>
        </div>

        {/* Panah Kanan */}
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

        {/* Hamburger Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-[#0fdff8] hover:text-[#ff1493] cursor-pointer hover:scale-110 transition-all focus:outline-none"
          aria-label="Open Menu"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
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

        {/* Spacer Kanan */}
        <div className="w-14 h-14"></div>
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
            </div>
            <div className="text-[#144333] font-roboto font-bold text-sm flex items-center justify-between">
              <span>Waroeng Depe &copy; 2026</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}