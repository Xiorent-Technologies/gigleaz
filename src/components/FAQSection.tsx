import { motion } from "framer-motion";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why did Gigleaz stop in 2024?",
      answer: "Gigleaz paused on July 18, 2024 due to corruption, internal sabotage, and threats, not because of cheating the public."
    },
    {
      question: "Did Gigleaz commit fraud or crime?",
      answer: "No — all news articles alleging fraud were false, paid, and without evidence; we are taking legal action for defamation."
    },
    {
      question: "Why was the CEO kidnapped?",
      answer: "Founder Ravichandra Reddy was kidnapped by a group exploiting Gigleaz for personal gain; he was rescued, and cases are being pursued."
    },
    {
      question: "What role did journalists play?",
      answer: "Certain journalists acted as mediums for misinformation, publishing accusations without proof — but they are not judges."
    },
    {
      question: "Was Gigleaz shut down by officials?",
      answer: "Yes, the pause came under police pressure and systemic corruption, not by voluntary closure or cheating."
    },
    {
      question: "What happened to employees and students?",
      answer: "Illegal hires and fake offers were created by consultants, not Gigleaz; the genuine workforce and students were always honored."
    },
    {
      question: "What is Gigleaz today?",
      answer: "Gigleaz is no longer a company — it has been rebuilt as a product inside a US-based EdTech ecosystem."
    },
    {
      question: "What is the vision of Gigleaz 2.0?",
      answer: "To become the world's first Learn & Earn OTT platform, where every learner gains skills, community, and income opportunities."
    },
    {
      question: "When is the relaunch?",
      answer: "📅 November 18, 2025 – Gigleaz 2.0 official comeback."
    },
    {
      question: "Do you still believe in justice?",
      answer: "Yes — Justice will be given, truth will prevail, and we trust the court to remove defamatory articles."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative bg-black min-h-screen overflow-x-hidden">
      {/* Background blurred ellipses */}
      <div className="absolute w-[111px] h-[1435px] right-[50px] top-[-100px] rotate-[75deg] bg-[#29AB87] blur-[111px] opacity-30 hidden lg:block" />
      <div className="absolute w-[111px] h-[1435px] left-[50px] top-[800px] rotate-[75deg] bg-[#29AB87] blur-[111px] opacity-30 hidden lg:block" />

      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-white">
            FAQ – <span className="text-[#29AB87]">Gigleaz Backstory</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about Gigleaz's journey, challenges, and comeback.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6 w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#29AB87]/5 to-[#29AB87]/10 rounded-2xl border border-[#29AB87]/20 overflow-hidden w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left flex items-start sm:items-center justify-between hover:bg-[#29AB87]/10 transition-all duration-300 group"
              >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white pr-2 sm:pr-4 group-hover:text-[#29AB87] transition-colors duration-300 flex-1 min-w-0">
                  Q{index + 1}. {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-[#29AB87] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 w-full">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed break-words">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#29AB87]/10 to-[#29AB87]/5 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-[#29AB87]/20 w-full max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Still Have Questions?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Join our community and stay updated with the latest developments.
            </p>
            <button className="bg-[#29AB87] hover:bg-[#4ade80] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Join Our Community
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
