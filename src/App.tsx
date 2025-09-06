import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Backstory from './pages/Backstory'
import RelaunchTimeline from './pages/RelaunchTimeline'
import LiquidCursor from './components/LiquidCursor'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#064e3b] via-[#065f46] to-[#064e3b] relative">
        <LiquidCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/backstory" element={<Backstory />} />
          <Route path="/relaunch-timeline" element={<RelaunchTimeline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App