import GlassCard from '../components/GlassCard'
import { Award, CheckCircle, Shield, Zap, TrendingUp, Leaf, Lock, Lightbulb } from 'lucide-react'

export default function Certification() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Electrical Certifications</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Industry-recognized certifications and compliance for safe, code-compliant solar and electrical installations. Expert credentials and ongoing professional development.</p>
          <button className="btn-primary">View Credentials</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Certifications</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Award} title="Master Electrician" description="Licensed and certified master electrician with 15+ years experience" />
            <GlassCard icon={CheckCircle} title="NABCEP Certified" description="North American Board of Certified Energy Practitioners" />
            <GlassCard icon={Shield} title="OSHA Safety" description="OSHA 30-Hour Safety Certification for construction sites" />
            <GlassCard icon={Zap} title="Code Compliance" description="Expert knowledge of NEC and local electrical codes" />
            <GlassCard icon={TrendingUp} title="Continuous Learning" description="Annual professional development and recertification" />
            <GlassCard icon={Leaf} title="Green Energy" description="Specialized training in renewable energy systems" />
          </div>
        </div>
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Quality & Safety Guaranteed</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">All Solar Mason installations are performed by certified professionals following strict safety and building code standards.</p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  )
}
