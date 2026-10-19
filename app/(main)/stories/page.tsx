// "use client";

// import { useState } from "react";
// import Link from "next/link";

// // 1. DATA JSON SEMENTARA (MOCK DATA)
// const dummyStories = [
//   {
//     id: 1,
//     category: "VINTAGE VAULT",
//     date: "NOV 5, 2026",
//     title: "Designers return to Thrift Fest: Meet the featured creators",
//     description: "This November, Thrift Fest is delighted to welcome four amazing designers for the first time. Mereka akan memamerkan koleksi fesyen berkelanjutan dan hasil daur ulang gaya vintage yang dijamin akan memukau Anda. Jangan lewatkan kesempatan untuk bertemu langsung dengan para kreator visioner ini dan dapatkan inspirasi gaya 80-an yang autentik.",
//     image: "https://images.unsplash.com/photo-1550614000-4b95f26941ab?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     category: "SUSTAINABLE FASHION",
//     date: "NOV 14, 2026",
//     title: "Inside our first Neon Showcase: Enter the designers' worlds",
//     description: "At the 80's Era Thrift Festival 2026, we are thrilled to champion original design by welcoming three visionary designers. Mereka memadukan warna neon terang dengan kain daur ulang berkualitas tinggi, menciptakan gelombang baru dalam industri fesyen ramah lingkungan.",
//     image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     category: "DIY WORKSHOP",
//     date: "NOV 7, 2026",
//     title: "Shop these exclusive collaborations this November",
//     description: "At the heart of Thrift Fest lies a commitment to creativity, community, and meaningful conversations. This November, we are thrilled to spotlight exclusive collaborations between brands that first met at our festival. Jadilah bagian dari revolusi mode yang mengutamakan kreativitas tanpa batas.",
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     category: "SUSTAINABLE FASHION",
//     date: "OCT 24, 2026",
//     title: "These are the recipients of the Thrift Showcase Grant",
//     description: "The Thrift curation has always prioritised original, design-forward collections and looked to support emerging talent alongside established designers. Kami sangat bangga mengumumkan penerima hibah tahun ini yang berhasil membuktikan bahwa barang bekas bisa bernilai sangat tinggi jika berada di tangan yang tepat.",
//     image: "https://images.unsplash.com/photo-1489987707023-afc152d5e073?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     category: "VINTAGE VAULT",
//     date: "OCT 17, 2026",
//     title: "Meet 10 new faces of 80s Thrift Fest: The Edition 2026",
//     description: "As we approach the upcoming edition of our Festival, we are excited to introduce a selection of new brands that are joining us for the first time. Each of these brands brings with them stories of nostalgia, synthwave culture, and pure 80s energy.",
//     image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     category: "THRIFT TIPS",
//     date: "OCT 10, 2026",
//     title: "Scents and Sensibility: Tips Memilih Jaket Kulit Retro",
//     description: "Mencari jaket kulit vintage dari era 80-an membutuhkan ketelitian. Perhatikan aroma kain, tekstur, serta jahitan bahu yang menjadi ciri khas era tersebut. Kami memberikan panduan lengkap agar Anda tidak salah beli saat thrifting.",
//     image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=600&auto=format&fit=crop",
//   },
// ];

// // Mengambil kategori unik dan menambahkan "ALL POSTS"
// const allCategories = ["ALL POSTS", ...Array.from(new Set(dummyStories.map(story => story.category)))];

// export default function StoriesPage() {
//   const [activeCategory, setActiveCategory] = useState("ALL POSTS");

//   // 2. LOGIKA FILTERING
//   const filteredStories = activeCategory === "ALL POSTS" 
//     ? dummyStories 
//     : dummyStories.filter(story => story.category === activeCategory);

