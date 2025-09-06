import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div className="relative min-h-screen">
              {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b] via-[#065f46] to-[#064e3b]" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow Effect - Beam like color */}
        <div className="absolute inset-0 bg-gradient-radial from-green-300/40 via-green-400/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-200/10 to-transparent" />

                  {/* Crosshair top-left */}
          <div className="absolute top-16 left-16 w-20 h-20 border-l-2 border-t-2 border-green-300 opacity-60"></div>

          {/* Crosshair bottom-right */}
          <div className="absolute bottom-16 right-16 w-20 h-20 border-r-2 border-b-2 border-green-300 opacity-60"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Welcome Badge */}
        <div className="mb-12">
          <div className="bg-green-800 border border-green-400 rounded-full px-8 py-3 text-white text-sm font-medium inline-flex items-center shadow-lg">
            <span className="text-green-300 mr-2">⭐</span>
            Welcome to the Gigleaz 2.0
          </div>
        </div>

        {/* Main Headlines */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white uppercase leading-none mb-8 tracking-tight">
            STOPPED. QUESTIONED. REBUILT.
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tight">
            <span className="text-white">NOW, WE'RE </span>
            <span className="text-yellow-400">BACK</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-white italic underline decoration-green-400 underline-offset-4">
            *Gigleaz 2.0 – The World's First Learn & Earn OTT
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg">
            Join Now →
          </button>
          <button className="bg-transparent border-2 border-green-400 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-green-900 transition-colors">
            Know more →
          </button>
        </div>
      </div>

      {/* Timeline Footer */}
      <Timeline />
    </div>
  )
}

export default Home
