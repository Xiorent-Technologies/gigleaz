import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SecondComponent() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full max-w-7xl px-6 pb-20">
      {/* Blurred Ellipse */}
      <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] right-[100px] top-[-80px] rotate-[75deg] bg-[#29AB87] blur-[111px] transform"
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl mt-20 z-10 items-center">
        {/* Left Side: Image */}
        <div className="col-span-5 flex justify-center">
          <img
            src="/assets/home/image_and_frame.png"
            alt="Visual"
            className="w-full max-w-[500px] object-contain"
          />
        </div>

        {/* Right Side: Text */}
        <div className="col-span-7 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Our story
          </h2>

          {/* Main Text */}
          <p className="text-base md:text-lg text-white leading-relaxed">
“2024 tested us in ways we never imagined. Allegations and crisis forced us to hit pause, bringing our journey to a sudden halt. But instead of giving in, we chose resilience—we chose to reflect, learn, and rebuild stronger than before. Today, Gigleaz returns with a renewed vision and a bold mission: to rise beyond the setbacks and transform into a global Learn & Earn hub that empowers people worldwide.”          </p>
            <p className="text-base md:text-lg text-white leading-relaxed">
“Gigleaz is no longer just a platform—it’s a movement. We’re building a space where learning meets opportunity, and every skill gained has the power to unlock real growth.”
          </p>
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 w-fit mt-4 px-6 py-2 bg-[#29AB87] text-white font-semibold rounded-md"
          >
            Learn More <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
