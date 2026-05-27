import { portfolio } from '../data/portfolioData'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-bg"></div>

      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>
              <span>R</span>
              {portfolio.personal.shortName}
            </h2>

            <p>
              Full Stack Developer crafting modern, responsive and scalable
              web experiences with clean UI and powerful backend systems.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Ravneet-project"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/ravneet-kaur-aa2b332a8"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="mailto:ravneet.sawhney123@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <p>
            © {year} {portfolio.personal.shortName}. All Rights Reserved.
          </p>

          <span>Designed & Developed with ❤️ by Ravneet</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer