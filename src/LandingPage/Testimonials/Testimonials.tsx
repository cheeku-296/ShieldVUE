"use client";

import { motion } from "framer-motion";

const insights = [
  {
    title: "Software Supply Chain Risk",
    description:
      "Modern applications depend on hundreds of open-source components. Visibility into dependencies is now a foundational security requirement.",
  },
  {
    title: "Cryptographic Visibility",
    description:
      "Organizations often lack inventory of cryptographic assets, making compliance and post-quantum migration significantly more difficult.",
  },
  {
    title: "Continuous Compliance",
    description:
      "Regulations increasingly require software transparency, SBOM generation, and auditable security processes across the development lifecycle.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Accent Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/5
          blur-[180px]
        "
      />

      <div className="shield-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl">
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
            Industry Perspective
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
            Built For Modern
            <br />
            Security Teams
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
            Security leaders need continuous visibility into software
            components, vulnerabilities and cryptographic assets to
            reduce risk and meet evolving compliance requirements.
          </p>
        </div>

        {/* Insight Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {insights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="
                group
                relative

                overflow-hidden

                rounded-[28px]

                border
                border-white/10

                bg-[#111111]

                p-8

                transition-all
                duration-300

                hover:border-violet-500/20
                hover:bg-[#151515]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  right-0
                  top-0

                  h-32
                  w-32

                  rounded-full

                  bg-violet-500/10

                  blur-3xl

                  opacity-0

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    mb-5

                    h-12
                    w-12

                    rounded-xl

                    border
                    border-violet-500/20

                    bg-violet-500/10
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          className="
            mt-16

            rounded-[32px]

            border
            border-white/10

            bg-[#111111]

            p-10
          "
        >
          <blockquote
            className="
              max-w-4xl

              text-2xl
              font-medium
              leading-relaxed
              text-white
            "
          >
            “Software supply chain visibility is no longer optional.
            Organizations require continuous inventory of software
            components, vulnerabilities and cryptographic assets to
            maintain security and compliance.”
          </blockquote>

          <p
            className="
              mt-6
              text-sm
              uppercase
              tracking-widest
              text-violet-400
            "
          >
            Industry Security Leadership Consensus
          </p>
        </div>
      </div>
    </section>
  );
}