//   // Item pertama menjadi Banner
//   const featuredStory = filteredStories[0];
//   // Item kedua dan seterusnya menjadi Grid (4 kolom ke samping)
//   const gridStories = filteredStories.slice(1);

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
//       {/* 1. KATEGORI NAVIGATION (Tanpa Background Box, Hanya Teks) */}
//       {/* Background disamakan dengan warna dasar web hitam agar terkesan menyatu */}
//       <div className="sticky top-[72px] md:top-[96px] z-30 bg-[#000000] border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
//           <ul className="flex gap-8 font-anton tracking-widest text-sm md:text-base">
//             {allCategories.map((category, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => setActiveCategory(category)}
//                   className={`uppercase transition-colors pb-1 ${
//                     activeCategory === category 
//                       ? "text-[#ff1493] border-b-2 border-[#ff1493]" // Teks warna berbeda dan garis bawah jika terpilih
//                       : "text-white hover:text-[#0fdff8]"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {filteredStories.length === 0 && (
//         <div className="text-center py-32 font-anton text-2xl text-[#ff1493]">
//           Belum ada cerita untuk kategori ini.
//         </div>
//       )}

//       {/* 2. BANNER / FEATURED STORY (Langsung di bawah kategori) */}
//       {featuredStory && (
//         <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[600px] group overflow-hidden">
//           <img 
//             src={featuredStory.image} 
//             alt={featuredStory.title}
//             className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
//           />
//           {/* Gradient overlay gelap di bawah agar teks terbaca jelas */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
//           {/* Konten teks diletakkan di area bawah (bottom-0) */}
//           <div className="absolute bottom-0 left-0 w-full">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16 z-10">
//               <div className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-3 uppercase drop-shadow-md">
//                 <span className="text-[#0fdff8]">•</span> {featuredStory.category} <span className="text-gray-400">|</span> {featuredStory.date}
//               </div>
//               <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
//                 {featuredStory.title}
//               </h1>
//               <p className="text-base md:text-lg lg:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 text-gray-200 drop-shadow-md">
//                 {featuredStory.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 3. GRID 4 KOLOM STORIES CARD (Berjejer 4 ke samping) */}
//       {gridStories.length > 0 && (
//         <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16">
//           {/* Menggunakan lg:grid-cols-4 untuk memastikan ada 4 card ke samping pada desktop */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
//             {gridStories.map((story) => (
//               <div key={story.id} className="group flex flex-col cursor-pointer">
                
//                 {/* Image Container Card */}
//                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
//                   <img 
//                     src={story.image} 
//                     alt={story.title} 
//                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-[#0fdff8]/0 group-hover:bg-[#0fdff8]/10 transition-colors duration-300"></div>
//                 </div>

//                 {/* Bullet, Kategori, Pipe, dan Tanggal */}
//                 <div className="flex items-center gap-1.5 text-white font-bold text-xs tracking-widest mb-2 uppercase">
//                   <span className="text-[#ff1493]">•</span>
//                   <span className="truncate">{story.category}</span> 
//                   <span className="text-gray-500 shrink-0">|</span> 
//                   <span className="text-gray-300 shrink-0">{story.date}</span>
//                 </div>

//                 {/* Judul Card */}
//                 <h2 className="font-anton text-lg md:text-xl text-white group-hover:text-[#0fdff8] transition-colors mb-2 leading-snug line-clamp-3">
//                   {story.title}
//                 </h2>

//                 {/* Deskripsi - Maksimal 4 Baris dengan Titik Tiga (Elipsis) */}
//                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
//                   {story.description}
//                 </p>

