"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, WheelEvent , useRef} from "react";

const problems = [
    {
        number: "01",
        title: "What's running inside your applications?",
        description:
            "Modern applications are built from hundreds of direct and transitive dependencies. Most organizations cannot accurately inventory what is actually deployed.",
        stat: "427 Components",
    },
    {
        number: "02",
        title: "Which components are vulnerable?",
        description:
            "Critical vulnerabilities often exist deep inside dependency trees where traditional security reviews never look.",
        stat: "36 Vulnerabilities",
    },
    {
        number: "03",
        title: "Which cryptographic assets exist?",
        description:
            "Algorithms, certificates, keys, and crypto libraries remain largely invisible, creating significant compliance and quantum-readiness risks.",
        stat: "14 Crypto Assets",
    },
];

export default function ProblemStatement() {
    const [active, setActive] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % problems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

        // Native wheel listener
    useEffect(() => {
        const deck = deckRef.current;

        if (!deck) return;

        const wheelListener = (e: globalThis.WheelEvent) => {
            if (!isHovered) return;

            e.preventDefault();

            handleWheel(e.deltaY);
        };

        deck.addEventListener("wheel", wheelListener, {
            passive: false,
        });

        return () => {
            deck.removeEventListener("wheel", wheelListener);
        };
    }, [isHovered]);
    const wheelLock = useRef(false);
    const deckRef = useRef<HTMLDivElement>(null);

const handleWheel = (deltaY: number) => {
    if (wheelLock.current) return;

    wheelLock.current = true;

    if (deltaY > 0) {
        setActive((prev) => (prev + 1) % problems.length);
    } else {
        setActive((prev) =>
            prev === 0 ? problems.length - 1 : prev - 1
        );
    }

    setTimeout(() => {
        wheelLock.current = false;
    }, 700);
};

    const getCardPosition = (index: number) => {
        const relative =
            (index - active + problems.length) % problems.length;

        switch (relative) {
            case 0:
                return {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    zIndex: 30,
                };

            case 1:
                return {
                    scale: 0.94,
                    y: 24,
                    opacity: 0.55,
                    rotateX: 6,
                    zIndex: 20,
                };

            default:
                return {
                    scale: 0.88,
                    y: 48,
                    opacity: 0.25,
                    rotateX: 10,
                    zIndex: 10,
                };
        }
    };

    return (
        <section className="relative bg-black py-32 overflow-hidden">
            {/* Background Grid */}
            <div
                className="
          absolute inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:36px_36px]
        "
            />

            {/* Purple Accent */}
            <div
                className="
          absolute
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/5
          blur-[180px]
        "
            />

            <div className="shield-container relative z-10">
                <div className="grid gap-24 lg:grid-cols-[45%_55%]">
                    {/* LEFT */}
                    <motion.div
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
                            duration: 0.7,
                        }}
                        className="
              lg:sticky
              lg:top-32
              self-start
              h-fit
              max-w-xl
            "
                    >
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
                            The Visibility Gap
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
                            You Can't Secure
                            <br />
                            What You Can't See
                        </h2>

                        <p
                            className="
                mt-8
                text-lg
                leading-8
                text-zinc-400
              "
                        >
                            Hidden software dependencies, vulnerabilities,
                            and cryptographic assets create blind spots
                            across the software supply chain.
                        </p>

                        <div className="mt-10 flex gap-3">
                            {problems.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className={`
                    h-2 rounded-full transition-all duration-300
                    ${active === index
                                            ? "w-10 bg-violet-500"
                                            : "w-2 bg-zinc-700"
                                        }
                  `}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT CARD DECK */}
                    <div
                        ref={deckRef}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="
    relative
    h-[400px]
    select-none
  "
                    >
                        {problems.map((item, index) => {
                            const position = getCardPosition(index);

                            return (
                                <motion.div
                                    onMouseEnter={() => {
                                        setActive(index);
                                        setIsHovered(true);
                                    }}
                                    key={item.number}
                                    animate={position}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 20,
                                    }}
                                    className="
                    absolute
                    inset-0
                    cursor-pointer
                  "
                                    style={{
                                        zIndex: position.zIndex,
                                    }}
                                    onClick={() => setActive(index)}
                                >
                                    <div
                                        className="
                      h-full

                      rounded-[32px]

                      border
                      border-white/10

                      bg-[#111111]

                      p-10

                      backdrop-blur-xl

                      transition-all
                      duration-300

                      hover:border-violet-500/20
                    "
                                    >
                                        {/* glow */}
                                        <div
                                            className="
                        absolute
                        right-0
                        top-0

                        h-40
                        w-40

                        rounded-full

                        bg-violet-500/10

                        blur-3xl
                      "
                                        />

                                        <div className="relative z-10">
                                            <div
                                                className="
                          text-7xl
                          font-bold
                          text-violet-400/30
                        "
                                            >
                                                {item.number}
                                            </div>

                                            <h3
                                                className="
                          mt-4
                          text-3xl
                          font-semibold
                          text-white
                        "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                          mt-6
                          max-w-xl
                          text-zinc-400
                          leading-8
                        "
                                            >
                                                {item.description}
                                            </p>

                                            <div
                                                className="
                          mt-8
                          inline-flex

                          rounded-full

                          border
                          border-white/10

                          bg-black

                          px-4
                          py-2

                          text-sm
                          text-zinc-300
                        "
                                            >
                                                {item.stat}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}