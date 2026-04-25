import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/messages`, form)
      toast.success('Message sent! I will reply within 24 hours.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Failed to send. Please email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>Get In Touch</span>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: '800', textAlign: 'center' }}>Contact Me</h1>
      </div>

      <section className="section">
        <div className="container" style={styles.grid}>

          {/* Left — Info */}
          <div>
            <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              Let's Work Together
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.9', marginBottom: '2rem' }}>
              Have a project in mind? Looking for a developer? Or just want to say hello?
              Fill in the form and I will get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            {[
              { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Eldoret, Kenya' },
              { icon: <FaPhone />,        label: 'Phone',    value: '+254 706247561' },
              { icon: <FaEnvelope />,     label: 'Email',    value: 'otienomeshack099@gmail.com' },
            ].map((item) => (
              <div key={item.label} style={styles.infoCard}>
                <div style={styles.infoIcon}>{item.icon}</div>
                <div>
                  <p style={styles.infoLabel}>{item.label}</p>
                  <p style={styles.infoValue}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <h3 style={{ color: '#fff', fontWeight: '700', margin: '2rem 0 1rem' }}>Find Me Online</h3>
            <div style={styles.socials}>
              {[
                { icon: <FaGithub size={20} />,   href: 'https://github.com/YourUsername',     color: '#333',    label: 'GitHub' },
                { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/YourProfile', color: '#0077b5', label: 'LinkedIn' },
                { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/254706247561',          color: '#25d366', label: 'WhatsApp' },
                { icon: <FaEnvelope size={20} />, href: 'mailto:otienomeshack099@gmail.com',          color: '#ea4335', label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={styles.socialBtn}
                  onMouseOver={(e) => e.currentTarget.style.background = s.color}
                  onMouseOut={(e) => e.currentTarget.style.background = '#1e1e3f'}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={styles.formBox}>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ marginBottom: '1rem' }}>
                <input style={styles.input} name="name" placeholder="Your Name *"
                  value={form.name} onChange={handleChange} required />
                <input style={styles.input} name="email" type="email" placeholder="Your Email *"
                  value={form.email} onChange={handleChange} required />
              </div>
              <input style={{ ...styles.input, width: '100%', marginBottom: '1rem' }}
                name="subject" placeholder="Subject *"
                value={form.subject} onChange={handleChange} required />
              <textarea style={{ ...styles.input, width: '100%', height: '160px', resize: 'vertical', marginBottom: '1.5rem' }}
                name="message" placeholder="Your Message *"
                value={form.message} onChange={handleChange} required />
              <button type="submit" className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                disabled={loading}>
                {loading ? '⏳ Sending...' : '📩 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  header: { padding: '140px 0 60px', background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%)' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' },
  infoCard: { display: 'flex', gap: '1rem', alignItems: 'center', background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '1.2rem', marginBottom: '1rem' },
  infoIcon: { background: 'rgba(108,99,255,0.15)', color: '#6c63ff', padding: '12px', borderRadius: '10px', fontSize: '1.2rem', flexShrink: 0 },
  infoLabel: { color: '#94a3b8', fontSize: '0.8rem', marginBottom: '2px' },
  infoValue: { color: '#fff', fontWeight: '600' },
  socials: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  socialBtn: { display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', padding: '10px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600', transition: 'background 0.3s', cursor: 'pointer' },
  formBox: { background: '#1e1e3f', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '20px', padding: '2.5rem' },
  input: { width: '100%', padding: '14px 16px', background: '#111128', border: '1.5px solid rgba(108,99,255,0.2)', borderRadius: '10px', color: '#e2e8f0', fontSize: '0.95rem', outline: 'none', fontFamily: 'Inter, sans-serif' },
}

export default Contact