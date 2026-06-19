"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckSquare, FileKey } from "lucide-react";

export default function SupportedFrameworks() {
  const frameworks = [
    { title: "NIST SSDF", icon: Shield, desc: "Map your software supply chain directly to NIST Secure Software Development Framework requirements." },
    { title: "Executive Order 14028", icon: FileText, desc: "Generate compliant SBOMs necessary for selling software to the US Federal Government." },
    { title: "CIS Controls", icon: CheckSquare, desc: "Enforce Center for Internet Security best practices for software inventories automatically." },
    { title: "Custom Policies", icon: FileKey, desc: "Create and enforce proprietary internal security and licensing policies with ease." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-4">
            Built for Modern Regulations
          </h2>
          <p className="text-lg text-slate-600">
            Out-of-the-box support for the most stringent federal and commercial security frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {frameworks.map((fw, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex gap-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <fw.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{fw.title}</h3>
                <p className="text-slate-600 leading-relaxed">{fw.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
