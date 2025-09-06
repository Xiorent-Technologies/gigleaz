// RiseAndPause.jsx
export default function RiseAndPause() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-[#0d1f16] to-[#0f3d2d] text-[#f5e3c3]">
      {/* Heading */}
      <div className="flex flex-col items-start text-center">
      <h2 className="text-6xl font-extrabold mb-4 text-white">The Rise and Pause</h2>

      {/* Subheading */}
      <p className="text-white mb-12 text-2xl text-left">
        From rapid IT growth to turbulence in 2024 — our journey faced hard truths, forcing us to pause and rethink.
      </p>

      {/* Content grid */}
      <div className="flex gap-4 md:gap-4 items-center justify-center">
        {/* Left card */}
        <div className="bg-transparent border p-2 border-[#dfd9c8] rounded-lg overflow-hidden">
            <img
              src="/about/meetingroom.png"
              alt="IT Company"
              className="w-full h-70 object-cover"
          />
          <p className="p-4 font-semibold text-lg">IT COMPANY</p>
        </div>

        {/* Arrow in center (only visible on md+ screens) */}
        <div className="hidden md:flex justify-center items-center">
            <span className="text-4xl font-bold">→</span>
        </div>

        {/* Right card */}
        <div className="bg-transparent border p-2 border-[#dfd9c8] rounded-lg overflow-hidden">
          <img
            src="/about/manwithpaper.png"
            alt="Pause 2024"
            className="w-full h-70 object-cover"
          />
          <p className="p-4 font-semibold text-lg">Pause 2024</p>
        </div>
      </div>
        </div>
    </section>
  );
}
