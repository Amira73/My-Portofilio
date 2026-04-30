import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '◈',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Bootstrap / Tailwind', level: 95 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Tools & Design',
    icon: '◇',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Postman/Swagger', level: 75 },
    ],
  },
  {
    category: 'Backend Basics',
    icon: '◉',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'REST APIs', level: 84 },
      { name: 'PostgreSQL', level: 25 },
      { name: 'Firebase', level: 28 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-bg-line" />
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">What I <em>work with</em></h2>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: gi * 0.15 + si * 0.08 + 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
