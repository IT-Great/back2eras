/* eslint-disable react/no-unescaped-entities */
// "use client";

// export default function ContactUs() {
//   // Fungsi sederhana untuk menangani submit form (sementara)
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Pesan Anda berhasil dikirim! (Ini adalah mode demo)");
//   };

//   return (
//     <div className="flex-1 bg-[#000000] relative overflow-hidden py-20 px-6 min-h-screen">

//       {/* Background Ornaments (Efek Cahaya Neon) */}
//       <div className="absolute top-20 left-10 w-48 h-48 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>

//       <div className="max-w-3xl mx-auto relative z-10">

//         {/* Header Title */}
//         <div className="text-center mb-12">
//           <h2 className="font-pacifico text-[#fadf29] text-3xl md:text-4xl mb-2 transform -rotate-3">
//             Hit us up!
//           </h2>
//           <h1 className="font-anton text-[#0fdff8] text-5xl md:text-7xl tracking-widest uppercase drop-shadow-[0_0_15px_rgba(15,223,248,0.8)]">
//             Contact <span className="text-[#ff1493] drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]">Us</span>
//           </h1>
//           <p className="font-roboto text-[#eaddce] mt-4 text-lg">
//             Punya pertanyaan seputar tenant, sponsorship, atau acara? Jangan ragu untuk menghubungi kami!
//           </p>
//         </div>

//         {/* Formulir Contact */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#144333]/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border-4 border-[#13bbad] shadow-[10px_10px_0px_#fe9d04] flex flex-col gap-6"
//         >

//           {/* Field: Name */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="name" className="font-anton tracking-wide text-[#eaddce] text-xl uppercase">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               required
//               placeholder="Masukkan nama Anda..."
//               className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all placeholder:text-[#eaddce]/40"
//             />
//           </div>

//           {/* Field: Email */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="email" className="font-anton tracking-wide text-[#eaddce] text-xl uppercase">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               required
//               placeholder="email.anda@contoh.com"
//               className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all placeholder:text-[#eaddce]/40"
//             />
//           </div>

//           {/* Field: Type (Dropdown) */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="type" className="font-anton tracking-wide text-[#eaddce] text-xl uppercase">
//               Inquiry Type
//             </label>
//             <div className="relative">
//               <select
//                 id="type"
//                 required
//                 defaultValue=""
//                 className="w-full bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all appearance-none cursor-pointer"
//               >
//                 <option value="" disabled className="text-gray-500">Pilih kategori...</option>
//                 <option value="tenant">Tenant Registration (Bazaar)</option>
//                 <option value="sponsorship">Sponsorship & Partnership</option>
//                 <option value="media">Media & Press</option>
//                 <option value="volunteer">Volunteer Application</option>
//                 <option value="general">General Inquiry</option>
//               </select>
//               {/* Custom Arrow Icon untuk Dropdown */}
//               <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0fdff8]">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Field: Message */}
//           <div className="flex flex-col gap-2">
//             <label htmlFor="message" className="font-anton tracking-wide text-[#eaddce] text-xl uppercase">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               required
//               placeholder="Tulis pesan Anda di sini..."
//               className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all resize-y placeholder:text-[#eaddce]/40"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="mt-4 py-4 bg-[#ff1493] text-[#ffffff] font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0fdff8] transition-all"
//           >
//             Send Message
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

export default function ContactUs() {
  // Fungsi sederhana untuk menangani submit form (sementara)
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Your message has been sent successfully! (This is demo mode)");
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Ambil data dari form
  //   const formData = {
  //     name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
  //       .value,
  //     email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)
  //       .value,
  //     type: (e.currentTarget.elements.namedItem("type") as HTMLSelectElement)
  //       .value,
  //     message: (
  //       e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
  //     ).value,
  //   };

  //   try {
  //     const response = await fetch("https://backend-back2eras.vercel.app/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       alert(data.message); // Menampilkan sukses dari Laravel
  //       e.currentTarget.reset(); // Kosongkan form setelah sukses
  //     } else {
  //       alert("Error: " + data.message);
  //     }
  //   } catch (error) {
  //     console.error("Terjadi kesalahan:", error);
  //     alert("Gagal terhubung ke server.");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Simpan referensi form ke dalam variabel SEBELUM proses await
    const form = e.currentTarget;

    // Ambil data dari form menggunakan variabel 'form' yang baru disimpan
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('https://backend-back2eras.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Menampilkan sukses dari Laravel
        // 2. Gunakan variabel 'form' untuk melakukan reset
        form.reset(); 
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal terhubung ke server.");
    }
  };

  return (
    <div className="flex-1 bg-[#000000] relative overflow-hidden py-20 px-6 min-h-screen">
      {/* Background Ornaments (Efek Cahaya Neon) */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[80px] opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2 className="font-pacifico text-[#fadf29] text-3xl md:text-4xl mb-2 transform -rotate-3">
            Hit us up!
          </h2>
          <h1 className="font-anton text-[#0fdff8] text-5xl md:text-7xl tracking-widest uppercase drop-shadow-[0_0_15px_rgba(15,223,248,0.8)]">
            Contact{" "}
            <span className="text-[#ff1493] drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]">
              Us
            </span>
          </h1>
          <p className="font-roboto text-[#eaddce] mt-4 text-lg">
            Got questions about tenants, sponsorships, or the event? Don't
            hesitate to reach out to us!
          </p>
        </div>

        {/* Formulir Contact */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#144333]/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border-4 border-[#13bbad] shadow-[10px_10px_0px_#fe9d04] flex flex-col gap-6"
        >
          {/* Field: Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-anton tracking-wide text-[#eaddce] text-xl uppercase"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your name..."
              className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all placeholder:text-[#eaddce]/40"
            />
          </div>

          {/* Field: Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-anton tracking-wide text-[#eaddce] text-xl uppercase"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all placeholder:text-[#eaddce]/40"
            />
          </div>

          {/* Field: Type (Dropdown) */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="type"
              className="font-anton tracking-wide text-[#eaddce] text-xl uppercase"
            >
              Inquiry Type
            </label>
            <div className="relative">
              <select
                id="type"
                required
                defaultValue=""
                className="w-full bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-500">
                  Select a category...
                </option>
                <option value="tenant">Tenant Registration (Bazaar)</option>
                <option value="sponsorship">Sponsorship & Partnership</option>
                <option value="media">Media & Press</option>
                <option value="volunteer">Volunteer Application</option>
                <option value="general">General Inquiry</option>
              </select>
              {/* Custom Arrow Icon untuk Dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#0fdff8]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Field: Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-anton tracking-wide text-[#eaddce] text-xl uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="bg-[#000000]/50 border-2 border-[#13bbad] p-3 text-[#ffffff] font-roboto focus:outline-none focus:border-[#ff1493] focus:ring-1 focus:ring-[#ff1493] rounded transition-all resize-y placeholder:text-[#eaddce]/40"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 py-4 bg-[#ff1493] text-[#ffffff] font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#0fdff8] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0fdff8] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
