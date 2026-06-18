"use client";

import { EyeOff, ShieldAlert, FileSearch, Scale, Clock, Gavel } from "lucide-react";
import { motion } from "framer-motion";

export default function TheProblem() {
  const problems = [
    {
      icon: <EyeOff className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Limited Supply Chain Visibility",
      description: "Organizations often lack visibility into components used across applications, creating significant blind spots."
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Rising Open Source Vulnerabilities",
      description: "New CVEs emerge daily in third-party libraries, exponentially increasing attack surfaces."
    },
    {
      icon: <Scale className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Compliance Complexity",
      description: "Meeting regulatory mandates and rigorous customer security requirements is becoming increasingly difficult."
    },
    {
      icon: <FileSearch className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Manual Tracking Challenges",
      description: "Spreadsheet-based component tracking is highly inaccurate, error-prone, and not scalable."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="bg-white pt-40 pb-24 lg:pt-56 lg:pb-32 relative">
      <div className="shield-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk']">
                Why Organizations <br className="hidden lg:block" /> Need <br className="hidden lg:block" /> <span className="text-primary">ShieldVUE.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Modern applications rely heavily on open-source and third-party software components, creating complex security, compliance, and visibility challenges.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Stacked Problem Cards */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problems.map((problem, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start rounded-md shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className={`p-4 rounded-md shrink-0 transition-colors duration-300 ${problem.bgClass} group-hover:bg-primary/10 group-hover:shadow-inner`}>
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
