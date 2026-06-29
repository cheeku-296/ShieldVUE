import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50">
      <div className="shield-container py-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="flex items-center gap-1">
              <Image 
                src="/brand_logo/shieldvue_logo.png" 
                alt="ShieldVUE Logo Icon" 
                width={64} 
                height={64} 
                className="h-10 w-auto object-contain"
              />
              <Image 
                src="/brand_logo/brand_bg_text.png" 
                alt="ShieldVUE Logo Text" 
                width={100} 
                height={220} 
                className="h-12 w-auto object-contain -ml-2"
              />
            </Link>
            <p className="text-sm font-medium text-slate-500">
              Copyright © 2026 <a href="https://ap2l.ai/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:opacity-80 transition-opacity">ap2l.ai</a>
            </p>
          </div>

          {/* Controls & Socials */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div className="flex items-center gap-6 text-sm text-slate-600 font-medium">
              <Link href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/ApMoSys" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-500 transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/apmosysofficial" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-slate-500 transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/apmosys_technologies" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/apmosys-the-consulting-services-company/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}