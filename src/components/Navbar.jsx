import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaCode } from 'react-icons/fa'

const navLinks = [
  { path: '/',         label: 'Home' },
  { path: '/about',    label: 'About' },
  { path: '/skills',   label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume',   label: 'Resume' },
  { path: '/contact',  label: 'Contact' },
]

const Navbar = () => {
  const [isOpen,     setIsOpen]     = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? 'rgba(10,10,26,0.98)' : 'transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
    }}>
      <div className="container" style={styles.inner}>

        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <FaCode style={{ color: '#6c63ff', fontSize: '1.5rem' }} />
          <span>Otieno<span style={{ color: '#6c63ff' }}>.</span></span>
        </Link>

        {/* Desktop Links */}
        <ul style={styles.links}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  ...styles.link,
                  color: isActive ? '#6c63ff' : '#e2e8f0',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="btn-primary" style={styles.cta}>
          Hire Me
        </Link>

        {/* Mobile Toggle */}
        <button style={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}

const styles = {
  nav: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, transition: 'all 0.3s', backdropFilter: 'blur(10px)' },
  inner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' },
  logo: { display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '1.5rem', fontWeight: '800' },
  links: { display: 'flex', listStyle: 'none', gap: '2rem' },
  link: { fontWeight: '500', fontSize: '0.95rem', transition: 'color 0.3s' },
  cta: { padding: '10px 24px', fontSize: '0.9rem' },
  toggle: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' },
  mobileMenu: { background: '#0a0a1a', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' },
  mobileLink: { color: '#e2e8f0', fontSize: '1.1rem', fontWeight: '500' },
}

export default Navbar