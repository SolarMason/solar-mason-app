import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Residential', path: '/residential' },
    { label: 'Commercial', path: '/commercial' },
    { label: 'Carports', path: '/carports' },
    { label: 'Solar Panels', path: '/solar-panels' },
    { label: 'Financing', path: '/financing' },
    { label: 'FAQ', path: '/faq' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="glass-nav fixed bottom-0 left-0 right-0 z-20 safe-bottom safe-horizontal border-t border-white border-opacity-10">
      <div className="container flex-between py-4">
        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute bottom-full left-0 right-0 glass-nav border-t border-white border-opacity-10">
            <div className="container flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-muted hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
