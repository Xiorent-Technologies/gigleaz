import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Beginning = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden overflow-x-hidden">
      {/* Background blurred ellipses */}
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] right-[50px] top-[-100px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] left-[50px] top-[1500px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] right-[50px] top-[2000px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] left-[50px] top-[2700px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] right-[50px] top-[3200px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] left-[50px] top-[4000px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />
      <div id="blurred-ellipse" className="absolute w-[111px] h-[1435px] right-[50px] top-[4700px] rotate-[75deg] bg-[#29AB87] blur-[111px] hidden lg:block" />

      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        
        {/* A Bold Start */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Beginning.png"
                  alt="The Beginning - Gigleaz founding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                A Bold Start
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                In October 2023, entrepreneur Ravichandra Reddy founded Gigleaz with a unique dual model: an institute (Gigleaz Proprietor) to train fresh talent for 20–25 days, and Gigleaz Private Limited, a corporate wing to absorb qualified trainees as Software Analysts (Trainees).
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                The concept took off. Candidates paid fees between ₹1 lakh and ₹5 lakh, and after six months of training, successful ones secured full-time jobs.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Gigleaz quickly expanded — opening its first office at Knowledge City near T-Hub in Hyderabad, launching a Cycle Hackathon in January 2024, and establishing branches in USA, Australia, Singapore, and Sri Lanka.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Loopholes and Exploitation */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Explo.png"
                  alt="The Exploitation - System compromised"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                The Loopholes and Exploitation
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                By March 2024, Gigleaz looked unstoppable. But cracks were already forming. When Ravichandra resigned as CEO to contest elections, consultants stepped in. By April 2024, Gigleaz had 638 employees and launched Gigarcan, an EdTech product.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                But loopholes were exploited:
              </p>
              <ul className="text-lg sm:text-xl text-gray-300 space-y-2 mb-6 sm:mb-8">
                <li>• Consultants allegedly sold fake backdoor offers through Gigarcan.</li>
                <li>• 700 profiles were created despite only 638 official employees.</li>
                <li>• Payments went to just 80, leaving many unpaid.</li>
                <li>• 200 students were falsely onboarded with manipulated promises.</li>
              </ul>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-semibold">
                The system was compromised from within.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Fallout and Terminations */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Law.png"
                  alt="The Conflict & Terminations - Legal battle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                The Fallout and Terminations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                In June, Ravichandra returned to confront the rot. On June 24, 2024, he terminated 255 employees linked to fraudulent hiring. Another 200 terminations followed on July 2, 2024.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                The backlash was swift. That same day, a group led by Jagadeesh, Shivashankar Reddy, Sujit, and Gowtham stormed his residence demanding reinstatement. On July 9, another attack followed — even bouncers hired for security were compromised.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Consultants filed false cases, leading to media trial and reputation damage. 600+ trainees were suspended from Gigleaz, with only 38 students remaining loyal.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Kidnapping */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Kidnapping.png"
                  alt="The Kidnapping - Darkest day"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                The Kidnapping
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                The crisis spiraled when Ravichandra was kidnapped by the same group. Their demands: transfer Gigleaz's ownership and pay ₹12 crore in cash.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                He was rescued with the help of his father, but his mother's complaint at Jubilee Hills Police Station was allegedly suppressed by corruption.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-semibold">
                The betrayal extended beyond employees — into law enforcement.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Pause */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Pause.png"
                  alt="The Pause - Operations suspended"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                The Pause – July 18, 2024
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Facing life threats, systemic sabotage, and police pressure, Ravichandra made the hardest choice. On July 18, 2024, Gigleaz paused operations.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                The shutdown wasn't due to cheating the public, but to a toxic mix of false narratives, organized sabotage, and corruption.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                All operations were suspended, with Ravichandra's public apology marking the official closure of Gigleaz.
              </p>
            </div>
          </div>
        </motion.section>

        {/* From Company to Product */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Shift.png"
                  alt="The Shift - From setback to rebuild"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                From Company to Product
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Instead of letting the brand die, Ravichandra transformed it. Gigleaz ceased as a company and was rebuilt as a product under a U.S.-based EdTech ecosystem, with stronger governance and a focus on transparency.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                A legal team was formed to protect the truth, with 38 loyal students and 10 new members planning Gigleaz 2.0 operations.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                The shift represented not just a comeback, but a complete transformation of the business model.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Comeback – Gigleaz 2.0 */}
        <motion.section 
          className="mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-full">
                <img
                  src="/images/Comeback.png"
                  alt="The Comeback - Gigleaz 2.0"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#29AB87]">
                The Comeback – Gigleaz 2.0
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                On November 18, 2025, Gigleaz will relaunch as the world's first Learn & Earn OTT product, enabling users to:
              </p>
              <ul className="text-lg sm:text-xl text-gray-300 space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <span className="text-[#29AB87] mr-3">🎓</span>
                  Learn through courses and masterclasses.
                </li>
                <li className="flex items-start">
                  <span className="text-[#29AB87] mr-3">🎥</span>
                  Share via Shorts and Reels.
                </li>
                <li className="flex items-start">
                  <span className="text-[#29AB87] mr-3">💰</span>
                  Earn with monetization tools for creators and trainers.
                </li>
              </ul>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Gigleaz 2.0 is not just a comeback; it's a statement that corruption carries a price, that learning can transform into earning worldwide, and that every setback can fuel a stronger return.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Mission Ahead */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#29AB87]/10 to-[#29AB87]/5 rounded-3xl p-8 sm:p-12 md:p-16 border border-[#29AB87]/20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white">
              The Mission Ahead
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              As Ravichandra puts it: <span className="text-[#29AB87] font-semibold">"We were stopped. We were tested. But we rise again."</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              For more details on the upcoming relaunch, explore the <Link to="/relaunch-timeline" className="text-[#29AB87] hover:text-[#4ade80] transition-colors underline cursor-pointer hover:no-underline relative z-10 inline-block">Timeline Page</Link>.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Beginning;
