import { Link } from 'react-router-dom'
import { FaCode, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />,   href: 'https://github.com/YourUsername',          label: 'GitHub',    color: '#333' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/YourProfile',      label: 'LinkedIn',  color: '#0077b5' },
  { icon: <FaTwitter />,  href: 'https://twitter.com/@Meshack_chek',           label: 'Twitter',   color: '#1da1f2' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/254706247561',               label: 'WhatsApp',  color: '#25d366' },
  { icon: <FaEnvelope />, href: 'mailto:otienomeshack099@gmail.com',               label: 'Email',     color: '#ea4335' },
]

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>

        {/* Logo */}
        <div style={styles.brand}>
          <div style={styles.logo}>
            <FaCode style={{ color: '#6c63ff' }} />
            <span style={{ color: '#fff', fontWeight: '800', fontSize: '1.3rem' }}>
              Otieno<span style={{ color: '#6c63ff' }}>.</span>
            </span>
          </div>
          <p style={styles.tagline}>
            Building digital solutions with precision and passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          {['/', '/about', '/skills', '/projects', '/resume', '/contact'].map((path, i) => (
            <Link key={path} to={path} style={styles.link}>
              → {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'][i]}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={styles.heading}>Get In Touch</h4>
          <p style={styles.contactItem}>📍 Eldoret, Kenya</p>
          <p style={styles.contactItem}>📞 +254 706247561</p>
          <p style={styles.contactItem}>📧 otienomeshack099@gmail.com</p>

          {/* Social Icons */}
          <div style={styles.socials}>
            {socials.map((s) => (
                <a
              
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={styles.socialIcon}
                onMouseOver={(e) => e.currentTarget.style.background = s.color}
                onMouseOut={(e) => e.currentTarget.style.background = '#1e1e3f'}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} Otieno Meshack. All rights reserved.</p>
        
      </div>
    </footer>
  )
}

const styles = {
  footer: { background: '#060612', borderTop: '1px solid rgba(108,99,255,0.2)', paddingTop: '60px' },
  inner: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', paddingBottom: '40px' },
  brand: {},
  logo: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' },
  tagline: { color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '280px' },
  heading: { color: '#fff', fontWeight: '700', marginBottom: '1rem', fontSize: '1rem', borderBottom: '2px solid #6c63ff', paddingBottom: '6px', display: 'inline-block' },
  link: { display: 'block', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px', transition: 'color 0.3s' },
  contactItem: { color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' },
  socials: { display: 'flex', gap: '10px', marginTop: '1rem', flexWrap: 'wrap' },
  socialIcon: { color: '#fff', background: '#1e1e3f', width: '38px', height: '38px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', transition: 'background 0.3s', cursor: 'pointer' },
  bottom: { borderTop: '1px solid rgba(108,99,255,0.1)', padding: '20px 2rem', display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.85rem', flexWrap: 'wrap', gap: '10px' },
}

export default Footer