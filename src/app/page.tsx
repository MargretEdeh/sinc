import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Mid from "./components/MidSection";
import ConceptSection from "./components/ConceptSection";
import AreaFocus from "./components/AreaFocus";
import ServiceSection from "./components/ServiceSection";
import PortFolio from "./components/PortfolioPart";
import CoFound from "./components/CoFound";
import Program from "./components/JoinOur";
import Investors from "./components/InVestors";
import Equity from "./components/EquityJob";
import BlogPost from "./components/BlogPost";
import ImageCarousel from "./components/NewsSlide";

export default function Home() {
  return (
    <main className=" relative">
      <HeroSection/>
      <Mid/>
      <AreaFocus/>
      <ConceptSection/>
      <ServiceSection/>
      <PortFolio/>
      <CoFound/>
      <Program/>
      <Investors/>
      <Equity/>
      <BlogPost/>
      <ImageCarousel/>


    </main>
  );
}
