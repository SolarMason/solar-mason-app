import GlassCard from '../components/GlassCard'
import { Zap, Shield, TrendingUp, Award, ParkingCircle, Leaf, Sun, BarChart3 } from 'lucide-react'

export default function Carports() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Solar Carports</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Generate clean energy while protecting vehicles. Maximize parking area value with dual-purpose solar carport installations.</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Solar Carport Benefits</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Zap} title="Dual Purpose" description="Generate electricity while providing vehicle shelter" />
            <GlassCard icon={TrendingUp} title="Income Generation" description="Generate significant electricity from high-elevation panels" />
            <GlassCard icon={Award} title="ROI Focused" description="Transparent cost modeling ensures maximum return" />
            <GlassCard icon={Shield} title="Vehicle Protection" description="Protect vehicles from weather while generating power" />
            <GlassCard icon={Leaf} title="Eco-Friendly" description="Reduce carbon footprint and environmental impact" />
            <GlassCard icon={Sun} title="Space Efficient" description="Utilize existing parking areas for energy production" />
          </div>
        </div>
      </div>
    </div>
  )
}
