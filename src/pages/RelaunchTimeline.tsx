import { useEffect } from "react";
import RelaunchHeroSection from "../components/RelaunchHeroSection";
import TimelineSection from "../components/TimelineSection";

const RelaunchTimeline = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <RelaunchHeroSection />
      <TimelineSection />
    </div>
  );
};

export default RelaunchTimeline
