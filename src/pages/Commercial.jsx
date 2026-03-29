import GlassCard from '../components/GlassCard'
import { Building2, TrendingUp, DollarSign, Zap, Award, Shield, Leaf, BarChart3 } from 'lucide-react'

export default function Commercial() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Commercial Solar</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Reduce operational costs and increase profitability with commercial-scale solar energy systems. Customized solutions for businesses of any size.</p>
          <button className="btn-primary">Schedule Consultation</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Business Benefits</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={DollarSign} title="Lower Operating Costs" description="Reduce electricity expenses by 50-80% annually" />
            <GlassCard icon={TrendingUp} title="Improved Profitability" description="Redirect energy savings to bottom line" />
            <GlassCard icon={Award} title="Tax Incentives" description="Federal credits and accelerated depreciation benefits" />
            <GlassCard icon={Shield} title="Energy Security" description="Protect against rising utility rates" />
            <GlassCard icon={Leaf} title="Corporate Responsibility" description="Demonstrate commitment to sustainability" />
            <GlassCard icon={Building2} title="Custom Solutions" description="Scalable systems for any facility size" />
          </div>
        </div>
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Ready to Save?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Get a free commercial solar analysis and discover your savings potential.</p>
          <button className="btn-primary">Get Free Analysis</button>
        </div>
      </div>
    </div>
  )
}
