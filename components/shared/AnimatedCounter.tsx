"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="text-center"
    >
      <div
        className="
        text-4xl
        font-bold
        text-white
        md:text-5xl
      "
      >
        {inView ? (
          <CountUp
            end={value}
            duration={2}
          />
        ) : (
          0
        )}

        {suffix}
      </div>

      <p
        className="
        mt-2
        text-sm
        uppercase
        tracking-wider
        text-slate-400
      "
      >
        {label}
      </p>
    </div>
  );
}