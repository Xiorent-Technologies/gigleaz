import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Gigleaz" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-white">Gigleaz</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-green-300 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-green-300 transition-colors">
            About
          </Link>
          <Link to="/backstory" className="text-white hover:text-green-300 transition-colors">
            Backstory
          </Link>
          <Link to="/relaunch-timeline" className="text-white hover:text-green-300 transition-colors">
            Relaunch Timeline
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
          Join Us Now 
        </button>
      </div>
    </header>
  )
}

export default Header
