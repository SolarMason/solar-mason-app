import GlassCard from '../components/GlassCard'
import { CreditCard, TrendingUp, Clock, DollarSign, CheckCircle, Zap } from 'lucide-react'

export default function LineOfCredit() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Line of Credit Financing</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Flexible line of credit options designed specifically for solar energy systems. Access capital from $5,000 to $250,000+.</p>
          <button className="btn-primary">Apply Now</button>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Financing Options</h2>
          <div className="grid-2">
            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Unsecured Line of Credit</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted">Loan Amount</p>
                    <p className="font-bold">$5,000 - $250,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Interest Rate</p>
                    <p className="font-bold">7% - 25%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Term</p>
                    <p className="font-bold">6 months - 2 years</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Secured Line of Credit</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted">Loan Amount</p>
                    <p className="font-bold">$100,000 - $10 Million</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Interest Rate</p>
                    <p className="font-bold">4% - 12%</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
