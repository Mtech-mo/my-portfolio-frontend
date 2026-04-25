import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'

const Resume = () => {
  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>My Resume</span>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', textAlign: 'center' }}>
          Curriculum Vitae
        </h1>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/resume.pdf" download className="btn-primary">
            <FaDownload /> Download PDF Resume
          </a>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Personal Info */}
          <div style={styles.resumeCard}>
            <h2 style={styles.name}>Otieno Meshack</h2>
            <p style={styles.role}>Full Stack Developer & Electrical Engineer</p>
            <div style={styles.contactRow}>
              <span>📍 ELdoret, Kenya</span>
              <span>📞 +254 706247561</span>
              <span>📧 otienomeshack099@gmail.com</span>
              <span>🌐 yourportfolio.com</span>
            </div>
          </div>

          {/* Summary */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}><FaCode style={{ color: '#6c63ff' }} /> Professional Summary</h3>
            <p style={styles.para}>
              Passionate Full Stack Developer and Electrical Engineer with 3+ years of coding experience
              and a BNg in Engineering. I build scalable web applications using React, Node.js, and MongoDB.
              Available for freelance projects and full-time opportunities.
            </p>
          </div>

          {/* Experience */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}><FaBriefcase style={{ color: '#6c63ff' }} /> Work Experience</h3>
            {[
              {
                role: 'Junior Electrical Engineer',
                company: 'Upsilon Engineering',
                period: 'Jan 2024 – Present',
                points: [
                  'Electrical design design and AutoCAD drawings for commercial buildings',
                  'Site supervision and quality control for construction projects',
                  'Developed the company website using React and Node.js',
                ]
              },
              {
                role: 'Freelance Web Developer',
                company: 'Self Employed',
                period: 'Jan 2023 – Dec 2023',
                points: [
                  'Built 5+ websites for small businesses in Nairobi',
                  'Delivered full-stack apps using MERN stack',
                  'Managed client communication and project delivery',
                ]
              },
            ].map((job) => (
              <div key={job.role} style={styles.timelineItem}>
                <div style={styles.timelineHeader}>
                  <div>
                    <h4 style={styles.jobTitle}>{job.role}</h4>
                    <p style={styles.company}>{job.company}</p>
                  </div>
                  <span style={styles.period}>{job.period}</span>
                </div>
                <ul style={styles.points}>
                  {job.points.map((p) => <li key={p} style={styles.point}>• {p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}><FaGraduationCap style={{ color: '#6c63ff' }} /> Education</h3>
            {[
              { degree: 'Bng Engineering', school: ' Moi University ', period: '2023 – Present', grade: 'Second Class Honours (Upper Division)' },
              { degree: 'Full Stack Web Development', school: 'Youtube & freeCodeCamp', period: '2023', grade: 'Certificate of Completion' },
            ].map((e) => (
              <div key={e.degree} style={styles.timelineItem}>
                <div style={styles.timelineHeader}>
                  <div>
                    <h4 style={styles.jobTitle}>{e.degree}</h4>
                    <p style={styles.company}>{e.school}</p>
                    <p style={{ color: '#6c63ff', fontSize: '0.85rem', marginTop: '4px' }}>{e.grade}</p>
                  </div>
                  <span style={styles.period}>{e.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}><FaCode style={{ color: '#6c63ff' }} /> Technical Skills</h3>
            <div style={styles.skillsGrid}>
              {['React.js', 'Node.js', 'JavaScript', 'HTML & CSS', 'MongoDB', 'Express.js',
                'Git & GitHub', 'REST APIs', 'AutoCAD', 'Project Management'].map((skill) => (
                <span key={skill} style={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/resume.pdf" download className="btn-primary">
              <FaDownload /> Download Full Resume PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  header: { padding: '140px 0 60px', background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)' },
  resumeCard: { background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '16px', padding: '2rem', textAlign: 'center', marginBottom: '2rem' },
  name: { color: '#fff', fontSize: '2rem', fontWeight: '800', marginBottom: '8px' },
  role: { color: '#6c63ff', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' },
  contactRow: { display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: '#94a3b8', fontSize: '0.9rem' },
  section: { background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem' },
  sectionTitle: { display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.5rem', borderBottom: '1px solid rgba(108,99,255,0.2)', paddingBottom: '12px' },
  para: { color: '#94a3b8', lineHeight: '1.9' },
  timelineItem: { marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(108,99,255,0.1)' },
  timelineHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' },
  jobTitle: { color: '#fff', fontWeight: '700', fontSize: '1.05rem' },
  company: { color: '#6c63ff', fontSize: '0.9rem', fontWeight: '600', marginTop: '4px' },
  period: { background: 'rgba(108,99,255,0.15)', color: '#6c63ff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', whiteSpace: 'nowrap' },
  points: { listStyle: 'none', padding: 0 },
  point: { color: '#94a3b8', fontSize: '0.9rem', marginBottom: '6px', lineHeight: '1.6' },
  skillsGrid: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  skillTag: { background: 'rgba(108,99,255,0.15)', color: '#6c63ff', border: '1px solid rgba(108,99,255,0.3)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' },
}

export default Resume