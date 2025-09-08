import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const comingSoonLinks = [
    { name: "Investors" },
    { name: "Careers" },
    { name: "Press" },
  ];

  // sprinkle animation variants
  const sparkleVariants = {
    initial: { opacity: 0, y: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      y: [0, -20 - i * 5],
      x: [0, (i % 2 === 0 ? -1 : 1) * (10 + i * 2)],
      scale: [0, 1, 0],
      transition: { duration: 1.2, delay: i * 0.1, repeat: Infinity },
    }),
  };

  return (
    <footer className="bg-[#15251C] text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Left Side - Logo and Navigation */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <img src="/logo.png" alt="Gigleaz Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Gigleaz</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 text-white relative">
              {comingSoonLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="cursor-pointer hover:text-[#29AB87] transition-colors duration-300">
                    {link.name}
                  </span>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hovered === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#29AB87] text-white text-xs rounded-full shadow-lg whitespace-nowrap"
                      >
                        ✨ Coming Soon ✨
                        {/* Sprinkles */}
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.span
                            key={i}
                            custom={i}
                            variants={sparkleVariants}
                            initial="initial"
                            animate="animate"
                            className="absolute w-1.5 h-1.5 bg-white rounded-full"
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Newsletter Subscription */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg font-medium">
              Get the freshest news from us
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address..."
                className="px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#29AB87] w-full sm:w-80"
              />
              <button className="bg-[#29AB87] hover:bg-[#1e8b6b] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-600 mb-8"></div>

        {/* Bottom Section - Legal Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-gray-400 text-sm">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms & Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Accessibility
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Legal
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400">
            Design with love © Gigleaz 2025. All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
