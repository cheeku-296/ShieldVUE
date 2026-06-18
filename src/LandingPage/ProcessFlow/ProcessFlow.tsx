import Image from "next/image";

export default function ProcessFlow() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="shield-container">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Platform Workflow
          </h2> */}
          <h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-normal font-['Clash_Grotesk']">
            How ShieldVUE Secures Your Ecosystem
          </h3>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            A frictionless pipeline that integrates seamlessly into your existing CI/CD environments to secure your software from code to production.
          </p>
        </div>
        <div className="relative w-full">
          <Image
            src="/landing/flow 3.jpeg"
            alt="ShieldVUE Process Flow"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
