"use client";

export default function CTA() {
  return (
    <section className="py-32 bg-black">
      <div className="shield-container">
        <div className="rounded-[40px] border border-white/10 bg-[#111111] p-16 text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready to Know What Powers
            <br />
            Your Applications?
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Discover vulnerabilities, cryptographic assets, and
            software supply chain risks before they impact your business.
          </p>

          <a
            href="/company/contact"
            className="
              inline-flex
              mt-10
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-8
              py-4
              text-white
              font-semibold
            "
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}