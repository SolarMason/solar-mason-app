import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import GlassCard from '../components/GlassCard'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you shortly.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <div className="safe-all">
      <div className="container space-y-12 py-8">
        {/* Hero */}
        <div className="pt-24 pb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Get In Touch</h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Ready to go solar? Contact Solar Mason today. Our team is ready to answer your questions, provide quotes, and discuss your energy goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card flex gap-4 border-accent border-opacity-30 p-6">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg h-fit flex-shrink-0">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Location</h3>
                <p className="font-semibold">Solar Mason LLC</p>
                <p className="text-muted">800 James Avenue</p>
                <p className="text-muted">Scranton, PA 18510</p>
                <p className="text-sm text-accent mt-2">Serving all of Northeast Pennsylvania</p>
              </div>
            </div>

            <div className="glass-card flex gap-4 border-accent border-opacity-30 p-6">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg h-fit flex-shrink-0">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Phone</h3>
                <a href="tel:5707954019" className="text-accent font-semibold hover:text-white text-lg">
                  570-MY-SOLAR
                </a>
                <p className="text-muted">(570) 795-4019</p>
                <p className="text-sm text-accent mt-2">Call for immediate assistance</p>
              </div>
            </div>

            <div className="glass-card flex gap-4 border-accent border-opacity-30 p-6">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg h-fit flex-shrink-0">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                <p className="text-muted mb-2">
                  <strong>General:</strong>
                  <a href="mailto:support@solarmason.com" className="text-accent hover:text-white block">
                    support@solarmason.com
                  </a>
                </p>
                <p className="text-muted mb-2">
                  <strong>Legal:</strong>
                  <a href="mailto:legal@solarmason.com" className="text-accent hover:text-white block">
                    legal@solarmason.com
                  </a>
                </p>
                <p className="text-muted mb-2">
                  <strong>Engineering:</strong>
                  <a href="mailto:engineering@solarmason.com" className="text-accent hover:text-white block">
                    engineering@solarmason.com
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card flex gap-4 border-accent border-opacity-30 p-6">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg h-fit flex-shrink-0">
                <Clock size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-white">Business Hours</h3>
                <p className="text-muted mb-1"><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM EST</p>
                <p className="text-muted mb-1"><strong>Saturday:</strong> By appointment</p>
                <p className="text-muted"><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="glass-card flex gap-4 border-accent border-opacity-30 p-6">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg h-fit flex-shrink-0">
                <ExternalLink size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-white">Follow Us</h3>
                <a href="https://facebook.com/solarmasons" className="text-accent hover:text-white">
                  @solarmasons
                </a>
                <p className="text-muted text-sm mt-2">Connect with us on social media for updates and tips</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card border-accent border-opacity-30 p-8 space-y-6">
            <h2 className="text-2xl font-bold">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="(570) 555-4019"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full"
                >
                  <option value="">Select a service...</option>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="carports">Solar Carports</option>
                  <option value="financing">Financing</option>
                  <option value="certification">Certification Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full"
                  placeholder="Tell us about your solar goals and questions..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
              <p className="text-xs text-muted">We respond to all inquiries within 24 business hours.</p>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="glass-card border-accent border-opacity-30 rounded-2xl p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-accent/5 to-primary/5">
          <h2 className="text-3xl font-bold">Ready to Start Your Solar Journey?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Schedule your free solar consultation today. We'll analyze your energy usage and show you exactly how much you can save.
          </p>
          <button className="btn-primary">Schedule Consultation</button>
          <p className="text-sm text-muted">No credit card required. Free consultation takes 30 minutes.</p>
        </div>
      </div>
    </div>
  )
}
