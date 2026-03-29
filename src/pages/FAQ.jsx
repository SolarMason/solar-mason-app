import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does solar energy work?',
    answer: 'Solar panels convert sunlight into electricity using photovoltaic cells. An inverter converts DC electricity to AC electricity your home uses. Excess energy goes to the grid earning credits through net metering.'
  },
  {
    question: 'What size system do I need?',
    answer: 'System size depends on your monthly energy usage, roof space, and goals. Most residential systems range from 5-15 kW. We analyze your utility bills and provide detailed recommendations.'
  },
  {
    question: 'What warranties are offered?',
    answer: 'Q-Cell panels come with 25-year product and performance warranties. Enphase microinverters include 25-year warranties. We provide 10-year labor warranties on all installations. Batteries include 10-year warranties.'
  },
  {
    question: 'How long does installation take?',
    answer: 'Timeline varies by project. Design to permits typically takes 4-8 weeks. Physical installation usually takes 1-3 days. Total from consultation to operation typically 3-4 months.'
  },
  {
    question: 'What incentives are available?',
    answer: 'Federal Investment Tax Credit (ITC) covers 30% of costs through 2032. Pennsylvania SREC program provides annual revenue ($300-500+ for typical systems). Net metering credits from excess production. State/local rebates may apply.'
  },
  {
    question: 'What is net metering and how does it work?',
    answer: 'Net metering credits you for excess solar energy fed to the grid. During sunny days, your system may produce more than you use. Extra power goes to the grid earning credits. At night or cloudy days, you use those credits for grid electricity.'
  },
  {
    question: 'Do solar panels work in cloudy weather?',
    answer: 'Yes! Solar panels work in cloudy conditions, though output is reduced. Q-Cell panels are optimized for low-light performance. Typical systems produce 10-25% of rated capacity on cloudy days.'
  },
  {
    question: 'How much money can I save?',
    answer: 'Savings depend on system size, energy usage, and local rates. Average residential customers save $10,000-$30,000 over 25 years. Commercial systems often see 5-7 year payback periods with significant long-term savings.'
  },
  {
    question: 'What is an SREC?',
    answer: 'Solar Renewable Energy Credit (SREC) represents energy produced by your system. In Pennsylvania\'s deregulated market, utilities must purchase SRECs to meet renewable portfolio standards. You can sell your SRECs for additional income.'
  },
  {
    question: 'What is the Federal Investment Tax Credit (ITC)?',
    answer: 'The ITC allows you to deduct 30% of your installation costs from federal income taxes. Available through 2032. You can carry forward unused credits to future years.'
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  return (
    <div className="safe-all">
      <div className="container space-y-8 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">Find comprehensive answers to common questions about solar energy.</p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card cursor-pointer transition-all" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
              <div className="flex-between gap-4">
                <h3 className="font-semibold text-lg text-white">{faq.question}</h3>
                <ChevronDown size={20} className={`text-accent flex-shrink-0 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
              </div>
              {expandedIndex === index && <p className="text-muted mt-4 pt-4 border-t border-white border-opacity-10">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
