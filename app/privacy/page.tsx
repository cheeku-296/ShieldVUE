import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Privacy Notice for ShieldVUE by ApMoSys Product Private Limited.",
};

export default function PrivacyNotice() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="shield-container max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="mb-8">
          <p className="text-primary font-bold text-sm tracking-wider uppercase mb-3">
            Legal Documentation
          </p>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-4 font-['Clash_Grotesk']">
            ShieldVUE Privacy Notice
          </h1>
          <p className="text-slate-500 font-medium">
            By ApMoSys Product Private Limited &nbsp;&bull;&nbsp; Last updated: June 30, 2026
          </p>
        </div>

        <hr className="border-slate-200 mb-12" />

        {/* Content Section */}
        <div className="space-y-12 text-slate-700 leading-relaxed">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <div className="space-y-4">
              <p>
                This Privacy Notice explains how ApMoSys Product Private Limited (&quot;APPPL&quot;, &quot;ApMoSys&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, processes, stores, protects, and manages information through ShieldVUE&reg;, an enterprise Software Supply Chain Security and Governance Platform.
              </p>
              <p>
                ShieldVUE&reg; enables organizations to discover software components, generate and manage Software Bills of Materials (SBOMs) and Cryptography Bills of Materials (CBOMs), identify software vulnerabilities, monitor cryptographic assets, enforce governance policies, support regulatory compliance, and provide enterprise-wide software supply chain visibility.
              </p>
              <p>
                ShieldVUE&reg; is a proprietary software platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="mb-8">To provide, secure, and continuously improve ShieldVUE services, we may collect the following categories of information.</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Account Information</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 list-disc pl-5">
              <li>Full Name</li>
              <li>Business Email Address</li>
              <li>Contact Number</li>
              <li>Organization Name</li>
              <li>Designation</li>
              <li>Department</li>
              <li>User Role and Access Permissions</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Platform Usage Information</h3>
            <p className="mb-4">ShieldVUE collects operational information necessary for platform administration, governance, and security monitoring, including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 list-disc pl-5">
              <li>User login activities</li>
              <li>Authentication events</li>
              <li>Dashboard interactions</li>
              <li>Project activities</li>
              <li>Repository connections</li>
              <li>Policy configuration history</li>
              <li>Audit logs</li>
              <li>Workflow execution history</li>
              <li>Report generation history</li>
              <li>Administrative activities</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Software Metadata</h3>
            <p className="mb-4">During software discovery and analysis, ShieldVUE may process metadata related to customer software assets, including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-4 list-disc pl-5">
              <li>Software component names</li>
              <li>Package versions</li>
              <li>Dependency relationships</li>
              <li>Build artifacts</li>
              <li>Container image metadata</li>
              <li>Binary metadata</li>
              <li>Repository references</li>
              <li>Software inventory information</li>
              <li>Application identifiers</li>
              <li>Dependency trees</li>
            </ul>
            <p className="mb-8">ShieldVUE analyzes software metadata solely for software supply chain visibility and governance purposes.</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Vulnerability &amp; Security Information</h3>
            <p className="mb-4">To provide vulnerability intelligence, ShieldVUE may process:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 list-disc pl-5">
              <li>Known vulnerability references (CVEs)</li>
              <li>Security advisories</li>
              <li>Component risk scores</li>
              <li>Dependency risk information</li>
              <li>Vulnerability severity classifications</li>
              <li>Security policy violations</li>
              <li>Software exposure assessments</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Cryptographic Asset Information (CBOM)</h3>
            <p className="mb-4">Where CBOM capabilities are enabled, ShieldVUE may identify and catalog:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-4 list-disc pl-5">
              <li>Encryption algorithms</li>
              <li>Cryptographic libraries</li>
              <li>Certificates</li>
              <li>Hashing algorithms</li>
              <li>Key management metadata</li>
              <li>Initialization vectors</li>
              <li>Cryptographic implementations</li>
              <li>Cryptographic policy information</li>
            </ul>
            <p className="mb-8">ShieldVUE does not access or store customer encryption keys or confidential cryptographic secrets unless explicitly configured as part of an approved deployment.</p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Information</h3>
            <p className="mb-4">For platform security and operational purposes, we may collect:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 list-disc pl-5">
              <li>IP addresses</li>
              <li>Browser information</li>
              <li>Device identifiers</li>
              <li>Operating system details</li>
              <li>Session identifiers</li>
              <li>Access timestamps</li>
              <li>Network diagnostic information</li>
              <li>API request metadata</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Customer Content</h3>
            <p className="mb-4">Customers may upload or connect software-related information including:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>SBOM documents</li>
              <li>CBOM records</li>
              <li>Security policies</li>
              <li>Compliance reports</li>
              <li>Software inventory records</li>
              <li>Repository configurations</li>
              <li>Build pipeline metadata</li>
              <li>Vulnerability reports</li>
              <li>Governance documentation</li>
              <li>Supporting audit evidence</li>
            </ul>
          </section>

          {/* Purpose of Processing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Purpose of Processing</h2>
            <p className="mb-4">Information collected through ShieldVUE may be processed for the following legitimate business purposes:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Deliver and operate the ShieldVUE platform</li>
              <li>Authenticate authorized users</li>
              <li>Discover software components</li>
              <li>Generate and maintain SBOMs and CBOMs</li>
              <li>Perform software composition analysis</li>
              <li>Identify known software vulnerabilities</li>
              <li>Correlate dependencies with threat intelligence</li>
              <li>Monitor cryptographic assets</li>
              <li>Enforce governance and security policies</li>
              <li>Generate compliance reports</li>
              <li>Maintain audit trails</li>
              <li>Provide customer support</li>
              <li>Improve platform functionality</li>
              <li>Monitor service availability and performance</li>
              <li>Comply with applicable legal, regulatory, and contractual obligations</li>
            </ul>
          </section>

          {/* Data Ownership */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Ownership</h2>
            <p className="mb-4">Customers retain full ownership of all customer-provided information processed within ShieldVUE, including but not limited to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Source code references</li>
              <li>Software inventories</li>
              <li>SBOMs</li>
              <li>CBOMs</li>
              <li>Security policies</li>
              <li>Vulnerability reports</li>
              <li>Compliance documentation</li>
              <li>Repository metadata</li>
              <li>Configuration information</li>
              <li>Uploaded files and business records</li>
            </ul>
            <p>ApMoSys acquires no ownership rights over customer data except as necessary to provide contracted services and fulfill platform operations.</p>
          </section>

          {/* AI and Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">AI and Analytics</h2>
            <div className="space-y-4">
              <p>Where AI-powered capabilities are available within ShieldVUE, information such as software metadata, vulnerability insights, governance recommendations, compliance observations, prompts, inputs, generated outputs, and associated metadata may be processed solely to deliver requested platform functionality and improve customer experience.</p>
              <p>Customer information is not used to train publicly available Artificial Intelligence models without explicit written customer authorization.</p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="mb-4">ShieldVUE is designed with security-by-design principles and employs industry-standard security controls to protect customer information. Security measures include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Role-Based Access Control (RBAC)</li>
              <li>Multi-level authentication and authorization</li>
              <li>Encryption of data in transit</li>
              <li>Encryption of stored platform data where applicable</li>
              <li>Comprehensive audit logging</li>
              <li>Secure API communication</li>
              <li>Continuous platform monitoring</li>
              <li>Vulnerability management processes</li>
              <li>Security event logging</li>
              <li>Controlled administrative access</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="mb-4">Information processed by ShieldVUE is retained only for legitimate:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6 list-disc pl-5">
              <li>Business purposes</li>
              <li>Customer contractual obligations</li>
              <li>Security investigations</li>
              <li>Operational requirements</li>
              <li>Regulatory compliance</li>
              <li>Audit requirements</li>
              <li>Legal obligations</li>
            </ul>
            <p>Retention periods may vary based on customer agreements, applicable laws, or organizational policies.</p>
          </section>

          {/* Disclosure of Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclosure of Information</h2>
            <p className="mb-4">ApMoSys does not sell, rent, or commercially distribute customer information. Information may be disclosed only under the following circumstances:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Where required by applicable law</li>
              <li>Regulatory investigations</li>
              <li>Court orders or legal process</li>
              <li>Contractual obligations</li>
              <li>Customer-authorized service delivery</li>
              <li>Security incident investigations</li>
              <li>Approved service providers supporting ShieldVUE operations under appropriate confidentiality obligations</li>
            </ul>
          </section>

          {/* International Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">International Data Processing</h2>
            <div className="space-y-4">
              <p>Where customer deployments involve multiple geographic regions or cloud environments, information may be processed in accordance with applicable contractual commitments and relevant data protection regulations.</p>
              <p>Appropriate safeguards are implemented to protect customer information during cross-border processing where applicable.</p>
            </div>
          </section>

          {/* Customer Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Customer Responsibilities</h2>
            <p className="mb-4">Customers are responsible for:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-5">
              <li>Maintaining appropriate user access controls</li>
              <li>Protecting account credentials</li>
              <li>Configuring repositories securely</li>
              <li>Reviewing governance policies</li>
              <li>Ensuring uploaded information complies with applicable laws and internal policies</li>
            </ul>
          </section>

          {/* Changes to This Privacy Notice */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Privacy Notice</h2>
            <div className="space-y-4">
              <p>ApMoSys may update this Privacy Notice periodically to reflect changes in legal requirements, platform capabilities, or operational practices.</p>
              <p>The updated version will be published on this page together with the revised &quot;Last Updated&quot; date.</p>
            </div>
          </section>

          {/* Contact & Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p>For questions regarding this Privacy Notice or ShieldVUE&apos;s privacy and data protection practices, please contact:</p>
              <p>Email: <a href="mailto:sales@apmosys.com" className="text-primary hover:underline font-medium">sales@apmosys.com</a></p>
              <p className="pt-4 border-t border-slate-200 mt-8">
                ShieldVUE&reg; is a proprietary Software Supply Chain Security platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited.
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
