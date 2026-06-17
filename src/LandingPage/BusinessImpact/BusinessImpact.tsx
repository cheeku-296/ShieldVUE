"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "SBOM Generation",
    description:
      "Generate complete Software Bills of Materials across repositories, applications and build pipelines with full dependency visibility.",
  },
  {
    number: "02",
    title: "CBOM Discovery",
    description:
      "Discover cryptographic assets, certificates, crypto libraries and algorithms to prepare for post-quantum migration.",
  },
  {
    number: "03",
    title: "Vulnerability Intelligence",
    description:
      "Continuously identify vulnerable components, prioritize remediation and understand software risk exposure.",
  },
  {
    number: "04",
    title: "Compliance Reporting",
    description:
      "Generate audit-ready reports and maintain compliance with emerging software supply chain regulations.",
  },
  {
    number: "05",
    title: "Agent-Based Discovery",
    description:
      "Deploy lightweight agents across environments for scalable software and dependency visibility.",
  },
  {
    number: "06",
    title: "Quantum Readiness",
    description:
      "Understand cryptographic exposure and prepare applications for the transition to post-quantum cryptography.",
  },
];

export default function BusinessImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

const [activeIndex, setActiveIndex] = useState(0);

useMotionValueEvent(
  scrollYProgress,
  "change",
  (latest) => {
    const sectionSize = 1 / features.length;

    const index = Math.min(
      features.length - 1,
      Math.floor(latest / sectionSize)
    );

    setActiveIndex(index);
  }
);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-black

        h-[600vh]
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          right-0
          top-1/4

          h-[700px]
          w-[700px]

          rounded-full

          bg-violet-500/5

          blur-[200px]
        "
      />

      {/* Sticky Container */}
      <div
        className="
          sticky
          top-0

          flex
          h-screen
          items-center
        "
      >
        <div className="shield-container">
          <div className="grid gap-24 lg:grid-cols-[40%_60%]">
            {/* LEFT */}
            <div className="max-w-xl">
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
                Everything You Need
                <br />
                To Understand
                <br />
                Your Software
              </h2>

              <p
                className="
                  mt-8

                  text-lg
                  leading-8

                  text-zinc-400
                "
              >
                ShieldVUE combines software visibility,
                vulnerability intelligence, cryptographic
                discovery and compliance reporting into one
                unified platform.
              </p>

              {/* Progress List */}
              {/* <div className="mt-14 space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <div
                      className={`
                        h-[2px]

                        transition-all
                        duration-500

                        ${
                          index <= activeIndex
                            ? "w-12 bg-violet-500"
                            : "w-6 bg-zinc-700"
                        }
                      `}
                    />

                    <span
                      className={`
                        text-sm
                        transition-all
                        duration-300

                        ${
                          index === activeIndex
                            ? "text-violet-300"
                            : "text-zinc-500"
                        }
                      `}
                    >
                      {feature.number}
                    </span>

                    <span
                      className={`
                        transition-all
                        duration-300

                        ${
                          index === activeIndex
                            ? "text-white"
                            : "text-zinc-500"
                        }
                      `}
                    >
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* RIGHT */}
            <div
              className="
                relative

                flex
                min-h-[700px]
                items-center
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 100,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -100,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="w-full"
                >
                  <div>
                    <div
                      className="
                        text-sm
                        font-medium
                        uppercase
                        tracking-wider

                        text-violet-400
                      "
                    >
                      {features[activeIndex].number}
                    </div>

                    <h3
                      className="
                        mt-4

                        text-5xl
                        font-bold

                        text-white
                      "
                    >
                      {features[activeIndex].title}
                    </h3>

                    <p
                      className="
                        mt-6

                        max-w-2xl

                        text-lg
                        leading-8

                        text-zinc-400
                      "
                    >
                      {features[activeIndex].description}
                    </p>

                    {/* Dashboard */}
                    <div
                      className="
                        relative

                        mt-10

                        overflow-hidden

                        rounded-[32px]

                        border
                        border-white/10

                        bg-[#111111]

                        p-4
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

                      <div
                        className="
                          relative
                          z-10

                          h-[300px]

                          rounded-2xl

                          border
                          border-white/10

                          bg-black

                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span
                          className="
                            text-lg
                            text-zinc-500
                          "
                        >
                          {features[activeIndex].title}
                          {" "}Dashboard
                        </span>

                        {/* Replace with screenshot/video */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
