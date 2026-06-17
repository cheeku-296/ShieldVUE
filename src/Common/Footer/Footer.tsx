import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      {/* Subtle Brand Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="shield-container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-white">Shield</span>
              <span className="text-violet-400">VUE</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              Discover software components, vulnerabilities,
              cryptographic assets, and quantum risks through
              automated SBOM and CBOM intelligence for modern
              software supply chains.
            </p>

            <div className="mt-8">
              <p className="text-sm text-zinc-500">
                Built by AP2L.ai
              </p>

              <a
                href="mailto:sales@ap2l.ai"
                className="
                  mt-2
                  block
                  text-sm
                  text-zinc-300
                  transition-colors
                  hover:text-violet-400
                "
              >
                sales@ap2l.ai
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/sbom"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  SBOM
                </Link>
              </li>

              <li>
                <Link
                  href="/cbom"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  CBOM
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Use Cases
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/use-cases/compliance"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  Compliance
                </Link>
              </li>

              <li>
                <Link
                  href="/use-cases/supply-chain"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  Supply Chain Security
                </Link>
              </li>

              <li>
                <Link
                  href="/use-cases/cryptographic-agility"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  Cryptographic Agility
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/company/about"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/company/contact"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/company/pricing"
                  className="
                    text-sm
                    text-zinc-400
                    transition-colors
                    hover:text-violet-400
                  "
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            text-sm
            text-zinc-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            © 2026 ShieldVUE. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="
                transition-colors
                hover:text-violet-400
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="
                transition-colors
                hover:text-violet-400
              "
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}