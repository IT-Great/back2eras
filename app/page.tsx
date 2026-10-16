/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-[#000000] overflow-hidden relative">
      
//       {/* Background Ornaments (Menciptakan gaya Vintage Collage / Neon) */}
//       <div className="absolute top-10 left-10 w-32 h-32 bg-[#ff1493] rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
//       <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
      
//       {/* Hero Content */}
//       <section className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center py-32 px-6 text-center">
        
//         <h2 className="font-pacifico text-[#fe9d04] text-4xl md:text-5xl lg:text-6xl mb-2 transform -rotate-3 drop-shadow-md">
//           Welcome to the
//         </h2>
        
//         <h1 className="font-anton text-[#0fdff8] text-6xl md:text-8xl lg:text-9xl tracking-wider uppercase mb-6 drop-shadow-[0_0_15px_rgba(15,223,248,0.8)] leading-none">
//           BACK TO 80'S <br/>
//           <span className="text-[#ff1493] drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]">THRIFT FEST</span>
//         </h1>
        
//         <p className="font-roboto text-[#eaddce] text-lg md:text-2xl leading-relaxed max-w-3xl mb-10 bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-[#13bbad]/30">
//           Rayakan euforia era 80-an melalui kacamata <strong className="text-[#fadf29]">Sustainable Fashion</strong>. 
//           Bawa pakaian lamamu di <em>Vintage Vault Swap</em>, ikuti kelas DIY Customization, dan nikmati Live Music bersama Waroeng Depe!
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6">
//           <Link
//             href="/apply"
//             className="flex items-center justify-center px-8 py-4 bg-[#ff1493] text-[#ffffff] font-anton text-xl tracking-wide uppercase shadow-[6px_6px_0px_#13bbad] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#13bbad] transition-all"
//           >
//             Apply as Tenant
//           </Link>
//           <Link
//             href="/stories"
//             className="flex items-center justify-center px-8 py-4 bg-[#fadf29] text-[#144333] font-anton text-xl tracking-wide uppercase shadow-[6px_6px_0px_#fe9d04] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#fe9d04] transition-all"
//           >
//             Explore Stories
//           </Link>
//         </div>

//       </section>
//     </div>
//   );
// }

// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#000000] overflow-hidden relative text-[#eaddce] font-roboto">
      
//       {/* CSS Animasi untuk Teks Berjalan (Marquee) */}
//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           white-space: nowrap;
//           animation: marquee 20s linear infinite;
//         }
//       `}} />

//       {/* 1. TOP BANNER */}
//       <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[125vh] border-b-4 border-[#13bbad]">
//         <Image 
//           src="/assets/images/home-banner.jpg" 
//           alt="Home Banner 80s Thrift Fest"
//           fill
//           priority
//           className="object-cover"
//         />
//         {/* Overlay gradient tipis agar tidak terlalu terang jika bannernya terang */}
//         <div className="absolute inset-0 bg-black/20"></div>
//       </section>

//       {/* 2. BAR HITAM TEKS BERJALAN (MARQUEE) */}
//       <section className="bg-[#000000] py-3 border-b-4 border-[#ff1493] overflow-hidden flex whitespace-nowrap">
//         <div className="animate-marquee font-anton text-[#fadf29] text-xl md:text-2xl tracking-widest uppercase">
//           {/* Teks diduplikasi agar loop animasinya mulus */}
//           <span className="mx-4">⚡ WELCOME TO THE 80'S THRIFT FEST ⚡ NEON VIBES ⚡ SUSTAINABLE FASHION ⚡ VINTAGE VAULT ⚡ LIVE SYNTHWAVE ⚡ RETRO ARCADE ⚡</span>
//           <span className="mx-4">⚡ WELCOME TO THE 80'S THRIFT FEST ⚡ NEON VIBES ⚡ SUSTAINABLE FASHION ⚡ VINTAGE VAULT ⚡ LIVE SYNTHWAVE ⚡ RETRO ARCADE ⚡</span>
//         </div>
//       </section>

//       {/* 3. SHORT COPY (10 WORDS) & BUTTON */}
//       <section className="py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center relative">
//         {/* Neon Glow di belakang teks */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>
        
//         {/* Tepat 10 Kata Bahasa Inggris */}
//         <h2 className="font-pacifico text-3xl md:text-5xl text-white mb-8 max-w-4xl drop-shadow-md leading-relaxed z-10">
//           Experience the ultimate retro vintage thrifting revolution this spectacular weekend.
//         </h2>
        
//         <Link
//           href="/apply"
//           className="z-10 flex items-center justify-center px-10 py-5 bg-[#ff1493] text-[#ffffff] font-anton text-2xl tracking-widest uppercase shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0fdff8] transition-all"
//         >
//           Get Tickets Now
//         </Link>
//       </section>

//       {/* 4. POTRAIT IMAGE & WELCOME TEXT */}
//       <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
//         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
//           {/* Kiri: Potrait Image */}
//           <div className="w-full md:w-5/12 relative group">
//             <div className="absolute inset-0 bg-[#fadf29] translate-x-4 translate-y-4 rounded-lg"></div>

//             {/* Menggunakan gambar dummy Portrait retro (bisa Anda ganti nanti) */}
//             <img 
//               src="assets/images/home-image.png" 
//               alt="80s Fashion Portrait" 
//               className="relative z-10 w-full aspect-[3/4] object-fit rounded-lg border-4 border-[#ff1493] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300"
//             />
//           </div>
          
//           {/* Kanan: Judul & Deskripsi */}
//           <div className="w-full md:w-7/12 flex flex-col gap-6">
//             <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl text-[#0fdff8] uppercase leading-none drop-shadow-[3px_3px_0px_#144333]">
//               WELCOME BACK TO THE <br />
//               <span className="text-[#ff1493]">80'S THRIFT FEST 2026</span>
//             </h2>
//             <div className="flex flex-col gap-4 text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light">
//               <p>
//                 Get ready to travel back in time to the most vibrant decade! The 80's Thrift Fest is more than just a shopping event; it is a full-blown celebration of nostalgia, sustainable fashion, and synthwave culture.
//               </p>
//               <p>
//                 We bring together the finest vintage curators, upcycled clothing designers, and local artisans in one massive neon-lit space. Whether you are hunting for that perfect oversized denim jacket, rare arcade collectibles, or simply want to soak in the retro atmosphere with live music from Waroeng Depe, there is a core memory waiting to be made here.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. 3 STATS ELEMENTS (KIRI - TENGAH - KANAN) */}
//       <section className="w-full bg-[#144333] py-16 border-y-4 border-[#0fdff8]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0fdff8]/30">
//             <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
//               <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">500+</h3>
//               <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Brands & Designers</p>
//             </div>
//             <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
//               <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">200+</h3>
//               <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Exclusive Launches</p>
//             </div>
//             <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
//               <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">5K+</h3>
//               <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Visitors Last Edition</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. TICKETING INFO & 4 EXPERIENCES GRID */}
//       <section className="py-24 px-6 max-w-6xl mx-auto">
//         {/* <div className="text-center mb-16">
//           <h2 className="font-anton text-4xl md:text-6xl text-[#ff1493] uppercase mb-6 drop-shadow-md">
//             BACK2ERAS IS TICKETED DAILY
//           </h2>
//           <div className="text-lg text-[#eaddce]/80 max-w-4xl mx-auto flex flex-col gap-4">
//             <p>
//               1-Day Passes are available for single-day access on Friday, Saturday or Sunday, starting from $8. Ticket bundles save you up to 30% off.
//             </p>
//             <p>
//               For unlimited access to all 3 days of the event, get a 3-Day Pass for $19. Only a limited number of 3-Day Passes are available.
//             </p>
//             <p className="font-bold text-[#fadf29]">
//               Children under 12 always enter for free. Your ticket includes:
//             </p>
//           </div>
//         </div> */}

//         <div className="text-center mb-16">
//           <h2 className="font-anton text-4xl md:text-6xl text-[#ff1493] uppercase mb-6 drop-shadow-md">
//             BACK2ERAS IS TICKETED DAILY
//           </h2>
//           <div className="text-lg text-[#eaddce]/80 max-w-4xl mx-auto flex flex-col gap-4">
//             <p>
//               1-Day Passes are available for single-day access on Friday, Saturday or Sunday, starting from Rp 50.000. Ticket bundles save you up to 30% off.
//             </p>
//             <p>
//               For unlimited access to all 3 days of the event, get a 3-Day Pass for Rp 120.000. Only a limited number of 3-Day Passes are available.
//             </p>
//             <p className="font-bold text-[#fadf29]">
//               Children under 12 always enter for free. Your ticket includes:
//             </p>
//           </div>
//         </div>

//         {/* 4 Bagian Berjejer (Grid Kiri-Kiri-Kanan-Kanan) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
//           {/* Feature 1 */}
//           <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#0fdff8] hover:bg-white/10 transition-colors">
//             <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#0fdff8] border-2 border-[#0fdff8]">
//               {/* Icon Star */}
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
//             </div>
//             <h4 className="font-anton text-xl uppercase tracking-wide text-white">ACCESS TO EXCLUSIVES</h4>
//           </div>

//           {/* Feature 2 */}
//           <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#fadf29] hover:bg-white/10 transition-colors">
//             <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#fadf29] border-2 border-[#fadf29]">
//               {/* Icon Bus */}
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8m-9 4h10l1.5-6H4.5L6 15zm-1.5 4h15m-15 0a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5m-15 0a1.5 1.5 0 01-1.5-1.5v-2h18v2a1.5 1.5 0 01-1.5 1.5z"/></svg>
//             </div>
//             <h4 className="font-anton text-xl uppercase tracking-wide text-white">FREE SHUTTLE SERVICE</h4>
//           </div>

//           {/* Feature 3 */}
//           <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#ff1493] hover:bg-white/10 transition-colors">
//             <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#ff1493] border-2 border-[#ff1493]">
//               {/* Icon Ticket / Activities */}
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
//             </div>
//             <h4 className="font-anton text-xl uppercase tracking-wide text-white">ACTIVITIES & EXPERIENCES</h4>
//           </div>

//           {/* Feature 4 */}
//           <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#13bbad] hover:bg-white/10 transition-colors">
//             <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#13bbad] border-2 border-[#13bbad]">
//               {/* Icon People */}
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
//             </div>
//             <h4 className="font-anton text-xl uppercase tracking-wide text-white">CONNECTING WITH DESIGNERS</h4>
//           </div>

//         </div>
//       </section>

//       {/* 7. OPENING HOURS & GET TICKET BUTTON */}
//       <section className="pb-24 pt-8 px-6 flex flex-col items-center justify-center text-center">
//         <div className="border-4 border-[#fadf29] bg-[#144333]/40 p-8 md:p-12 shadow-[10px_10px_0px_#ff1493] max-w-2xl w-full mb-12">
//           <h2 className="font-anton text-3xl md:text-5xl text-[#0fdff8] uppercase mb-8">
//             OPENING HOURS
//           </h2>
//           <div className="font-roboto font-bold text-xl md:text-2xl text-white flex flex-col gap-4 tracking-wide">
//             <p>Friday – Sunday <span className="text-[#fadf29] mx-2">|</span> 8:00 AM – 9:00 PM</p>
//             <p>Monday – Tuesday <span className="text-[#fadf29] mx-2">|</span> 3:00 PM – 9:00 PM</p>
//           </div>
//         </div>
        
//         <Link
//           href="/apply"
//           className="inline-block px-12 py-5 bg-[#0fdff8] text-[#000000] font-anton text-3xl tracking-widest uppercase shadow-[6px_6px_0px_#fadf29] hover:-translate-y-2 hover:shadow-[6px_10px_0px_#fadf29] transition-all"
//         >
//           GET TICKETS NOW
//         </Link>
//       </section>

//       {/* 8. BRANDS LOGOS SPONSOR SECTION */}
//       <section className="w-full bg-white py-12 border-t-8 border-[#13bbad]">
//         <div className="max-w-7xl mx-auto px-6">
//           <h3 className="text-center font-anton text-2xl text-gray-400 uppercase tracking-widest mb-8">
//             Supported By
//           </h3>
//           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
//             {/* Menggunakan Teks tebal bergaya font sebagai dummy logo merek */}
//             <span className="font-pacifico text-3xl md:text-4xl text-black">RetroWear</span>
//             <span className="font-anton text-3xl md:text-4xl text-black uppercase">Synth&Co</span>
//             <span className="font-roboto font-black text-3xl md:text-4xl text-black italic">VINTAGE VAULT</span>
//             <span className="font-anton text-3xl md:text-4xl text-black uppercase tracking-widest">NeonCity</span>
//             <span className="font-pacifico text-3xl md:text-4xl text-black">Waroeng Depe</span>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // --- LOGIKA COUNTDOWN TIMER ---
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false); // Mencegah error hydration dari Next.js

  useEffect(() => {
    setMounted(true);
    // Atur tanggal target acara (27 Nov 2026, 08:00 AM)
    const targetDate = new Date("2026-11-27T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] overflow-hidden relative text-[#eaddce] font-roboto">
      
      {/* CSS Animasi untuk Teks Berjalan (Marquee) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}} />

      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[125vh] border-b-4 border-[#13bbad]">
        <Image 
          src="/assets/images/home-banner.jpg" 
          alt="Home Banner 80s Thrift Fest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* 2. BAR HITAM TEKS BERJALAN (MARQUEE) */}
      <section className="bg-[#000000] py-3 border-b-4 border-[#ff1493] overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee font-anton text-[#fadf29] text-xl md:text-2xl tracking-widest uppercase">
          <span className="mx-4">⚡ WELCOME TO THE 80'S THRIFT FEST ⚡ NEON VIBES ⚡ SUSTAINABLE FASHION ⚡ VINTAGE VAULT ⚡ LIVE SYNTHWAVE ⚡ RETRO ARCADE ⚡</span>
          <span className="mx-4">⚡ WELCOME TO THE 80'S THRIFT FEST ⚡ NEON VIBES ⚡ SUSTAINABLE FASHION ⚡ VINTAGE VAULT ⚡ LIVE SYNTHWAVE ⚡ RETRO ARCADE ⚡</span>
        </div>
      </section>

      {/* 3. NEW SECTION: COUNTDOWN TIMER */}
      <section className="py-12 bg-[#000000] border-b-4 border-[#0fdff8] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Efek grid retro di latar belakang */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(19,187,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(19,187,173,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>

        <h2 className="font-pacifico text-2xl md:text-4xl text-[#ff1493] mb-8 z-10 drop-shadow-[2px_2px_0px_#144333]">
          The Neon Gates Open In...
        </h2>

        {mounted ? (
          <div className="flex gap-4 md:gap-8 z-10">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-16 h-16 md:w-28 md:h-28 bg-[#144333] border-2 border-[#0fdff8] rounded shadow-[4px_4px_0px_#fadf29] flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform">
                  <span className="font-anton text-3xl md:text-6xl text-white drop-shadow-[0_0_10px_rgba(15,223,248,0.8)]">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="font-roboto font-bold text-[#0fdff8] tracking-widest text-xs md:text-sm uppercase drop-shadow-md">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-24 md:h-32 flex items-center justify-center z-10">
            <span className="font-anton text-2xl md:text-3xl text-[#fadf29] animate-pulse tracking-widest uppercase">
              Calculating Time Jump...
            </span>
          </div>
        )}
      </section>

      {/* 4. SHORT COPY (10 WORDS) & BUTTON */}
      <section className="py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[100px] opacity-30 pointer-events-none"></div>
        
        <h2 className="font-pacifico text-3xl md:text-5xl text-white mb-8 max-w-4xl drop-shadow-md leading-relaxed z-10">
          Experience the ultimate retro vintage thrifting revolution this spectacular weekend.
        </h2>
        
        <Link
          href="/apply"
          className="z-10 flex items-center justify-center px-10 py-5 bg-[#ff1493] text-[#ffffff] font-anton text-2xl tracking-widest uppercase shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0fdff8] transition-all"
        >
          Get Tickets Now
        </Link>
      </section>

      {/* 5. POTRAIT IMAGE & WELCOME TEXT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute inset-0 bg-[#fadf29] translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src="assets/images/home-image.png" 
              alt="80s Fashion Portrait" 
              className="relative z-10 w-full aspect-[3/4] object-cover rounded-lg border-4 border-[#ff1493] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300"
            />
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl text-[#0fdff8] uppercase leading-none drop-shadow-[3px_3px_0px_#144333]">
              WELCOME BACK TO THE <br />
              <span className="text-[#ff1493]">80'S THRIFT FEST 2026</span>
            </h2>
            <div className="flex flex-col gap-4 text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light">
              <p>
                Get ready to travel back in time to the most vibrant decade! The 80's Thrift Fest is more than just a shopping event; it is a full-blown celebration of nostalgia, sustainable fashion, and synthwave culture.
              </p>
              <p>
                We bring together the finest vintage curators, upcycled clothing designers, and local artisans in one massive neon-lit space. Whether you are hunting for that perfect oversized denim jacket, rare arcade collectibles, or simply want to soak in the retro atmosphere with live music from Waroeng Depe, there is a core memory waiting to be made here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 3 STATS ELEMENTS (KIRI - TENGAH - KANAN) */}
      <section className="w-full bg-[#144333] py-16 border-y-4 border-[#0fdff8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#0fdff8]/30">
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">500+</h3>
              <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Brands & Designers</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">200+</h3>
              <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Exclusive Launches</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <h3 className="font-anton text-6xl md:text-7xl text-[#fadf29] drop-shadow-[2px_2px_0px_#ff1493]">5K+</h3>
              <p className="font-roboto font-bold text-xl uppercase tracking-widest mt-2 text-white">Visitors Last Edition</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TICKETING INFO & 4 EXPERIENCES GRID */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-anton text-4xl md:text-6xl text-[#ff1493] uppercase mb-6 drop-shadow-md">
            BACK2ERAS IS TICKETED DAILY
          </h2>
          <div className="text-lg text-[#eaddce]/80 max-w-4xl mx-auto flex flex-col gap-4">
            <p>
              1-Day Passes are available for single-day access on Friday, Saturday or Sunday, starting from Rp 50.000. Ticket bundles save you up to 30% off.
            </p>
            <p>
              For unlimited access to all 3 days of the event, get a 3-Day Pass for Rp 120.000. Only a limited number of 3-Day Passes are available.
            </p>
            <p className="font-bold text-[#fadf29]">
              Children under 12 always enter for free. Your ticket includes:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#0fdff8] hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#0fdff8] border-2 border-[#0fdff8]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <h4 className="font-anton text-xl uppercase tracking-wide text-white">ACCESS TO EXCLUSIVES</h4>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#fadf29] hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#fadf29] border-2 border-[#fadf29]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8m-9 4h10l1.5-6H4.5L6 15zm-1.5 4h15m-15 0a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5m-15 0a1.5 1.5 0 01-1.5-1.5v-2h18v2a1.5 1.5 0 01-1.5 1.5z"/></svg>
            </div>
            <h4 className="font-anton text-xl uppercase tracking-wide text-white">FREE SHUTTLE SERVICE</h4>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#ff1493] hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#ff1493] border-2 border-[#ff1493]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>
            </div>
            <h4 className="font-anton text-xl uppercase tracking-wide text-white">ACTIVITIES & EXPERIENCES</h4>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#13bbad] hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-[#144333] rounded-full flex items-center justify-center text-[#13bbad] border-2 border-[#13bbad]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h4 className="font-anton text-xl uppercase tracking-wide text-white">CONNECTING WITH DESIGNERS</h4>
          </div>
        </div>
      </section>

      {/* 8. OPENING HOURS & GET TICKET BUTTON */}
      <section className="pb-24 pt-8 px-6 flex flex-col items-center justify-center text-center">
        <div className="border-4 border-[#fadf29] bg-[#144333]/40 p-8 md:p-12 shadow-[10px_10px_0px_#ff1493] max-w-2xl w-full mb-12">
          <h2 className="font-anton text-3xl md:text-5xl text-[#0fdff8] uppercase mb-8">
            OPENING HOURS
          </h2>
          <div className="font-roboto font-bold text-xl md:text-2xl text-white flex flex-col gap-4 tracking-wide">
            <p>Friday – Sunday <span className="text-[#fadf29] mx-2">|</span> 8:00 AM – 9:00 PM</p>
            <p>Monday – Tuesday <span className="text-[#fadf29] mx-2">|</span> 3:00 PM – 9:00 PM</p>
          </div>
        </div>
        
        <Link
          href="/apply"
          className="inline-block px-12 py-5 bg-[#0fdff8] text-[#000000] font-anton text-3xl tracking-widest uppercase shadow-[6px_6px_0px_#fadf29] hover:-translate-y-2 hover:shadow-[6px_10px_0px_#fadf29] transition-all"
        >
          GET TICKETS NOW
        </Link>
      </section>

      {/* 9. BRANDS LOGOS SPONSOR SECTION */}
      <section className="w-full bg-white py-12 border-t-8 border-[#13bbad]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center font-anton text-2xl text-gray-400 uppercase tracking-widest mb-8">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-pacifico text-3xl md:text-4xl text-black">RetroWear</span>
            <span className="font-anton text-3xl md:text-4xl text-black uppercase">Synth&Co</span>
            <span className="font-roboto font-black text-3xl md:text-4xl text-black italic">VINTAGE VAULT</span>
            <span className="font-anton text-3xl md:text-4xl text-black uppercase tracking-widest">NeonCity</span>
            <span className="font-pacifico text-3xl md:text-4xl text-black">Waroeng Depe</span>
          </div>
        </div>
      </section>

    </div>
  );
}