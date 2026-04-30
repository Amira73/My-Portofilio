import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '∞', label: 'Cups of Coffee' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about-section">
      <div className="about-orb" />
      <div className="container">
        <div className="about-grid" ref={ref}>
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                
                <span className="avatar-initial">Ameera</span>
                <div className="avatar-ring ring-1" />
                <div className="avatar-ring ring-2" />
                <div className="avatar-ring ring-3" />
              </div>
              <div className="image-deco-corner tl" />
              <div className="image-deco-corner br" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
           <p className="section-label">About Me</p>

<h2 className="section-title">
  Crafting <em>modern</em> front-end experiences
</h2>

<p className="about-para">
  I'm a front-end developer focused on building responsive, high-performance
  web applications. I transform ideas into intuitive, scalable interfaces
  using modern frameworks and clean UI architecture.
</p>

<p className="about-para">
  I pay close attention to performance, accessibility, and user experience —
  from smooth interactions and animations to well-structured, maintainable code.
</p>

<p className="about-para">
  Outside of coding, I explore design systems, experiment with new UI patterns,
  and continuously improve my understanding of web performance and front-end best practices.
</p>

            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
