"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: "01",
    title: "SBOM Generation",
    description:
      "Generate complete Software Bills of Materials across applications, repositories, containers and build pipelines with full dependency visibility.",
    points: [
      "Direct & transitive dependency discovery",
      "SPDX & CycloneDX support",
      "CI/CD integration",
      "Compliance-ready exports",
    ],
  },
  {
    id: "02",
    title: "CBOM Discovery",
    description:
      "Automatically discover cryptographic assets, certificates, keys, algorithms and crypto libraries hidden across applications.",
    points: [
      "Certificate inventory",
      "Algorithm discovery",
      "Crypto dependency mapping",
      "Post-quantum readiness analysis",
    ],
  },
  {
    id: "03",
    title: "Vulnerability Intelligence",
    description:
      "Continuously identify vulnerable components and correlate them with real business risk and remediation priorities.",
    points: [
      "Real-time CVE detection",
      "Risk prioritization",
      "Exploit intelligence",
      "Automated reporting",
    ],
  },
];

export default function ProductDeepDive() {
  return (
    <section className="relative bg-black py-36 overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
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
            Understand Your Entire
            <br />
            Software Supply Chain
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
            "
          >
            ShieldVUE combines software visibility,
            cryptographic discovery and vulnerability
            intelligence into a single platform built for
            modern engineering and security teams.
          </p>
        </div>

        {/* Features */}
        <div className="mt-32 space-y-40">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.7,
              }}
              className={`
                grid
                items-center
                gap-16

                lg:grid-cols-2
              `}
            >
              {/* Alternate Layout */}
              {index % 2 === 0 ? (
                <>
                  <ProductMockup
                    title={section.title}
                    index={index}
                  />

                  <ContentBlock section={section} />
                </>
              ) : (
                <>
                  <ContentBlock section={section} />

                  <ProductMockup
                    title={section.title}
                    index={index}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentBlock({ section }: any) {
  return (
    <div>
      <div
        className="
          text-7xl
          font-bold
          text-violet-400/20
        "
      >
        {section.id}
      </div>

      <h3
        className="
          mt-4
          text-4xl
          font-bold
          text-white
        "
      >
        {section.title}
      </h3>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-zinc-400
        "
      >
        {section.description}
      </p>

      <div className="mt-8 space-y-4">
        {section.points.map((point: string) => (
          <div
            key={point}
            className="flex items-center gap-3"
          >
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-violet-500
              "
            />

            <span className="text-zinc-300">
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductMockup({
  title,
  index,
}: {
  title: string;
  index: number;
}) {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-[#111111]

        p-8

        shadow-2xl
      "
    >
      <div
        className="
          absolute
          right-0
          top-0

          h-60
          w-60

          rounded-full

          bg-violet-500/10

          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-500 text-sm">
              ShieldVUE Module
            </p>

            <h4 className="text-white font-semibold mt-1">
              {title}
            </h4>
          </div>

          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Fake Dashboard */}
        <div className="mt-8 space-y-4">
          <div className="h-4 rounded-full bg-white/10 w-full" />
          <div className="h-4 rounded-full bg-white/10 w-4/5" />
          <div className="h-4 rounded-full bg-white/10 w-2/3" />

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black p-6 border border-white/10">
              <div className="text-zinc-500 text-sm">
                Assets
              </div>

              <div className="mt-2 text-3xl font-bold text-white">
                {index === 0
                  ? "427"
                  : index === 1
                  ? "14"
                  : "36"}
              </div>
            </div>

            <div className="rounded-2xl bg-black p-6 border border-white/10">
              <div className="text-zinc-500 text-sm">
                Coverage
              </div>

              <div className="mt-2 text-3xl font-bold text-violet-300">
                98%
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6 h-44">
            <div className="text-zinc-500 text-sm mb-4">
              Analysis Overview
            </div>

            <div className="flex items-end gap-3 h-24">
              {[35, 70, 45, 90, 55, 100].map((h) => (
                <div
                  key={h}
                  className="flex-1 rounded-t-lg bg-violet-500/50"
                  style={{
                    height: `${h}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}