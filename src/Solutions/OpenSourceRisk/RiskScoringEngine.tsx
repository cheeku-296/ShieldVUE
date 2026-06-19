"use client";

import { motion } from "framer-motion";

export default function RiskScoringEngine() {
  return (
    <section className="py-24 bg-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            {/* Dashboard Skeleton UI */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800">
              <div className="flex gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div className="w-32 h-4 bg-slate-700 rounded" />
                    <div className="w-20 h-3 bg-slate-600 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-6 bg-red-500/20 text-red-400 text-xs flex items-center justify-center rounded font-bold">9.8</div>
                     <div className="w-8 h-8 rounded-full bg-slate-700" />
                  </div>
                </div>
                <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div className="w-24 h-4 bg-slate-700 rounded" />
                    <div className="w-16 h-3 bg-slate-600 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-6 bg-yellow-500/20 text-yellow-400 text-xs flex items-center justify-center rounded font-bold">6.4</div>
                     <div className="w-8 h-8 rounded-full bg-slate-700" />
                  </div>
                </div>
                <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-xl opacity-50">
                  <div className="flex flex-col gap-2">
                    <div className="w-28 h-4 bg-slate-700 rounded" />
                    <div className="w-24 h-3 bg-slate-600 rounded" />
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-6 bg-green-500/20 text-green-400 text-xs flex items-center justify-center rounded font-bold">2.1</div>
                     <div className="w-8 h-8 rounded-full bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6">
              Context-Aware Risk Scoring
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Not all risks are equal. ShieldVUE scores open-source packages based on community health, known vulnerabilities, and actual usage context in your app.
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Active Exploitability Context
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Reachability Analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" /> Community Maintenance Health
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
