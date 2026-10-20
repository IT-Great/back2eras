/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";
// // Hapus import { notFound } jika tidak dipakai, atau biarkan saja

// // 1. DATA JSON SEMENTARA (Sama persis dengan sebelumnya)
// const dummyStories = [
//   {
//     id: 1,
//     slug: "return-of-neon",
//     category: "NEON NOSTALGIA",
//     date: "NOV 5, 2026",
//     title: "The Return of Neon: Exploring the 80s Color Palette",
//     description: "This November, Back to 80's Era Thrift Fest brings you a blinding array of neon windbreakers, leg warmers, and bold spandex. Dive into the history of these vibrant colors and learn how to incorporate retro-futuristic vibes into your modern everyday wardrobe.",
//     image: "https://images.unsplash.com/photo-1550614000-4b95f26941ab?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     slug: "synthwave-aesthetics",
//     category: "SYNTHWAVE STYLE",
//     date: "NOV 14, 2026",
//     title: "Synthwave Aesthetics: Dressing for the Digital Grid",
//     description: "Embrace the neon-soaked cyber streets with our latest curated collection of vintage leather jackets, aviator sunglasses, and graphic tees. Discover how the iconic sounds of 80s synthesizers are actively shaping today's sustainable fashion trends.",
//     image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     slug: "mixtapes-and-denim",
//     category: "CASSETTE CULTURE",
//     date: "NOV 7, 2026",
//     title: "Mixtapes and Denim: The Ultimate 80s Starter Pack",
//     description: "At the heart of the 1980s was a deep connection to music and rebellious DIY fashion. Join our exclusive workshop this November to customize your vintage denim jackets with retro patches while jamming to classic cassette mixtapes curated by local DJs.",
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     slug: "pac-man-to-fashion",
//     category: "ARCADE ARCHIVES",
//     date: "OCT 24, 2026",
//     title: "Pac-Man to Fashion: How 80s Arcades Inspire Design",
//     description: "Arcade culture has always prioritized bold, pixelated, and design-forward graphics. We are thrilled to announce this year's showcase featuring upcycled clothing inspired by legendary 8-bit games, bringing high-score energy directly to your closet.",
//     image: "https://images.unsplash.com/photo-1489987707023-afc152d5e073?q=80&w=600&auto=format&fit=crop", 
//   },
//   {
//     id: 5,
//     slug: "meet-10-new-faces",
//     category: "VINTAGE VAULT",
//     date: "OCT 17, 2026",
//     title: "Meet 10 New Faces of the 80s Era Thrift Fest",
//     description: "As we approach the upcoming edition of our festival, we are excited to introduce a selection of new brands joining us for the first time. Each brand brings a unique story of roller discos, pop idols, synthwave culture, and pure, unfiltered 80s energy.",
//     image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
//   }
// ];

// // PERBAIKAN: Menambahkan 'async' dan mendefinisikan tipe params sebagai Promise
// export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
//   // PERBAIKAN: Melakukan 'await' untuk mengekstrak nilai slug
//   const { slug } = await params;

//   // 2. MENCARI DATA BERDASARKAN SLUG
//   const story = dummyStories.find((s) => s.slug === slug);

//   // Jika slug tidak ditemukan, tampilkan halaman 404 Not Found kustom
//   if (!story) {
//     return (
//       <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
//         <h1 className="font-anton text-8xl text-[#ff1493] mb-4">404</h1>
//         <h2 className="font-pacifico text-3xl text-[#0fdff8] mb-8">Story Not Found</h2>
//         <Link href="/stories" className="bg-[#fadf29] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors">
//           Back to Stories
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
//       {/* 3. HERO IMAGE & TITLE */}
//       <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh]">
//         <img 
//           src={story.image} 
//           alt={story.title}
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
        
//         <div className="absolute bottom-0 left-0 w-full">
//           <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
//             <div className="flex items-center gap-2 text-[#fadf29] font-bold text-sm tracking-widest mb-4 uppercase drop-shadow-md">
//               <span className="text-[#ff1493]">•</span> {story.category} <span className="text-gray-400">|</span> {story.date}
//             </div>
//             <h1 className="font-anton text-4xl md:text-5xl lg:text-7xl text-white leading-tight drop-shadow-[2px_2px_0px_#144333]">
//               {story.title}
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* 4. CONTENT AREA */}
//       <section className="max-w-4xl mx-auto px-6 md:px-12 mt-12">
        
