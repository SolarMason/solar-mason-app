import GlassCard from '../components/GlassCard'
import { Award, CheckCircle, Shield, BookOpen, Users, Target, Zap, Leaf } from 'lucide-react'

export default function Certification() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        {/* Hero */}
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Solar Mason University</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Comprehensive certification program in solar energy technology. Become a certified solar professional with hands-on training and industry-recognized credentials.
          </p>
          <button className="btn-primary">Enroll Now</button>
        </div>

        {/* Program Overview */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Program Overview</h2>
          <div className="glass-card space-y-4 border-accent border-opacity-30 p-8">
            <p className="text-muted">
              Solar Mason University offers comprehensive training in photovoltaic systems, electrical integration, installation methods, and business practices. Our program is designed for individuals seeking a deep understanding of residential and commercial solar energy systems.
            </p>
            <div className="grid-2 gap-4">
              <div>
                <h4 className="font-bold text-accent mb-2">Duration</h4>
                <p className="text-sm text-muted">80 hours hands-on training + capstone project</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">Certification</h4>
                <p className="text-sm text-muted">Solar Mason Certified Professional credential</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">Format</h4>
                <p className="text-sm text-muted">Hybrid: Online coursework + hands-on lab sessions</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2">Career Path</h4>
                <p className="text-sm text-muted">Job placement assistance and employment opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What You'll Learn</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Zap} title="PV System Fundamentals" description="Solar cell technology, panel types, and system components" />
            <GlassCard icon={BookOpen} title="Electrical Theory" description="Voltage, current, power calculations, and circuit design" />
            <GlassCard icon={Target} title="Installation Methods" description="Hands-on roof installation, electrical integration, safety" />
            <GlassCard icon={Shield} title="Safety & Codes" description="OSHA compliance, NEC standards, and local regulations" />
            <GlassCard icon={Zap} title="Inverter Technology" description="String inverters, microinverters, and power optimization" />
            <GlassCard icon={Users} title="Business Practices" description="Sales, customer service, project management, and economics" />
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Industry Certifications</h2>
          <div className="grid-2">
            <GlassCard icon={Award} title="NABCEP Exam Prep" description="Prepare for North American Board of Certified Energy Practitioners exam" />
            <GlassCard icon={CheckCircle} title="Pennsylvania License Support" description="Training aligned with PA electrician licensing requirements" />
            <GlassCard icon={Shield} title="Safety Certification" description="OSHA 30-hour construction safety course included" />
            <GlassCard icon={Award} title="Solar Mason Credential" description="Exclusive Solar Mason Certified Professional designation" />
          </div>
        </div>

        {/* Industry Standards */}
        <div className="glass-card space-y-6 border-accent border-opacity-30 p-8 md:p-12">
          <h3 className="text-2xl font-bold">Industry Standards Covered</h3>
          <p className="text-muted mb-6">Our curriculum covers all major industry standards and codes:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span><strong>National Electrical Code (NEC):</strong> Electrical installation and safety standards</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span><strong>UL Certification Standards:</strong> Equipment safety and performance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span><strong>IEC International Standards:</strong> Global solar PV system standards</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span><strong>Local Building Codes:</strong> Pennsylvania and regional permitting requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">✓</span>
              <span><strong>OSHA Safety Standards:</strong> Worker safety and site safety protocols</span>
            </li>
          </ul>
        </div>

        {/* Career Outcomes */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Career Opportunities</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard>
              <div className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">Solar Installer</h4>
                <p className="text-sm text-muted">Lead installation projects for residential and commercial systems</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">System Designer</h4>
                <p className="text-sm text-muted">Design custom solar solutions for homes and businesses</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">Sales Consultant</h4>
                <p className="text-sm text-muted">Educate customers and sell solar solutions with confidence</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">Project Manager</h4>
                <p className="text-sm text-muted">Oversee solar installations from start to completion</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Leaf className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">O&M Technician</h4>
                <p className="text-sm text-muted">Monitor and maintain solar systems for optimal performance</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="font-bold mb-2">Safety Officer</h4>
                <p className="text-sm text-muted">Ensure safety compliance on all solar projects</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Enrollment CTA */}
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Join Solar Mason University</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Start your career in the fastest-growing renewable energy industry. Become a certified solar professional today.
          </p>
          <button className="btn-primary">Enroll in Next Session</button>
          <p className="text-sm text-muted">Next cohort starts: April 1, 2026 | Limited seats available</p>
        </div>
      </div>
    </div>
  )
}
