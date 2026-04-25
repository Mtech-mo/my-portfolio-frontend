import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Engineering Firm Website',
    category: 'Full Stack',
    desc: 'A full-stack website for an engineering firm with contact form, MongoDB backend and email notifications.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/YourUsername/engineering-website',
    live: '#',
    image: '/images/projects/project1.jpg',
    color: '#6c63ff',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    category: 'Frontend',
    desc: 'This very portfolio website built with React, Vite and Node.js backend.',
    tech: ['React', 'Vite', 'CSS', 'Node.js'],
    github: 'https://github.com/YourUsername/portfolio',
    live: '#',
    image: '/images/projects/project2.jpg',
    color: '#f50057',
  },
  {
    id: 3,
    title: 'Task Manager App',
    category: 'Full Stack',
    desc: 'A task management app with user authentication, CRUD operations and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/YourUsername/task-manager',
    live: '#',
    image: '/images/projects/project3.jpg',
    color: '#00bcd4',
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

const Projects = () => {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>My Work</span>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', textAlign: 'center' }}>Projects</h1>
      </div>

      <section className="section">
        <div className="container">

          {/* Filter */}
          <div style={styles.filterRow}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  ...styles.filterBtn,
                  background: active === cat ? '#6c63ff' : '#1e1e3f',
                  color: active === cat ? '#fff' : '#94a3b8',
                  border: active === cat ? '1px solid #6c63ff' : '1px solid rgba(108,99,255,0.2)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid-3">
            {filtered.map((project) => (
              <div key={project.id} className="card" style={styles.card}>

                {/* Image */}
                <div style={{ ...styles.imageBox, borderBottom: `3px solid ${project.color}` }}>
                  <img src={project.image} alt={project.title} style={styles.image}
                    onError={(e) => { e.target.style.display = 'none' }} />
                  <div style={{ ...styles.imageFallback, background: `${project.color}22` }}>
                    💻
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ ...styles.category, color: project.color }}>{project.category}</span>
                  <h3 style={styles.title}>{project.title}</h3>
                  <p style={styles.desc}>{project.desc}</p>

                  {/* Tech tags */}
                  <div style={styles.techRow}>
                    {project.tech.map((t) => (
                      <span key={t} style={styles.techTag}>{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={styles.links}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.linkBtn}>
                      <FaGithub /> Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ ...styles.linkBtn, background: project.color }}>
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  header: { padding: '140px 0 60px', background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)' },
  filterRow: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' },
  filterBtn: { padding: '10px 24px', borderRadius: '25px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.3s' },
  card: { padding: '0', overflow: 'hidden' },
  imageBox: { height: '200px', position: 'relative', overflow: 'hidden', background: '#111128' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  imageFallback: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' },
  category: { fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' },
  title: { color: '#fff', fontSize: '1.15rem', fontWeight: '700', margin: '8px 0' },
  desc: { color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' },
  techRow: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.2rem' },
  techTag: { background: 'rgba(108,99,255,0.15)', color: '#6c63ff', padding: '4px 10px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600' },
  links: { display: 'flex', gap: '10px' },
  linkBtn: { display: 'flex', alignItems: 'center', gap: '6px', background: '#1e1e3f', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(108,99,255,0.2)' },
}

export default Projects