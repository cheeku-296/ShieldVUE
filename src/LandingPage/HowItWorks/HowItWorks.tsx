import { Code2, Bot, ScanSearch, FileBox, Radar, LineChart, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: <Code2 className="w-6 h-6" />, label: "Connect Source Repositories" },
    { icon: <Bot className="w-6 h-6" />, label: "Scan Components & Dependencies" },
    { icon: <FileBox className="w-6 h-6" />, label: "Generate SBOM & CBOM" },
    { icon: <Radar className="w-6 h-6" />, label: "Map Vulnerabilities" },
    { icon: <ScanSearch className="w-6 h-6" />, label: "Apply Policies" },
    { icon: <LineChart className="w-6 h-6" />, label: "Monitor & Govern Continuously" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="shield-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-normal font-['Clash_Grotesk'] text-slate-900 mb-4">
            How ShieldVUE Works
          </h2>
          <p className="text-lg text-slate-600">
            A frictionless pipeline that integrates seamlessly into your existing CI/CD environments to secure your software from code to production.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Only visible on desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2" />

          {/* Changed mobile grid from grid-cols-2 to grid-cols-1 for better responsiveness and logic flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center z-20 shadow-md">
                    {index + 1}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-md bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:border-primary group-hover:text-primary group-hover:shadow-md transition-all duration-300 relative z-10">
                    {step.icon}
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 text-slate-300">
                      {/* Down arrow for mobile, right arrow for tablet (if needed, but since it's md:grid-cols-3, arrows break between rows. We just hide arrows on md) */}
                      <ArrowRight className="w-5 h-5 rotate-90 md:hidden" />
                    </div>
                  )}
                </div>

                <h3 className="font-medium text-slate-800 text-sm px-2 max-w-[150px]">
                  {step.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
