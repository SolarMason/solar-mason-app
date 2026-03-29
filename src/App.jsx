import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import SplashScreen from './components/SplashScreen'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'
import About from './pages/About'
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import Certification from './pages/Certification'
import RealEstate from './pages/RealEstate'
import SolarPanels from './pages/SolarPanels'
import LineOfCredit from './pages/LineOfCredit'
import Carports from './pages/Carports'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Financing from './pages/Financing'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-container w-full h-screen overflow-hidden flex flex-col bg-gradient-dark relative">
      <AnimatedBackground />

      {showSplash && <SplashScreen />}

      <div className="relative z-10 flex flex-col h-full">
        <Header />

        <main className="flex-1 overflow-y-auto pb-24 page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/solar-panels" element={<SolarPanels />} />
            <Route path="/line-of-credit" element={<LineOfCredit />} />
            <Route path="/carports" element={<Carports />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/financing" element={<Financing />} />
          </Routes>
        </main>

        <Navigation />
      </div>
    </div>
  )
}

export default App
