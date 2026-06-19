"use client";

import { motion } from "framer-motion";

export default function SupplyChainBenefits() {
  const metrics = [
    { value: "99%", label: "Reduction in Manual Tracking" },
    { value: "100%", label: "CI/CD Pipeline Coverage" },
    { value: "Zero", label: "Unknown Dependencies" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-3 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {metrics.map((metric, index) => (
            <div key={index} className="pt-8 lg:pt-0 px-8">
              <div className="text-5xl md:text-6xl font-medium font-['Clash_Grotesk'] text-primary mb-4">
                {metric.value}
              </div>
              <div className="text-lg text-slate-300 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
