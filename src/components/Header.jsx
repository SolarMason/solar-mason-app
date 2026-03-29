import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      setIsScrolled(e.target.scrollLeft > 0 || e.target.scrollTop > 10)
    }

    const mainElement = document.querySelector('main')
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll)
      return () => mainElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`glass-nav fixed top-0 left-0 right-0 z-20 transition-all duration-300 safe-top safe-horizontal ${
        isScrolled ? 'bg-opacity-95' : 'bg-opacity-80'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
      }}
    >
      <div className="container flex-between py-4">
        {/* Logo */}
        <div className="flex-center gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent"
          >
            <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1" />
            <g transform="translate(20, 20)">
              {/* Sun/Solar symbol */}
              <circle cx="0" cy="0" r="6" fill="#4ecdc4" />
              <g stroke="#4ecdc4" strokeWidth="1.5" strokeLinecap="round">
                <line x1="0" y1="-12" x2="0" y2="-14" />
                <line x1="8.49" y1="-8.49" x2="9.9" y2="-9.9" />
                <line x1="12" y1="0" x2="14" y2="0" />
                <line x1="8.49" y1="8.49" x2="9.9" y2="9.9" />
                <line x1="0" y1="12" x2="0" y2="14" />
                <line x1="-8.49" y1="8.49" x2="-9.9" y2="9.9" />
                <line x1="-12" y1="0" x2="-14" y2="0" />
                <line x1="-8.49" y1="-8.49" x2="-9.9" y2="-9.9" />
              </g>
            </g>
          </svg>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-tight text-white">
              SOLAR
            </h1>
            <span className="text-xs font-semibold text-accent tracking-widest">
              MASON
            </span>
          </div>
        </div>

        {/* Call Button */}
        <a
          href="tel:+15707549900"
          className="glass-button flex-center gap-2 hover:glow-accent"
        >
          <Phone size={18} />
          <span className="hidden sm:inline text-sm">+1 (570) 754-9900</span>
        </a>
      </div>
    </header>
  )
}
