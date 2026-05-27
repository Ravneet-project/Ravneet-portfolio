import { portfolio } from '../data/portfolioData'
import '../styles/hero.css'

function Hero() {
  const { personal, stats, cubeFaces, floatingCards } = portfolio
  const cubeClasses = ['front', 'back', 'right', 'left', 'top', 'bottom']

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-one"></span>
        <span className="blob blob-two"></span>
        <span className="blob blob-three"></span>
      </div>

      <div className="container hero-container">
        <div className="hero-card">
          <div className="hero-content">
            <span className="hero-badge">
              <i className="bi bi-stars"></i>
              {personal.role}
            </span>

            <h1 className="hero-title">
              Hi, I&apos;m <span>{personal.name}</span>
            </h1>

            <p className="hero-intro">{personal.intro}</p>

            <div className="hero-actions">
              <a className="btn-glow" href="#projects">
                View Projects <i className="bi bi-arrow-right"></i>
              </a>

              <a className="btn-outline-glow" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="cube-wrap">
              <div className="cube">
                {cubeFaces.map((face, index) => (
                  <div key={face} className={`cube-face ${cubeClasses[index]}`}>
                    {face}
                  </div>
                ))}
              </div>
            </div>

            <div className="laptop-3d">
              <div className="laptop-screen">
                <div className="screen-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <pre>{`const developer = {
  name: "${personal.shortName}",
  stack: "MERN + PHP",
  passion: "UI/UX"
};`}</pre>
              </div>

              <div className="laptop-base"></div>
            </div>

            {floatingCards.map((card) => (
              <div key={card.text} className={`floating-card ${card.className}`}>
                <i className={`bi ${card.icon}`}></i>
                <span>{card.text}</span>
              </div>
            ))}

            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={`particle p${item}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero