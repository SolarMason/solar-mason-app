import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-xl text-muted max-w-2xl">Ready to go solar? Get in touch with our solar experts today.</p>
        </div>

        <div className="grid-2">
          <div className="space-y-6">
            <div className="glass-card p-6 flex gap-4">
              <Phone className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-muted">+1 (570) 754-9900</p>
                <p className="text-sm text-muted mt-1">Mon-Fri 9am-5pm EST</p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <Mail className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-muted">info@solarmason.com</p>
                <p className="text-sm text-muted mt-1">We respond within 24 hours</p>
              </div>
            </div>
            <div className="glass-card p-6 flex gap-4">
              <MapPin className="text-accent flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-muted">Pennsylvania, USA</p>
                <p className="text-sm text-muted mt-1">Serving Northeast Region</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 text-white placeholder-muted outline-none focus:bg-opacity-10"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 text-white placeholder-muted outline-none focus:bg-opacity-10"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 text-white placeholder-muted outline-none focus:bg-opacity-10"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-5 text-white placeholder-muted outline-none focus:bg-opacity-10 resize-none"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
            {submitted && <p className="text-accent text-center">Thank you! We'll be in touch soon.</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
