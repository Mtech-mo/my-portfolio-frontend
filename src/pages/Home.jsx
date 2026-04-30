import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight, FaDownload, FaCode, FaServer, FaMobile, FaTools,FaBolt,FaCogs } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub size={22} />,   href: 'https://github.com/YourUsername' },
  { icon: <FaLinkedin size={22} />, href: 'https://linkedin.com/in/YourProfile' },
  { icon: <FaWhatsapp size={22} />, href: 'https://wa.me/254706247561' },
]

const services = [
  { icon: <FaCode size={36} />,   title: 'Frontend Development', desc: 'Beautiful, responsive UIs built with React, HTML, CSS and modern frameworks.' },
  { icon: <FaServer size={36} />, title: 'Backend Development', desc: 'Robust APIs and server-side applications using Node.js, Express and MongoDB.' },
  { icon: <FaMobile size={36} />, title: 'Full Stack Projects', desc: 'End-to-end web applications from database design to user interface.' },
   { 
    icon: <FaBolt size={36} />,  
    title: 'Power Systems Engineering', 
    desc: 'Design and analysis of electrical power systems, including generation, transmission, and distribution.' 
  },
  { 
    icon: <FaCogs size={36} />, 
    title: 'Control & Automation Systems', 
    desc: 'Development of control systems and industrial automation solutions for efficient and reliable operations.' 
  },
  { 
    icon: <FaTools size={36} />, 
    title: 'Electrical Installation & Maintenance', 
    desc: 'Installation, testing, and troubleshooting of electrical systems to ensure safety and performance.' 
  },
]

const Home = () => {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={styles.hero}>
        <div style={styles.heroBg} />
        <div className="container" style={styles.heroContent}>

          <p style={styles.heroTag}> Hello, I am</p>
          <h1 style={styles.heroTitle}>
            Otieno <span style={{ color: '#6c63ff' }}>Meshack</span>
          </h1>
          <h2 style={styles.heroRole}>
            Electrical <span style={{ color: '#f50057' }}>Engineer</span> & Developer
          </h2>
          <p style={styles.heroDesc}>
           I design, analyze, and implement electrical and electronic systems, specializing in power systems, control engineering, and embedded applications to solve real-world problems.
Based in Kisumu, Kenya open to internships and full-time engineering roles.
          </p>

          {/* Buttons */}
          <div style={styles.heroBtns}>
            <Link to="/projects" className="btn-primary">
              View My Work <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              Hire Me
            </Link>
            <a href="/resume.pdf" download className="btn-outline">
              Download CV <FaDownload />
            </a>
          </div>

          {/* Social Icons */}
          <div style={styles.socialRow}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div style={styles.heroImage}>
          <div style={styles.imageRing}>
            <img
              src="/images/profile.jpg"
              alt="Otieno Meshack"
              style={styles.profileImg}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div style={styles.imageFallback}>OM</div>
          </div>
          {/* Floating badges */}
          <div style={{ ...styles.badge, top: '10%', right: '-10%' }}>⚛️ React</div>
          <div style={{ ...styles.badge, bottom: '20%', left: '-10%' }}>🟢 Node.js</div>
          <div style={{ ...styles.badge, bottom: '5%', right: '0%' }}>🍃 MongoDB</div>
          <div style={{ ...styles.badge, top: '40%', left: '-12%' }}>⚡ Electrical Systems</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={styles.statsSection}>
        <div className="container" style={styles.statsGrid}>
          {[
           
            { number: '1+',  label: 'Years Coding' },
           
            { number: '100%', label: 'Dedication' },
          ].map((s) => (
            <div key={s.label} style={styles.statItem}>
              <h3 style={styles.statNum}>{s.number}</h3>
              <p style={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">I help businesses and individuals build powerful digital products</p>
          <div className="grid-3">
            {services.map((s) => (
              <div key={s.title} className="card" style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{s.icon}</div>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            Ready to Work Together?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Let's build something amazing. Get in touch today.
          </p>
          <Link to="/contact" className="btn-primary">
            Let's Talk <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: { minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '100px 2rem 60px', maxWidth: '1200px', margin: '0 auto', gap: '4rem' },
  heroBg: { position: 'fixed', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 },
  heroContent: { flex: 1, position: 'relative', zIndex: 1 },
  heroTag: { color: '#6c63ff', fontWeight: '700', fontSize: '1.1rem', marginBottom: '1rem', display: 'block' },
  heroTitle: { fontSize: '4rem', fontWeight: '900', color: '#fff', lineHeight: '1.1', marginBottom: '0.5rem' },
  heroRole: { fontSize: '2rem', fontWeight: '700', color: '#94a3b8', marginBottom: '1.5rem' },
  heroDesc: { color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '2.5rem', maxWidth: '550px' },
  heroBtns: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' },
  socialRow: { display: 'flex', gap: '12px' },
  socialIcon: { color: '#94a3b8', background: '#1e1e3f', width: '46px', height: '46px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', border: '1px solid rgba(108,99,255,0.2)' },
  heroImage: { flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' },
  imageRing: { width: '350px', height: '350px', borderRadius: '50%', border: '3px solid #6c63ff', padding: '6px', position: 'relative', background: 'linear-gradient(135deg, #1e1e3f, #0a0a1a)' },
  profileImg: { width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' },
  imageFallback: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', fontWeight: '900', color: '#6c63ff', borderRadius: '50%' },
  badge: { position: 'absolute', background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.3)', color: '#fff', padding: '8px 16px', borderRadius: '25px', fontSize: '0.85rem', fontWeight: '600', backdropFilter: 'blur(10px)' },
  statsSection: { background: 'rgba(108,99,255,0.08)', borderTop: '1px solid rgba(108,99,255,0.1)', borderBottom: '1px solid rgba(108,99,255,0.1)', padding: '50px 0' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', textAlign: 'center' },
  statItem: {},
  statNum: { fontSize: '3rem', fontWeight: '800', color: '#6c63ff' },
  statLabel: { color: '#94a3b8', marginTop: '4px' },
  serviceCard: { textAlign: 'left' },
  serviceIcon: { color: '#6c63ff', marginBottom: '1.2rem' },
  serviceTitle: { color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' },
  cta: { background: 'linear-gradient(135deg, #1e1e3f, #0a0a1a)', padding: '100px 0', borderTop: '1px solid rgba(108,99,255,0.2)' },
}

export default Home