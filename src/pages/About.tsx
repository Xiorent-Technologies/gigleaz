// AboutPage.jsx
import HeroSection from "../components/AboutHeroSection";
import RiseAndPause from "../components/RiseAndPause";
import Reinventing from "../components/Reinventing";
import LearnAndEarn from "../components/LearnAndEarn";
import CompanySection from "../components/CompanySection";

export default function About() {
  return (
    <div className="relative bg-black align-center flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      <HeroSection />
      <RiseAndPause />
      <Reinventing />
      <LearnAndEarn />
      <CompanySection />
    </div>
  );
}
