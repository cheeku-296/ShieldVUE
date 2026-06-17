"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const [activeScreen, setActiveScreen] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveScreen((prev) => (prev + 1) % 3);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Subtle Purple Accent Glow */}
            <div
                className="
          absolute
          top-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/10
          blur-[180px]
          pointer-events-none
        "
            />

            {/* Secondary Glow */}
            <div
                className="
          absolute
          bottom-0
          left-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-500/5
          blur-[140px]
          pointer-events-none
        "
            />

            {/* Grid Texture */}
            <div
                className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
            />

            <div className="shield-container relative z-10">
                <div className="grid min-h-[90vh] items-center gap-20 py-24 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div
                            className="
                mb-6
                inline-flex
                items-center
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-violet-300
              "
                        >
                            SBOM • CBOM • Quantum Readiness
                        </div>

                        {/* Headline */}
                        <h1
                            className="
                max-w-4xl
                text-5xl
                font-bold
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl
              "
                        >
                            See Everything
                            <br />

                            Inside Your
                            <br />

                            <span className="text-violet-300">
                                Applications
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-zinc-400
              "
                        >
                            Generate SBOMs, discover cryptographic assets through
                            CBOM, identify vulnerabilities, and gain complete
                            visibility into your software supply chain before
                            compliance or security risks become business problems.
                        </p>

                        {/* CTA */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/company/contact"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full

                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600

                  px-6
                  py-3

                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
                "
                            >
                                Get a Demo
                            </a>

                            <a
                                href="#features"
                                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  border
                  border-white/10

                  bg-white/[0.03]

                  px-6
                  py-3

                  text-sm
                  font-medium
                  text-white

                  transition-all

                  hover:bg-white/[0.06]
                "
                            >
                                Explore Features
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        {/* Stats */}
                        {/* <div className="mt-14 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white">
                                    SBOM
                                </div>

                                <div className="mt-2 text-sm text-zinc-500">
                                    Software Visibility
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold text-white">
                                    CBOM
                                </div>

                                <div className="mt-2 text-sm text-zinc-500">
                                    Crypto Discovery
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold text-white">
                                    Quantum
                                </div>

                                <div className="mt-2 text-sm text-zinc-500">
                                    Future Ready
                                </div>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Right Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                    >
                        <div
                            className="
                relative

                min-h-[520px]

                rounded-3xl

                border
                border-white/10

                bg-[#111111]

                p-8

                shadow-2xl
              "
                        >
                            {/* Widget Accent Glow */}
                            <div
                                className="
                  absolute
                  right-0
                  top-0

                  h-48
                  w-48

                  rounded-full

                  bg-violet-500/10

                  blur-3xl
                "
                            />

                            <div className="relative z-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-zinc-500">
                                            Live Repository Scan
                                        </p>

                                        <h3 className="mt-1 text-lg font-semibold text-white">
                                            ShieldVUE Analysis Engine
                                        </h3>
                                    </div>

                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>

                                <AnimatePresence mode="wait">
                                    {activeScreen === 0 && (
                                        <motion.div
                                            key="sbom"
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.45 }}
                                            className="space-y-4"
                                        >
                                            <div className="rounded-2xl border border-white/10 bg-black p-5">
                                                <div className="text-violet-300 text-sm">
                                                    Software Bill of Materials
                                                </div>

                                                <div className="mt-5 space-y-3">
                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>React</span>
                                                        <span>18.2.0</span>
                                                    </div>

                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>Next.js</span>
                                                        <span>15.0.0</span>
                                                    </div>

                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>OpenSSL</span>
                                                        <span>3.0.14</span>
                                                    </div>
                                                </div>

                                                <div className="mt-6 text-4xl font-bold text-white">
                                                    427
                                                </div>

                                                <div className="text-zinc-500">
                                                    Components Discovered
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeScreen === 1 && (
                                        <motion.div
                                            key="vulns"
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.45 }}
                                            className="space-y-4"
                                        >
                                            <div className="rounded-2xl border border-white/10 bg-black p-5">
                                                <div className="text-amber-300 text-sm">
                                                    Vulnerability Intelligence
                                                </div>

                                                <div className="mt-6 grid grid-cols-3 gap-4">
                                                    <div>
                                                        <div className="text-red-400 text-3xl font-bold">
                                                            4
                                                        </div>
                                                        <div className="text-zinc-500 text-sm">
                                                            Critical
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-orange-400 text-3xl font-bold">
                                                            12
                                                        </div>
                                                        <div className="text-zinc-500 text-sm">
                                                            High
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="text-yellow-400 text-3xl font-bold">
                                                            20
                                                        </div>
                                                        <div className="text-zinc-500 text-sm">
                                                            Medium
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                                                    <div className="text-white font-medium">
                                                        CVE-2025-1843
                                                    </div>

                                                    <div className="text-red-300 text-sm">
                                                        CVSS 9.8 Critical
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeScreen === 2 && (
                                        <motion.div
                                            key="cbom"
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -40 }}
                                            transition={{ duration: 0.45 }}
                                            className="space-y-4"
                                        >
                                            <div className="rounded-2xl border border-white/10 bg-black p-5">
                                                <div className="text-violet-300 text-sm">
                                                    Cryptographic Discovery
                                                </div>

                                                <div className="mt-5 space-y-3">
                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>RSA-2048</span>
                                                        <span>Detected</span>
                                                    </div>

                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>SHA-1</span>
                                                        <span className="text-red-400">
                                                            Legacy
                                                        </span>
                                                    </div>

                                                    <div className="flex justify-between text-zinc-300">
                                                        <span>TLS 1.2</span>
                                                        <span>Active</span>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="mb-2 text-zinc-500 text-sm">
                                                        Quantum Risk Score
                                                    </div>

                                                    <div className="h-3 rounded-full bg-white/10">
                                                        <div className="h-3 w-[72%] rounded-full bg-violet-500" />
                                                    </div>

                                                    <div className="mt-2 text-violet-300">
                                                        72%
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="mt-8 flex justify-center gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className={`h-2 rounded-full transition-all ${activeScreen === i
                                                    ? "w-8 bg-violet-500"
                                                    : "w-2 bg-zinc-700"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}