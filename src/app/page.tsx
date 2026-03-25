import Header from "./components/Header";
import HeroHolder from "./components/Home/HeroHolder";
import { SECTIONS } from "./data/sections";
import CreatorSection from "./components/CreatorSection";
import BrandShowcase from "./components/BrandShowcase";
import CaseStudies from "./components/CaseStudies";
import { caseStudies } from "./data/caseStudies";
import BrandLogos from "./components/BrandLogos";
import { brandLogos } from "./data/brandLogos";
import FAQ from "./components/FaqComp";
import { faqData } from "@/app/data/faqData";
import QuickSearch from "./components/Home/QuickSearch";

export default function Home() {
  const faq = faqData["/"];

  return (
    <>
      <Header />
      <div className="content">
        <HeroHolder />
        <QuickSearch />
        <div className="sections-holder">
          {SECTIONS.map((section) => (
            <CreatorSection key={section.id} {...section} />
          ))}
        </div>
        <BrandShowcase />
        <CaseStudies caseStudies={caseStudies} />
        <BrandLogos logos={brandLogos} />
        {faq && <FAQ title={faq.title} items={faq.items} />}
      </div>
    </>
  );
}
