import Navbar from "@/Common/NavBar/NavBar";
import Footer from "@/Common/Footer/Footer";

import Hero from "@/LandingPage/HeroSection/HeroSection";
import ProblemStatement from "@/LandingPage/ProblemStatement/ProblemStatement";
import LogoMarquee from "@/LandingPage/LogoMarquee/LogoMarquee";
import MeetShieldVue from "@/LandingPage/MeetShieldVue/MeetShieldVue";
import ProductDeepDive from "@/LandingPage/ProductDeepDive/ProductDeepDive";
import BusinessImpact from "@/LandingPage/BusinessImpact/BusinessImpact";
import Testimonials from "@/LandingPage/Testimonials/Testimonials";
import CTA from "@/LandingPage/CTA/CTA";

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