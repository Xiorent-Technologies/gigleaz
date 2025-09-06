import { motion } from "framer-motion";
import { timelineEvents } from "../data/timelinedata";

const TimelineSection = () => {

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-black via-[#0a1a1a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
             
              {/* Image - First on left for even indices, second on right for odd indices */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={event.image}
                    alt={`${event.year} - ${event.title}`}
                    className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(41, 171, 135, 0.3))'
                    }}
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#29AB87] to-transparent opacity-20 blur-xl -z-10"></div>
                </motion.div>
              </div>

              {/* Content - Second on right for even indices, first on left for odd indices */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {event.year}: {event.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-[#29AB87] font-semibold mb-4">
                    {event.subtitle}
                  </h3>
                </div>

                <div className="space-y-3">
                  {event.description.map((point, pointIndex) => (
                    <motion.p
                      key={pointIndex}
                      className="text-white text-lg leading-relaxed flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: pointIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-[#29AB87] text-xl font-bold mt-1">•</span>
                      {point}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  className=" bg-opacity-20 p-4 rounded-r-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white font-semibold text-lg">
                    {event.milestone}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
          
        </div>  
      </div>
    </div>
  );
};

export default TimelineSection;
