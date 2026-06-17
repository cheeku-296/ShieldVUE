"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import { Button } from "@/Common/UI/Button/Button";

export default function BookDemoHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-40 pb-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg_dark_enterprise.png"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      </div>

      {/* Grid Texture */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:42px_42px]
        "
      />

      {/* Animated Stripes */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]

          bg-[repeating-linear-gradient(-45deg,transparent,transparent_18px,white_18px,white_19px)]
        "
      />

      {/* Glow 1 */}
      <div
        className="
          absolute
          right-0
          top-0

          h-[700px]
          w-[700px]

          rounded-full

          bg-primary/20

          blur-[180px]
        "
      />

      {/* Glow 2 */}
      <div
        className="
          absolute
          left-0
          bottom-0

          h-[500px]
          w-[500px]

          rounded-full

          bg-indigo-500/10

          blur-[160px]
        "
      />

      <div className="shield-container relative z-10">
        <div className="grid min-h-[80vh] items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >


            {/* Heading */}
            <h1
              className="
                mt-8

                text-6xl
                font-extrabold

                leading-[1.05]

                tracking-tight

                text-white

                lg:text-7xl
              "
            >
              See
              <span className="text-violet-400">
                {" "}ShieldVUE
              </span>
              <br />
              In Action
            </h1>

            {/* Description */}
            <p
              className="
                mt-8

                max-w-2xl

                text-xl
                leading-9

                text-slate-400
              "
            >
              Discover how security, compliance and
              engineering teams gain complete visibility
              into software components, vulnerabilities,
              cryptographic assets and software supply
              chain risks using ShieldVUE.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="
                  h-12
                  px-7

                  bg-primary

                  text-white

                  shadow-xl
                  shadow-primary/30
                "
              >
                Schedule Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  h-12
                  px-7

                  border-white/20

                  bg-white/10

                  text-white

                  backdrop-blur-xl

                  hover:bg-white/20
                "
              >
                Explore Platform

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">
                  SBOM
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Software Visibility
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">
                  CBOM
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Crypto Discovery
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">
                  NIST
                </div>

                <div className="mt-2 text-sm text-slate-500">
                  Compliance Ready
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Floating Dashboard */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative

                overflow-hidden

                rounded-[32px]

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                shadow-[0_0_80px_rgba(104,67,183,0.25)]
              "
            >
              {/* Top Bar */}
              <div
                className="
                  flex
                  items-center
                  gap-2

                  border-b
                  border-white/10

                  px-5
                  py-4
                "
              >
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 text-xs text-slate-400">
                  ShieldVUE Analysis Engine
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="/landing/hero.png"
                  alt="ShieldVUE Dashboard"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Floating Metric Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-10
                bottom-10

                hidden
                lg:block
              "
            >
              <div
                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-slate-900/90

                  p-5

                  backdrop-blur-xl
                "
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-400" />

                  <span className="text-sm text-slate-300">
                    Vulnerabilities Identified
                  </span>
                </div>

                <div className="mt-3 text-4xl font-bold text-white">
                  427
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}