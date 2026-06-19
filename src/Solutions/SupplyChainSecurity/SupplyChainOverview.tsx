"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function SupplyChainOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6">
              Complete Visibility from Code to Cloud
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Modern software relies heavily on third-party components. ShieldVUE maps your entire supply chain, giving you unparalleled visibility into every dependency, library, and artifact that enters your environment.
            </p>
          </motion.div>

          {/* Diagram / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex items-center justify-center min-h-[300px]"
          >
             <Network className="w-32 h-32 text-primary opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
