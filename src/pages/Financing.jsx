import GlassCard from '../components/GlassCard'
import { CreditCard, TrendingUp, DollarSign, Zap, Award, Home, Check, Target } from 'lucide-react'

export default function Financing() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        {/* Hero */}
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Residential Financing</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Multiple financing options designed to make solar energy affordable for every homeowner. Zero money down, flexible terms, and immediate energy savings.
          </p>
          <button className="btn-primary">Get Your Financing Quote</button>
          <div className="mt-8 glass-card inline-block">
            <p className="text-accent font-bold text-xl">Starting at <span className="text-2xl">$99/month</span></p>
            <p className="text-sm text-muted">Zero money down. Flexible options available.</p>
          </div>
        </div>

        {/* Financing Options */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Your Financing Options</h2>
          <div className="grid-2">
            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Solar Loans</h3>
                <p className="text-muted mb-4">Own your system with dedicated solar financing</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Fixed interest rates</li>
                  <li>• 5-20 year terms</li>
                  <li>• No money down options</li>
                  <li>• Build equity from day one</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Home Equity</h3>
                <p className="text-muted mb-4">Leverage your home equity for favorable rates</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Competitive interest rates</li>
                  <li>• Tax-deductible interest</li>
                  <li>• Flexible terms</li>
                  <li>• Quick approval process</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Solar Leases</h3>
                <p className="text-muted mb-4">Pay nothing upfront, enjoy immediate savings</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• Starting at $99/month</li>
                  <li>• No maintenance costs</li>
                  <li>• Performance guarantee</li>
                  <li>• We handle everything</li>
                </ul>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-accent">Power Purchase</h3>
                <p className="text-muted mb-4">Pay only for the energy you produce</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li>• No upfront costs</li>
                  <li>• Immediate energy savings</li>
                  <li>• Long-term price protection</li>
                  <li>• Simple billing</li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Financing Benefits</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Award} title="Federal Tax Credit" description="Claim up to 30% of installation costs with the ITC" />
            <GlassCard icon={Zap} title="Immediate Savings" description="Monthly energy savings typically offset financing payments" />
            <GlassCard icon={DollarSign} title="No Money Down" description="Start saving with financing from day one" />
            <GlassCard icon={Home} title="Increase Home Value" description="Solar adds value while reducing utility costs" />
            <GlassCard icon={Target} title="Long-Term Value" description="25+ years of energy savings and predictable costs" />
            <GlassCard icon={Check} title="Simple Process" description="Easy online application with instant pre-qualification" />
          </div>
        </div>

        {/* Incentives */}
        <div className="glass-card space-y-8 border-accent border-opacity-30 p-8 md:p-12">
          <h3 className="text-2xl font-bold">Additional Incentives</h3>
          <div className="grid-2">
            <div className="space-y-3">
              <h4 className="font-bold text-accent">Federal Investment Tax Credit (ITC)</h4>
              <p className="text-muted">30% of your total installation costs can be deducted from your federal income taxes. This incentive is available through 2032.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-accent">SREC Revenue</h4>
              <p className="text-muted">In Pennsylvania's deregulated market, earn additional income through Solar Renewable Energy Credits. Typical systems generate $300-500+ annually.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-accent">Net Metering Savings</h4>
              <p className="text-muted">Export excess energy to the grid and receive credits on your utility bill. Maximize your energy value with net metering.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-accent">Property Tax Exemption</h4>
              <p className="text-muted">In Pennsylvania, solar installations may qualify for property tax exemptions, further reducing your overall costs.</p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Application Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 glass-card p-4">
              <span className="text-accent font-bold text-lg flex-shrink-0">1</span>
              <div>
                <h4 className="font-semibold mb-1">Free Consultation</h4>
                <p className="text-muted">Get a personalized solar assessment and financing options overview</p>
              </div>
            </div>
            <div className="flex gap-4 glass-card p-4">
              <span className="text-accent font-bold text-lg flex-shrink-0">2</span>
              <div>
                <h4 className="font-semibold mb-1">System Design</h4>
                <p className="text-muted">Receive a custom system design optimized for your home and budget</p>
              </div>
            </div>
            <div className="flex gap-4 glass-card p-4">
              <span className="text-accent font-bold text-lg flex-shrink-0">3</span>
              <div>
                <h4 className="font-semibold mb-1">Apply Online</h4>
                <p className="text-muted">Complete simple application in 5 minutes, get instant pre-qualification</p>
              </div>
            </div>
            <div className="flex gap-4 glass-card p-4">
              <span className="text-accent font-bold text-lg flex-shrink-0">4</span>
              <div>
                <h4 className="font-semibold mb-1">Approve & Schedule</h4>
                <p className="text-muted">Receive approval and schedule installation at your convenience</p>
              </div>
            </div>
            <div className="flex gap-4 glass-card p-4">
              <span className="text-accent font-bold text-lg flex-shrink-0">5</span>
              <div>
                <h4 className="font-semibold mb-1">Installation & Savings</h4>
                <p className="text-muted">Professional installation and immediate energy cost savings begin</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Get Your Financing Quote Today</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Find the perfect financing option for your home and start saving on energy costs immediately.
          </p>
          <button className="btn-primary">Get Your Quote</button>
          <p className="text-sm text-muted">No credit card required. Free quote takes 5 minutes.</p>
        </div>
      </div>
    </div>
  )
}