//         <Link 
//           href="/stories" 
//           className="inline-flex items-center gap-2 text-[#0fdff8] font-bold tracking-widest uppercase hover:text-[#ff1493] transition-colors mb-10"
//         >
//           <span>&larr;</span> Back to Stories
//         </Link>

//         <div className="flex flex-col gap-6 text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light">
//           <p className="font-bold text-[#fadf29] text-xl md:text-2xl mb-4 border-l-4 border-[#ff1493] pl-4">
//             {story.description}
//           </p>
//           <p>
//             The 1980s was a decade of bold choices, vibrant aesthetics, and a unique blend of analog warmth and futuristic digital dreams. Everything from fashion to music carried an undeniable energy that continues to influence modern creative industries today. Whether you were there to witness it firsthand or are discovering it through retro-revival trends, the impact is impossible to ignore.
//           </p>
//           <p>
//             At the <em>Back to 80's Era Thrift Fest</em>, our goal isn't just to sell vintage clothes; it's to recreate the feeling of walking into a neon-lit arcade or watching a classic synth-pop music video for the very first time. We want to empower you to express yourself loudly, proudly, and sustainably. By choosing to thrift and upcycle, you are not only making a fashion statement but also contributing to a circular economy that honors the past while protecting the future.
//           </p>
//           <p>
//             So grab your Walkman, tie up your high-top sneakers, and dive headfirst into the culture. Keep exploring our platform to discover more curated stories, interviews with local designers, and deep dives into the trends that defined a generation.
//           </p>
//         </div>

//         <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-3">
//             <span className="font-anton uppercase tracking-widest text-sm text-gray-500">Tags:</span>
//             <span className="bg-[#144333] text-[#0fdff8] px-3 py-1 rounded text-sm uppercase font-bold border border-[#0fdff8]/30">80s Vibe</span>
//             <span className="bg-[#144333] text-[#0fdff8] px-3 py-1 rounded text-sm uppercase font-bold border border-[#0fdff8]/30">Thrifting</span>
//           </div>
//           <button className="font-anton uppercase tracking-widest text-[#144333] bg-[#fadf29] px-6 py-2 rounded hover:bg-white transition-colors">
//             Share Story
//           </button>
//         </div>

//       </section>

//     </div>
//   );
// }

// import Link from "next/link";

// // 1. DATA JSON SEMENTARA
// const dummyStories = [
//   {
//     id: 1,
//     slug: "return-of-neon",
//     category: "NEON NOSTALGIA",
//     date: "NOV 5, 2026",
//     title: "The Return of Neon: Exploring the 80s Color Palette",
//     description: "This November, Back to 80's Era Thrift Fest brings you a blinding array of neon windbreakers, leg warmers, and bold spandex. Dive into the history of these vibrant colors and learn how to incorporate retro-futuristic vibes into your modern everyday wardrobe.",
//     image: "https://images.unsplash.com/photo-1550614000-4b95f26941ab?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     slug: "synthwave-aesthetics",
//     category: "SYNTHWAVE STYLE",
//     date: "NOV 14, 2026",
//     title: "Synthwave Aesthetics: Dressing for the Digital Grid",
//     description: "Embrace the neon-soaked cyber streets with our latest curated collection of vintage leather jackets, aviator sunglasses, and graphic tees. Discover how the iconic sounds of 80s synthesizers are actively shaping today's sustainable fashion trends.",
//     image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     slug: "mixtapes-and-denim",
//     category: "CASSETTE CULTURE",
//     date: "NOV 7, 2026",
//     title: "Mixtapes and Denim: The Ultimate 80s Starter Pack",
//     description: "At the heart of the 1980s was a deep connection to music and rebellious DIY fashion. Join our exclusive workshop this November to customize your vintage denim jackets with retro patches while jamming to classic cassette mixtapes curated by local DJs.",
//     image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     slug: "pac-man-to-fashion",
//     category: "ARCADE ARCHIVES",
//     date: "OCT 24, 2026",
//     title: "Pac-Man to Fashion: How 80s Arcades Inspire Design",
//     description: "Arcade culture has always prioritized bold, pixelated, and design-forward graphics. We are thrilled to announce this year's showcase featuring upcycled clothing inspired by legendary 8-bit games, bringing high-score energy directly to your closet.",
//     image: "https://images.unsplash.com/photo-1489987707023-afc152d5e073?q=80&w=600&auto=format&fit=crop", 
//   },
//   {
//     id: 5,
//     slug: "meet-10-new-faces",
//     category: "VINTAGE VAULT",
//     date: "OCT 17, 2026",
//     title: "Meet 10 New Faces of the 80s Era Thrift Fest",
//     description: "As we approach the upcoming edition of our festival, we are excited to introduce a selection of new brands joining us for the first time. Each brand brings a unique story of roller discos, pop idols, synthwave culture, and pure, unfiltered 80s energy.",
//     image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
//   }
// ];

