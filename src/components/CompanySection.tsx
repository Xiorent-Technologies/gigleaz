// CompanySection.jsx
export default function CompanySection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:max-w-7xl py-12">
      {/* Image container */}
      <div
        className="relative h-[500px] sm:h-[600px] w-full rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/about/lastimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        {/* Text content pinned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 pb-10 flex flex-col items-start">
          <h1 className="text-6xl sm:text-5xl font-bold text-white mb-3" style={{fontSize: '65px'}}>
            Gigleaz is No Longer a Company
          </h1>
          <p className="text-base sm:text-lg text-white max-w-4xl">
            It’s now a product, a platform, and a movement — ready to redefine
            global EdTech.
          </p>
        </div>
      </div>
    </section>
  );
}
