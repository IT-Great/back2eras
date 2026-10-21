// "use client";

// import { FormEvent } from "react";
// import Swal from "sweetalert2";

// export default function TenantRegistrationPage() {
//   const handleApply = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     // Post-submission confirmation message
//     Swal.fire({
//       title: "APPLICATION RECEIVED!",
//       html: `
//         <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
//           <p>Thanks for applying to BACK2ERAS! We’ve received your tenant application.</p>
//           <p>Our team will review your submission and contact shortlisted brands with next steps.</p>
//         </div>
//       `,
//       icon: "success",
//       background: "#144333",
//       color: "#fadf29",
//       confirmButtonColor: "#0fdff8",
//       confirmButtonText: "Got it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         form.reset();
//       }
//     });
//   };

//   return (
//     <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative pb-20">
      
//       {/* Background Ornaments */}
//       <div className="absolute top-40 right-0 w-96 h-96 bg-[#13bbad] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
//       <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

//       {/* HERO SECTION */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10 text-center md:text-left">
//         <p className="font-anton tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-lg">
//           Calling Vintage Sellers, Thrift Curators & Creative Brands
//         </p>
//         <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-[#ff1493] uppercase drop-shadow-[4px_4px_0px_#13bbad] leading-none mb-6">
//           Your Brand Deserves <br />
//           <span className="text-white">To Be Discovered.</span>
//         </h1>
//         <p className="text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light max-w-3xl">
//           Great pieces deserve great stories. <span className="font-anton tracking-wider text-[#0fdff8] mx-1">BACK2ERAS</span> brings together fashion lovers, independent sellers, and a community excited to discover something different. If your collection has personality, we want to meet you.
//         </p>
//       </section>

//       {/* CONTENT & FORM SECTION */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
//           {/* KOLOM KIRI: Informasi */}
//           <div className="w-full lg:w-5/12 flex flex-col gap-10">
            
//             {/* Why become a tenant? */}
//             <div>
//               <h3 className="font-anton text-3xl text-[#0fdff8] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
//                 Why Become A Tenant?
//               </h3>
//               <ul className="flex flex-col gap-4 text-[#eaddce]/90">
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
//                   <span>Meet shoppers who actively seek unique fashion and creative products</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
//                   <span>Create opportunities for in-person product discovery and sales</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
//                   <span>Showcase your brand in a curated, photo-friendly environment</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
//                   <span>Connect with fellow sellers, creators, and future collaborators</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Who should apply? */}
//             <div className="bg-[#144333]/60 border-2 border-[#13bbad] p-6 rounded-lg">
//               <h3 className="font-anton text-2xl text-[#fadf29] uppercase tracking-widest mb-3">
//                 Who Should Apply?
//               </h3>
//               <p className="text-[#eaddce]/90 leading-relaxed">
//                 Vintage and preloved fashion sellers, thrift curators, accessories and collectibles brands, lifestyle creators, and businesses that fit the BACK2ERAS aesthetic.
//               </p>
//             </div>

//             {/* Fine Print */}
//             <div className="text-sm text-gray-500 italic mt-auto">
//               <strong>Fine print:</strong> Tenant applications are curated and subject to availability. Applying does not guarantee selection. Free admission applies to visitors, not automatically to tenant booth fees.
//             </div>

//           </div>

//           {/* KOLOM KANAN: Formulir Registrasi Tenant */}
//           <div className="w-full lg:w-7/12">
//             <div className="bg-[#13bbad]/10 backdrop-blur-md p-8 md:p-10 border-4 border-[#ff1493] shadow-[10px_10px_0px_#0fdff8]">
              
//               <div className="mb-8">
//                 <h3 className="font-anton text-3xl text-white uppercase tracking-widest mb-2">
//                   Ready to join the lineup?
//                 </h3>
//                 <p className="text-[#eaddce]/80">
//                   Tell us about your brand. Our team will review applications and contact shortlisted applicants with booth details, fees, and participation requirements.
//                 </p>
//               </div>