//               </div>
//             ))}

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// // 1. DATA JSON SEMENTARA (MOCK DATA) - 80s Themed Content
// const dummyStories = [
//   {
//     id: 1,
//     category: "NEON NOSTALGIA",
//     date: "NOV 5, 2026",
//     title: "The Return of Neon: Exploring the 80s Color Palette",
//     description: "This November, Back to 80's Era Thrift Fest brings you a blinding array of neon windbreakers, leg warmers, and bold spandex. Dive into the history of these vibrant colors and learn how to incorporate retro-futuristic vibes into your modern everyday wardrobe.",
//     image: "assets/images/return-of-neon.jpg",
//   },
//   {
//     id: 2,
//     category: "SYNTHWAVE STYLE",
//     date: "NOV 14, 2026",
//     title: "Synthwave Aesthetics: Dressing for the Digital Grid",
//     description: "Embrace the neon-soaked cyber streets with our latest curated collection of vintage leather jackets, aviator sunglasses, and graphic tees. Discover how the iconic sounds of 80s synthesizers are actively shaping today's sustainable fashion trends.",
//     image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     category: "CASSETTE CULTURE",
//     date: "NOV 7, 2026",
//     title: "Mixtapes and Denim: The Ultimate 80s Starter Pack",
//     description: "At the heart of the 1980s was a deep connection to music and rebellious DIY fashion. Join our exclusive workshop this November to customize your vintage denim jackets with retro patches while jamming to classic cassette mixtapes curated by local DJs.",
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     category: "ARCADE ARCHIVES",
//     date: "OCT 24, 2026",
//     title: "Pac-Man to Fashion: How 80s Arcades Inspire Design",
//     description: "Arcade culture has always prioritized bold, pixelated, and design-forward graphics. We are thrilled to announce this year's showcase featuring upcycled clothing inspired by legendary 8-bit games, bringing high-score energy directly to your closet.",
//     image: "assets/images/pracman.jpg",
//   },
//   {
//     id: 5,
//     category: "VINTAGE VAULT",
//     date: "OCT 17, 2026",
//     title: "Meet 10 New Faces of the 80s Era Thrift Fest",
//     description: "As we approach the upcoming edition of our festival, we are excited to introduce a selection of new brands joining us for the first time. Each brand brings a unique story of roller discos, pop idols, synthwave culture, and pure, unfiltered 80s energy.",
//     image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
//   },
// //   {
// //     id: 6,
// //     category: "THRIFT TIPS",
// //     date: "OCT 10, 2026",
// //     title: "Miami Vice Vibes: How to Style Retro Shoulder Pads",
// //     description: "Hunting for the perfect 80s blazer requires a keen eye for detail. Pay attention to the dramatic shoulder silhouettes and pastel color blocking that defined the era. Here is our complete guide to thrifting the ultimate Miami Vice look without breaking the bank.",
// //     image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=600&auto=format&fit=crop",
// //   },
// ];

// // Mengambil kategori unik dan menambahkan "ALL POSTS"
// const allCategories = ["ALL POSTS", ...Array.from(new Set(dummyStories.map(story => story.category)))];

// export default function StoriesPage() {
//   const [activeCategory, setActiveCategory] = useState("ALL POSTS");

//   // 2. LOGIKA FILTERING
//   const filteredStories = activeCategory === "ALL POSTS" 
//     ? dummyStories 
//     : dummyStories.filter(story => story.category === activeCategory);

//   // Item pertama menjadi Banner
//   const featuredStory = filteredStories[0];
//   // Item kedua dan seterusnya menjadi Grid (4 kolom ke samping)
//   const gridStories = filteredStories.slice(1);

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
//       {/* 1. KATEGORI NAVIGATION (Tanpa Background Box, Hanya Teks) */}
//       {/* Background disamakan dengan warna dasar web hitam agar terkesan menyatu */}
//       <div className="sticky top-[72px] md:top-[96px] z-30 bg-[#000000] border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
//           <ul className="flex gap-8 font-anton tracking-widest text-sm md:text-base">
//             {allCategories.map((category, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => setActiveCategory(category)}
//                   className={`uppercase transition-colors pb-1 ${
//                     activeCategory === category 
//                       ? "text-[#ff1493] border-b-2 border-[#ff1493]" // Teks warna berbeda dan garis bawah jika terpilih
//                       : "text-white hover:text-[#0fdff8]"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {filteredStories.length === 0 && (
//         <div className="text-center py-32 font-anton text-2xl text-[#ff1493]">
//           No stories available for this category yet.
//         </div>
//       )}

//       {/* 2. BANNER / FEATURED STORY (Langsung di bawah kategori) */}
//       {featuredStory && (
//         <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[600px] group overflow-hidden">
//           <img 
//             src={featuredStory.image} 
//             alt={featuredStory.title}
//             className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
//           />
//           {/* Gradient overlay gelap di bawah agar teks terbaca jelas */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
//           {/* Konten teks diletakkan di area bawah (bottom-0) */}
//           <div className="absolute bottom-0 left-0 w-full">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16 z-10">
//               <div className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-3 uppercase drop-shadow-md">
//                 <span className="text-[#0fdff8]">•</span> {featuredStory.category} <span className="text-gray-400">|</span> {featuredStory.date}
//               </div>
//               <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
//                 {featuredStory.title}
//               </h1>
//               <p className="text-base md:text-lg lg:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 text-gray-200 drop-shadow-md">
//                 {featuredStory.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 3. GRID 4 KOLOM STORIES CARD (Berjejer 4 ke samping) */}
//       {gridStories.length > 0 && (
//         <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16">
//           {/* Menggunakan lg:grid-cols-4 untuk memastikan ada 4 card ke samping pada desktop */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
//             {gridStories.map((story) => (
//               <div key={story.id} className="group flex flex-col cursor-pointer">
                
