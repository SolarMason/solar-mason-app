import GlassCard from '../components/GlassCard'
import { CreditCard, TrendingUp, Clock, DollarSign, CheckCircle, Zap } from 'lucide-react'

export default function Financing() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Solar Financing Options</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Multiple flexible financing options to make solar accessible and affordable for everyone. Choose the plan that works best for you.</p>
          <button className="btn-primary">Explore Options</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Financing Methods</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Clock} title="Solar Loans" description="5-20 year loans with fixed rates and no prepayment penalties" />
            <GlassCard icon={TrendingUp} title="Home Equity" description="Tap existing home equity for favorable rates" />
            <GlassCard icon={DollarSign} title="Leasing" description="$99-$200/month with zero upfront costs" />
            <GlassCard icon={CheckCircle} title="PPAs" description="Power Purchase Agreements with energy savings guarantees" />
            <GlassCard icon={Zap} title="PACE Financing" description="Property Assessed Clean Energy financing through local programs" />
            <GlassCard icon={CreditCard} title="Cash Purchase" description="Maximize tax credits and long-term savings" />
          </div>
        </div>
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Find Your Perfect Plan</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">We'll help you choose the financing option that maximizes your savings.</p>
          <button className="btn-primary">Compare Plans</button>
        </div>
      </div>
    </div>
  )
}
