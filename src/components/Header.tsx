import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3" onClick={closeMenu}>
          <img 
            src="/logo.png" 
            alt="Gigleaz" 
            className="h-8 sm:h-10 w-auto"
          />
          <span className="text-lg sm:text-xl font-bold text-white">Gigleaz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link to="/" className="text-white hover:text-green-300 transition-colors text-sm xl:text-base">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-green-300 transition-colors text-sm xl:text-base">
            About
          </Link>
          <Link to="/backstory" className="text-white hover:text-green-300 transition-colors text-sm xl:text-base">
            Backstory
          </Link>
          <Link to="/relaunch-timeline" className="text-white hover:text-green-300 transition-colors text-sm xl:text-base">
            Relaunch Timeline
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden lg:block bg-green-600 hover:bg-green-700 text-white px-4 xl:px-6 py-2 rounded-full font-medium transition-colors text-sm xl:text-base">
          Join Us Now 
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4 px-4 space-y-4">
          <Link 
            to="/" 
            className="text-white hover:text-green-300 transition-colors text-lg py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-green-300 transition-colors text-lg py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/backstory" 
            className="text-white hover:text-green-300 transition-colors text-lg py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            Backstory
          </Link>
          <Link 
            to="/relaunch-timeline" 
            className="text-white hover:text-green-300 transition-colors text-lg py-2 border-b border-gray-700"
            onClick={closeMenu}
          >
            Relaunch Timeline
          </Link>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors text-lg mt-4"
            onClick={closeMenu}
          >
            Join Us Now
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
