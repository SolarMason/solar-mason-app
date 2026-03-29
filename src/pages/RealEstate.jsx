import GlassCard from '../components/GlassCard'
import { Home, TrendingUp, DollarSign, Zap, Award, Target, Building2, Leaf } from 'lucide-react'

export default function RealEstate() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Real Estate Financing</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Specialized real estate financing for solar projects with flexible lending terms.</p>
          <button className="btn-primary">Apply Now</button>
        </div>
        <div className="glass-card space-y-6 border-accent border-opacity-30 p-8 md:p-12">
          <h3 className="text-2xl font-bold">Lending Criteria</h3>
          <div className="grid-2 md:grid-3">
            <div className="space-y-2">
              <h4 className="font-bold text-accent">Minimum Credit Score</h4>
              <p className="text-2xl font-bold text-white">620+</p>
              <p className="text-sm text-muted">Flexible credit requirements</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-accent">Loan Terms</h4>
              <p className="text-2xl font-bold text-white">1-30 Years</p>
              <p className="text-sm text-muted">Flexible repayment periods</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-accent">Maximum Loan Amount</h4>
              <p className="text-2xl font-bold text-white">$10M+</p>
              <p className="text-sm text-muted">Large-scale project financing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