//                 {/* Image Container Card */}
//                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
//                   <img 
//                     src={story.image} 
//                     alt={story.title} 
//                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-[#0fdff8]/0 group-hover:bg-[#0fdff8]/10 transition-colors duration-300"></div>
//                 </div>

//                 {/* Bullet, Kategori, Pipe, dan Tanggal */}
//                 <div className="flex items-center gap-1.5 text-white font-bold text-xs tracking-widest mb-2 uppercase">
//                   <span className="text-[#ff1493]">•</span>
//                   <span className="truncate">{story.category}</span> 
//                   <span className="text-gray-500 shrink-0">|</span> 
//                   <span className="text-gray-300 shrink-0">{story.date}</span>
//                 </div>

//                 {/* Judul Card */}
//                 <h2 className="font-anton text-lg md:text-xl text-white group-hover:text-[#0fdff8] transition-colors mb-2 leading-snug line-clamp-3">
//                   {story.title}
//                 </h2>

//                 {/* Deskripsi - Maksimal 4 Baris dengan Titik Tiga (Elipsis) */}
//                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
//                   {story.description}
//                 </p>

//               </div>
//             ))}

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// // 1. DATA JSON SEMENTARA (MOCK DATA) - 80s Themed Content
// const dummyStories = [
//   {
//     id: 1,
//     slug: "return-of-neon", // Ditambahkan slug
//     category: "NEON NOSTALGIA",
//     date: "NOV 5, 2026",
//     title: "The Return of Neon: Exploring the 80s Color Palette",
//     description: "This November, Back to 80's Era Thrift Fest brings you a blinding array of neon windbreakers, leg warmers, and bold spandex. Dive into the history of these vibrant colors and learn how to incorporate retro-futuristic vibes into your modern everyday wardrobe.",
//     image: "assets/images/return-of-neon.jpg",
//   },
//   {
//     id: 2,
//     slug: "synthwave-aesthetics", // Ditambahkan slug
//     category: "SYNTHWAVE STYLE",
//     date: "NOV 14, 2026",
//     title: "Synthwave Aesthetics: Dressing for the Digital Grid",
//     description: "Embrace the neon-soaked cyber streets with our latest curated collection of vintage leather jackets, aviator sunglasses, and graphic tees. Discover how the iconic sounds of 80s synthesizers are actively shaping today's sustainable fashion trends.",
//     image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     slug: "mixtapes-and-denim", // Ditambahkan slug
//     category: "CASSETTE CULTURE",
//     date: "NOV 7, 2026",
//     title: "Mixtapes and Denim: The Ultimate 80s Starter Pack",
//     description: "At the heart of the 1980s was a deep connection to music and rebellious DIY fashion. Join our exclusive workshop this November to customize your vintage denim jackets with retro patches while jamming to classic cassette mixtapes curated by local DJs.",
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     slug: "pac-man-to-fashion", // Ditambahkan slug
//     category: "ARCADE ARCHIVES",
//     date: "OCT 24, 2026",
//     title: "Pac-Man to Fashion: How 80s Arcades Inspire Design",
//     description: "Arcade culture has always prioritized bold, pixelated, and design-forward graphics. We are thrilled to announce this year's showcase featuring upcycled clothing inspired by legendary 8-bit games, bringing high-score energy directly to your closet.",
//     image: "assets/images/pracman.jpg",
//   },
//   {
//     id: 5,
//     slug: "meet-10-new-faces", // Ditambahkan slug
//     category: "VINTAGE VAULT",
//     date: "OCT 17, 2026",
//     title: "Meet 10 New Faces of the 80s Era Thrift Fest",
//     description: "As we approach the upcoming edition of our festival, we are excited to introduce a selection of new brands joining us for the first time. Each brand brings a unique story of roller discos, pop idols, synthwave culture, and pure, unfiltered 80s energy.",
//     image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
//   },
// //   {
// //     id: 6,
// //     slug: "miami-vice-vibes", // Ditambahkan slug
// //     category: "THRIFT TIPS",
// //     date: "OCT 10, 2026",
// //     title: "Miami Vice Vibes: How to Style Retro Shoulder Pads",
// //     description: "Hunting for the perfect 80s blazer requires a keen eye for detail. Pay attention to the dramatic shoulder silhouettes and pastel color blocking that defined the era. Here is our complete guide to thrifting the ultimate Miami Vice look without breaking the bank.",
// //     image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=600&auto=format&fit=crop",
// //   },
// ];

