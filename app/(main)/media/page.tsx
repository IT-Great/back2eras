"use client";

import { FormEvent } from "react";
import Swal from "sweetalert2";

export default function MediaPartnershipPage() {
  const handleApply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Post-submission confirmation message
    Swal.fire({
      title: "APPLICATION RECEIVED!",
      html: `
        <div class="text-left text-[#eaddce] font-roboto flex flex-col gap-3">
          <p>Thank you for your interest in covering BACK2ERAS.</p>
          <p>Your media partnership application has been received. Our team will review your proposal and follow up with next steps.</p>
        </div>
      `,
      icon: "success",
      background: "#144333",
      color: "#0fdff8",
      confirmButtonColor: "#ff1493",
      confirmButtonText: "Got it!",
    }).then((result) => {
      if (result.isConfirmed) {
        form.reset();
      }
    });
  };

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto overflow-hidden relative pb-20">
      
      {/* Background Ornaments */}
      <div className="absolute top-32 left-0 w-80 h-80 bg-[#ff1493] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-32 right-0 w-96 h-96 bg-[#fadf29] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10 text-center md:text-left">
        <p className="font-anton tracking-widest text-[#fadf29] uppercase mb-4 text-sm md:text-lg">
          Media, Creators & Storytellers
        </p>
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-[#0fdff8] uppercase drop-shadow-[4px_4px_0px_#13bbad] leading-none mb-6">
          Every Era Has A Story. <br />
          <span className="text-white">Help Us Tell Ours.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#eaddce]/90 leading-relaxed font-light max-w-3xl">
          Fashion is more than what we wear. It’s how we express ourselves, preserve memories, and share stories across generations. <span className="font-anton tracking-wider text-[#ff1493] mx-1">BACK2ERAS</span> celebrates vintage style, thrift culture, and creative communities—and we’re inviting media partners to help share the experience.
        </p>
      </section>

      {/* CONTENT & FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* KOLOM KIRI: Informasi */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            
            {/* Who we'd love to work with */}
            <div>
              <h3 className="font-anton text-3xl text-[#ff1493] uppercase tracking-widest mb-6 border-l-4 border-[#0fdff8] pl-4">
                Who We’d Love To Work With
              </h3>
              <ul className="flex flex-col gap-4 text-[#eaddce]/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">»</span>
                  <span>Fashion, lifestyle, and culture publications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">»</span>
                  <span>Local city guides and event discovery platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">»</span>
                  <span>Digital magazines and editorial platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">»</span>
                  <span>Fashion and lifestyle creators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0fdff8] font-bold text-xl leading-none mt-1">»</span>
                  <span>Campus media and creative community pages</span>
                </li>
              </ul>
            </div>

            {/* Media Collaboration Opportunities */}
            <div className="bg-[#144333]/60 border-2 border-[#13bbad] p-6 rounded-lg shadow-[6px_6px_0px_rgba(15,223,248,0.2)]">
              <h3 className="font-anton text-2xl text-[#fadf29] uppercase tracking-widest mb-4">
                Collaboration Opportunities
              </h3>
              <ul className="flex flex-col gap-2 text-[#eaddce]/90 list-disc pl-5 marker:text-[#ff1493]">
                <li>Pre-event announcements and features</li>
                <li>Social media cross-promotion</li>
                <li>On-site coverage and interviews</li>
                <li>Creator-led fashion and community storytelling</li>
                <li>Post-event highlights and recap content</li>
              </ul>
            </div>

            {/* Fine Print */}
            <div className="text-sm text-gray-500 italic mt-auto">
              <strong>Note:</strong> Coverage commitments, accreditation, access, and content usage rights should be agreed before confirmation. Do not publish audience reach or attendance figures without verified projections.
            </div>

          </div>

          {/* KOLOM KANAN: Formulir Registrasi Media */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#144333]/40 backdrop-blur-md p-8 md:p-10 border-4 border-[#fadf29] shadow-[10px_10px_0px_#ff1493]">
              
              <div className="mb-8">
                <h3 className="font-anton text-3xl text-white uppercase tracking-widest mb-2">
                  Let’s Tell A Story Worth Sharing.
                </h3>
                <p className="text-[#eaddce]/80">
                  Be part of the voices spotlighting vintage culture, independent businesses, and the people behind BACK2ERAS.
                </p>
              </div>

              <form onSubmit={handleApply} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Media Outlet Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mediaName" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Media Outlet / Platform <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="mediaName" required placeholder="Name of publication/channel" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>

                  {/* Contact Person */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contactPerson" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Contact Person <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="contactPerson" required placeholder="Full name & title" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mediaEmail" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Email <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="email" id="mediaEmail" required placeholder="Email address" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mediaWhatsapp" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      WhatsApp <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="tel" id="mediaWhatsapp" required placeholder="+62..." className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Website / Social Accounts */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="socialLinks" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Website & Socials <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="text" id="socialLinks" required placeholder="Links to your platforms" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>

                  {/* Media Category */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mediaCategory" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Media Category <span className="text-[#ff1493]">*</span>
                    </label>
                    <select id="mediaCategory" required defaultValue="" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors appearance-none cursor-pointer">
                      <option value="" disabled>Select category...</option>
                      <option value="Digital Magazine / Blog">Digital Magazine / Blog</option>
                      <option value="Content Creator / Influencer">Content Creator / Influencer</option>
                      <option value="City Guide / Event Discovery">City Guide / Event Discovery</option>
                      <option value="Campus Media">Campus Media</option>
                      <option value="Print Publication">Print Publication</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Audience Size */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="audienceSize" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Audience Size <span className="text-gray-500 lowercase">(optional)</span>
                    </label>
                    <input type="text" id="audienceSize" placeholder="e.g. 50k Followers, 10k Monthly Views" className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>

                  {/* Media Kit Link */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mediaKit" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                      Media Kit / Portfolio Link <span className="text-[#ff1493]">*</span>
                    </label>
                    <input type="url" id="mediaKit" required placeholder="Google Drive, Dropbox, etc." className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors" />
                  </div>
                </div>

                {/* Proposed Coverage Format */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="coverageFormat" className="font-anton tracking-wide text-[#eaddce] uppercase text-sm">
                    Proposed Coverage Format <span className="text-[#ff1493]">*</span>
                  </label>
                  <textarea id="coverageFormat" rows={3} required placeholder="Tell us how you plan to cover the event (e.g. TikTok video, written feature, photo journal)..." className="bg-black/60 border-2 border-[#13bbad] p-3 text-white focus:outline-none focus:border-[#0fdff8] transition-colors resize-none"></textarea>
                </div>

                {/* CTA Button */}
                <button 
                  type="submit" 
                  className="mt-4 w-full py-4 bg-[#fadf29] text-black font-anton text-2xl tracking-widest uppercase shadow-[6px_6px_0px_#ff1493] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-transparent hover:border-[#ff1493]"
                >
                  Apply As A Media Partner
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}