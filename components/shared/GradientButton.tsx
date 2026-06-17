"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({
  href = "#",
  children,
  className,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        `
        inline-flex
        items-center
        gap-2
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        text-white

        bg-gradient-to-r
        from-violet-600
        via-purple-500
        to-pink-500

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      `,
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}