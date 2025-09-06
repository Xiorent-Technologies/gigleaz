import { Link } from "react-router-dom";
import Beginning from "./Beginning";

const Backstory = () => {
  return (
    <>
    
    <div className="min-h-screen bg-black overflow-hidden relative flex items-center">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950 opacity-80"></div> */}
      <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px]  bg-[#29AB87]  blur-[200px] transform -rotate-90"
        style={{ top: "-30px", rotate: "-25deg" }}
      />

      {/* Blurred Ellipse */}
      {/* <div className="absolute left-[80px] top-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" /> */}
      {/* <div className="absolute left-[135px] top-[140px] w-[119px] h-[2px] bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" /> */}

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
          ></div>
        ))}
      </div>

      {/* Hand image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-70 pointer-events-none">
        <img
          src="/images/Hand.png"
          alt="Digital hand"
          className="w-full h-full object-contain object-right-bottom max-w-[800px] ml-auto"
        />
      </div>

      <div className="relative z-10 py-20 px-12 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">From </span>
              <span className="text-[#29AB87]">IT</span>
              <span className="text-white">
                {" "}
                Roots to a<br />
                Global{" "}
              </span>
              <span className="text-[#29AB87]">EdTech</span>
              <span className="text-white"> Product</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              The story of Gigleaz — a journey of growth, conflict, betrayal,
              and rebirth into the world's first Learn & Earn OTT.
            </p>

            <div className="mt-12 flex flex-wrap gap-10 items-center">
              <div className="text-gray-300 text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as learner
              </div>
              <div className="text-gray-300 text-xl">|</div>
              <div className="text-gray-300 text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as Creator
              </div>
              <div className="text-gray-300 text-xl">|</div>
              <div className="text-gray-300 text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as Trainee
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center bg-[#29AB87] hover:bg-green-700 text-white px-10 py-4 rounded-full text-xl font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Join Us Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Beginning/>

    </>
  );
};

export default Backstory;
