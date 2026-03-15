import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBrand from "../components/Brand/HeroBrand"
import TrustedPartners from "../components/TrustedPartners";
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";
import CallToAction from "../components/CTA";
import AppearedIn from "../components/AppearedIn"

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="content">
        <HeroBrand/>
        <div className="sections-holder">
          <TrustedPartners />
          <Plans />
          <AppearedIn />
        </div>
        <Testimonial />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}