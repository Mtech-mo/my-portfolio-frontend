import { FaBolt, FaTools, FaCogs, FaMicrochip, FaDraftingCompass, FaProjectDiagram } from 'react-icons/fa'

const skillBars = [
  { name: 'Circuit Analysis & Design', level: 85, color: '#f7df1e' },
  { name: 'Power Systems',             level: 80, color: '#ff9800' },
  { name: 'Control Systems',           level: 78, color: '#6c63ff' },
  { name: 'MATLAB / Simulink',         level: 75, color: '#00bcd4' },
  { name: 'AutoCAD Electrical',        level: 70, color: '#e34f26' },
  { name: 'Electrical Machines',       level: 80, color: '#4caf50' },
  { name: 'Troubleshooting',           level: 85, color: '#f05032' },
  { name: 'Embedded Systems',          level: 72, color: '#9c27b0' },
]

const techStack = [
  { icon: <FaBolt size={40} />,             name: 'Power Systems',        color: '#ff9800' },
  { icon: <FaCogs size={40} />,             name: 'Control Systems',      color: '#6c63ff' },
  { icon: <FaMicrochip size={40} />,        name: 'Embedded Systems',     color: '#9c27b0' },
  { icon: <FaTools size={40} />,            name: 'Troubleshooting',      color: '#f05032' },
  { icon: <FaDraftingCompass size={40} />,  name: 'AutoCAD Electrical',   color: '#e34f26' },
  { icon: <FaProjectDiagram size={40} />,   name: 'Circuit Design',       color: '#00bcd4' },
]

const Skills = () => {
  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>What I Know</span>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', textAlign: 'center' }}>My Skills</h1>
      </div>

      {/* Skill Bars */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-tag">Proficiency</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Technical Skills</h2>
              <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
                My skill levels based on hands-on project experience
              </p>
              {skillBars.map((skill) => (
                <div key={skill.name} style={styles.skillRow}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={{ color: skill.color, fontWeight: '700' }}>{skill.level}%</span>
                  </div>
                  <div style={styles.barBg}>
                    <div style={{
                      ...styles.barFill,
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, #6c63ff, ${skill.color})`
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Icons */}
            <div>
              <span className="section-tag">Tech Stack</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Tools & Technologies</h2>
              <p style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>Technologies I use daily</p>
              <div style={styles.techGrid}>
                {techStack.map((tech) => (
                  <div key={tech.name} style={styles.techCard}>
                    <div style={{ color: tech.color }}>{tech.icon}</div>
                    <p style={styles.techName}>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Skills */}
      <section className="section" style={{ background: 'rgba(108,99,255,0.05)', borderTop: '1px solid rgba(108,99,255,0.1)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Other Skills</h2>
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            {[
              { title: 'Technical & Engineering Skills', items: ['Circuit Analysis & Design ', 'Power Systems', 'Control Systems', 'Electrical Machines'] },
              { title: 'Soft Skills',        items: ['Problem Solving', 'Team Leadership', 'Communication', 'Time Management'] },
              { title: 'Currently Learning', items: ['TypeScript (for dashboards, control interfaces)', 'Next.js(for engineering web applications & monitoring systems)', 'Docker (for deploying simulation/control systems)', 'AWS Cloud (for IoT data processing, remote monitoring)'] },
            ].map((group) => (
              <div key={group.title} className="card">
                <h3 style={{ color: '#6c63ff', marginBottom: '1rem', fontWeight: '700' }}>{group.title}</h3>
                {group.items.map((item) => (
                  <div key={item} style={styles.otherItem}>✅ {item}</div>
                ))}
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
  skillRow: { marginBottom: '1.5rem' },
  skillHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  skillName: { color: '#e2e8f0', fontWeight: '500' },
  barBg: { background: '#1e1e3f', borderRadius: '10px', height: '10px', overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: '10px', transition: 'width 1s ease' },
  techGrid: { display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' },
  techCard: { background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '1rem', textAlign: 'center', transition: 'all 0.3s', cursor: 'default' },
  techName: { color: '#94a3b8', fontSize: '0.8rem', marginTop: '8px' },
  otherItem: { color: '#94a3b8', marginBottom: '8px', fontSize: '0.95rem' },
}

export default Skills