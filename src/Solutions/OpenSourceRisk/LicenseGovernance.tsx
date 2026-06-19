import { Scale, CheckCircle, XCircle } from "lucide-react";

export default function LicenseGovernance() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="shield-container text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Scale className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-medium font-['Clash_Grotesk'] text-slate-900 mb-6">
          Automated License Compliance
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Automatically detect restrictive open-source licenses (like GPL or AGPL) and enforce your organization's legal policies before code is merged.
        </p>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" /> Permissive Licenses
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex justify-between border-b pb-2"><span>MIT License</span> <span className="text-green-500 text-sm font-medium">Approved</span></li>
              <li className="flex justify-between border-b pb-2"><span>Apache 2.0</span> <span className="text-green-500 text-sm font-medium">Approved</span></li>
              <li className="flex justify-between border-b pb-2"><span>BSD 3-Clause</span> <span className="text-green-500 text-sm font-medium">Approved</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm border-t-4 border-t-red-500">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-500" /> Restrictive Licenses
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex justify-between border-b pb-2"><span>GPL v3.0</span> <span className="text-red-500 text-sm font-medium">Blocked</span></li>
              <li className="flex justify-between border-b pb-2"><span>AGPL</span> <span className="text-red-500 text-sm font-medium">Blocked</span></li>
              <li className="flex justify-between border-b pb-2"><span>SSPL</span> <span className="text-red-500 text-sm font-medium">Blocked</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
