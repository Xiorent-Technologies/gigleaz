import { motion } from "framer-motion";

const RelaunchHeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-[728px] px-6 bg-[black] shadow-lg overflow-hidden">
      {/* Blurred Ellipse */}
      <div className="absolute left-[80px] top-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" />
      <div className="absolute left-[135px] top-[140px] w-[119px] h-[2px]  bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Text */}
            <div className="text-6xl md:text-8xl font-bold uppercase leading-tight">
              <span className="text-white">EVERY</span>
              <br />
              <span className="text-[#FFD66B]">PAUSE</span>
              <br />
              <span className="text-white">HAS A</span>
              <br />
              <span className="text-[#29AB87] text-7xl md:text-9xl">PURPOSE.</span>
            </div>

            {/* Subtext */}
            <motion.p
              className="text-white text-xl md:text-2xl font-light mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              This is our comeback.
            </motion.p>

            {/* Progression Text */}
            <motion.p
              className="text-white text-lg md:text-xl font-light mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              From IT roots → Crisis → Reinvention → Relaunch.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side - Glowing Hand Image */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/assets/herro-img.png"
              alt="Glowing hand with purpose"
              className="w-full h-auto max-w-lg relative z-10"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.3))'
              }}
            />
          </motion.div>
        </div>
      </div>

      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px]  bg-[#29AB87]  blur-[111px] transform -rotate-90" />
    </section>
  );
};

export default RelaunchHeroSection;
