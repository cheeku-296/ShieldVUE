"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function ArtifactVerification() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Zero-Trust Verification",
      content: "Cryptographically verify the provenance and integrity of every artifact before it enters your production environment, ensuring absolute trust.",
    },
    {
      title: "Build Integrity",
      content: "Prevent tampering during the CI/CD build phase by signing components and enforcing reproducible build standards.",
    },
    {
      title: "Policy Enforcement",
      content: "Block unverified artifacts automatically at the registry level before they can be deployed or executed.",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sidebar Image */}
          <div className="order-2 lg:order-1 relative bg-slate-100 rounded-3xl p-8 min-h-[400px] flex items-center justify-center border border-slate-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl" />
            <ShieldCheck className="w-40 h-40 text-primary opacity-50 relative z-10" />
          </div>

          {/* Accordion List */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-8">
              Artifact Verification
            </h2>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl transition-colors duration-200 ${activeIndex === index ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white'}`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-xl font-bold text-slate-900">{item.title}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
