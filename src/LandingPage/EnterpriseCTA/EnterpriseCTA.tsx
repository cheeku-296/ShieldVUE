import SharedCTA from "@/Common/UI/CTA/CTA";

export default function EnterpriseCTA() {
  return (
    <SharedCTA
      heading={
        <>
          Ready to Understand Your <br className="hidden sm:block" /> Software Supply Chain?
        </>
      }
      content="Book a Personalized Demo to see how ShieldVUE can automate your Software Bill of Materials, map vulnerabilities, and ensure enterprise-grade compliance."
    />
  );
}