// // PERBAIKAN: Fungsi ini memberitahu Next.js daftar slug yang ada sehingga bisa di-prerender tanpa error
// export async function generateStaticParams() {
//   return dummyStories.map((story) => ({
//     slug: story.slug,
//   }));
// }

// export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
//   const { slug } = await params;

//   // 2. MENCARI DATA BERDASARKAN SLUG
//   const story = dummyStories.find((s) => s.slug === slug);

//   // Jika slug tidak ditemukan, tampilkan halaman 404 Not Found kustom
//   if (!story) {
//     return (
//       <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
//         <h1 className="font-anton text-8xl text-[#ff1493] mb-4">404</h1>
//         <h2 className="font-pacifico text-3xl text-[#0fdff8] mb-8">Story Not Found</h2>
//         <Link href="/stories" className="bg-[#fadf29] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors">
//           Back to Stories
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
//       {/* 3. HERO IMAGE & TITLE */}
//       <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh]">
//         <img 
//           src={story.image} 
//           alt={story.title}
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
        
//         <div className="absolute bottom-0 left-0 w-full">
//           <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
//             <div className="flex items-center gap-2 text-[#fadf29] font-bold text-sm tracking-widest mb-4 uppercase drop-shadow-md">
//               <span className="text-[#ff1493]">•</span> {story.category} <span className="text-gray-400">|</span> {story.date}
//             </div>
//             <h1 className="font-anton text-4xl md:text-5xl lg:text-7xl text-white leading-tight drop-shadow-[2px_2px_0px_#144333]">
//               {story.title}
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* 4. CONTENT AREA */}
//       <section className="max-w-4xl mx-auto px-6 md:px-12 mt-12">
        
//         <Link 
//           href="/stories" 
//           className="inline-flex items-center gap-2 text-[#0fdff8] font-bold tracking-widest uppercase hover:text-[#ff1493] transition-colors mb-10"
//         >
//           <span>&larr;</span> Back to Stories
//         </Link>

//         <div className="flex flex-col gap-6 text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light">
//           <p className="font-bold text-[#fadf29] text-xl md:text-2xl mb-4 border-l-4 border-[#ff1493] pl-4">
//             {story.description}
//           </p>
//           <p>
//             The 1980s was a decade of bold choices, vibrant aesthetics, and a unique blend of analog warmth and futuristic digital dreams. Everything from fashion to music carried an undeniable energy that continues to influence modern creative industries today. Whether you were there to witness it firsthand or are discovering it through retro-revival trends, the impact is impossible to ignore.
//           </p>
//           <p>
//             At the <em>Back to 80's Era Thrift Fest</em>, our goal isn't just to sell vintage clothes; it's to recreate the feeling of walking into a neon-lit arcade or watching a classic synth-pop music video for the very first time. We want to empower you to express yourself loudly, proudly, and sustainably. By choosing to thrift and upcycle, you are not only making a fashion statement but also contributing to a circular economy that honors the past while protecting the future.
//           </p>
//           <p>
//             So grab your Walkman, tie up your high-top sneakers, and dive headfirst into the culture. Keep exploring our platform to discover more curated stories, interviews with local designers, and deep dives into the trends that defined a generation.
//           </p>
//         </div>

