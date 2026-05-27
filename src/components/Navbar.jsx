import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolioData'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { personal, navLinks } = portfolio

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section) {
          const top = section.offsetTop - 130
          const height = section.offsetHeight

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(link.id)
          }
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }

    setMobileMenu(false)
  }

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-custom">
          <button type="button" className="logo" onClick={() => scrollToSection('home')}>
            <span>{personal.initials.charAt(0)}</span>{personal.shortName}
          </button>

          <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href={personal.github} target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>

            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>

            <button
              type="button"
              className={`mobile-toggle ${mobileMenu ? 'active' : ''}`}
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
