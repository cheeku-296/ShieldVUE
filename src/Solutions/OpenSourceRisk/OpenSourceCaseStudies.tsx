"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function OpenSourceCaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="shield-container text-center max-w-4xl mx-auto">
        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed font-['Clash_Grotesk'] mb-8">
            "ShieldVUE gave us immediate visibility into our sprawling open-source estate, reducing our compliance review time by 80%."
          </p>
          <div className="text-slate-500 font-medium uppercase tracking-widest text-sm">
            — Leading Fintech Provider
          </div>
        </motion.div>
      </div>
    </section>
  );
}
