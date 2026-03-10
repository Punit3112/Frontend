import Hero from "../components/Pricing/HeroHolder";
import BookDemo from "../components/BookDemo";
import Plans from "../components/Plans";
import CallToAction from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TrustedPartners from "../components/TrustedPartners";

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="content">
        <Hero />
        <section className="my-[2%] mx-auto">
          <BookDemo />
          <TrustedPartners />
          <Plans />
          <CallToAction />
        </section>
      </div>
      <Footer />
    </>
  );
}
