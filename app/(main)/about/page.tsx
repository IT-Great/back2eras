// /* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto">
      
//       {/* SECTION 1: HERO STATEMENT (Berdasarkan Gambar 1) */}
//       {/* Desain ini meniru layout tulisan besar di tengah dengan background solid */}
//       <section className="w-full bg-[#144333] py-24 md:py-36 px-6 border-b-4 border-[#ff1493] flex items-center justify-center relative overflow-hidden">
//         {/* Dekorasi Neon */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(19,187,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(19,187,173,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
        
//         <h1 className="font-anton text-4xl md:text-5xl lg:text-7xl text-center text-[#0fdff8] uppercase leading-tight max-w-5xl drop-shadow-[3px_3px_0px_#144333] z-10 relative">
//           80's WDP is a celebration of <span className="text-[#ff1493]">vintage nostalgia</span>, <span className="text-[#fadf29]">sustainable fashion</span>, and vibrant communities.
//         </h1>
//       </section>

//       {/* SECTION 2: INTRO & DUAL COLUMNS (Berdasarkan Gambar 2) */}
//       <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        
//         {/* Tulisan besar di tengah */}
//         <h2 className="font-pacifico text-2xl md:text-4xl text-center text-[#fadf29] mb-16 leading-relaxed max-w-4xl mx-auto">
//           Discover a curated thrifting experience while enjoying face-to-face conversations with local vintage collectors and makers. Ask questions, trade your clothes, and learn about the stories behind every piece.
//         </h2>

//         {/* Layout 2 Kolom[cite: 12] */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg text-[#eaddce]/80 leading-relaxed font-light">
          
//           {/* Kolom Kiri */}
//           <div className="flex flex-col gap-6">
//             <p>
//               Every year, 80's WDP showcases the best vintage collectors and sustainable fashion brands from the region, each unveiling exclusive curated pieces and retro design sensibilities.
//             </p>
//             <p>
//               What sets the event apart are not just the products but the people and values behind them. Every vendor is handpicked by our curatorial team for their unique design vision, brand story, and commitment to social responsibility. In this way, we believe every purchase at 80's WDP goes beyond how it looks — it carries a connection to small businesses and circular fashion communities.
//             </p>
//           </div>

//           {/* Kolom Kanan */}
//           <div className="flex flex-col gap-6">
//             <p>
//               Thrifting at 80's WDP is a journey of discovery. Mini thrift spaces are fashioned into creative time machines, with floor-to-ceiling retro displays everywhere you look. Collectors and designers are also present in each space so you can more deeply connect with them.
//             </p>
//             <p>
//               Between shopping, the festival also offers spaces to pause. Here you can share classic food from Waroeng Depe, taste something new, or take part in a DIY customization workshop. What people love about 80's WDP is that it's never <em className="text-[#0fdff8] font-bold not-italic">just</em> about what you take home, but the connections you create and the impact carried forward.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* SECTION 3: ZIG-ZAG LAYOUT (Sesuai instruksi tambahan) */}
//       <section className="bg-black py-20 border-t-4 border-[#13bbad] overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32">
          
//           {/* Baris 1: Teks Kiri, Gambar Kanan */}
//           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//             <div className="w-full md:w-1/2 flex flex-col gap-6">
//               <div className="text-[#0fdff8] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
//                 <span className="text-[#ff1493]">•</span> Community First
//               </div>
//               <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white uppercase drop-shadow-[2px_2px_0px_#ff1493]">
//                 Vintage Vault Swap
//               </h3>
//               <p className="text-[#eaddce]/80 text-lg leading-relaxed">
//                 Misi kami adalah mengurangi limbah tekstil dengan cara yang menyenangkan. Melalui program <em>Vintage Vault Swap</em>, pengunjung dapat membawa pakaian layak pakai mereka untuk ditukarkan dengan koleksi orang lain. Ini bukan sekadar transaksi, melainkan pertukaran memori dan gaya lintas generasi yang dirayakan dalam iringan musik disko 80-an.
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 relative group">
//               <div className="absolute inset-0 bg-[#fadf29] translate-x-4 translate-y-4 rounded"></div>
//               <img 
//                 src="https://images.unsplash.com/photo-1489987707023-afc152d5e073?q=80&w=800&auto=format&fit=crop" 
//                 alt="Vintage Swap" 
//                 className="relative z-10 w-full aspect-video object-cover rounded border-2 border-[#13bbad] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Baris 2: Gambar Kiri, Teks Kanan (Selang-seling / Reverse) */}
//           <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
//             <div className="w-full md:w-1/2 flex flex-col gap-6">
//               <div className="text-[#fadf29] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
//                 <span className="text-[#0fdff8]">•</span> Creative Hub
//               </div>
//               <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white uppercase drop-shadow-[2px_2px_0px_#13bbad]">
//                 DIY Customization
//               </h3>
//               <p className="text-[#eaddce]/80 text-lg leading-relaxed">
//                 Hidupkan kembali jaket denim pudar atau kaos lama Anda di area <em>DIY Customization Workshop</em> kami. Bersama seniman lokal, pelajari teknik menempel <em>patches</em> bergaya synthwave, melukis kain dengan warna neon, hingga memotong siluet baju bernuansa retro. Jadikan barang bekas Anda sebagai mahakarya eksklusif yang hanya ada satu di dunia.
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 relative group">
//               <div className="absolute inset-0 bg-[#ff1493] -translate-x-4 translate-y-4 rounded"></div>
//               <img 
//                 src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop" 
//                 alt="DIY Workshop" 
//                 className="relative z-10 w-full aspect-video object-cover rounded border-2 border-[#fadf29] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300"
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* CALL TO ACTION BOTTOM */}
//       <section className="bg-[#ff1493] py-16 text-center border-t-4 border-[#fadf29]">
//         <h3 className="font-anton text-3xl md:text-5xl text-white uppercase mb-6 drop-shadow-[2px_2px_0px_#144333]">
//           Ready to join the revolution?
//         </h3>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link href="/apply" className="bg-[#fadf29] text-[#144333] font-anton text-xl tracking-wide uppercase px-8 py-3 rounded shadow-[4px_4px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
//             Become a Tenant
//           </Link>
//           <Link href="/contact" className="bg-black text-[#0fdff8] font-anton text-xl tracking-wide uppercase px-8 py-3 rounded shadow-[4px_4px_0px_#144333] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border border-[#0fdff8]">
//             Contact Us
//           </Link>
//         </div>
//       </section>

