"use client";

import { EyeOff, ShieldAlert, FileSearch, Scale } from "lucide-react";
import { motion } from "framer-motion";

export default function TheProblem() {
  const problems = [
    {
      icon: <EyeOff className="w-7 h-7 text-primary" />,
      bgClass: "bg-primary/10",
      title: "Limited Software Visibility",
      description: "Organizations lack a clear, centralized inventory of the software components, libraries, and frameworks powering their applications."
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-red-500" />,
      bgClass: "bg-red-50",
      title: "Open Source Security Risks",
      description: "Unpatched vulnerabilities in open-source dependencies introduce critical attack vectors that remain undetected until exploitation."
    },
    {
      icon: <FileSearch className="w-7 h-7 text-amber-500" />,
      bgClass: "bg-amber-50",
      title: "Manual Tracking Challenges",
      description: "Relying on spreadsheets and manual audits to track software bills of materials (SBOMs) is slow, error-prone, and unscalable."
    },
    {
      icon: <Scale className="w-7 h-7 text-indigo-500" />,
      bgClass: "bg-indigo-50",
      title: "Growing Compliance Requirements",
      description: "Regulatory frameworks and enterprise policies increasingly mandate strict software supply chain documentation and risk governance."
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
          <motion.div 
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk']">
              The Software <br className="hidden lg:block" /> Supply Chain <br className="hidden lg:block" /> <span className="text-primary">Blindspot.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Modern applications are built on thousands of dependencies. Without proper governance, this complexity introduces severe operational and security risks that can compromise your entire infrastructure.
            </p>
           
          </motion.div>

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
