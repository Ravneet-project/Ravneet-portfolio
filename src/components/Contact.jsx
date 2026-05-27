import { useState } from 'react'
import { portfolio } from '../data/portfolioData'
import '../styles/contact.css'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')
  const { personal } = portfolio

  const contactCards = [
    {
      title: 'Location',
      value: 'Jalandhar, Punjab, India',
      icon: 'bi-geo-alt-fill',
    },
    {
      title: 'Email',
      value: personal.email || 'ravneet.sawhney123@gmail.com',
      href: `mailto:${personal.email || 'ravneet.sawhney123@gmail.com'}`,
      icon: 'bi-envelope-fill',
    },
    {
      title: 'LinkedIn',
      value: 'ravneet-kaur-aa2b332a8',
      href: 'https://www.linkedin.com/in/ravneet-kaur-aa2b332a8',
      icon: 'bi-linkedin',
    },
    {
      title: 'GitHub',
      value: 'Ravneet-project',
      href: 'https://github.com/Ravneet-project',
      icon: 'bi-github',
    },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Please fill all fields before sending message.')
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:${personal.email || 'ravneet.sawhney123@gmail.com'}?subject=${subject}&body=${body}`
    setStatus('Email app opened. You can send the message from there.')
    setFormData(initialForm)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg" aria-hidden="true">
        <span className="contact-glow glow-one"></span>
        <span className="contact-glow glow-two"></span>
        <span className="contact-dot dot-one"></span>
        <span className="contact-dot dot-two"></span>
      </div>

      <div className="container contact-container">
        <div className="contact-panel">
          <div className="contact-header">
            <span>Get In Touch</span>
            <h2>Contact</h2>
            <div className="contact-line"></div>
            <p>
              Open to collaborations, freelance work, internships and full-time
              opportunities.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              {contactCards.map((card) => (
                <article key={card.title} className="contact-card">
                  <div className="contact-card-icon">
                    <i className={`bi ${card.icon}`}></i>
                  </div>

                  <div>
                    <h3>{card.title}</h3>

                    {card.href ? (
                      <a href={card.href} target="_blank" rel="noreferrer">
                        {card.value}
                      </a>
                    ) : (
                      <p>{card.value}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title">
                <h3>Send Message</h3>
                <p>I will get back to you soon.</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {status ? <p className="form-status">{status}</p> : null}

              <button type="submit" className="contact-submit">
                Send Message <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact