"use client";

import { motion } from "framer-motion";
import { GitMerge } from "lucide-react";

export default function DependencyMapping() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="shield-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6">
              Uncover Hidden Transitive Risks
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Look beyond direct dependencies. Our engine maps your complete software tree to expose vulnerabilities nested deep within transitive open-source packages.
            </p>
          </motion.div>

          {/* Node Graph Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-inner flex items-center justify-center min-h-[400px] overflow-hidden"
          >
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#121B31_1px,transparent_1px)] [background-size:16px_16px]" />
             
             {/* Simulated Nodes */}
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                <GitMerge className="w-48 h-48 text-slate-300 absolute" />
                <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full bg-primary animate-pulse" />
                <div className="absolute top-[30%] right-[25%] w-6 h-6 rounded-full bg-red-500 animate-pulse" />
                <div className="absolute bottom-[25%] left-[30%] w-5 h-5 rounded-full bg-yellow-500" />
                <div className="absolute bottom-[20%] right-[20%] w-8 h-8 rounded-full bg-green-500/50" />
                {/* Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                  <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                  <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                  <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="2" />
                </svg>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