//     </div>
//   );
// }

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto">
      
      {/* SECTION 1: HERO STATEMENT */}
      <section className="w-full bg-[#144333] py-24 md:py-36 px-6 border-b-4 border-[#ff1493] flex items-center justify-center relative overflow-hidden">
        {/* Dekorasi Neon */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(19,187,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(19,187,173,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
        
        <h1 className="font-anton text-4xl md:text-5xl lg:text-7xl text-center text-[#0fdff8] uppercase leading-tight max-w-5xl drop-shadow-[3px_3px_0px_#144333] z-10 relative">
          80's WDP is a celebration of <span className="text-[#ff1493]">vintage nostalgia</span>, <span className="text-[#fadf29]">sustainable fashion</span>, and vibrant communities.
        </h1>
      </section>

      {/* SECTION 2: INTRO & DUAL COLUMNS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        
        <h2 className="font-pacifico text-2xl md:text-4xl text-center text-[#fadf29] mb-16 leading-relaxed max-w-4xl mx-auto">
          Discover a curated thrifting experience while enjoying face-to-face conversations with local vintage collectors and makers. Ask questions, trade your clothes, and learn about the stories behind every piece.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg text-[#eaddce]/80 leading-relaxed font-light">
          
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-6">
            <p>
              Every year, 80's WDP showcases the best vintage collectors and sustainable fashion brands from the region, each unveiling exclusive curated pieces and retro design sensibilities.
            </p>
            <p>
              What sets the event apart are not just the products but the people and values behind them. Every vendor is handpicked by our curatorial team for their unique design vision, brand story, and commitment to social responsibility. In this way, we believe every purchase at 80's WDP goes beyond how it looks — it carries a connection to small businesses and circular fashion communities.
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-6">
            <p>
              Thrifting at 80's WDP is a journey of discovery. Mini thrift spaces are fashioned into creative time machines, with floor-to-ceiling retro displays everywhere you look. Collectors and designers are also present in each space so you can more deeply connect with them.
            </p>
            <p>
              Between shopping, the festival also offers spaces to pause. Here you can share classic food from Waroeng Depe, taste something new, or take part in a DIY customization workshop. What people love about 80's WDP is that it's never <em className="text-[#0fdff8] font-bold not-italic">just</em> about what you take home, but the connections you create and the impact carried forward.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: ZIG-ZAG LAYOUT (Translated to English) */}
      <section className="bg-black py-20 border-t-4 border-[#13bbad] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32">
          
          {/* Baris 1: Teks Kiri, Gambar Kanan */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="text-[#0fdff8] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="text-[#ff1493]">•</span> Community First
              </div>
              <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white uppercase drop-shadow-[2px_2px_0px_#ff1493]">
                Vintage Vault Swap
              </h3>
              <p className="text-[#eaddce]/80 text-lg leading-relaxed">
                Our mission is to reduce textile waste in the most fun way possible. Through our <em>Vintage Vault Swap</em> program, attendees can bring their pre-loved clothes to exchange for pieces from someone else's collection. It's more than just a transaction; it's an exchange of memories and cross-generational style, all celebrated to the rhythm of 80s disco beats.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#fadf29] translate-x-4 translate-y-4 rounded"></div>
              <img 
                src="assets/images/vintage.jpg" 
                alt="Vintage Swap" 
                className="relative z-10 w-full aspect-video object-cover rounded border-2 border-[#13bbad] group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Baris 2: Gambar Kiri, Teks Kanan */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="text-[#fadf29] font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="text-[#0fdff8]">•</span> Creative Hub
              </div>
              <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white uppercase drop-shadow-[2px_2px_0px_#13bbad]">
                DIY Customization
              </h3>
              <p className="text-[#eaddce]/80 text-lg leading-relaxed">
                Breathe new life into your faded denim jacket or old t-shirt at our <em>DIY Customization Workshop</em>. Guided by local artists, learn the art of applying synthwave-style patches, painting fabrics with neon colors, and cropping silhouettes for that perfect retro vibe. Turn your thrifted finds into an exclusive, one-of-a-kind masterpiece.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#ff1493] -translate-x-4 translate-y-4 rounded"></div>
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop" 
                alt="DIY Workshop" 
                className="relative z-10 w-full aspect-video object-cover rounded border-2 border-[#fadf29] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <section className="bg-[#ff1493] py-16 text-center border-t-4 border-[#fadf29]">
        <h3 className="font-anton text-3xl md:text-5xl text-white uppercase mb-6 drop-shadow-[2px_2px_0px_#144333]">
          Ready to join the revolution?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/tenant" className="bg-[#fadf29] text-[#144333] font-anton text-xl tracking-wide uppercase px-8 py-3 rounded shadow-[4px_4px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Become a Tenant
          </Link>
          <Link href="/contact" className="bg-black text-[#0fdff8] font-anton text-xl tracking-wide uppercase px-8 py-3 rounded shadow-[4px_4px_0px_#144333] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border border-[#0fdff8]">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}