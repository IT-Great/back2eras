"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function RegisterPage() {
  // const handleRegister = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   // Menampilkan pesan Post-submission konfirmasi sesuai arahan dengan gaya 80s
  //   Swal.fire({
  //     title: "YOU'RE ON THE LIST!",
  //     html: `
  //       <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
  //         <p>Welcome to BACK2ERAS. Your free visitor registration has been received.</p>
  //         <ul class="list-disc pl-5 text-[#0fdff8]">
  //           <li><span class="text-white">Date:</span> 27 Nov - 1 Dec 2026</li>
  //           <li><span class="text-white">Venue:</span> Jl. Raya Darmo Permai III, Surabaya</li>
  //         </ul>
  //         <p>Keep your confirmation handy for check-in.</p>
  //         <div class="bg-black/50 border border-[#fadf29] p-3 rounded mt-2">
  //           <p class="text-[#fadf29] text-sm italic">
  //             <strong>Want the goodie bag?</strong> The first 50 eligible pre-registered visitors who check in receive one, while supplies last.
  //           </p>
  //         </div>
  //         <p class="font-anton text-xl text-[#ff1493] mt-2">SEE YOU THERE!</p>
  //       </div>
  //     `,
  //     icon: "success",
  //     background: "#144333",
  //     color: "#0fdff8",
  //     confirmButtonColor: "#ff1493",
  //     confirmButtonText: "Awesome!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       form.reset();
  //     }
  //   });
  // };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // 1. Ambil data dari form
    const formData = {
      full_name: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value,
      instagram: (form.elements.namedItem('instagram') as HTMLInputElement).value,
      // Mengambil status centang (checked) dari checkbox opsional
      subscribe_newsletter: (form.elements[4] as HTMLInputElement).checked // pastikan ini menunjuk ke checkbox newsletter
    };

    try {
      // 2. Kirim data ke API Laravel Vercel
      const response = await fetch('https://backend-back2eras.vercel.app/api/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Tampilkan pesan sukses JIKA berhasil tersimpan di DB
        Swal.fire({
          title: "YOU'RE ON THE LIST!",
          html: `
            <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
              <p>Welcome to BACK2ERAS, <strong>${formData.full_name.split(' ')[0]}</strong>! Your free visitor registration has been received.</p>
              <ul class="list-disc pl-5 text-[#0fdff8]">
                <li><span class="text-white">Date:</span> 27 Nov - 1 Dec 2026</li>
                <li><span class="text-white">Venue:</span> Jl. Raya Darmo Permai III, Surabaya</li>
              </ul>
              <p>Keep your confirmation handy for check-in.</p>
              <div class="bg-black/50 border border-[#fadf29] p-3 rounded mt-2">
                <p class="text-[#fadf29] text-sm italic">
                  <strong>Want the goodie bag?</strong> The first 50 eligible pre-registered visitors who check in receive one, while supplies last.
                </p>
              </div>
              <p class="font-anton text-xl text-[#ff1493] mt-2">SEE YOU THERE!</p>
            </div>
          `,
          icon: "success",
          background: "#144333",
          color: "#0fdff8",
          confirmButtonColor: "#ff1493",
          confirmButtonText: "Awesome!",
        }).then((result) => {
          if (result.isConfirmed) {
            form.reset();
          }
        });
      } else {
        // Menampilkan pesan error dari validasi Laravel
        Swal.fire("Registration Failed!", data.message || "Please check your input.", "error");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Connection Error", "Gagal terhubung ke server. Silakan coba lagi.", "error");
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative">
      
      {/* Background Ornaments */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Informasi & Copywriting */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Header Area */}
            <div>
              <p className="font-roboto font-bold tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-base flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff1493] rounded-full animate-pulse"></span>
                Free Admission • Limited Goodie Bag Promotion
              </p>
              <h1 className="font-anton text-5xl md:text-7xl text-[#0fdff8] uppercase drop-shadow-[3px_3px_0px_#144333] leading-tight mb-4">
                Good Finds. <br />
                <span className="text-[#ff1493]">Good Vibes.</span> <br />
                Free Goodies.
              </h1>
              <h2 className="font-pacifico text-2xl md:text-3xl text-white">
                The first 50 eligible visitors get something extra.
              </h2>
            </div>

            <p className="text-lg text-[#eaddce]/90 leading-relaxed font-light">
              Calling all vintage lovers, thrift hunters, and fashion enthusiasts! Your next favorite outfit might be waiting at <span className="font-anton tracking-wider text-[#0fdff8]">BACK2ERAS</span>. Register for free and get ready for curated finds, retro-inspired style, and a day of nostalgic discovery.
            </p>

            {/* Goodie Bag Feature Box */}
            <div className="bg-[#144333]/80 border-2 border-dashed border-[#fadf29] p-6 rounded-lg relative shadow-[6px_6px_0px_rgba(250,223,41,0.2)]">
              <div className="absolute -top-4 left-6 bg-[#fadf29] text-black font-anton uppercase px-4 py-1 tracking-widest text-sm transform -rotate-2">
                First 50 Special
              </div>
              <p className="text-[#eaddce] mt-2 leading-relaxed text-sm md:text-base">
                The first 50 eligible pre-registered visitors who check in at the event receive a <strong className="text-[#fadf29]">FREE GOODIE BAG</strong>, while supplies last. One bag per eligible person. 
                <br /><br />
                <span className="italic text-gray-400 text-xs md:text-sm">* Registration alone does not guarantee a bag. Eligibility and check-in rules apply.</span>
              </p>
            </div>

            {/* Why Come? */}
            <div>
              <h3 className="font-anton text-2xl text-white uppercase tracking-widest mb-4 border-b-2 border-[#13bbad] inline-block pb-1">
                Why Come?
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] mt-1">⚡</span>
                  <span className="text-[#eaddce]/90">Shop curated vintage, preloved, and thrift pieces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] mt-1">⚡</span>
                  <span className="text-[#eaddce]/90">Discover independent brands and hidden gems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] mt-1">⚡</span>
                  <span className="text-[#eaddce]/90">Join the 80s-inspired OOTD contest</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] mt-1">⚡</span>
                  <span className="text-[#eaddce]/90">Enjoy a creative, nostalgic community experience</span>
                </li>
              </ul>
            </div>

          </div>

          {/* KOLOM KANAN: Formulir Registrasi */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#144333]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border-4 border-[#0fdff8] shadow-[10px_10px_0px_#ff1493]">
              
              <div className="text-center mb-8">
                <h3 className="font-anton text-3xl text-white uppercase tracking-widest">
                  Free Entry. Great Finds.
                </h3>
                <p className="font-pacifico text-xl text-[#fadf29] mt-2">
                  Your era starts here.
                </p>
                <p className="text-sm text-[#eaddce]/60 mt-4 uppercase tracking-widest">
                  Fill in your details to register
                </p>
              </div>

              <form onSubmit={handleRegister} className="flex flex-col gap-5">
                
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Full Name <span className="text-[#ff1493]">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    required 
                    placeholder="Enter your full name"
                    className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Email Address <span className="text-[#ff1493]">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="your.email@example.com"
                    className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    WhatsApp Number <span className="text-[#ff1493]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    required 
                    placeholder="+62 812 3456 7890"
                    className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Instagram */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="instagram" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Instagram Username <span className="text-gray-500 lowercase">(optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="instagram" 
                    placeholder="@yourusername"
                    className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] rounded transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Consents */}
                <div className="flex flex-col gap-4 mt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 w-4 h-4 accent-[#ff1493]" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      I agree to the <Link href="/privacy-policy" className="text-[#0fdff8] underline hover:text-[#ff1493]">Privacy Policy</Link> and event terms, and consent to my data being used for registration purposes. <span className="text-[#ff1493]">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#0fdff8]" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      (Optional) Yes, send me updates about future Thrift Fest events, promotions, and exclusive drops.
                    </span>
                  </label>
                </div>

                {/* CTA Button */}
                <button 
                  type="submit" 
                  className="mt-6 w-full py-4 bg-[#fadf29] text-black font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Register For Free
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}