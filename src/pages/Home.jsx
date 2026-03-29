import { useState, useEffect, useRef } from 'react'
import { ChevronRight, Sun, Zap, DollarSign, Shield, TrendingUp, Users, Award, Battery, Wrench, Building2, Home as HomeIcon, Car, GraduationCap, Star, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../components/GlassCard'

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const navigate = useNavigate()
  const [s1, v1] = useScrollReveal()
  const [s2, v2] = useScrollReveal()
  const [s3, v3] = useScrollReveal()
  const [s4, v4] = useScrollReveal()
  const [s5, v5] = useScrollReveal()
  const [s6, v6] = useScrollReveal()
  const [s7, v7] = useScrollReveal()

  const services = [
    { icon: HomeIcon, title: 'Residential Solar', desc: 'Complete home solar solutions starting at $99/month with 25-year warranty coverage.', link: '/residential' },
    { icon: Building2, title: 'Commercial Solar', desc: 'Large-scale EPC services for businesses in the PPL market with expert engineering.', link: '/commercial' },
    { icon: Car, title: 'Solar Carports', desc: 'Innovative carport solutions with EV charging for parking lots and industrial parks.', link: '/carports' },
    { icon: GraduationCap, title: 'Certification', desc: 'Solar Mason University certification program for aspiring solar professionals.', link: '/certification' },
    { icon: DollarSign, title: 'Financing', desc: 'Flexible lines of credit from $5K to $10M with same-day approval available.', link: '/line-of-credit' },
    { icon: Wrench, title: 'O&M Services', desc: 'Ongoing operations, maintenance, and remote monitoring for peak performance.', link: '/commercial' },
  ]

  const reasons = [
    { icon: Award, title: 'Veteran Owned', desc: 'Founded by U.S. Army Infantry veteran Noel Segui. Discipline, integrity, and excellence in every project.' },
    { icon: Shield, title: 'Expert Engineers', desc: 'Licensed professionals at the forefront of solar technology using the latest innovations.' },
    { icon: Battery, title: '25-Year Warranty', desc: 'All panels and inverters backed by minimum 25-year manufacturer warranty coverage.' },
    { icon: Zap, title: 'PPL Market Experts', desc: 'Deep expertise in Pennsylvania PPL utility markets, interconnection, and SREC programs.' },
    { icon: DollarSign, title: 'Financing Available', desc: 'From $99/month residential to $10M commercial lines of credit with flexible terms.' },
    { icon: TrendingUp, title: 'Full EPC Service', desc: 'Engineering, Procurement & Construction — we handle everything from design to commissioning.' },
  ]

  return (
    <div className="page-content">
      {/* === HERO === */}
      <section style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 80px)', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,112,162,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(78,205,196,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container animate-slide-up" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(78,205,196,0.1)', border: '1px solid rgba(78,205,196,0.2)', marginBottom: '20px', fontSize: '0.85rem', color: '#4ecdc4' }}>
            <Award size={14} /> Veteran Owned & Operated
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
            <span className="text-gradient">Engineering</span>{' | '}
            <span className="text-gradient">Procurement</span>{' | '}
            <span className="text-gradient">Construction</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', marginBottom: '12px', lineHeight: 1.6 }}>
            Premier solar energy EPC company based in Scranton, PA. From residential rooftops to commercial-scale systems, we deliver clean energy solutions with military precision.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'rgba(78,205,196,0.8)', marginBottom: '28px' }}>
            Residential solar starting at <strong style={{ color: '#4ecdc4', fontSize: '1.1rem' }}>$99/month</strong>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', padding: '14px 28px' }} onClick={() => navigate('/contact')}>
              Get Your Free Assessment <ArrowRight size={18} />
            </button>
            <a href="tel:5707976527" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', padding: '14px 28px', textDecoration: 'none' }}>
              <Phone size={18} /> 570-MY-SOLAR
            </a>
          </div>
        </div>
      </section>

      {/* === STATS === */}
      <section ref={s1} style={{ padding: '20px 0 40px', opacity: v1 ? 1 : 0, transform: v1 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            {[
              { val: 8, suf: '+', label: 'Years Experience' },
              { val: 500, suf: '+', label: 'Projects Completed' },
              { val: 99, suf: '%', label: 'Satisfaction Rate' },
              { val: 25, suf: 'yr', label: 'Warranty Coverage' },
            ].map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 12px', textAlign: 'center', borderRadius: '16px' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 800, color: '#4ecdc4' }}>
                  <AnimatedCounter end={s.val} suffix={s.suf} />
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SERVICES === */}
      <section ref={s2} style={{ padding: '40px 0', opacity: v2 ? 1 : 0, transform: v2 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>Our <span className="text-gradient">Services</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Comprehensive solar solutions from design to commissioning</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {services.map((s, i) => (
              <div key={i} className="glass-card" onClick={() => navigate(s.link)} style={{ padding: '24px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(59,112,162,0.2), rgba(78,205,196,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <s.icon size={22} style={{ color: '#4ecdc4' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section ref={s3} style={{ padding: '40px 0', opacity: v3 ? 1 : 0, transform: v3 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>Why Choose <span className="text-gradient">Solar Mason?</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Built on military discipline, powered by innovation</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {reasons.map((r, i) => (
              <GlassCard key={i} icon={r.icon} title={r.title} description={r.desc} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* === PARTNERS === */}
      <section ref={s4} style={{ padding: '40px 0', opacity: v4 ? 1 : 0, transform: v4 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>Trusted <span className="text-gradient">Partners</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '28px' }}>We work with industry-leading manufacturers</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { name: 'Enphase', desc: 'Microinverters', detail: '25-Year Warranty' },
              { name: 'SolarEdge', desc: 'Inverter Systems', detail: '12-Year Base Warranty' },
              { name: 'Q CELLS', desc: 'Solar Panels', detail: 'Premium Efficiency' },
            ].map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px 16px', borderRadius: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#3B70A2', marginBottom: '4px' }}>{p.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>{p.desc}</div>
                <div style={{ fontSize: '0.75rem', padding: '4px 12px', borderRadius: '100px', background: 'rgba(78,205,196,0.1)', color: '#4ecdc4', display: 'inline-block' }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section ref={s5} style={{ padding: '40px 0', opacity: v5 ? 1 : 0, transform: v5 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>How It <span className="text-gradient">Works</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { step: '01', title: 'Free Consultation', desc: 'We assess your energy needs, review your property, and design the optimal solar solution.' },
              { step: '02', title: 'Custom Engineering', desc: 'Our engineers create a precision design using advanced modeling software for maximum efficiency.' },
              { step: '03', title: 'Procurement', desc: 'We source premium equipment — Q-Cell panels, Enphase/SolarEdge inverters, and top-tier racking.' },
              { step: '04', title: 'Professional Installation', desc: 'NEPA-PRO handles expert construction with full OSHA compliance and quality assurance.' },
              { step: '05', title: 'Commissioning & Monitoring', desc: 'System activation, utility interconnection, and ongoing performance monitoring.' },
            ].map((s, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 24px', borderRadius: '16px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'rgba(59,112,162,0.3)', flexShrink: 0, width: '40px' }}>{s.step}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section ref={s6} style={{ padding: '40px 0', opacity: v6 ? 1 : 0, transform: v6 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>What Our <span className="text-gradient">Clients Say</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'Scranton Homeowner', text: 'Solar Mason made the entire process seamless. Our electric bill dropped by 85% in the first month!', stars: 5 },
              { name: 'Local Business Owner', text: 'The commercial installation was completed on time and under budget. Professional team from start to finish.', stars: 5 },
              { name: 'Property Developer', text: 'Their financing options and engineering expertise made our multi-site project possible. Highly recommend.', stars: 5 },
            ].map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px', borderRadius: '20px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                  {Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={16} fill="#4ecdc4" stroke="#4ecdc4" />)}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '12px', fontStyle: 'italic' }}"{t.text}"</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section ref={s7} style={{ padding: '40px 0 120px', opacity: v7 ? 1 : 0, transform: v7 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '40px 24px', borderRadius: '24px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,112,162,0.1), rgba(78,205,196,0.08))', borderColor: 'rgba(78,205,196,0.2)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Ready to Go <span className="text-gradient">Solar?</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto 8px', lineHeight: 1.6 }}>
              Join hundreds of Pennsylvania homeowners and businesses who trust Solar Mason for their clean energy needs.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
              {['Free Site Assessment', 'Custom Design', 'Financing Available', 'Veteran Owned'].map((t, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#4ecdc4' }}>
                  <CheckCircle2 size={14} /> {t}
                </span>
              ))}
            </div>
            <button className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 32px' }} onClick={() => navigate('/contact')}>
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
</button>
          </div>
        </div>
      </section>
    </div>
  )
}
