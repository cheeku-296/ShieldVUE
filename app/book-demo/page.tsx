import Navbar from "@/Common/NavBar/NavBar";
import Footer from "@/Common/Footer/Footer";

import BookDemoHero from "@/BookDemo/BookDemoHero";
import DemoBenefits from "@/BookDemo/DemoBenefits";
import DemoForm from "@/BookDemo/DemoForm";
import DemoFaq from "@/BookDemo/DemoFaq";

export default function BookDemoPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* <BookDemoHero /> */}
        {/* <DemoBenefits /> */}
        <DemoForm />
        <DemoFaq />
      </main>

      <Footer />
    </>
  );
}