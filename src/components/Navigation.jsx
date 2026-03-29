import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Home,
  Zap,
  Info,
  CreditCard,
  MoreHorizontal,
  Zap as Zap2,
  Landmark,
} from 'lucide-react'

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('home')
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const [showFinanceMenu, setShowFinanceMenu] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path, tab) => {
    navigate(path)
    setActiveTab(tab)
    setShowServicesMenu(false)
    setShowFinanceMenu(false)
    setShowMoreMenu(false)
  }

  const tabItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'services', label: 'Services', icon: Zap, hasMenu: true },
    { id: 'about', label: 'About', icon: Info, path: '/about' },
    { id: 'finance', label: 'Finance', icon: CreditCard, hasMenu: true },
    { id: 'more', label: 'More', icon: MoreHorizontal, hasMenu: true },
  ]

  return (
    <>
      {/* Overlay for modals */}
      {(showServicesMenu || showFinanceMenu || showMoreMenu) && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
          onClick={() => {
            setShowServicesMenu(false)
            setShowFinanceMenu(false)
            setShowMoreMenu(false)
          }}
        />
      )}

      {/* Services Modal */}
      {showServicesMenu && (
        <div className="fixed bottom-32 left-4 right-4 z-40 animate-slide-up">
          <div className="glass-card border-accent border-opacity-30">
            <h3 className="text-lg font-bold text-accent mb-4">Services</h3>
            <div className="space-y-3">
              <button
                onClick={() =>
                  handleNavigation('/residential', 'services-residential')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Residential</div>
                <div className="text-sm text-muted">Home solar solutions</div>
              </button>
              <button
                onClick={() =>
                  handleNavigation('/commercial', 'services-commercial')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Commercial</div>
                <div className="text-sm text-muted">Business solar systems</div>
              </button>
              <button
                onClick={() => handleNavigation('/carports', 'services-carports')}
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Solar Carports</div>
                <div className="text-sm text-muted">Parking with power</div>
              </button>
              <button
                onClick={() =>
                  handleNavigation('/solar-panels', 'services-panels')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Q-Cell Panels</div>
                <div className="text-sm text-muted">Premium solar modules</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finance Modal */}
      {showFinanceMenu && (
        <div className="fixed bottom-32 left-4 right-4 z-40 animate-slide-up">
          <div className="glass-card border-accent border-opacity-30">
            <h3 className="text-lg font-bold text-accent mb-4">Financing</h3>
            <div className="space-y-3">
              <button
                onClick={() =>
                  handleNavigation('/financing', 'finance-residential')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">
                  Residential Finance
                </div>
                <div className="text-sm text-muted">Home financing options</div>
              </button>
              <button
                onClick={() =>
                  handleNavigation('/line-of-credit', 'finance-loc')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Line of Credit</div>
                <div className="text-sm text-muted">Flexible financing</div>
              </button>
              <button
                onClick={() =>
                  handleNavigation('/real-estate', 'finance-realstate')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Real Estate</div>
                <div className="text-sm text-muted">Property value boost</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* More Modal */}
      {showMoreMenu && (
        <div className="fixed bottom-32 left-4 right-4 z-40 animate-slide-up">
          <div className="glass-card border-accent border-opacity-30">
            <h3 className="text-lg font-bold text-accent mb-4">More</h3>
            <div className="space-y-3">
              <button
                onClick={() =>
                  handleNavigation('/certification', 'more-cert')
                }
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Certifications</div>
                <div className="text-sm text-muted">Industry credentials</div>
              </button>
              <button
                onClick={() => handleNavigation('/faq', 'more-faq')}
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">FAQ</div>
                <div className="text-sm text-muted">Common questions</div>
              </button>
              <button
                onClick={() => handleNavigation('/contact', 'more-contact')}
                className="w-full text-left p-3 rounded-lg bg-accent bg-opacity-10 hover:bg-opacity-20 transition-all"
              >
                <div className="font-semibold text-white">Contact</div>
                <div className="text-sm text-muted">Get in touch</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Tab Bar */}
      <nav
        className="glass-nav fixed bottom-0 left-0 right-0 z-20 border-t safe-bottom safe-horizontal"
        style={{
          paddingBottom: `max(1rem, env(safe-area-inset-bottom))`,
        }}
      >
        <div className="container flex-between py-2">
          {tabItems.map((item) => {
            const Icon = item.icon
            const isActive =
              activeTab === item.id || activeTab.startsWith(item.id)

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.hasMenu) {
                    if (item.id === 'services') {
                      setShowServicesMenu(!showServicesMenu)
                      setShowFinanceMenu(false)
                      setShowMoreMenu(false)
                    } else if (item.id === 'finance') {
                      setShowFinanceMenu(!showFinanceMenu)
                      setShowServicesMenu(false)
                      setShowMoreMenu(false)
                    } else if (item.id === 'more') {
                      setShowMoreMenu(!showMoreMenu)
                      setShowServicesMenu(false)
                      setShowFinanceMenu(false)
                    }
                  } else {
                    handleNavigation(item.path, item.id)
                  }
                }}
                className={`flex flex-col items-center justify-center py-3 px-4 rounded-xl transition-all duration-300 relative group ${
                  isActive
                    ? 'text-accent animate-glow'
                    : 'text-gray-400 hover:text-accent'
                }`}
              >
                <Icon
                  size={24}
                  className={`mb-1 transition-transform ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                <span className="text-xs font-semibold whitespace-nowrap">
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-8 bg-gradient-accent rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
py-3 px-4 rounded-xl transition-all duration-300 relative group ${
                  isActive
                    ? 'text-accent animate-glow'
                    : 'text-gray-400 hover:text-accent'
                }`}
              >
                <Icon
                  size={24}
                  className={`mb-1 transition-transform ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                <span className="text-xs font-semibold whitespace-nowrap">
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-8 bg-gradient-accent rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
