"use client";

import { motion } from "framer-motion";
import { GitPullRequest, ArrowRight, XCircle } from "lucide-react";

export default function PolicyEnforcement() {
  return (
    <section className="py-24 bg-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6">
              Shift-Left Governance
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Automatically block non-compliant code, missing SBOMs, or unauthorized licenses from progressing through your CI/CD pipelines. Security shouldn't be an afterthought.
            </p>
          </motion.div>

          {/* Interactive Pipeline Flowchart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 text-white font-mono text-sm"
          >
             <div className="flex flex-col items-center gap-4 relative">
                
                <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 w-full text-center flex items-center justify-center gap-2">
                   <GitPullRequest className="w-4 h-4 text-slate-400" /> Pull Request Created
                </div>
                
                <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                
                <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 w-full text-center flex items-center justify-between">
                   <span>Scanning Dependencies...</span>
                   <span className="text-green-400">Pass</span>
                </div>

                <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />

                <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 w-full text-center flex items-center justify-between">
                   <span>Checking Licenses...</span>
                   <span className="text-red-400 flex items-center gap-1"><XCircle className="w-4 h-4"/> Fail</span>
                </div>

                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 w-full">
                   <strong>Pipeline Blocked:</strong> GPL v3.0 license detected in 'faker.js'. Violates company policy [POL-003].
                </div>

             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
