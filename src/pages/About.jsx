import { FaGraduationCap, FaBriefcase, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

const education = [
  { year: '2023 – present', degree: 'Bachelor of Engineering', school: 'Moi University', desc: 'Specialized in Electrical & Electronics Engineering with distinction.' },
  { year: '2023', degree: 'Full Stack Web Development', school: 'Online — freeCodeCamp & Youtube', desc: 'Completed comprehensive courses in React, Node.js, and MongoDB.' },
]

const experience = [
  { year: '2024 – Present', role: 'Junior Engineer', company: 'Upsilon Engineering', desc: 'Structural design, site supervision and AutoCAD drawings for commercial projects.' },
  { year: '2023', role: 'Freelance Web Developer', company: 'Self Employed', desc: 'Built websites and web apps for small businesses in Eldoret.' },
]

const About = () => {
  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <span className="section-tag" style={{ textAlign: 'center', display: 'block' }}>Get To Know Me</span>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', textAlign: 'center' }}>About Me</h1>
      </div>

      {/* About Grid */}
      <section className="section">
        <div className="container" style={styles.aboutGrid}>

          {/* Image */}
          <div style={styles.imageBox}>
            <div style={styles.imageRing}>
              <img src="/images/profile.jpg" alt="Otieno Meshack" style={styles.img}
                onError={(e) => { e.target.style.display = 'none' }} />
              <div style={styles.imgFallback}>OM</div>
            </div>
            {/* Info cards */}
            <div style={styles.infoCard}>
              <h3 style={{ color: '#6c63ff', fontSize: '2rem', fontWeight: '800' }}>3+</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Years Coding</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-tag">Who I Am</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
              Engineer by Degree,<br />
              <span style={{ color: '#6c63ff' }}>Developer by Passion</span>
            </h2>
            <p style={styles.para}>
              I am <strong style={{ color: '#fff' }}>Otieno Meshack</strong>, a passionate Full Stack Developer
              and Electrical Engineer based in <strong style={{ color: '#fff' }}>Eldoret, Kenya</strong>.
              I combine my engineering problem-solving mindset with modern web development skills
              to build powerful digital solutions.
            </p>
            <p style={styles.para}>
              My journey into coding started during my engineering studies when I realized the power
              of software to transform how we work. Since then I have been building web apps,
              learning new technologies, and helping businesses go digital.
            </p>
            <p style={styles.para}>
              When I'm not coding, I enjoy football , am an arsenal fun.
            </p>

            {/* Quick Info */}
            <div style={styles.infoGrid}>
              {[
                { label: 'Name',      value: 'Otieno Meshack' },
                { label: 'Location',  value: 'Eldoret, Kenya' },
                { label: 'Email',     value: 'otienomshack099@gmail.com' },
                { label: 'Phone',     value: '+254 706247561' },
                { label: 'Languages', value: 'English, Swahili, Luo' },
                { label: 'Available', value: 'Freelance & Full-time' },
              ].map((item) => (
                <div key={item.label} style={styles.infoItem}>
                  <span style={styles.infoLabel}>{item.label}:</span>
                  <span style={{ color: '#e2e8f0' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Hire Me</Link>
              <a href="/resume.pdf" download className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section" style={{ background: 'rgba(108,99,255,0.05)', borderTop: '1px solid rgba(108,99,255,0.1)' }}>
        <div className="container">
          <div className="grid-2">

            {/* Education */}
            <div>
              <h2 style={styles.timelineTitle}>
                <FaGraduationCap style={{ color: '#6c63ff' }} /> Education
              </h2>
              {education.map((e) => (
                <div key={e.degree} style={styles.timelineCard}>
                  <span style={styles.year}>{e.year}</span>
                  <h3 style={styles.degree}>{e.degree}</h3>
                  <p style={styles.school}>{e.school}</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '6px' }}>{e.desc}</p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h2 style={styles.timelineTitle}>
                <FaBriefcase style={{ color: '#6c63ff' }} /> Experience
              </h2>
              {experience.map((e) => (
                <div key={e.role} style={styles.timelineCard}>
                  <span style={styles.year}>{e.year}</span>
                  <h3 style={styles.degree}>{e.role}</h3>
                  <p style={styles.school}>{e.company}</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '6px' }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  header: { padding: '140px 0 60px', textAlign: 'center', background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)' },
  aboutGrid: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'center' },
  imageBox: { position: 'relative' },
  imageRing: { width: '320px', height: '320px', borderRadius: '50%', border: '3px solid #6c63ff', padding: '6px', background: '#1e1e3f', position: 'relative', overflow: 'hidden' },
  img: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' },
  imgFallback: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', fontWeight: '900', color: '#6c63ff' },
  infoCard: { position: 'absolute', bottom: '-20px', right: '0', background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '12px', padding: '1rem 1.5rem', textAlign: 'center' },
  para: { color: '#94a3b8', lineHeight: '1.9', marginBottom: '1rem' },
  infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '1.5rem' },
  infoItem: { display: 'flex', gap: '8px', fontSize: '0.9rem' },
  infoLabel: { color: '#6c63ff', fontWeight: '600' },
  timelineTitle: { display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' },
  timelineCard: { background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', borderLeft: '4px solid #6c63ff', borderRadius: '0 12px 12px 0', padding: '1.5rem', marginBottom: '1.5rem' },
  year: { background: 'rgba(108,99,255,0.2)', color: '#6c63ff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' },
  degree: { color: '#fff', fontWeight: '700', margin: '10px 0 4px', fontSize: '1.05rem' },
  school: { color: '#6c63ff', fontSize: '0.9rem', fontWeight: '600' },
}

export default About