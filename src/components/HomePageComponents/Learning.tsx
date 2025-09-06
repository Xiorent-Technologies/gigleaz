// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

export default function Learning() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full max-w-7xl px-6 pb-20">
      {/* Blurred Ellipse */}
      <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] right-[100px] top-[100px] rotate-[75deg] bg-[#29AB87] blur-[111px] transform"
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 w-full max-w-7xl mt-20 z-10 items-center">
        {/* Left Side: Text */}
        <div className="col-span-6 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-3xl text-primary md:text-6xl font-bold  leading-tight">
            Learning
          </h2>
          <h3 className="text-2xl md:text-5xl font-light text-white leading-tight">
is no longer a <span className="text-primary">cost</span>
          </h3>
          <h3 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            -it’s an <span className="text-primary">income</span>.
          </h3>

          <ul className="list-disc list-inside text-base md:text-xl text-white leading-relaxed mt-4 space-y-8">
            <li>Learn from global creators – Access courses and insights from experts around the world.</li>
            <li>Earn by teaching & sharing – Turn your knowledge into real opportunities.</li>
            <li>Join a worldwide learner network – Connect, collaborate, and grow with learners everywhere.</li>
          </ul>

        </div>

        {/* Right Side: Image */}
        <div className="col-span-6 flex justify-center">
          <img
            src="/assets/home/hand_holding_brain.png"
            alt="Visual"
            className="w-full  object-contain"
          />
        </div>
      </div>
    </section>
  );
}
