"use client";

import { motion } from "framer-motion";
import {
    Shield,
    FileCode2,
    KeyRound,
    Bug,
    ClipboardCheck,
    Atom,
} from "lucide-react";

const features = [
    {
        title: "SBOM Generation",
        description: "Automatically inventory every software component.",
        icon: FileCode2,
    },
    {
        title: "CBOM Discovery",
        description: "Discover algorithms, keys and crypto assets.",
        icon: KeyRound,
    },
    {
        title: "Vulnerability Detection",
        description: "Identify risks across dependency trees.",
        icon: Bug,
    },
    {
        title: "Compliance Mapping",
        description: "Map findings to regulatory frameworks.",
        icon: ClipboardCheck,
    },
    {
        title: "Quantum Readiness",
        description: "Prepare for post-quantum cryptography.",
        icon: Atom,
    },
];

export default function MeetShieldVue() {
    return (
        <section
            id="features"
            className="relative overflow-hidden bg-black py-32"
        >
            {/* Accent Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/5
          blur-[160px]
        "
            />

            <div className="shield-container relative z-10">
                {/* Heading */}
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_520px]">
                    {/* LEFT CONTENT */}
                    <div>
                        <div
                            className="
        inline-flex
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
                            Platform Capabilities
                        </div>

                        <h2
                            className="
        mt-8
        text-5xl
        font-bold
        tracking-tight
        text-white
        md:text-6xl
      "
                        >
                            One Platform.
                            <br />
                            Complete Software Visibility.
                        </h2>

                        <p
                            className="
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-zinc-400
      "
                        >
                            ShieldVUE combines software inventory,
                            vulnerability intelligence,
                            cryptographic discovery,
                            compliance monitoring,
                            and quantum readiness
                            into a single security platform.
                        </p>
                    </div>

                    {/* VIDEO PLACEHOLDER */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <div
                            className="
    relative
    aspect-video
    overflow-hidden
    rounded-[32px]
    border
    border-white/10
    bg-[#111111]
  "
                        >
                            <video
                                className="h-full w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src="/videos/magnific_use-the-uploaded-video-as_Kj8Dc8rkqp.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* Optional Overlay */}
                            <div
                                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/20
      via-blue/20
      to-transparent
    "
                            />

                            {/* <div className="absolute bottom-6 left-6">
                                <p className="text-sm text-zinc-400">
                                    Product Walkthrough
                                </p>

                                <h3 className="mt-1 text-lg font-semibold text-white">
                                    ShieldVUE Platform Demo
                                </h3>
                            </div> */}
                        </div>
                    </motion.div>
                </div>

                {/* Platform Diagram */}
                <div className="mt-24 relative">


                    {/* Feature Grid */}
                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="
                    group

                    rounded-[28px]

                    border
                    border-white/10

                    bg-[#111111]

                    p-7

                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:border-violet-500/20
                    hover:bg-[#151515]
                  "
                                >
                                    <div
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-violet-500/20

                      bg-violet-500/10
                    "
                                    >
                                        <Icon className="h-6 w-6 text-violet-400" />
                                    </div>

                                    <h3
                                        className="
                      mt-6
                      text-xl
                      font-semibold
                      text-white
                    "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                      mt-3
                      text-sm
                      leading-7
                      text-zinc-400
                    "
                                    >
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}