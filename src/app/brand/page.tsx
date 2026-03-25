import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBrand from "../components/Brand/HeroBrand";
import TrustedPartners from "../components/TrustedPartners";
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CTA";
import AppearedIn from "../components/AppearedIn";
import HeroSection from "../components/Brand/HeroSection";
import BrandNiche from "../components/Brand/BrandNiche";

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="content">
        <HeroSection />

        <div className="sections-holder">
          <TrustedPartners />
          <Plans />
          <AppearedIn />
          <BrandNiche />
        </div>
        <Testimonial />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
