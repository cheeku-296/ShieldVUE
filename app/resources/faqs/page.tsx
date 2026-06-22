import Navbar from "@/Common/NavBar/NavBar";
import Footer from "@/Common/Footer/Footer";
import FAQs from "@/Resources/FAQs/FAQs";

export const metadata = {
  title: "Frequently Asked Questions | ShieldVUE",
  description: "Find answers to the most common questions about our AI platform, security, pricing, and integrations.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