// // Mengambil kategori unik dan menambahkan "ALL POSTS"
// const allCategories = ["ALL POSTS", ...Array.from(new Set(dummyStories.map(story => story.category)))];

// export default function StoriesPage() {
//   const [activeCategory, setActiveCategory] = useState("ALL POSTS");

//   // 2. LOGIKA FILTERING
//   const filteredStories = activeCategory === "ALL POSTS" 
//     ? dummyStories 
//     : dummyStories.filter(story => story.category === activeCategory);

//   // Item pertama menjadi Banner
//   const featuredStory = filteredStories[0];
//   // Item kedua dan seterusnya menjadi Grid (4 kolom ke samping)
//   const gridStories = filteredStories.slice(1);

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
//       {/* 1. KATEGORI NAVIGATION (Tanpa Background Box, Hanya Teks) */}
//       <div className="sticky top-[72px] md:top-[96px] z-30 bg-[#000000] border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
//           <ul className="flex gap-8 font-anton tracking-widest text-sm md:text-base">
//             {allCategories.map((category, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => setActiveCategory(category)}
//                   className={`uppercase transition-colors pb-1 ${
//                     activeCategory === category 
//                       ? "text-[#ff1493] border-b-2 border-[#ff1493]" // Teks warna berbeda dan garis bawah jika terpilih
//                       : "text-white hover:text-[#0fdff8]"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {filteredStories.length === 0 && (
//         <div className="text-center py-32 font-anton text-2xl text-[#ff1493]">
//           No stories available for this category yet.
//         </div>
//       )}

//       {/* 2. BANNER / FEATURED STORY (Langsung di bawah kategori) */}
//       {featuredStory && (
//         <Link href={`/stories/${featuredStory.slug}`} className="block relative w-full h-[50vh] min-h-[400px] lg:h-[600px] group overflow-hidden">
//           <img 
//             src={featuredStory.image} 
//             alt={featuredStory.title}
//             className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
//           />
//           {/* Gradient overlay gelap di bawah agar teks terbaca jelas */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
//           {/* Konten teks diletakkan di area bawah (bottom-0) */}
//           <div className="absolute bottom-0 left-0 w-full">
//             <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16 z-10">
//               <div className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-3 uppercase drop-shadow-md">
//                 <span className="text-[#0fdff8]">•</span> {featuredStory.category} <span className="text-gray-400">|</span> {featuredStory.date}
//               </div>
//               <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
//                 {featuredStory.title}
//               </h1>
//               <p className="text-base md:text-lg lg:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 text-gray-200 drop-shadow-md">
//                 {featuredStory.description}
//               </p>
//             </div>
//           </div>
//         </Link>
//       )}

//       {/* 3. GRID 4 KOLOM STORIES CARD (Berjejer 4 ke samping) */}
//       {gridStories.length > 0 && (
//         <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
//             {gridStories.map((story) => (
//               <Link key={story.id} href={`/stories/${story.slug}`} className="group flex flex-col cursor-pointer">
                
//                 {/* Image Container Card */}
//                 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
//                   <img 
//                     src={story.image} 
//                     alt={story.title} 
//                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-[#0fdff8]/0 group-hover:bg-[#0fdff8]/10 transition-colors duration-300"></div>
//                 </div>