//               <form onSubmit={handleApply} className="flex flex-col gap-5">
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   {/* Brand Name */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="brandName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Brand Name <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <input type="text" id="brandName" required placeholder="Your brand name" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>

//                   {/* Contact Person */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="contactPerson" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Contact Person <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <input type="text" id="contactPerson" required placeholder="Full name" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   {/* Email */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="tenantEmail" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Email <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <input type="email" id="tenantEmail" required placeholder="Email address" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>

//                   {/* WhatsApp */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="tenantWhatsapp" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       WhatsApp <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <input type="tel" id="tenantWhatsapp" required placeholder="+62..." className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   {/* Instagram / Website */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="socialLink" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Instagram / Website <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <input type="text" id="socialLink" required placeholder="@username or URL" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>

//                   {/* Product Category */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="category" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Product Category <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <select id="category" required defaultValue="" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors appearance-none">
//                       <option value="" disabled>Select category...</option>
//                       <option value="Vintage Fashion">Vintage Fashion</option>
//                       <option value="Preloved Apparel">Preloved Apparel</option>
//                       <option value="Accessories & Jewelry">Accessories & Jewelry</option>
//                       <option value="Collectibles & Art">Collectibles & Art</option>
//                       <option value="F&B">F&B (Food & Beverages)</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Photo Catalog Link */}
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="photoLink" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                     Product/Catalog Photo Link <span className="text-[#ff1493]">*</span>
//                   </label>
//                   <input type="url" id="photoLink" required placeholder="Google Drive, Dropbox, or Portfolio Link" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                 </div>

//                 {/* Short Description */}
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="description" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                     Short Brand Description <span className="text-[#ff1493]">*</span>
//                   </label>
//                   <textarea id="description" rows={3} required placeholder="What makes your collection unique?" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors resize-none"></textarea>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   {/* Preferred Booth Size */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="boothSize" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Preferred Booth Size <span className="text-[#ff1493]">*</span>
//                     </label>
//                     <select id="boothSize" required defaultValue="" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors appearance-none">
//                       <option value="" disabled>Select size...</option>
//                       <option value="Standard (2x2m)">Standard (2x2m)</option>
//                       <option value="Large (3x3m)">Large (3x3m)</option>
//                       <option value="Custom Setup">Custom Setup</option>
//                     </select>
//                   </div>

//                   {/* Special Requirements */}
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="specialReq" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
//                       Special Booth Requirements
//                     </label>
//                     <input type="text" id="specialReq" placeholder="e.g. Extra power outlet, racks" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <button 
//                   type="submit" 
//                   className="mt-4 w-full py-4 bg-[#ff1493] text-white font-anton text-2xl tracking-widest uppercase shadow-[6px_6px_0px_#fadf29] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-transparent hover:border-[#fadf29]"
//                 >
//                   Apply As A Tenant
//                 </button>

//               </form>
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

"use client";

import { FormEvent } from "react";
import Swal from "sweetalert2";

export default function TenantRegistrationPage() {
  // const handleApply = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   // Post-submission confirmation message
  //   Swal.fire({
  //     title: "APPLICATION RECEIVED!",
  //     html: `
  //       <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
  //         <p>Thanks for applying to BACK2ERAS! We’ve received your tenant application.</p>
  //         <p>Our team will review your submission and contact shortlisted brands with next steps.</p>
  //       </div>
  //     `,
  //     icon: "success",
  //     background: "#144333",
  //     color: "#fadf29",
  //     confirmButtonColor: "#0fdff8",
  //     confirmButtonText: "Got it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       form.reset();
  //     }
  //   });
  // };

  const handleApply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      brand_name: (form.elements.namedItem('brandName') as HTMLInputElement).value,
      contact_person: (form.elements.namedItem('contactPerson') as HTMLInputElement).value,
      email: (form.elements.namedItem('tenantEmail') as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem('tenantWhatsapp') as HTMLInputElement).value,
      social_link: (form.elements.namedItem('socialLink') as HTMLInputElement).value,
      category: (form.elements.namedItem('category') as HTMLSelectElement).value,
      photo_link: (form.elements.namedItem('photoLink') as HTMLInputElement).value,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
      booth_size: (form.elements.namedItem('boothSize') as HTMLInputElement).value,
      special_req: (form.elements.namedItem('specialReq') as HTMLInputElement).value || null,
    };

    try {
      const response = await fetch('https://backend-back2eras.vercel.app/api/api/tenants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "APPLICATION RECEIVED!",
          html: `
            <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
              <p>Thanks for applying to BACK2ERAS! We’ve received your application for <strong>${formData.brand_name}</strong>.</p>
              <p>Our team will review your submission and contact you via email or WhatsApp regarding the next steps.</p>
            </div>
          `,
          icon: "success",
          background: "#144333",
          color: "#fadf29",
          confirmButtonColor: "#0fdff8",
          confirmButtonText: "Got it!",
        }).then((result) => {
          if (result.isConfirmed) {
            form.reset();
          }
        });
      } else {
        Swal.fire("Failed!", data.message || "Please check your inputs.", "error");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Connection Error", "Gagal terhubung ke server.", "error");
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative pb-20">
      
      {/* Background Ornaments */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#13bbad] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10 text-center md:text-left">
        <p className="font-anton tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-lg">
          Calling Vintage Sellers, Thrift Curators & Creative Brands
        </p>
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-[#ff1493] uppercase drop-shadow-[4px_4px_0px_#13bbad] leading-none mb-6">
          Your Brand Deserves <br />
          <span className="text-white">To Be Discovered.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light max-w-3xl">
          Great pieces deserve great stories. <span className="font-anton tracking-wider text-[#0fdff8] mx-1">BACK2ERAS</span> brings together fashion lovers, independent sellers, and a community excited to discover something different. If your collection has personality, we want to meet you.
        </p>
      </section>

      {/* CONTENT & FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Informasi */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            
            {/* Why become a tenant? */}
            <div>
              <h3 className="font-anton text-3xl text-[#0fdff8] uppercase tracking-widest mb-6 border-l-4 border-[#ff1493] pl-4">
                Why Become A Tenant?
              </h3>
              <ul className="flex flex-col gap-4 text-[#eaddce]/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
                  <span>Meet shoppers who actively seek unique fashion and creative products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
                  <span>Create opportunities for in-person product discovery and sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
                  <span>Showcase your brand in a curated, photo-friendly environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#fadf29] font-bold text-xl leading-none mt-1">»</span>
                  <span>Connect with fellow sellers, creators, and future collaborators</span>
                </li>
              </ul>
            </div>

            {/* Who should apply? */}
            <div className="bg-[#144333]/60 border-2 border-[#13bbad] p-6 rounded-lg">
              <h3 className="font-anton text-2xl text-[#fadf29] uppercase tracking-widest mb-3">
                Who Should Apply?
              </h3>
              <p className="text-[#eaddce]/90 leading-relaxed">
                Vintage and preloved fashion sellers, thrift curators, accessories and collectibles brands, lifestyle creators, and businesses that fit the BACK2ERAS aesthetic.
              </p>
            </div>

            {/* Fine Print */}
            <div className="text-sm text-gray-500 italic mt-auto">
              <strong>Fine print:</strong> Tenant applications are curated and subject to availability. Applying does not guarantee selection. Free admission applies to visitors, not automatically to tenant booth fees.
            </div>

          </div>

          {/* KOLOM KANAN: Formulir Registrasi Tenant */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#13bbad]/10 backdrop-blur-md p-8 md:p-10 border-4 border-[#ff1493] shadow-[10px_10px_0px_#0fdff8]">
              
              <div className="mb-8">
                <h3 className="font-anton text-3xl text-white uppercase tracking-widest mb-2">
                  Ready to join the lineup?
                </h3>
                <p className="text-[#eaddce]/80">
                  Tell us about your brand. Our team will review applications and contact shortlisted applicants with booth details, fees, and participation requirements.
                </p>
              </div>

              <form onSubmit={handleApply} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Brand Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="brandName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Brand Name <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="brandName" required placeholder="Your brand name" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>

                  {/* Contact Person */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactPerson" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Contact Person <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="contactPerson" required placeholder="Full name" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="tenantEmail" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Email <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="email" id="tenantEmail" required placeholder="Email address" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="tenantWhatsapp" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      WhatsApp <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="tel" id="tenantWhatsapp" required placeholder="+62..." className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Instagram / Website */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="socialLink" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Instagram / Website <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="socialLink" required placeholder="@username or URL" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>

                  {/* Product Category */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="category" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Product Category <span className="text-[#ff1493]">*</span>
                    </label>
                    <select id="category" required defaultValue="" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors appearance-none">
                      <option value="" disabled>Select category...</option>
                      <option value="Vintage Fashion">Vintage Fashion</option>
                      <option value="Preloved Apparel">Preloved Apparel</option>
                      <option value="Accessories & Jewelry">Accessories & Jewelry</option>
                      <option value="Collectibles & Art">Collectibles & Art</option>
                      <option value="F&B">F&B (Food & Beverages)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Photo Catalog Link */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="photoLink" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Product/Catalog Photo Link <span className="text-[#ff1493]">*</span>
                  </label>
                  <input type="url" id="photoLink" required placeholder="Google Drive, Dropbox, or Portfolio Link" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                </div>

                {/* Short Description */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="description" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Short Brand Description <span className="text-[#ff1493]">*</span>
                  </label>
                  <textarea id="description" rows={3} required placeholder="What makes your collection unique?" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Preferred Booth Size (Diubah menjadi input teks) */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="boothSize" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Preferred Booth Size <span className="text-[#ff1493]">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="boothSize" 
                      required 
                      placeholder="e.g. 2x2m, 3x3m, or custom" 
                      className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" 
                    />
                  </div>

                  {/* Special Requirements */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="specialReq" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Special Booth Requirements
                    </label>
                    <input type="text" id="specialReq" placeholder="e.g. Extra power outlet, racks" className="bg-black/60 border-2 border-[#144333] p-3 text-white focus:outline-none focus:border-[#fadf29] transition-colors" />
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  type="submit" 
                  className="mt-4 w-full py-4 bg-[#ff1493] text-white font-anton text-2xl tracking-widest uppercase shadow-[6px_6px_0px_#fadf29] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-transparent hover:border-[#fadf29]"
                >
                  Apply As A Tenant
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}