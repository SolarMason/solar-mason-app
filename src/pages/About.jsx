import { useState, useEffect, useRef } from 'react'
import { Award, Shield, Target, Heart, Users, Lightbulb, Zap, Building2, Wrench, BookOpen, Eye, Leaf, ChevronRight } from 'lucide-react'
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

export default function About() {
  const navigate = useNavigate()
  const [s1, v1] = useScrollReveal()
  const [s2, v2] = useScrollReveal()
  const [s3, v3] = useScrollReveal()
  const [s4, v4] = useScrollReveal()
  const [s5, v5] = useScrollReveal()
  const [s6, v6] = useScrollReveal()

  return (
    <div className="page-content">
      {/* Hero */}
      <section style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 80px)', paddingBottom: '40px' }}>
        <div className="container animate-slide-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(59,112,162,0.1)', border: '1px solid rgba(59,112,162,0.2)', marginBottom: '20px', fontSize: '0.85rem', color: '#3B70A2' }}>
            <Award size={14} /> Veteran Owned & Operated
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
            About <span className="text-gradient">Solar Mason</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.7 }}>
            A trusted partner and industry leader in solar energy. We are a premier engineering, procurement, and construction company based in Scranton, PA, specializing in solar installations for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section ref={s1} style={{ padding: '40px 0', opacity: v1 ? 1 : 0, transform: v1 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '32px 24px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(59,112,162,0.08), rgba(78,205,196,0.05))' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #3B70A2, #4ecdc4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={28} style={{ color: 'white' }} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Noel Segui</h2>
                <p style={{ fontSize: '0.85rem', color: '#4ecdc4' }}>Founder & CEO</p>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '16px', fontSize: '0.95rem' }}>
              Solar Mason was established by Noel Segui, a U.S. Army Infantry veteran who valiantly served in support of Operation Enduring Freedom from 2008 to 2016. Born and raised in the Bronx, New York, Noel's journey from the bustling streets of the Bronx to becoming a key figure in the energy sector is marked by dedication, hard work, and a relentless pursuit of knowledge.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              After his distinguished military service, Noel channeled the discipline and leadership skills he developed in the Army into building Solar Mason — a company that reflects his commitment to excellence, sustainability, and serving the community through clean energy innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={s2} style={{ padding: '40px 0', opacity: v2 ? 1 : 0, transform: v2 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '28px 24px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Target size={24} style={{ color: '#4ecdc4' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Our Mission</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                Grounded in sustainability, cost-efficiency, and innovation, our passion for clean energy and commitment to reducing carbon footprints drives us to provide high-quality solar energy systems — from small residential projects to large-scale utility installations.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '28px 24px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Eye size={24} style={{ color: '#3B70A2' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Our Vision</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                We aim to bring a solar panel manufacturing facility to Scranton within the next few years — offering locally-produced, high-quality panels while creating jobs and contributing to the American economy and energy independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section ref={s3} style={{ padding: '40px 0', opacity: v3 ? 1 : 0, transform: v3 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>What We <span className="text-gradient">Do</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Comprehensive EPC services from concept to completion</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {[
              { icon: Lightbulb, title: 'Engineering & Design', desc: 'Custom system design using advanced modeling software to maximize energy production and efficiency.' },
              { icon: Building2, title: 'Procurement', desc: 'We source premium equipment including Q-Cell panels, Enphase microinverters, and SolarEdge systems.' },
              { icon: Wrench, title: 'Construction', desc: 'Expert installation by NEPA-PRO with full OSHA compliance and rigorous quality standards.' },
              { icon: Zap, title: 'Operations & Maintenance', desc: 'Ongoing monitoring, performance optimization, and remote diagnostics to ensure peak output.' },
              { icon: BookOpen, title: 'Training & Certification', desc: 'Solar Mason University provides comprehensive certification programs for solar professionals.' },
              { icon: Eye, title: 'Inspection', desc: 'Thorough system inspections and commissioning to verify performance meets design specifications.' },
            ].map((s, i) => (
              <GlassCard key={i} icon={s.icon} title={s.title} description={s.desc} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={s4} style={{ padding: '40px 0', opacity: v4 ? 1 : 0, transform: v4 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Our <span className="text-gradient">Values</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            {[
              { icon: Lightbulb, title: 'Innovation', color: '#4ecdc4' },
              { icon: Leaf, title: 'Sustainability', color: '#6bde6b' },
              { icon: Award, title: 'Excellence', color: '#3B70A2' },
              { icon: Shield, title: 'Integrity', color: '#a88beb' },
              { icon: Users, title: 'Community', color: '#f5a623' },
              { icon: Heart, title: 'Safety', color: '#e74c6f' },
            ].map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px 16px', borderRadius: '18px', textAlign: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${v.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>{v.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={s5} style={{ padding: '40px 0', opacity: v5 ? 1 : 0, transform: v5 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '32px 24px', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Our <span className="text-gradient">Team</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>
              Our team of expert engineers is at the forefront of solar energy engineering, consistently harnessing the latest industry technologies. Through comprehensive services — including procurement, construction, operations and maintenance, training, and inspection — we ensure a seamless transition for our clients into the future of energy.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Every team member carries the same values of discipline and excellence that our founder developed during his military service. We approach every project — whether a single-family home or a commercial facility — with the same level of precision and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={s6} style={{ padding: '40px 0 120px', opacity: v6 ? 1 : 0, transform: v6 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '40px 24px', borderRadius: '24px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,112,162,0.1), rgba(78,205,196,0.08))', borderColor: 'rgba(78,205,196,0.2)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>Ready to Partner with <span className="text-gradient">Solar Mason?</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '460px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Let our veteran-led team bring clean energy solutions to your home or business.
            </p>
            <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} onClick={() => navigate('/contact')}>
              Get Started Today <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
