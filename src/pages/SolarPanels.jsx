import GlassCard from '../components/GlassCard'
import { Zap, TrendingUp, Shield, Leaf, Award, Sun, DollarSign, Gauge } from 'lucide-react'

export default function SolarPanels() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Q-CELLS Solar Panels</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Industry-leading Q-CELLS solar panels deliver premium efficiency, durability, and performance.</p>
          <button className="btn-primary">Get a Quote Today</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Q-CELLS?</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Zap} title="22%+ Efficiency" description="Among the highest efficiency ratings in the industry" />
            <GlassCard icon={TrendingUp} title="Superior Performance" description="Optimal output in low-light and cloudy conditions" />
            <GlassCard icon={Shield} title="25-Year Warranty" description="Industry-leading product and performance guarantees" />
            <GlassCard icon={Leaf} title="Eco-Friendly" description="Sustainable manufacturing and 100% recyclable design" />
            <GlassCard icon={Sun} title="Global Leader" description="Trusted by millions worldwide for over 20 years" />
            <GlassCard icon={Award} title="Premium Quality" description="Rigorously tested to exceed all performance standards" />
          </div>
        </div>
      </div>
    </div>
  )
}
