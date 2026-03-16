import Header from "./components/Header";
import HeroHolder from "./components/Home/HeroHolder";
import { SECTIONS } from "./data/sections";
import CreatorSection from "./components/CreatorSection";
import BrandShowcase from "./components/BrandShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <div className="content">
        <HeroHolder />
        <div className="sections-holder">
          {SECTIONS.map((section) => (
            <CreatorSection key={section.id} {...section} />
          ))}
        </div>
        <BrandShowcase />
      </div>
    </>
  );
}
