import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'Junior Frontend Developer',
    company: 'Freelance',
    period: '2025 – Present',
    desc: 'Lead front-end development for large-scale web applications. Architected design systems, improved Core Web Vitals by 40%, and mentored junior developers.',
    tags: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    role: 'Coding Instructor',
    company: 'Tech Academy',
    period: '2022 – 2024',
    desc: 'Taught front-end development fundamentals including HTML, CSS, and JavaScript. Guided students through real-world projects and helped them build strong problem-solving skills.',
    tags: ['Teaching', 'JavaScript', 'Mentorship'],
  },
  {
    role: 'Android / Flutter Developer',
    company: 'Mobile Solutions Co.',
    period: '2021 – 2022',
    desc: 'Developed cross-platform mobile applications using Flutter. Built responsive UIs, integrated APIs, and optimized app performance for Android devices.',
    tags: ['Flutter', 'Dart', 'Android'],
  },
  {
    role: 'Junior Developer',
    company: 'Digital Studio',
    period: '2020 – 2021',
    desc: 'Developed responsive websites for clients across multiple industries. Focused on semantic HTML, CSS animations, and clean JavaScript code.',
    tags: ['HTML/CSS', 'JavaScript', 'Figma'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section experience-section">
      <div className="exp-orb" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">My <em>Experience</em></h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-dot">
                <div className="dot-inner" />
              </div>
              <div className="timeline-card">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="timeline-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
