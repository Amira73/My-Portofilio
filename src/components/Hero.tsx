import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Orbs */}
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      {/* Floating petals */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="petal"
          style={{
            left: `${10 + i * 11}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + i * 0.8}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: i * 0.15 + 1 }}
        />
      ))}

    <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          ✦ &nbsp; Hello, I'm 
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Ameera <em>Habeeb</em>
        </motion.h1>

        <motion.div
          className="hero-title-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <span className="hero-role">Frontend Developer</span>
          <span className="hero-divider">·</span>
          <span className="hero-role-sub">React</span>
        </motion.div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
        I build modern, responsive front-end applications <br />
with a strong focus on performance, scalability, and clean UI architecture.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <Link to="projects" smooth duration={700} offset={-80} className="btn-primary" style={{ cursor: 'none' }}>
            View My Work
          </Link>
          <Link to="contact" smooth duration={700} offset={-80} className="btn-ghost" style={{ cursor: 'none' }}>
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="scroll-line" />
       
        </motion.div>
      </div>
    </section>
  )
}
