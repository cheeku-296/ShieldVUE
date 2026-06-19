"use client";

import { motion } from "framer-motion";
import { FileCode, Lock, Activity } from "lucide-react";

export default function SupplyChainFeatures() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4">
            Advanced Supply Chain Capabilities
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Feature 1 - Large Card spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 opacity-5 w-48 h-48 bg-primary rounded-full blur-3xl" />
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <FileCode className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">Automated SBOM Generation</h3>
            <p className="text-slate-600 leading-relaxed max-w-md relative z-10">
              Track every component seamlessly. Automatically generate standardized Software Bills of Materials directly from your source code and CI/CD pipelines.
            </p>
          </motion.div>

          {/* Feature 2 - Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-slate-900 text-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute right-0 top-0 opacity-20 w-32 h-32 bg-primary rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cryptographic BOMs (CBOM)</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Prepare for post-quantum cryptographic standards by discovering and cataloging all cryptographic assets.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 - Wide bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Continuous Monitoring</h3>
                <p className="text-slate-600">
                  Real-time alerts for supply chain anomalies and new vulnerabilities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
