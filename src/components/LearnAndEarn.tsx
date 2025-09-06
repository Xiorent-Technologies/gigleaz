// LearnAndEarn.jsx
import { FaBolt } from "react-icons/fa";
export default function LearnAndEarn() {
  return (
    <section className="py-16 px-6 sm:px-12 max-w-7xl text-white ">
      <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] right-[200px] top-[1850px] rotate-[70deg] bg-primary blur-[111px] transform"
      />


      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/about/fourimage.png"
          className="rounded-lg"
          alt="Learn & Earn"
        />
        <div>
          <div className="inline-flex items-left bg-[#f5f5f4] rounded-full px-4 py-1 mb-4">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#cfede1] mr-2">
              <FaBolt className="text-primary text-xs" />
            </div>
            <span className="text-gray-900 font-medium">Learn & Earn</span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Building the Learn & Earn Economy
          </h2>
          <p className="text-gray-300" style={{fontSize: '21px'}}>
           More than a relaunch — a global movement where learners, creators, and educators shape the future of knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}