//         <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-3">
//             <span className="font-anton uppercase tracking-widest text-sm text-gray-500">Tags:</span>
//             <span className="bg-[#144333] text-[#0fdff8] px-3 py-1 rounded text-sm uppercase font-bold border border-[#0fdff8]/30">80s Vibe</span>
//             <span className="bg-[#144333] text-[#0fdff8] px-3 py-1 rounded text-sm uppercase font-bold border border-[#0fdff8]/30">Thrifting</span>
//           </div>
//           <button className="font-anton uppercase tracking-widest text-[#144333] bg-[#fadf29] px-6 py-2 rounded hover:bg-white transition-colors">
//             Share Story
//           </button>
//         </div>

//       </section>

//     </div>
//   );
// }

import Link from "next/link";

export const instant = false;

// 1. MENGAMBIL DATA BERDASARKAN SLUG SAJA
async function getStory(slug: string) {
  // CATATAN: Pastikan URL backend Anda benar, gunakan satu garis miring (/)
  // Ganti URL localhost ini dengan URL Vercel backend Anda jika sudah di-deploy
  const res = await fetch(`https://backend-back2eras.vercel.app/api/api/stories/${slug}`, {
    next: { revalidate: 60 } 
  });
  
  if (!res.ok) return null;
  return res.json();
}

// 2. FUNGSI 'generateStaticParams' TELAH DIHAPUS
// Next.js akan secara otomatis menangani URL ini secara dinamis.

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStory(slug);

  // Jika slug tidak ditemukan di database
  if (!story) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-anton text-8xl text-[#ff1493] mb-4">404</h1>
        <h2 className="font-pacifico text-3xl text-[#0fdff8] mb-8">Story Not Found</h2>
        <Link href="/stories" className="bg-[#fadf29] text-black font-anton px-6 py-3 uppercase hover:bg-white transition-colors">
          Back to Stories
        </Link>
      </div>
    );
  }

  // Format tanggal untuk detail page
  const dateObj = new Date(story.published_date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto pb-24">
      
      {/* HERO IMAGE & TITLE */}
      <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh]">
        <img 
          src={story.image_path} 
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-4xl mx-auto px-6 md:px-12 pb-12">
            <div className="flex items-center gap-2 text-[#fadf29] font-bold text-sm tracking-widest mb-4 uppercase drop-shadow-md">
              <span className="text-[#ff1493]">•</span> {story.category} <span className="text-gray-400">|</span> {formattedDate}
            </div>
            <h1 className="font-anton text-4xl md:text-5xl lg:text-7xl text-white leading-tight drop-shadow-[2px_2px_0px_#144333]">
              {story.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-12">
        
        <Link 
          href="/stories" 
          className="inline-flex items-center gap-2 text-[#0fdff8] font-bold tracking-widest uppercase hover:text-[#ff1493] transition-colors mb-10"
        >
          <span>&larr;</span> Back to Stories
        </Link>

        <div className="flex flex-col gap-6 text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light">
          <p className="font-bold text-[#fadf29] text-xl md:text-2xl mb-4 border-l-4 border-[#ff1493] pl-4">
            {story.description}
          </p>
          <p>
            The 1980s was a decade of bold choices, vibrant aesthetics, and a unique blend of analog warmth and futuristic digital dreams. Everything from fashion to music carried an undeniable energy that continues to influence modern creative industries today.
          </p>
          <p>
            At the <em>Back to 80's Era Thrift Fest</em>, our goal isn't just to sell vintage clothes; it's to recreate the feeling of walking into a neon-lit arcade or watching a classic synth-pop music video for the very first time. We want to empower you to express yourself loudly, proudly, and sustainably.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-anton uppercase tracking-widest text-sm text-gray-500">Tags:</span>
            <span className="bg-[#144333] text-[#0fdff8] px-3 py-1 rounded text-sm uppercase font-bold border border-[#0fdff8]/30">80s Vibe</span>
          </div>
          <button className="font-anton uppercase tracking-widest text-[#144333] bg-[#fadf29] px-6 py-2 rounded hover:bg-white transition-colors">
            Share Story
          </button>
        </div>

      </section>

    </div>
  );
}