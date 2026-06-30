import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using ShieldVUE by ApMoSys Product Private Limited.",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="shield-container max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="mb-8">
          <p className="text-primary font-bold text-sm tracking-wider uppercase mb-3">
            Legal Documentation
          </p>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-4 font-['Clash_Grotesk']">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 font-medium">
            By ApMoSys Product Private Limited &nbsp;&bull;&nbsp; Last updated: June 30, 2026
          </p>
        </div>

        <hr className="border-slate-200 mb-12" />

        {/* Content Section */}
        <div className="space-y-12 text-slate-700 leading-relaxed">

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
            <div className="space-y-4">
              <p>
                By accessing, subscribing to, or using ShieldVUE&reg;, you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions (&quot;Terms&quot;).
              </p>
              <p>
                These Terms govern the use of ShieldVUE&reg;, an enterprise Software Supply Chain Security and Governance Platform provided by ApMoSys Product Private Limited (&quot;APPPL&quot;, &quot;ApMoSys&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              </p>
              <p>
                If you are accessing the Platform on behalf of an organization, you represent and warrant that you are authorized to bind such organization to these Terms.
              </p>
            </div>
          </section>

          {/* Ownership and Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ownership and Intellectual Property</h2>
            <p className="mb-4">ShieldVUE&reg;, including but not limited to:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Software platform</li>
              <li>Source code</li>
              <li>Object code</li>
              <li>Software Bill of Materials (SBOM) Engine</li>
              <li>Cryptography Bill of Materials (CBOM) Engine</li>
              <li>Software Composition Analysis (SCA) capabilities</li>
              <li>Vulnerability Intelligence Engine</li>
              <li>Governance and Compliance Engine</li>
              <li>Software Inventory Management capabilities</li>
              <li>Analytics and Risk Scoring models</li>
              <li>Dashboards</li>
              <li>Reports</li>
              <li>APIs</li>
              <li>Connectors</li>
              <li>Repository integrations</li>
              <li>CI/CD integrations</li>
              <li>Security policies</li>
              <li>Automation workflows</li>
              <li>Detection algorithms</li>
              <li>Artificial Intelligence capabilities</li>
              <li>Machine Learning models</li>
              <li>Documentation</li>
              <li>User interfaces</li>
              <li>Product architecture</li>
              <li>Trademarks</li>
              <li>Logos</li>
              <li>Branding elements</li>
              <li>Trade secrets</li>
              <li>Proprietary methodologies</li>
            </ul>

            <div className="space-y-4">
              <p>
                are proprietary assets and the exclusive intellectual property of ApMoSys Product Private Limited and/or its licensors.
              </p>
              <p>
                Nothing contained within the Platform shall be construed as transferring ownership or intellectual property rights to customers, users, partners, contractors, or third parties.
              </p>
            </div>
          </section>

          {/* License Grant */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">License Grant</h2>
            <div className="space-y-4">
              <p>
                Subject to a valid subscription agreement, ApMoSys grants customers a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to access and use ShieldVUE solely for internal business purposes during the active subscription period.
              </p>
              <p>
                The license is subject to compliance with these Terms and any applicable commercial agreements executed between the customer and ApMoSys.
              </p>
            </div>
          </section>

          {/* Permitted Use */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Permitted Use</h2>
            <p className="mb-4">Customers may use ShieldVUE to:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Discover software components</li>
              <li>Generate and manage SBOMs</li>
              <li>Generate and manage CBOMs</li>
              <li>Perform Software Composition Analysis (SCA)</li>
              <li>Monitor software vulnerabilities</li>
              <li>Assess software supply chain risks</li>
              <li>Manage software inventories</li>
              <li>Enforce governance and compliance policies</li>
              <li>Generate compliance reports</li>
              <li>Monitor cryptographic assets</li>
              <li>Analyze software dependency relationships</li>
              <li>Support internal cybersecurity and risk management initiatives</li>
            </ul>

            <p>Use of the Platform for any unlawful, unauthorized, or prohibited purpose is strictly forbidden.</p>
          </section>

          {/* Restrictions */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Restrictions</h2>
            <p className="mb-4">Users shall not directly or indirectly:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Reverse engineer the Platform</li>
              <li>Decompile or disassemble software components</li>
              <li>Attempt to discover source code</li>
              <li>Modify proprietary software</li>
              <li>Copy proprietary functionality</li>
              <li>Remove copyright or ownership notices</li>
              <li>Circumvent licensing or authentication mechanisms</li>
              <li>Perform unauthorized penetration testing against the Platform</li>
              <li>Access the Platform using automated scraping tools</li>
              <li>Introduce malicious software or code</li>
              <li>Use the Platform to violate applicable laws or regulations</li>
              <li>Develop competing products using ShieldVUE intellectual property</li>
              <li>Commercialize or resell Platform services without written authorization</li>
              <li>Benchmark or publicly disclose Platform performance without prior written approval</li>
            </ul>
          </section>

          {/* Protection of Proprietary Assets */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Protection of Proprietary Assets</h2>
            <p className="mb-4">Customers shall not reproduce, distribute, export, publish, commercialize, sublicense, modify, or create derivative works from any proprietary components of ShieldVUE, including but not limited to:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>SBOM generation methodologies</li>
              <li>CBOM discovery capabilities</li>
              <li>Vulnerability intelligence models</li>
              <li>Risk scoring algorithms</li>
              <li>Software composition analysis techniques</li>
              <li>Governance workflows</li>
              <li>Compliance frameworks</li>
              <li>Security analytics</li>
              <li>Dashboards</li>
              <li>Templates</li>
              <li>Reports</li>
              <li>Platform documentation</li>
              <li>APIs</li>
              <li>Connectors</li>
              <li>Automation engines</li>
              <li>Artificial Intelligence models</li>
            </ul>

            <p>All proprietary technologies remain the exclusive property of ApMoSys Product Private Limited.</p>
          </section>

          {/* Customer Content */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Customer Content</h2>
            <p className="mb-4">Customers retain ownership of all information uploaded, processed, or generated through the Platform, including but not limited to:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Software inventories</li>
              <li>SBOMs</li>
              <li>CBOMs</li>
              <li>Source code references</li>
              <li>Repository metadata</li>
              <li>Security policies</li>
              <li>Vulnerability reports</li>
              <li>Compliance documentation</li>
              <li>Build artifacts</li>
              <li>Configuration files</li>
              <li>Governance records</li>
            </ul>

            <p>Customers represent and warrant that they possess all necessary rights, permissions, and authorizations to submit such information into the Platform.</p>
          </section>

          {/* Artificial Intelligence Features */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Artificial Intelligence Features</h2>
            <p className="mb-4">ShieldVUE may provide AI-assisted capabilities designed to improve software security and governance, including:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Vulnerability prioritization</li>
              <li>Risk scoring recommendations</li>
              <li>Software dependency analysis</li>
              <li>Compliance insights</li>
              <li>Governance recommendations</li>
              <li>Security trend analysis</li>
              <li>Executive reporting assistance</li>
              <li>Automated software risk summaries</li>
              <li>Intelligent remediation recommendations</li>
            </ul>

            <div className="space-y-4">
              <p>All AI-generated outputs are provided as advisory information only.</p>
              <p>Customers remain solely responsible for independently validating all recommendations, analyses, reports, and AI-generated outputs before relying upon them for operational, security, regulatory, or business decisions.</p>
            </div>
          </section>

          {/* Third-Party Integrations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Integrations</h2>
            <p className="mb-4">ShieldVUE may integrate with third-party platforms and services, including but not limited to:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Azure DevOps</li>
              <li>Jenkins</li>
              <li>JFrog Artifactory</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Cloud service providers</li>
              <li>Vulnerability databases</li>
              <li>CI/CD platforms</li>
            </ul>

            <div className="space-y-4">
              <p>ApMoSys is not responsible for the availability, functionality, security, or performance of third-party products, services, or integrations.</p>
              <p>Use of third-party services remains subject to their respective terms and conditions.</p>
            </div>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Availability</h2>
            <p className="mb-4">ApMoSys uses commercially reasonable efforts to provide reliable access to ShieldVUE. However, uninterrupted or error-free service cannot be guaranteed. Platform availability may occasionally be affected by:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Scheduled maintenance</li>
              <li>Security updates</li>
              <li>Infrastructure upgrades</li>
              <li>Third-party service interruptions</li>
              <li>Force majeure events</li>
              <li>Network failures</li>
            </ul>
          </section>

          {/* Security Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Responsibilities</h2>
            <p className="mb-4">ApMoSys implements commercially reasonable administrative, technical, and organizational safeguards to protect the Platform. Customers remain responsible for:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Maintaining account credentials</li>
              <li>Configuring access permissions</li>
              <li>Reviewing governance policies</li>
              <li>Managing repository access</li>
              <li>Protecting API credentials</li>
              <li>Maintaining endpoint security</li>
              <li>Following secure software development practices</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by applicable law, ApMoSys shall not be liable for any:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Indirect damages</li>
              <li>Incidental damages</li>
              <li>Consequential damages</li>
              <li>Special damages</li>
              <li>Punitive damages</li>
              <li>Loss of revenue</li>
              <li>Loss of business opportunity</li>
              <li>Loss of anticipated savings</li>
              <li>Business interruption</li>
              <li>Loss of goodwill</li>
              <li>Data loss</li>
              <li>Security incidents arising from customer misconfiguration</li>
              <li>Third-party service failures</li>
            </ul>

            <p>arising from or relating to the use of, or inability to use, ShieldVUE.</p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
            <p className="mb-4">Customers agree to indemnify, defend, and hold harmless ApMoSys Product Private Limited, its affiliates, directors, officers, employees, licensors, and partners from and against any claims, liabilities, damages, losses, costs, or expenses arising from:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Unauthorized use of the Platform</li>
              <li>Violation of these Terms</li>
              <li>Customer-provided content</li>
              <li>Infringement of third-party intellectual property rights</li>
              <li>Regulatory non-compliance by the customer</li>
              <li>Misuse of Platform reports or recommendations</li>
            </ul>
          </section>

          {/* Suspension and Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Suspension and Termination</h2>
            <p className="mb-4">ApMoSys reserves the right to suspend or terminate access to ShieldVUE where:</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>These Terms are violated</li>
              <li>Subscription obligations are not fulfilled</li>
              <li>Unauthorized access is detected</li>
              <li>Platform security is compromised</li>
              <li>Fraudulent or unlawful activity is identified</li>
            </ul>

            <p>Termination shall not affect any accrued legal rights or obligations.</p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
            <div className="space-y-4">
              <p>These Terms & Conditions shall be governed and interpreted in accordance with the laws of the Republic of India.</p>
              <p>Any disputes arising out of or relating to these Terms or the use of ShieldVUE shall be subject to the exclusive jurisdiction of the competent courts located in Mumbai, Maharashtra, India.</p>
            </div>
          </section>

          {/* Changes to These Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to These Terms</h2>
            <div className="space-y-4">
              <p>ApMoSys may modify these Terms from time to time to reflect legal, regulatory, operational, or product changes.</p>
              <p>The revised version will become effective upon publication unless otherwise specified.</p>
              <p>Continued use of ShieldVUE after such updates constitutes acceptance of the revised Terms.</p>
            </div>
          </section>

          {/* Contact & Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <div className="space-y-4">
              <p>For questions regarding these Terms &amp; Conditions or the use of ShieldVUE&reg;, please contact:</p>
              <p>Email: <a href="mailto:sales@apmosys.com" className="text-primary hover:underline font-medium">sales@apmosys.com</a></p>
              <p className="pt-4 border-t border-slate-200 mt-8">
                ShieldVUE&reg; is a proprietary Software Supply Chain Security and Governance Platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited.
              </p>
              <p className="font-semibold">
                Copyright &copy; 2026 ApMoSys Product Private Limited. All rights reserved.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
