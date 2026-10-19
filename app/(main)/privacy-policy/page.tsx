/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-[#eaddce] font-roboto py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12 text-center">
          <h1 className="font-anton text-5xl md:text-7xl text-[#0fdff8] uppercase drop-shadow-[2px_2px_0px_#ff1493] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#fadf29] tracking-widest uppercase font-bold text-sm">
            Last Updated: October 2026
          </p>
        </div>

        <div className="bg-[#144333]/60 backdrop-blur-sm border-4 border-[#13bbad] p-8 md:p-12 rounded-xl shadow-[10px_10px_0px_#ff1493] flex flex-col gap-8 text-lg leading-relaxed font-light">
          
          <section>
            <h2 className="font-anton text-2xl text-[#fadf29] uppercase mb-3 tracking-wide">1. Introduction</h2>
            <p>
              Welcome to the <strong>Back to 80's Era Thrift Festival</strong> by Waroeng Depe. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or interact with our event services.
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-[#fadf29] uppercase mb-3 tracking-wide">2. The Data We Collect</h2>
            <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 marker:text-[#0fdff8] flex flex-col gap-1">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address, telephone numbers, and delivery addresses (for tenant applications).</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-[#fadf29] uppercase mb-3 tracking-wide">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to process your event tickets, evaluate your tenant/grant applications, manage our relationship with you, and send you our neon-packed newsletters (if you have subscribed to them).
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-[#fadf29] uppercase mb-3 tracking-wide">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Our 80s arcade firewalls are strong, but please remember that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-anton text-2xl text-[#fadf29] uppercase mb-3 tracking-wide">5. Contact Details</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our team in the following ways:
            </p>
            <div className="mt-4 p-4 bg-black/50 border-l-4 border-[#0fdff8]">
              <p>Email: <a href="mailto:waroengdepesby@gmail.com" className="text-[#ff1493] hover:underline">waroengdepesby@gmail.com</a></p>
              <p>Address: Jl. Raya Darmo Permai III, Surabaya, Jawa Timur</p>
            </div>
          </section>

        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-block font-anton text-xl uppercase tracking-widest text-[#0fdff8] hover:text-[#ff1493] transition-colors border-b-2 border-transparent hover:border-[#ff1493] pb-1">
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}