import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[728px] px-6 bg-black shadow-lg overflow-hidden">
      {/* Blurred Ellipse */}
      <div className="absolute left-[80px] top-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" />
      <div className="absolute left-[135px] top-[140px] w-[119px] h-[2px]  bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" />

      {/* Top Badge */}
      <div className="relative w-[356px] h-[52px] flex items-center justify-center 
  bg-[rgba(1,1,2,0.08)] backdrop-blur-[12px] 
  rounded-[30px] shadow-[inset_0_0_16px_#29AB87]">

        <div className="flex items-center gap-2">
          <Sparkles className="w-[23px] h-[23px] text-[#29AB87] -scale-x-100" />
          <p className="text-white font-light text-[16px] leading-[24px]">
            Welcome to the Gigleaz 2.0
          </p>
        </div>
      </div>


      {/* Main Headline */}
      <motion.h1
        className="mt-12 text-center text-[72px] font-bold uppercase bg-gradient-to-b from-[#DFDDDD] to-white bg-clip-text text-transparent leading-[1.3] z-10 max-w-[1244px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        STOPPED. QUESTIONED. REBUILT. <br /> NOW, <span className="text-[#FFD66B]">WE’RE BACK</span>
      </motion.h1>

      {/* Subtext */}
      <p className="mt-4 underline text-white font-light text-base">
        “Gigleaz 2.0 – The World’s First Learn & Earn OTT”
      </p>
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px]  bg-[#29AB87]  blur-[111px] transform -rotate-90" />


      {/* CTA Buttons */}

      <div className="mt-6 flex gap-4">

        <button className="flex items-center gap-2 bg-[#29AB87] text-white font-medium text-base px-6 py-2 rounded-full">
          Join Now <ArrowRight className="w-5 h-5 " />
        </button>
        <button className="flex items-center gap-2 border border-white text-white font-medium text-base px-6 py-2 rounded-full">
          Know More <ArrowRight className="w-5 h-5 " />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="w-[1106px] absolute bottom-[110px]  h-[1px] rotate-180 bg-gradient-to-r from-[#29AB87] via-[#FFFFFF] to-[#5CB16D]" />


      {/* <div className="absolute left-[80px] bottom-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" />
<div className="absolute left-[80px] top-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" /> */}


      <div className="absolute bottom-[70px] flex gap-6 text-white text-lg font-medium">

        {[
          "1.0",
          "Crisis",
          "Rebuild",
          "Relaunch",
          "Future"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span>{item}</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        ))}
      </div>
    </section>
  );
}
