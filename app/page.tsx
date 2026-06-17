import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import ProblemStatement from "@/components/home/ProblemStatement";
import LogoMarquee from "@/components/home/LogoMarquee";
import MeetShieldVue from "@/components/home/MeetShieldVue";
import ProductDeepDive from "@/components/home/ProductDeepDive";
import BusinessImpact from "@/components/home/BusinessImpact";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <Hero />

        <ProblemStatement />

        <LogoMarquee />

        <MeetShieldVue />

        <ProductDeepDive />

        <BusinessImpact />

        <Testimonials />

        <CTA />
      </main>

      <Footer />
    </>
  );
}