import GlassCard from '../components/GlassCard'
import { Home, TrendingUp, DollarSign, Zap, Leaf, Award, BarChart3, Heart } from 'lucide-react'

export default function Residential() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Residential Solar</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Transform your home with clean, renewable energy. Save thousands on electricity bills while increasing property value and energy independence.</p>
          <button className="btn-primary">Get a Free Quote</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Why Choose Residential Solar?</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Zap} title="Lower Energy Bills" description="Reduce monthly electricity costs by 80-100%" />
            <GlassCard icon={TrendingUp} title="Increase Home Value" description="Add 4-5% to your home's resale value" />
            <GlassCard icon={DollarSign} title="30% Tax Credit" description="Federal Investment Tax Credit through 2032" />
            <GlassCard icon={Heart} title="Energy Independence" description="Protect yourself from rising utility rates" />
            <GlassCard icon={Leaf} title="Environmental Impact" description="Eliminate 3-5 tons of carbon annually" />
            <GlassCard icon={Award} title="25-Year Warranty" description="Industry-leading product and performance warranties" />
          </div>
        </div>
      </div>
    </div>
  )
}
