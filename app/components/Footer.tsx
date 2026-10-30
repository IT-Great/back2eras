/* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";

// export default function Footer() {
//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-[#144333] text-[#eaddce] pt-12 pb-6 px-6 border-t-8 border-[#0fdff8]">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
//         {/* Brand Section */}
//         <div className="flex flex-col items-center md:items-start">
//           <h2 className="font-anton text-3xl text-[#ff1493] drop-shadow-[2px_2px_0px_#ffffff] mb-2 uppercase">
//             80s Thrift Fest
//           </h2>
//           <p className="font-pacifico text-[#fadf29] text-xl">by Waroeng Depe</p>
//         </div>

//         {/* 4 Main Links */}
//         <nav className="flex flex-col md:flex-row gap-4 md:gap-8 font-roboto font-bold text-center">
//           {menuLinks.map((link, index) => (
//             <Link key={index} href={link.path} className="hover:text-[#0fdff8] transition-colors">
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Socials & Policies */}
//         <div className="flex flex-col items-center md:items-end gap-4">
//           <div className="flex gap-4">
//             {/* Instagram Icon */}
//             <a href="#" className="w-10 h-10 bg-[#fe9d04] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:text-white transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
//             </a>
//             {/* Facebook Icon */}
//             <a href="#" className="w-10 h-10 bg-[#fe9d04] text-[#144333] rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:text-white transition-colors">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
//             </a>
//           </div>
//           <div className="flex gap-4 font-roboto text-sm text-[#eaddce]/80">
//             <Link href="/privacy-policy" className="hover:text-white underline">Privacy Policy</Link>
//             <span>|</span>
//             <Link href="/careers" className="hover:text-white underline">Careers</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-[#144333] text-[#eaddce] pt-16 border-t-8 border-[#0fdff8]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Main Grid Layout for Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
//           {/* Column 1: Brand & Socials */}
//           <div className="flex flex-col items-start gap-6">
//             {/* Logo */}
//             <div className="w-48">
//               <Link href="/">
//                 <Image 
//                   src="/assets/images/back2eras.png" // Menggunakan logo lokal Anda
//                   alt="Waroeng Depe Logo"
//                   width={200}
//                   height={60}
//                   className="w-full h-auto object-contain"
//                 />
//               </Link>
//             </div>
//             {/* Description */}
//             <p className="font-roboto text-[#eaddce]/80 leading-relaxed text-sm md:text-base pr-4">
//               Menghadirkan cita rasa warisan Nusantara dengan sentuhan modern. Rasakan kehangatan masakan rumahan di setiap suapan.
//             </p>
//             {/* Social Icons (IG & TikTok) */}
//             <div className="flex gap-4">
//               {/* Instagram */}
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all text-[#eaddce]"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               {/* TikTok */}
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all text-[#eaddce]"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="flex flex-col items-start gap-4 lg:pl-12">
//             <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col gap-3 font-roboto text-base">
//               {menuLinks.map((link, index) => (
//                 <Link key={index} href={link.path} className="hover:text-[#0fdff8] transition-colors w-fit">
//                   {link.name}
//                 </Link>
//               ))}
//               <Link href="/privacy-policy" className="hover:text-[#0fdff8] transition-colors w-fit">
//                 Privacy Policy
//               </Link>
//               <Link href="/careers" className="hover:text-[#0fdff8] transition-colors w-fit">
//                 Careers
//               </Link>
//             </nav>
//           </div>

//           {/* Column 3: Hubungi Kami */}
//           <div className="flex flex-col items-start gap-4">
//             <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
//               Hubungi Kami
//             </h3>
//             <div className="flex flex-col gap-4 font-roboto text-sm md:text-base text-[#eaddce]/90">
              
//               {/* Location */}
//               <div className="flex items-start gap-3">
//                 <div className="mt-1 w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                   </svg>
//                 </div>
//                 <p className="pt-1">Jl. Raya Darmo Permai III, Surabaya, Jawa Timur</p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                   </svg>
//                 </div>
//                 <p>0857-3776-9860</p>
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                   </svg>
//                 </div>
//                 <p>waroengdepesby@gmail.com</p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div className="w-full bg-[#0d2e23] py-4 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-[#eaddce]/60 font-roboto">
//           <p>&copy; 2026 <span className="text-[#fadf29] font-bold">Waroeng Depe</span>. All rights reserved.</p>
//           <p>Follow us: @waroengdepesby</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   const menuLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Stories", path: "/stories" },
//     { name: "Apply for The Event", path: "/apply" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <footer className="bg-[#144333] text-[#eaddce] pt-16 border-t-8 border-[#0fdff8]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Main Grid Layout for Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
//           {/* Column 1: Brand & Socials */}
//           <div className="flex flex-col items-start gap-6">
//             {/* Logo */}
//             <div className="w-48">
//               <Link href="/">
//                 <Image 
//                   src="/assets/images/back2eras.png" 
//                   alt="Back to 80's Era Thrift Festival Logo"
//                   width={200}
//                   height={60}
//                   className="w-full h-auto object-contain"
//                 />
//               </Link>
//             </div>
//             {/* Description (Updated to focus on the 80s Event) */}
//             <p className="font-roboto text-[#eaddce]/80 leading-relaxed text-sm md:text-base pr-4">
//               Step into the ultimate retro experience with the Back to 80's Era Thrift Festival. Celebrate sustainable fashion, vintage treasures, and a vibrant community in one spectacular event.
//             </p>
//             {/* Social Icons (IG & TikTok) */}
//             <div className="flex gap-4">
//               {/* Instagram */}
//               <a 
//                 href="https://www.instagram.com/waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all text-[#eaddce]"
//                 aria-label="Instagram"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//               {/* TikTok */}
//               <a 
//                 href="https://www.tiktok.com/@waroengdepesby" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all text-[#eaddce]"
//                 aria-label="TikTok"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
//                   <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="flex flex-col items-start gap-4 lg:pl-12">
//             <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
//               Quick Links
//             </h3>
//             <nav className="flex flex-col gap-3 font-roboto text-base">
//               {menuLinks.map((link, index) => (
//                 <Link key={index} href={link.path} className="hover:text-[#0fdff8] transition-colors w-fit">
//                   {link.name}
//                 </Link>
//               ))}
//               <Link href="/privacy-policy" className="hover:text-[#0fdff8] transition-colors w-fit">
//                 Privacy Policy
//               </Link>
//               <Link href="/careers" className="hover:text-[#0fdff8] transition-colors w-fit">
//                 Careers
//               </Link>
//             </nav>
//           </div>

//           {/* Column 3: Contact Us */}
//           <div className="flex flex-col items-start gap-4">
//             <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
//               Contact Us
//             </h3>
//             <div className="flex flex-col gap-4 font-roboto text-sm md:text-base text-[#eaddce]/90">
              
//               {/* Location */}
//               <div className="flex items-start gap-3">
//                 <div className="mt-1 w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                   </svg>
//                 </div>
//                 <p className="pt-1">Jl. Raya Darmo Permai III, Surabaya, Jawa Timur</p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                   </svg>
//                 </div>
//                 <p>0857-3776-9860</p>
//               </div>

//               {/* Email */}
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                   </svg>
//                 </div>
//                 <p>waroengdepesby@gmail.com</p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div className="w-full bg-[#0d2e23] py-4 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-[#eaddce]/60 font-roboto">
//           <p>&copy; 2026 <span className="text-[#fadf29] font-bold">Waroeng Depe</span>. All rights reserved.</p>
//           <p>Follow us: @waroengdepesby</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client"; // Ditambahkan agar form submit (alert) bisa berjalan di sisi klien

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const menuLinks = [
    { name: "About Us", path: "/about" },
    { name: "Stories", path: "/stories" },
    // { name: "Apply for The Event", path: "/apply" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Fungsi sederhana untuk menangani tombol Subscribe
  // const handleSubscribe = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Thank you for subscribing to our newsletter! (Demo Mode)");
  // };

  // Fungsi untuk menangani tombol Subscribe ke Backend
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;

    try {
      const response = await fetch('https://back.back2eras.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: emailInput.value })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Menampilkan pesan sukses dari Laravel
        form.reset();        // Kosongkan form setelah sukses
      } else {
        // Tangkap error validasi dari Laravel (misal: email duplikat)
        if (data.errors && data.errors.email) {
          alert(data.errors.email[0]);
        } else {
          alert("Error: " + (data.message || "Failed to subscribe."));
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal terhubung ke server.");
    }
  };

  return (
    <footer className="bg-[#144333] text-[#eaddce] pt-16 border-t-8 border-[#0fdff8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Grid Layout for Footer Content - Diubah menjadi 4 Kolom (lg:grid-cols-4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start gap-6">
            {/* Logo */}
            <div className="w-48">
              <Link href="/">
                <Image 
                  src="/assets/images/back2eras.png" 
                  alt="Back to 80's Era Thrift Festival Logo"
                  width={200}
                  height={60}
                  className="w-full h-auto object-contain"
                />
              </Link>
            </div>
            {/* Description */}
            <p className="font-roboto text-[#eaddce]/80 leading-relaxed text-sm md:text-base pr-4">
              Step into the ultimate retro experience with the Back to 80's Era Thrift Festival. Celebrate sustainable fashion, vintage treasures, and a vibrant community in one spectacular event.
            </p>
            {/* Social Icons (IG & TikTok) */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/back2eras" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#ff1493] hover:border-[#ff1493] hover:text-white transition-all text-[#eaddce]"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@waroengdepesby" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#eaddce]/30 rounded-full flex items-center justify-center hover:bg-[#0fdff8] hover:border-[#0fdff8] hover:text-[#144333] transition-all text-[#eaddce]"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3 font-roboto text-base">
              {menuLinks.map((link, index) => (
                <Link key={index} href={link.path} className="hover:text-[#0fdff8] transition-colors w-fit">
                  {link.name}
                </Link>
              ))}
              <Link href="/privacy-policy" className="hover:text-[#0fdff8] transition-colors w-fit">
                Privacy Policy
              </Link>
              <Link href="/careers" className="hover:text-[#0fdff8] transition-colors w-fit">
                Careers
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 font-roboto text-sm md:text-base text-[#eaddce]/90">
              
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <p className="pt-1">Jl. Raya Darmo Permai III, Surabaya, Jawa Timur</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <p>0857-3776-9860</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 shrink-0 bg-[#eaddce]/10 rounded flex items-center justify-center text-[#13bbad]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p>waroengdepesby@gmail.com</p>
              </div>

            </div>
          </div>

          {/* Column 4: Newsletter / Subscribe */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-anton text-xl text-[#fadf29] uppercase tracking-wider mb-2">
              Newsletter
            </h3>
            <p className="font-roboto text-sm md:text-base text-[#eaddce]/90">
              Stay updated with our latest news, ticket drops, and event schedules!
            </p>
            <form 
              onSubmit={handleSubscribe} 
              className="w-full flex flex-col gap-3 mt-2"
            >
              <input 
                type="email" 
                name="email"
                placeholder="your.email@example.com" 
                required
                className="w-full bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] rounded transition-all placeholder:text-[#eaddce]/40"
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-[#ff1493] text-[#ffffff] font-anton text-lg tracking-widest uppercase rounded shadow-[4px_4px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#0d2e23] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-[#eaddce]/60 font-roboto">
          <p>&copy; 2026 <span className="text-[#fadf29] font-bold">Waroeng Depe</span>. All rights reserved.</p>
          <p>Follow us: @waroengdepesby</p>
        </div>
      </div>
    </footer>
  );
}