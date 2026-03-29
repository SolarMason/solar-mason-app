import { useEffect, useState } from 'react'

const splashStyles = `
  @keyframes splash-fade-out {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.1);
    }
  }

  @keyframes loading-bar-animate {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .splash-container {
    animation: splash-fade-out 2s ease-out forwards;
  }

  .loading-bar {
    animation: loading-bar-animate 1.8s ease-out forwards;
  }
`

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <style>{splashStyles}</style>
      <div className="splash-container fixed inset-0 z-50 bg-gradient-dark flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="mb-12 relative">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Animated rays */}
            <g className="animate-spin" style={{ transformOrigin: '60px 60px' }}>
              <g opacity="0.8">
                <line
                  x1="60"
                  y1="10"
                  x2="60"
                  y2="25"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="97.5"
                  y1="22.5"
                  x2="88.5"
                  y2="31.5"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="110"
                  y1="60"
                  x2="95"
                  y2="60"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="97.5"
                  y1="97.5"
                  x2="88.5"
                  y2="88.5"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="60"
                  y1="110"
                  x2="60"
                  y2="95"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="22.5"
                  y1="97.5"
                  x2="31.5"
                  y2="88.5"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="60"
                  x2="25"
                  y2="60"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="22.5"
                  y1="22.5"
                  x2="31.5"
                  y2="31.5"
                  stroke="#4ecdc4"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* Center circle */}
            <circle cx="60" cy="60" r="24" fill="#4ecdc4" opacity="0.9" />
            <circle cx="60" cy="60" r="20" fill="#0a0f1a" />

            {/* Solar panel symbol inside circle */}
            <g transform="translate(60, 60)">
              <rect x="-10" y="-8" width="6" height="6" fill="#4ecdc4" opacity="0.7" />
              <rect x="4" y="-8" width="6" height="6" fill="#4ecdc4" opacity="0.7" />
              <rect x="-10" y="2" width="6" height="6" fill="#4ecdc4" opacity="0.7" />
              <rect x="4" y="2" width="6" height="6" fill="#4ecdc4" opacity="0.7" />
            </g>
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
          SOLAR MASON
        </h1>
        <p className="text-accent text-sm tracking-widest mb-12">
          Engineering • Procurement • Construction
        </p>

        {/* Loading bar */}
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="loading-bar h-full bg-gradient-primary rounded-full"
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>
    </>
  )
}
