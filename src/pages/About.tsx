// AboutPage.jsx
import HeroSection from "../components/AboutHeroSection";
import RiseAndPause from "../components/RiseAndPause";
import Reinventing from "../components/Reinventing";
import LearnAndEarn from "../components/LearnAndEarn";
import CompanySection from "../components/CompanySection";

export default function About() {
  return (
    <div>
      <HeroSection />
      <RiseAndPause />
      <Reinventing />
      <LearnAndEarn />
      <CompanySection />
    </div>
  );
}