//                 {/* Bullet, Kategori, Pipe, dan Tanggal */}
//                 <div className="flex items-center gap-1.5 text-white font-bold text-xs tracking-widest mb-2 uppercase">
//                   <span className="text-[#ff1493]">•</span>
//                   <span className="truncate">{story.category}</span> 
//                   <span className="text-gray-500 shrink-0">|</span> 
//                   <span className="text-gray-300 shrink-0">{story.date}</span>
//                 </div>

//                 {/* Judul Card */}
//                 <h2 className="font-anton text-lg md:text-xl text-white group-hover:text-[#0fdff8] transition-colors mb-2 leading-snug line-clamp-3">
//                   {story.title}
//                 </h2>

//                 {/* Deskripsi - Maksimal 4 Baris dengan Titik Tiga (Elipsis) */}
//                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
//                   {story.description}
//                 </p>

//               </Link>
//             ))}

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Story {
  id: number;
  slug: string;
  category: string;
  title: string;
  published_date: string;
  description: string;
  image_path: string;
}

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [activeCategory, setActiveCategory] = useState("ALL POSTS");
  const [loading, setLoading] = useState(true);

  // Mengambil data dari Laravel
  useEffect(() => {
    fetch("https://backend-back2eras.vercel.app/apiapi/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stories", err);
        setLoading(false);
      });
  }, []);

  // Membuat daftar kategori unik
  const allCategories = ["ALL POSTS", ...Array.from(new Set(stories.map(s => s.category)))];

  // Logika Filtering
  const filteredStories = activeCategory === "ALL POSTS" 
    ? stories 
    : stories.filter(s => s.category === activeCategory);

  const featuredStory = filteredStories[0];
  const gridStories = filteredStories.slice(1);

  // Helper untuk format tanggal (Contoh: "2026-11-05" -> "NOV 5, 2026")
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
  };

  if (loading) return <div className="min-h-screen bg-black text-[#0fdff8] p-20 font-anton text-2xl text-center uppercase tracking-widest">Loading Stories...</div>;

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
      {/* 1. KATEGORI NAVIGATION */}
      <div className="sticky top-[72px] md:top-[96px] z-30 bg-[#000000] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <ul className="flex gap-8 font-anton tracking-widest text-sm md:text-base">
            {allCategories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`uppercase transition-colors pb-1 ${
                    activeCategory === category 
                      ? "text-[#ff1493] border-b-2 border-[#ff1493]" 
                      : "text-white hover:text-[#0fdff8]"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-32 font-anton text-2xl text-[#ff1493]">
          No stories available for this category yet.
        </div>
      )}

      {/* 2. BANNER / FEATURED STORY */}
      {featuredStory && (
        <Link href={`/stories/${featuredStory.slug}`} className="block relative w-full h-[50vh] min-h-[400px] lg:h-[600px] group overflow-hidden">
          <img 
            src={featuredStory.image_path} 
            alt={featuredStory.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10 md:pb-16 z-10">
              <div className="flex items-center gap-2 text-white font-bold text-xs md:text-sm tracking-widest mb-3 uppercase drop-shadow-md">
                <span className="text-[#0fdff8]">•</span> {featuredStory.category} <span className="text-gray-400">|</span> {formatDate(featuredStory.published_date)}
              </div>
              <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                {featuredStory.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 text-gray-200 drop-shadow-md">
                {featuredStory.description}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* 3. GRID STORIES */}
      {gridStories.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {gridStories.map((story) => (
              <Link key={story.id} href={`/stories/${story.slug}`} className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-4">
                  <img src={story.image_path} alt={story.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-[#0fdff8]/0 group-hover:bg-[#0fdff8]/10 transition-colors duration-300"></div>
                </div>
                <div className="flex items-center gap-1.5 text-white font-bold text-xs tracking-widest mb-2 uppercase">
                  <span className="text-[#ff1493]">•</span>
                  <span className="truncate">{story.category}</span> 
                  <span className="text-gray-500 shrink-0">|</span> 
                  <span className="text-gray-300 shrink-0">{formatDate(story.published_date)}</span>
                </div>
                <h2 className="font-anton text-lg md:text-xl text-white group-hover:text-[#0fdff8] transition-colors mb-2 leading-snug line-clamp-3">
                  {story.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {story.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}