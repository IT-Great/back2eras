"use client";

import { FormEvent } from "react";
import Swal from "sweetalert2";

export default function PartnershipPage() {
  // const handleApply = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   // Post-submission confirmation message sesuai arahan
  //   Swal.fire({
  //     title: "INQUIRY RECEIVED!",
  //     html: `
  //       <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
  //         <p>Thank you for your interest in partnering with BACK2ERAS.</p>
  //         <p>We’ve received your inquiry and will review the proposed collaboration before getting in touch.</p>
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

  const handleApply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Mengambil data dari form sesuai dengan id/name input
    const formData = {
      company_name: (form.elements.namedItem('companyName') as HTMLInputElement).value,
      contact_person: (form.elements.namedItem('contactPerson') as HTMLInputElement).value,
      email: (form.elements.namedItem('partnerEmail') as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem('partnerWhatsapp') as HTMLInputElement).value,
      social_link: (form.elements.namedItem('socials') as HTMLInputElement).value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement).value,
      idea: (form.elements.namedItem('idea') as HTMLTextAreaElement).value,
      budget: (form.elements.namedItem('budget') as HTMLInputElement).value || null,
      deck_link: (form.elements.namedItem('deckLink') as HTMLInputElement).value || null,
    };

    try {
      const response = await fetch('https://backend-back2eras.vercel.app/api/api/partners', {
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
          title: "INQUIRY RECEIVED!",
          html: `
            <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
              <p>Thank you for your interest in partnering with BACK2ERAS.</p>
              <p>We’ve received your inquiry for <strong>${formData.company_name}</strong> and will review the proposed collaboration before getting in touch.</p>
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
        Swal.fire("Failed!", data.message || "Please check your inputs.", "error");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Connection Error", "Gagal terhubung ke server.", "error");
    }
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative pb-20">
      
      {/* Background Ornaments (Neon Glows) */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#fadf29] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0fdff8] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10 text-center md:text-left">
        <p className="font-anton tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-lg flex items-center justify-center md:justify-start gap-2">
          <span className="w-2 h-2 bg-[#ff1493] rounded-full"></span>
          Brand Collaborations & Creative Partnerships
        </p>
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-[#0fdff8] uppercase drop-shadow-[4px_4px_0px_#144333] leading-none mb-6">
          Be Part Of The Experience. <br />
          <span className="text-[#ff1493]">Not Just The Event.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light max-w-4xl">
          Let’s create something worth remembering. <span className="font-anton tracking-wider text-[#0fdff8] mx-1">BACK2ERAS</span> brings together fashion, nostalgia, and creative community in one engaging event. We’re inviting brands and partners to make the experience more memorable through thoughtful activations, product discovery, and creative collaborations.
        </p>
      </section>

      {/* CONTENT & FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Informasi Kolaborasi */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            
            {/* Ways to collaborate */}
            <div>
              <h3 className="font-anton text-3xl text-[#fadf29] uppercase tracking-widest mb-6 border-b-2 border-[#13bbad] inline-block pb-2">
                Ways To Collaborate
              </h3>
              <ul className="flex flex-col gap-5 text-[#eaddce]/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">✦</span>
                  <p><strong className="text-white uppercase tracking-wider">Official Photobooth Partner</strong> — Create a nostalgic photo moment visitors can take home and share.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">✦</span>
                  <p><strong className="text-white uppercase tracking-wider">Goodie Bag & Product Partner</strong> — Contribute samples, vouchers, gifts, or products for curated visitor giveaways.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">✦</span>
                  <p><strong className="text-white uppercase tracking-wider">Stage & Decor Partner</strong> — Help shape the retro atmosphere with creative styling, props, and simple stage installations.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">✦</span>
                  <p><strong className="text-white uppercase tracking-wider">Experience Partner</strong> — Bring interactive games, installations, and on-site brand activities.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">✦</span>
                  <p><strong className="text-white uppercase tracking-wider">Financial / Supporting Sponsor</strong> — Explore tailored support and agreed brand visibility.</p>
                </li>
              </ul>
            </div>

            {/* Potential brand value */}
            <div className="bg-[#144333]/40 border border-[#13bbad] p-6 rounded-lg">
              <h3 className="font-anton text-2xl text-[#ff1493] uppercase tracking-widest mb-4">
                Potential Brand Value
              </h3>
              <ul className="flex flex-col gap-2 text-[#eaddce]/80 list-disc pl-5 marker:text-[#fadf29]">
                <li>Agreed placement across relevant event communications</li>
                <li>Direct opportunities to engage attendees</li>
                <li>Sampling, product trial, or voucher distribution opportunities</li>
                <li>Social content and co-creation opportunities</li>
                <li>Connection to an independent fashion and creative community</li>
              </ul>
            </div>

            {/* Fine Print Note */}
            <div className="text-xs md:text-sm text-gray-500 italic mt-auto bg-black/50 p-4 border-l-4 border-gray-700">
              <strong>Note:</strong> Benefits, logo placements, social mentions, category exclusivity, and deliverables are subject to written agreement.
            </div>

          </div>

          {/* KOLOM KANAN: Formulir Partnership */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#144333]/80 backdrop-blur-md p-8 md:p-10 border-4 border-[#0fdff8] shadow-[10px_10px_0px_#fadf29] rounded-xl">
              
              <div className="mb-8 border-b border-[#0fdff8]/30 pb-6">
                <h3 className="font-anton text-3xl text-[#fadf29] uppercase tracking-widest mb-2">
                  Let’s Make Something Iconic Together.
                </h3>
                <p className="text-[#eaddce]/90 text-sm md:text-base">
                  Tell us what your brand would love to bring to BACK2ERAS. We’ll explore a collaboration that suits your objectives and the event experience.
                </p>
              </div>

              <form onSubmit={handleApply} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Brand/Company Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Brand / Company Name <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="companyName" required placeholder="Your company name" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>

                  {/* Contact Person & Job Title */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactPerson" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Contact Person & Job Title <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="contactPerson" required placeholder="e.g. Jane Doe, Marketing Mgr" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="partnerEmail" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Email Address <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="email" id="partnerEmail" required placeholder="Email address" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="partnerWhatsapp" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      WhatsApp Number <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="tel" id="partnerWhatsapp" required placeholder="+62..." className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>
                </div>

                {/* Website and social channels */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="socials" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Website & Social Channels <span className="text-[#ff1493]">*</span>
                  </label>
                  <input type="text" id="socials" required placeholder="www.yourbrand.com / @yourbrand" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                </div>

                {/* Partnership Interest */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="interest" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Partnership Interest <span className="text-[#ff1493]">*</span>
                  </label>
                  <select id="interest" required defaultValue="" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded appearance-none cursor-pointer">
                    <option value="" disabled>Select partnership type...</option>
                    <option value="Official Photobooth Partner">Official Photobooth Partner</option>
                    <option value="Goodie Bag & Product Partner">Goodie Bag & Product Partner</option>
                    <option value="Stage & Decor Partner">Stage & Decor Partner</option>
                    <option value="Experience Partner">Experience Partner</option>
                    <option value="Financial / Supporting Sponsor">Financial / Supporting Sponsor</option>
                    <option value="Other">Other (Specify below)</option>
                  </select>
                </div>

                {/* Proposed Idea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="idea" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Proposed Contribution or Activation Idea <span className="text-[#ff1493]">*</span>
                  </label>
                  <textarea id="idea" rows={4} required placeholder="How would you like to collaborate with us?" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Indicative budget */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="budget" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Indicative Budget / In-kind Value <span className="text-gray-500 lowercase">(optional)</span>
                    </label>
                    <input type="text" id="budget" placeholder="e.g. IDR 10,000,000 or Products" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>

                  {/* Deck / Brand Profile Link */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="deckLink" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Deck or Brand Profile Link <span className="text-gray-500 lowercase">(optional)</span>
                    </label>
                    <input type="url" id="deckLink" placeholder="Google Drive, Dropbox, etc." className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#ff1493] transition-colors rounded" />
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  type="submit" 
                  className="mt-6 w-full py-4 bg-[#0fdff8] text-black font-anton text-2xl tracking-widest uppercase rounded shadow-[6px_6px_0px_#ff1493] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-transparent"
                >
                  Let’s Collaborate
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}