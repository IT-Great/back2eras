/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      title: "Event Coordinator",
      type: "Full-Time",
      department: "Operations",
      description: "Manage the festival floor, coordinate with over 500+ vintage vendors, and ensure the retro vibes flow seamlessly throughout the 3-day weekend.",
    },
    {
      title: "Social Media Specialist",
      type: "Part-Time",
      department: "Marketing",
      description: "Take over our Instagram and TikTok. Create engaging, synthwave-aesthetic content, and build hype around our exclusive vintage drops.",
    },
    {
      title: "Vintage Fashion Curator",
      type: "Freelance",
      department: "Curation",
      description: "Review tenant applications and ensure all showcased items meet our high standards for 80s authenticity and sustainable fashion practices.",
    },
    {
      title: "DIY Workshop Instructor",
      type: "Contract",
      department: "Activities",
      description: "Lead our creative hub! Teach attendees how to upcycle their thrifted goods using neon paints, patches, and retro customization techniques.",
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto py-20 px-6">
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-pacifico text-3xl md:text-4xl text-[#fadf29] mb-4 transform -rotate-2">
          Join the crew!
        </h2>
        <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl text-white uppercase drop-shadow-[4px_4px_0px_#13bbad] leading-none mb-6">
          BUILD THE ULTIMATE <br/>
          <span className="text-[#ff1493]">80'S EXPERIENCE</span>
        </h1>
        <p className="text-lg md:text-xl text-[#eaddce]/80 max-w-2xl mx-auto">
          We are always looking for passionate, creative, and nostalgia-driven individuals to help us bring the Back to 80's Era Thrift Fest to life. Check out our open roles below.
        </p>
      </div>

      {/* Job Listings Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="group relative bg-[#144333] border-2 border-[#13bbad] p-8 rounded-lg hover:border-[#fadf29] transition-all duration-300"
          >
            {/* Dekorasi Neon Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/0 to-[#0fdff8]/0 group-hover:from-[#ff1493]/10 group-hover:to-[#0fdff8]/10 transition-all duration-500 rounded-lg pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-black/40 text-[#0fdff8] text-xs font-bold uppercase tracking-widest rounded border border-[#0fdff8]/30 mb-3">
                  {job.department}
                </span>
                <h3 className="font-anton text-3xl text-white group-hover:text-[#fadf29] transition-colors uppercase">
                  {job.title}
                </h3>
              </div>
              <span className="font-bold text-[#ff1493] text-sm uppercase tracking-wide bg-[#ff1493]/10 px-3 py-1 rounded">
                {job.type}
              </span>
            </div>
            
            <p className="text-[#eaddce]/80 leading-relaxed mb-8">
              {job.description}
            </p>
            
            <a 
              href="mailto:waroengdepesby@gmail.com" 
              className="inline-block font-anton text-lg uppercase tracking-widest text-[#144333] bg-[#0fdff8] px-6 py-2 rounded hover:bg-[#ffffff] transition-colors"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action Box */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#ff1493] to-[#13bbad] p-1 rounded-xl">
        <div className="bg-[#000000] p-8 md:p-12 rounded-lg text-center flex flex-col items-center">
          <h2 className="font-anton text-3xl md:text-4xl text-white uppercase mb-4">
            Don't see your perfect role?
          </h2>
          <p className="text-[#eaddce]/80 mb-8 max-w-xl">
            Send us your resume and a mixtape of your favorite 80s songs anyway! We are always open to meeting talented people who love retro culture as much as we do.
          </p>
          <a 
            href="mailto:waroengdepesby@gmail.com"
            className="px-8 py-4 bg-[#fadf29] text-[#144333] font-anton text-xl tracking-wide uppercase shadow-[4px_4px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Email Us Your Pitch
          </a>
        </div>
      </div>

    </div>
  );
}