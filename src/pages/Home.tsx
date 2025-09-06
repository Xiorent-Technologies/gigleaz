
import Hero from '../components/HomePageComponents/Hero';
import SecondComponent from '../components/HomePageComponents/SecondComponent';
import OurStory from '../components/HomePageComponents/OurStory';
import RelaunchingSoon from '../components/HomePageComponents/RelaunchingSoon';
import WhatsComing from '../components/HomePageComponents/WhatsComing';
export default function Home() {
  return (
    <div className="relative bg-black align-center flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      <Hero />
      <SecondComponent />
      <OurStory />
      <RelaunchingSoon />
      <WhatsComing />
    </div>
  );
}
