import GlassCard from '../components/GlassCard'
import { Building2, BarChart3, Zap, Leaf, TrendingUp, Shield, Award, Gauge, DollarSign, Target } from 'lucide-react'

export default function Commercial() {
  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        {/* Hero */}
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Commercial Solar Solutions</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Large-scale solar installations for businesses, warehouses, and commercial properties. Maximize ROI and operational savings with custom engineering and procurement.
          </p>
          <button className="btn-primary">Request a Commercial Proposal</button>
        </div>

        {/* Core Services */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Commercial EPC Services</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard icon={Building2} title="Engineering" description="Custom design, structural analysis, and energy modeling for optimal performance" />
            <GlassCard icon={Award} title="Procurement" description="Strategic sourcing of premium equipment at competitive pricing" />
            <GlassCard icon={Zap} title="Installation" description="Professional construction, electrical integration, and commissioning" />
            <GlassCard icon={Gauge} title="Monitoring" description="Remote monitoring, performance optimization, and predictive maintenance" />
            <GlassCard icon={TrendingUp} title="ROI Analysis" description="Detailed financial modeling and transparent payback projections" />
            <GlassCard icon={Shield} title="Operations Support" description="24/7 monitoring, maintenance contracts, and technical support" />
          </div>
        </div>

        {/* Scale Options */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Scalable Solutions</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-3">50-100 kW</div>
                <h4 className="font-bold mb-2">Small Commercial</h4>
                <p className="text-sm text-muted">Perfect for small businesses, offices, and retail locations</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-3">100-500 kW</div>
                <h4 className="font-bold mb-2">Medium Commercial</h4>
                <p className="text-sm text-muted">Warehouses, manufacturing, and mid-size facilities</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-3">500 kW+</div>
                <h4 className="font-bold mb-2">Large-Scale Utility</h4>
                <p className="text-sm text-muted">Multi-megawatt industrial and utility-scale projects</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Commercial Benefits</h2>
          <div className="grid-2">
            <GlassCard icon={DollarSign} title="Operational Cost Reduction" description="Significantly lower electricity expenses and protect against rising energy costs" />
            <GlassCard icon={BarChart3} title="Tax Incentives" description="Federal Investment Tax Credit, accelerated depreciation, and Section 179 benefits" />
            <GlassCard icon={TrendingUp} title="Revenue Generation" description="Monetize roof and land space, earn energy credits and rebates" />
            <GlassCard icon={Target} title="Sustainability Goals" description="Achieve corporate environmental commitments and ESG targets" />
            <GlassCard icon={Award} title="Balance Sheet Improvement" description="Energy credits and cost savings enhance financial performance" />
            <GlassCard icon={Shield} title="Energy Security" description="Reduce dependence on grid volatility with on-site generation" />
          </div>
        </div>

        {/* PPL Market Expertise */}
        <div className="glass-card space-y-6 border-accent border-opacity-30 p-8 md:p-12">
          <h3 className="text-2xl font-bold">PPL Market Expertise</h3>
          <p className="text-muted mb-6">
            Deep expertise in Pennsylvania's deregulated electricity market allows us to maximize your incentives and savings:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>SREC (Solar Renewable Energy Credit) optimization strategies</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Net metering and utility interconnection expertise</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Demand charge management and energy arbitrage</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Corporate power purchase agreements (PPAs)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>State and local incentive maximization</span>
            </li>
          </ul>
        </div>

        {/* Equipment Partners */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Premium Equipment Partners</h2>
          <div className="grid-2 md:grid-3">
            <GlassCard>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-3">Q-CELLS</div>
                <p className="text-sm text-muted">Premium solar panels with 25-year warranty and industry-leading efficiency</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-3">SolarEdge</div>
                <p className="text-sm text-muted">Inverters with power optimization and advanced monitoring capabilities</p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-3">Enphase</div>
                <p className="text-sm text-muted">Microinverters with 25-year warranty for maximum uptime and flexibility</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Case Study / ROI Calculator */}
        <div className="glass-card space-y-8 border-accent border-opacity-30 p-8 md:p-12">
          <h3 className="text-2xl font-bold">Sample ROI Scenario</h3>
          <p className="text-muted mb-6">100 kW System, Mid-Size Commercial Property</p>
          <div className="grid-2 gap-6">
            <div className="glass-card p-6">
              <p className="text-sm text-muted mb-1">Annual Energy Savings</p>
              <p className="text-3xl font-bold text-accent">$18,000+</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm text-muted mb-1">Federal Tax Credit (30%)</p>
              <p className="text-3xl font-bold text-accent">$75,000</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm text-muted mb-1">Payback Period</p>
              <p className="text-3xl font-bold text-accent">4-6 Years</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm text-muted mb-1">25-Year Value</p>
              <p className="text-3xl font-bold text-accent">$500,000+</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Ready to Power Your Business?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Schedule a consultation with our commercial solar specialists to explore custom solutions for your facility.
          </p>
          <button className="btn-primary">Request Your Commercial Proposal</button>
        </div>
      </div>
    </div>
  )
}
