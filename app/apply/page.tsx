/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// --- KOMPONEN FAQ ITEM (Untuk Bagian Bawah) ---
const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#13bbad]/30 py-5">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-left font-anton text-[#0fdff8] hover:text-[#ff1493] transition-colors text-lg md:text-xl tracking-wide uppercase"
      >
        {question}
        <span className="text-2xl ml-4">{isOpen ? "−" : "+"}</span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[#eaddce]/80 font-roboto leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function ApplyPage() {
  // --- LOGIKA ANIMASI SCROLL (Untuk Section 2) ---
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Akan bernilai true jika elemen masuk layar, dan false jika keluar layar
        setIsSection2Visible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Animasi terpicu saat 20% area terlihat
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto">
      
      {/* 1. HERO SECTION (Referensi Gambar 1) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#ff1493] translate-x-4 translate-y-4 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop" 
              alt="Vendor at Thrift Fest" 
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl border-4 border-[#13bbad]"
            />
          </div>
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="font-anton text-5xl md:text-6xl lg:text-7xl text-[#0fdff8] uppercase leading-none drop-shadow-[2px_2px_0px_#144333]">
              Accelerate Your <br />
              <span className="text-[#fadf29]">Growth In Synthwave</span> <br />
              And Beyond
            </h1>
            <p className="text-lg text-[#eaddce]/90 leading-relaxed max-w-xl">
              Known for showcasing the best of independent vintage and sustainable design, the 80's Era Thrift Fest takes place twice a year and is highly anticipated among local shoppers and nostalgic enthusiasts. On top of the opportunity to deeply connect with customers, brands are also exposed to creative communities and retail buyers.
            </p>
            
            <div className="flex flex-col gap-4 mt-4 font-anton tracking-wide text-lg">
              <div>
                <span className="text-[#ff1493]">Friday, 27 November 2026</span>
                <p className="font-roboto text-sm text-[#eaddce]/70">Vendor set-up</p>
              </div>
              <div>
                <span className="text-[#ff1493]">Tuesday, 1 December 2026</span>
                <p className="font-roboto text-sm text-[#eaddce]/70">Private Media, VIP & Community Preview</p>
              </div>
              <div>
                <span className="text-[#ff1493]">Friday – Sunday | 8:00 AM – 9:00 PM</span>
                <p className="font-roboto text-sm text-[#eaddce]/70">Public event</p>
              </div>
              <div>
                <span className="text-[#ff1493]">Monday – Tuesday | 3:00 PM – 9:00 PM</span>
                <p className="font-roboto text-sm text-[#eaddce]/70">Vendor tear-down</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED GREEN SECTION (Referensi Gambar 2) */}
      {/* <section 
        ref={section2Ref}
        className="w-full bg-[#144333] py-24 md:py-36 overflow-hidden border-y-4 border-[#0fdff8] relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 
            className={`font-anton text-4xl md:text-6xl lg:text-8xl text-white uppercase leading-tight max-w-5xl drop-shadow-[4px_4px_0px_#ff1493] transition-all duration-1000 ease-out transform ${
              isSection2Visible ? "translate-x-0 opacity-100" : "-translate-x-[100%] opacity-0"
            }`}
          >
            Our Thrift Fest events welcome over <span className="text-[#fadf29]">35,000 visitors</span> and garner over <span className="text-[#0fdff8]">7M in PR value</span> each edition.
          </h2>
        </div>
      </section> */}

      {/* 2. ANIMATED GREEN SECTION (Referensi Gambar 2) */}
      <section 
        ref={section2Ref}
        className="w-full bg-[#144333] py-24 md:py-36 overflow-hidden border-y-4 border-[#0fdff8] relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* 
            Efek Animasi Baru: 
            - Menggunakan teknik CSS Masking untuk wipe menyamping.
            - transisi global opacity-0 ke opacity-100 dikombinasikan dengan posisi mask.
            - Font dikecilkan menjadi text-3xl (HP) hingga text-6xl (Desktop).
          */}
          <h2 
            className={`font-anton text-3xl md:text-5xl lg:text-6xl text-white uppercase leading-tight max-w-4xl drop-shadow-[4px_4px_0px_#ff1493] transition-all duration-[1500ms] ease-in-out ${
              isSection2Visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              // Masking gradien hitam ke transparan dengan ukuran 200%
              WebkitMaskImage: "linear-gradient(to right, black 45%, transparent 55%)",
              WebkitMaskSize: "200% 100%",
              // Menggeser posisi mask dari kanan (tersembunyi) ke kiri (terlihat penuh)
              WebkitMaskPosition: isSection2Visible ? "0% 0%" : "100% 0%",
              maskImage: "linear-gradient(to right, black 45%, transparent 55%)",
              maskSize: "200% 100%",
              maskPosition: isSection2Visible ? "0% 0%" : "100% 0%",
            }}
          >
            Our Thrift Fest events welcome over <span className="text-[#fadf29]">35,000 visitors</span> and garner over <span className="text-[#0fdff8]">7M in PR value</span> each edition.
          </h2>
        </div>
      </section>

      {/* 3. VENDOR CATEGORIES (Referensi Gambar 3) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <h2 className="font-anton text-3xl md:text-5xl text-center text-[#ff1493] mb-16 uppercase drop-shadow-[2px_2px_0px_#ffffff]">
          We Welcome Vendors In The Categories Of Retail, F&B, And Showcase Grant:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1: Retail */}
          <div className="flex flex-col gap-4 group">
            <div className="aspect-[4/5] overflow-hidden rounded border-2 border-[#13bbad] group-hover:border-[#fadf29] transition-colors">
              <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600&auto=format&fit=crop" alt="Retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-anton text-2xl text-[#0fdff8] uppercase mt-2">Retail</h3>
            <ul className="text-sm text-[#eaddce]/80 flex flex-col gap-1 list-disc pl-4 marker:text-[#ff1493]">
              <li>Women's and men's fashion</li>
              <li>Jewellery & Fashion accessories</li>
              <li>Beauty products</li>
              <li>Lifestyle products & stationery</li>
              <li>Home decor & Design art</li>
              <li>Vintage collectibles</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-4 inline-block">
              <span className="bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton px-6 py-2 uppercase hover:bg-[#0fdff8] hover:text-[#000000] transition-colors">Apply Now</span>
            </Link>
          </div>

          {/* Card 2: F&B */}
          <div className="flex flex-col gap-4 group">
            <div className="aspect-[4/5] overflow-hidden rounded border-2 border-[#13bbad] group-hover:border-[#fadf29] transition-colors">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" alt="F&B" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-anton text-2xl text-[#0fdff8] uppercase mt-2">F&B</h3>
            <ul className="text-sm text-[#eaddce]/80 flex flex-col gap-1 list-disc pl-4 marker:text-[#ff1493]">
              <li>Pre-packaged and ready-to-serve food</li>
              <li>Coffee, tea, kombucha, juice</li>
              <li>Alcoholic and non-alcoholic beverages</li>
              <li>Artisanal snacks</li>
              <li>Desserts and sweet treats</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-4 inline-block">
              <span className="bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton px-6 py-2 uppercase hover:bg-[#0fdff8] hover:text-[#000000] transition-colors">Apply Now</span>
            </Link>
          </div>

          {/* Card 3: Grant */}
          <div className="flex flex-col gap-4 group">
            <div className="aspect-[4/5] overflow-hidden rounded border-2 border-[#13bbad] group-hover:border-[#fadf29] transition-colors">
              <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=600&auto=format&fit=crop" alt="Grant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-anton text-2xl text-[#0fdff8] uppercase mt-2">Showcase Grant</h3>
            <p className="text-sm text-[#fadf29] mb-1 italic">Only open to:</p>
            <ul className="text-sm text-[#eaddce]/80 flex flex-col gap-1 list-disc pl-4 marker:text-[#ff1493]">
              <li>Emerging designers based locally who have not shown at Thrift Fest.</li>
              <li>Your business must be registered and operating for no more than 3 years.</li>
              <li>For categories: fashion design, accessories, art, graphic design, and home design.</li>
            </ul>
            <Link href="/contact" className="mt-auto pt-4 inline-block">
              <span className="bg-[#144333] border border-[#0fdff8] text-[#0fdff8] font-anton px-6 py-2 uppercase hover:bg-[#0fdff8] hover:text-[#000000] transition-colors">Apply Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION PROCESS (Referensi Gambar 4) */}
      <section className="bg-black py-20 border-t border-[#144333]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="font-anton text-4xl md:text-5xl text-center text-[#fadf29] mb-16 uppercase">
            Our Application Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="border-t-2 border-[#ff1493] pt-6">
              <h3 className="font-pacifico text-3xl text-[#0fdff8] mb-4">Overview</h3>
              <p className="text-[#eaddce]/80 mb-4">Application to our events are through the contact form only — Thrift Fest does not accept applications through email, DMs, or other platforms.</p>
              <p className="text-[#eaddce]/80">Application is free of charge.</p>
            </div>
            <div className="border-t-2 border-[#ff1493] pt-6">
              <h3 className="font-pacifico text-3xl text-[#0fdff8] mb-4">We are strictly curated</h3>
              <p className="text-[#eaddce]/80 mb-4">Application to Thrift Fest is competitive. As our curation is carried out progressively, we strongly encourage you to apply early to increase your chances of getting into the event.</p>
              <p className="text-[#eaddce]/80">Applications for The Spring Summer Edition 2027 close on 15 January 2027.</p>
            </div>
            <div className="border-t-2 border-[#ff1493] pt-6">
              <h3 className="font-pacifico text-3xl text-[#0fdff8] mb-4">Have the following ready</h3>
              <ul className="text-[#eaddce]/80 list-disc pl-5 flex flex-col gap-2 marker:text-[#fadf29]">
                <li>Information of your brand and collections</li>
                <li>Images of your products</li>
                <li>Images of previous event and/or store displays that illustrate your brand's visual merchandising. Wide, layout images are preferred.</li>
                <li>Information of potential exclusive launches at the event, if any</li>
              </ul>
            </div>
            <div className="border-t-2 border-[#ff1493] pt-6">
              <h3 className="font-pacifico text-3xl text-[#0fdff8] mb-4">We look for brands with</h3>
              <ul className="text-[#eaddce]/80 list-disc pl-5 flex flex-col gap-2 marker:text-[#fadf29]">
                <li>Original, creative, quality design</li>
                <li>A strong brand story with socially responsible practices</li>
                <li>Professional images of products that are ready for sale</li>
                <li>A clear vision of your brand's visual merchandising</li>
                <li>Products that satisfy a niche market</li>
                <li>New collections launching exclusively at Thrift Fest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE GRANT (Referensi Gambar 5) */}
      <section className="bg-[#144333] py-20 border-y-4 border-[#0fdff8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="assets/images/thrift.jpg" 
                alt="Showcase Grant" 
                className="w-full h-auto object-cover rounded-lg border-4 border-[#ff1493]"
              />
            </div>
            {/* Right: Text */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="font-anton text-4xl md:text-6xl text-[#fadf29] uppercase drop-shadow-md leading-tight">
                About The Thrift Showcase Grant
              </h2>
              <div className="text-[#eaddce] flex flex-col gap-4 text-lg leading-relaxed">
                <p>
                  Thrift Fest offers a <strong>Showcase Grant</strong> that champions the next generation of designers. This grant seeks to recognise and promote original and high-quality work that pushes the boundaries of creativity and innovation.
                </p>
                <p>
                  This grant is eligible only to recipients that meet our requirements, most notably, that you have yet to showcase at Thrift Fest and have a business registered for under 3 years of operation. This grant entitles you to a physical space complete with basic amenities at a heavily subsidised rate for one event, along with social media marketing, callouts in press materials, and mentorship from our curatorial team.
                </p>
                <p>
                  Let us help you reach thousands of ready shoppers in a thriving commercial environment so you can foster awareness of your brand, forge deeper connections with potential customers and the small business community, and receive essential feedback from engaged customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (Referensi Gambar 6) */}
      <section className="bg-[#000000] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
          {/* Left Title */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-2 text-[#0fdff8] font-bold tracking-widest uppercase mb-4">
              <span className="text-[#ff1493]">•</span> We're Here To Help
            </div>
            <h2 className="font-anton text-5xl md:text-6xl text-white uppercase leading-none drop-shadow-[2px_2px_0px_#144333]">
              Frequently <br />
              <span className="text-[#ff1493]">Asked</span> <br />
              Questions
            </h2>
          </div>
          
          {/* Right Accordions */}
          <div className="w-full md:w-2/3 flex flex-col gap-10">
            {/* Category: Applying */}
            <div>
              <h3 className="font-anton text-2xl text-[#fadf29] uppercase mb-4 tracking-widest border-l-4 border-[#ff1493] pl-3">Applying</h3>
              <div className="flex flex-col">
                <FAQItem 
                  question="I have not showcased at Thrift Fest before. Should I apply via the general form or the Showcase Grant?" 
                  answer="If your business has been operating for under 3 years and you meet the design criteria, we highly recommend applying for the Showcase Grant. Otherwise, please use the general application form." 
                />
                <FAQItem 
                  question="Must my business be based locally to show at Thrift Fest?" 
                  answer="While we champion local independent brands, we do welcome international brands that bring unique, sustainable products that align with our vintage 80s ethos." 
                />
                <FAQItem 
                  question="When will applications close?" 
                  answer="Applications for the Spring Summer Edition 2027 will strictly close on 15 January 2027. Late submissions will not be entertained." 
                />
              </div>
            </div>

            {/* Category: Applied */}
            <div>
              <h3 className="font-anton text-2xl text-[#fadf29] uppercase mb-4 tracking-widest border-l-4 border-[#ff1493] pl-3">Applied</h3>
              <div className="flex flex-col">
                <FAQItem 
                  question="When will I hear back about my application?" 
                  answer="Due to the high volume of applications, please allow our curatorial team up to 4 weeks after the closing date to process and respond to all applicants." 
                />
                <FAQItem 
                  question="I have been waitlisted. What does this mean?" 
                  answer="Being waitlisted means your brand passed our curation standards, but we currently do not have physical space available. If a slot opens up, we will contact you immediately." 
                />
                <FAQItem 
                  question="How big is a space at Thrift Fest?" 
                  answer="A standard booth space is approximately 2m x 2m. Custom and larger configurations are available upon request and subject to availability." 
                />
                <FAQItem 
                  question="How much is rental at Thrift Fest?" 
                  answer="Rental fees vary depending on your category (Retail vs F&B) and booth size. Detailed pricing will be shared with successful applicants." 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}