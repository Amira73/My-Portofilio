import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import './Contact.css'

const socials = [
  { 
    icon: <Github size={18} />, 
    label: 'GitHub', 
    href: 'https://github.com/Amira73' 
  },
  { 
    icon: <Linkedin size={18} />, 
    label: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/ameera-habeeb-b84586148' 
  },
  { 
    icon: <Twitter size={18} />, 
    label: 'Twitter', 
    href: '#' 
  },
  { 
    icon: <Mail size={18} />, 
    label: 'Email', 
    href: 'mailto:amiraelalfe73@gmail.com' 
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-orb-1" />
      <div className="contact-orb-2" />

      <div className="container" ref={ref}>
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">
            Start a <em>conversation</em>
          </h2>
          <p className="contact-sub">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-detail">
              <span className="detail-label">Name</span>
              <span className="detail-value">Ameera Habeeb</span>
            </div>

            <div className="contact-detail">
              <span className="detail-label">Phone</span>
              <span className="detail-value">01559814355</span>
            </div>

            <div className="contact-detail">
              <span className="detail-label">Available for</span>
              <span className="detail-value">Freelance & Full-time</span>
            </div>

            <div className="contact-detail">
              <span className="detail-label">Email</span>
              <a href="mailto:amiraelalfe73@gmail.com" className="detail-link">
                amiraelalfe73@gmail.com
              </a>
            </div>

            <div className="social-row">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              {sent ? '✦ Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
