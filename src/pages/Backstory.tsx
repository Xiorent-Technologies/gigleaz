import { Link } from "react-router-dom";
import Beginning from "./Beginning";

const Backstory = () => {
  return (
    <>
    <div id="blurred-ellipse3" className="absolute w-[111px] h-[1400px] z-10 top-[-150px] rotate-[75deg] bg-[#29AB87]  blur-[111px] transform "
    />
    <div className="min-h-screen bg-black  relative flex items-center">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950 opacity-80"></div> */}
      {/* <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] top-[-150px]  bg-[#29AB87]  blur-[200px]  -rotate-90"
      /> */}

    
      {/* Blurred Ellipse */}
      {/* <div className="absolute left-[80px] top-[140px] w-[226px] h-[2px] rotate-90 bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" /> */}
      {/* <div className="absolute left-[135px] top-[140px] w-[119px] h-[2px] bg-gradient-to-r from-[#090C17] via-[#29AB87] to-[#090C17]" /> */}

      {/* Decorative dots */}
      <div className="absolute inset-0 ">
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

      <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 md:mb-16 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-10">
              The story of Gigleaz — a journey of growth, conflict, betrayal,
              and rebirth into the world's first Learn & Earn OTT.
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start sm:items-center">
              <div className="text-gray-300 text-lg sm:text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as learner
              </div>
              <div className="text-gray-300 text-lg sm:text-xl hidden sm:block">|</div>
              <div className="text-gray-300 text-lg sm:text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as Creator
              </div>
              <div className="text-gray-300 text-lg sm:text-xl hidden sm:block">|</div>
              <div className="text-gray-300 text-lg sm:text-xl hover:text-[#29AB87] transition-colors cursor-pointer">
                Join as Trainee
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <Link
                to="/"
                className="inline-flex items-center bg-[#29AB87] hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Join Us Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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
