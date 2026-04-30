import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'Online Booking System',
    desc: 'Developed a full-featured booking platform with user authentication, real-time availability handling, and a smooth, responsive user experience.',
    tech: ['React', 'API Integration', 'Authentication', 'Responsive UI'],
    link: 'https://online-booking-eshr.vercel.app/',
    github: '#',
    accent: 'purple',
    emoji: '◈',
  },
  {
    title: 'Food Management App',
    desc: 'Built a dynamic food ordering interface with interactive menus, cart management, and a seamless checkout experience.',
    tech: ['React', 'State Management', 'UI/UX', 'REST API'],
    link: 'https://foodproject-theta.vercel.app/',
    github: '#',
    accent: 'rose',
    emoji: '◉',
  },
  {
    title: 'Property Management System',
    desc: 'Designed and implemented a management dashboard with authentication, structured data handling, and clean, scalable UI components.',
    tech: ['React', 'Authentication', 'Dashboard UI', 'Forms'],
    link: 'https://pmsyste.netlify.app/auth/login',
    github: '#',
    accent: 'purple',
    emoji: '◇',
  },
  {
    title: 'Interactive Quiz App',
    desc: 'Created an interactive quiz platform with dynamic questions, score tracking, and smooth user interaction flows.',
    tech: ['JavaScript', 'React', 'State Management', 'UX Design'],
    link: 'https://quiz-app-ybqk.vercel.app/',
    github: '#',
    accent: 'rose',
    emoji: '✦',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-orb" />

      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Work</p>
          <h2 className="section-title">
            Selected <em>Projects</em>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <motion.div
                className={`project-card accent-${project.accent}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12 + 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="project-card-top">
                  <span className="project-emoji">{project.emoji}</span>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={15} />
                      </a>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card-glow" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}