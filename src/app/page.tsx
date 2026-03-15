import Header from "./components/Header";
import HeroHolder from "./components/Home/HeroHolder"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="content">
        <HeroHolder />
    </div>
    
    </>
  );
}
