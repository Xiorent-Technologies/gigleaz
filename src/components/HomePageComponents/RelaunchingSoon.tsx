import { useEffect, useState } from "react";
// import { ArrowRight, Sparkles } from "lucide-react";

const FlipDigit = ({ digit }: { digit: string | number }) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [nextDigit, setNextDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== currentDigit) {
      setNextDigit(digit);
      setIsFlipping(true);
      
      const timer = setTimeout(() => {
        setCurrentDigit(digit);
        setIsFlipping(false);
      }, 500); // Half of the animation duration
      
      return () => clearTimeout(timer);
    }
  }, [digit, currentDigit]);

  return (
    <div className="relative w-16 h-28 md:w-20 md:h-36 perspective-1000">
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-600 transform-style-preserve-3d ${
          isFlipping ? 'animate-flip' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front face */}
        <div 
          className="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[#1D5C48] to-[#3b37371a] border border-white rounded-md backdrop-blur-lg backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-white text-4xl md:text-6xl font-poppins">
            {currentDigit}
          </span>
        </div>
        
        {/* Back face */}
        <div 
          className="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[#1D5C48] to-[#3b37371a] border border-white rounded-md backdrop-blur-lg backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateX(180deg)'
          }}
        >
          <span className="text-white text-4xl md:text-6xl font-poppins">
            {nextDigit}
          </span>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .animate-flip {
          animation: flip 0.6s ease-in-out;
        }
        
        @keyframes flip {
          0% {
            transform: rotateX(0deg);
          }
          50% {
            transform: rotateX(-90deg);
          }
          100% {
            transform: rotateX(-180deg);
          }
        }
      `}</style>
    </div>
  );
};

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 py-16 gap-10 text-center">
      {/* Subheading */}
      <p className="text-white z-10 font-poppins font-bold text-xl">
        Relaunching Soon
      </p>

      {/* Heading */}
      <h1 className="text-4xl z-10 md:text-5xl font-bold font-poppins bg-gradient-to-r from-white to-[#C7DDD6] bg-clip-text text-transparent">
        Stronger, Smarter, Bolder
      </h1>

      {/* Counter */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex gap-2">
              {String(value).padStart(2, "0").split("").map((digit, index) => (
                <FlipDigit
                  key={`${label}-${index}`}
                  digit={digit}
                  // digitKey={`${label}-${index}`}
                />
              ))}
            </div>
            <p className="text-white font-poppins text-sm md:text-lg mt-2 capitalize">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-white font-poppins text-base mt-6">
        Global Relaunch Event. Streamed Live.
      </p>

      {/* CTA */}
      <button className="mt-2 px-6 py-2 bg-[#29AB87] rounded-full flex items-center gap-2 text-white font-semibold font-poppins">
        Join Us Now
        <span>➔</span>
      </button>
    </div>
  );
};

export default Countdown;