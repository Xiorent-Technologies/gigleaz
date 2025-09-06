// RiseAndPause.jsx
export default function RiseAndPause() {
  return (
    <section className="py-16 px-6 max-w-7xl sm:px-12  text-[#f5e3c3]">
      {/* Heading */}

      <div
        id="blurred-ellipse"
        className="absolute w-[111px] h-[1435px] right-[700px] top-[500px] rotate-[82deg] bg-primary blur-[111px] transform"
      />


      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
          The Rise and Pause
        </h2>

        {/* Subheading */}
        <p className="text-white mb-12 text-xl md:text-2xl max-w-3xl">
          From rapid IT growth to turbulence in 2024 — our journey faced hard truths, forcing us to pause and rethink.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
        {/* Left Card */}
<div className="col-span-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-4 overflow-hidden">
          <img
            src="/about/meetingroom.png"
            alt="IT Company"
            className="w-full object-cover rounded"
          />
          <p className="p-4 font-semibold text-2xl  text-white">IT COMPANY</p>
        </div>

        {/* Arrow (center column) */}
        <div className="flex justify-center col-span-1 items-center">
          <span className="text-5xl md:text-6xl font-bold text-white">→</span>
        </div>

        {/* Right Card */}
<div className="col-span-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-4 overflow-hidden">
          <img
            src="/about/manwithpaper.png"
            alt="Pause 2024"
            className="w-full  object-cover rounded"
          />
          <p className="p-4 font-semibold text-2xl  text-white">Pause 2024</p>
        </div>
      </div>
    </section>
  );
}
