import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/Creator/HeroSection";

export default function CreatorPage() {
  return (
    <>
      <Header />
      <div className="content">
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}
