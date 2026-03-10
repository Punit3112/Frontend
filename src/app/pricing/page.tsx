import Hero from "../components/Pricing/HeroHolder";
import BookDemo from "../components/BookDemo";
import Plans from "../components/Plans";
import CallToAction from "../components/CTA";
import Footer from "../components/Footer";

export default function PricingPage() {
  return (
    <div className="content">
      <Hero />
      <section className="my-[2%] mx-auto">
        <BookDemo />
        <Plans />
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
}
