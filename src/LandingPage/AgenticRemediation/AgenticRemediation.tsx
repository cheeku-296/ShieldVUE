"use client";

import { Bot, Wrench, ShieldAlert, GitPullRequest, Zap, CheckCircle2 } from "lucide-react";
import { m } from "framer-motion";

export default function AgenticRemediation() {
  const features = [
    {
      icon: <Bot className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "SLM based AI Remediation Engine",
      description: "Autonomous SLM models that actively analyze, plan, and execute vulnerability fixes without manual intervention."
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "Automated Patching",
      description: "Instantly generate and apply secure patches for zero-day vulnerabilities and known CVEs across your codebase."
    },
    {
      icon: <GitPullRequest className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "Automated Merge Request Creation",
      description: "Seamlessly integrate with your Continuous Integration/Continuous Deployment pipelines to automatically create tested, review-ready merge requests for security updates."
    },
    {
      icon: <ShieldAlert className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "Smart Triage & Prioritization",
      description: "AI-driven contextual analysis to prioritize critical vulnerabilities based on exploitability and business impact."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "Real-Time Mitigation",
      description: "Apply temporary virtual patches or compensating controls instantly while permanent fixes are being developed."
    },
    {
      icon: <CheckCircle2 className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "Dependency Auto-Updates",
      description: "Automatically bump vulnerable dependencies to secure versions while ensuring backward compatibility."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      bgClass: "bg-primary/10 text-primary",
      title: "ROI Based Remediation",
      description: "Helps fix maximum vulnerabilities with minimum efforts and fixes."
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
    <section className="bg-slate-50 pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 relative">
      <div className="shield-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <m.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                
                <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-[-0.46px] leading-[1.1] font-['Clash_Grotesk']">
                  SLM Based <br className="hidden lg:block" />AI Remediation <br className="hidden lg:block" /> <span className="text-primary">Engine.</span>
                </h2>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                  Move beyond detection with our advanced SLM based AI Remediation Engine. ShieldVUE doesn&apos;t just find vulnerabilities—it autonomously resolves them, reducing your Mean Time To Remediation from weeks to minutes.
                </p>
              </m.div>
            </div>
          </div>

          {/* Right Column: List of Features (No cards) */}
          <m.div 
            className="lg:col-span-7 flex flex-col gap-6 md:gap-8 mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <m.div 
                key={index} 
                variants={itemVariants}
                className="group bg-white border border-slate-200 p-5 md:p-8 flex flex-row gap-4 md:gap-6 items-start rounded-md shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className={`p-3 md:p-4 rounded-md shrink-0 transition-colors duration-300 ${feature.bgClass} group-hover:bg-primary/10 group-hover:shadow-inner`}>
                  <div className="transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>

        </div>
      </div>
    </section>
  );
}
