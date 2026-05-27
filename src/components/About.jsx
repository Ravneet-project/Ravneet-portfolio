import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolioData'
import profileGirl from '../assets/profile-girl.jpg'
import '../styles/about.css'

function About() {
  const { personal } = portfolio
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0))
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="about-bg" aria-hidden="true">
        <span className="about-glow glow-one"></span>
        <span className="about-glow glow-two"></span>
        <span className="about-dot dot-one"></span>
        <span className="about-dot dot-two"></span>
      </div>

      <div className="container about-container">
        <div className="about-slider-card">
          <div
            className="about-slider-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            <div className="about-slide about-intro-slide">
              <div className="about-info-panel">
                <span className="slide-label">About Me</span>

                <h3>
                  Turning <span>ideas</span>
                  <br />
                  into clean web
                  <br />
                  experiences.
                </h3>

                <p>
                  I am a Full Stack Developer with hands-on experience in React.js,
                  JavaScript, PHP CodeIgniter, Node.js, MongoDB and MySQL. I focus
                  on building practical, responsive and user-friendly web applications.
                </p>
              </div>

              <div className="about-photo-panel">
                <div className="orbit-wrap">
                  <span className="orbit-line"></span>
                  <span className="orbit-star star-left">✦</span>
                  <span className="orbit-star star-right">✶</span>

                  <div className="main-photo-circle">
                    <img src={profileGirl} alt={personal.name} />
                  </div>

                  <div className="mini-photo mini-one">
                    <img src={profileGirl} alt={personal.name} />
                  </div>

                  <div className="mini-photo mini-two">
                    <img src={profileGirl} alt={personal.name} />
                  </div>
                </div>
              </div>

              <div className="about-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>CodeIgniter</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="about-slide about-highlight-slide">
              <div className="about-photo-panel">
                <div className="profile-card">
                  <img src={profileGirl} alt={personal.name} />
                  <h3>{personal.name}</h3>
                  <p>{personal.role}</p>
                </div>
              </div>

              <div className="about-info-panel">
                <span className="slide-label">Profile Highlights</span>

                <h3>Why I fit this role</h3>

                <div className="about-points">
                  <div>
                    <strong>Frontend</strong>
                    <p>Modern UI, responsive layouts and smooth user experience.</p>
                  </div>

                  <div>
                    <strong>Backend</strong>
                    <p>APIs, database handling and clean application structure.</p>
                  </div>

                  <div>
                    <strong>Mindset</strong>
                    <p>Fast learner, problem solver and ready for real-world projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-dots">
            <button
              type="button"
              className={activeSlide === 0 ? 'active' : ''}
              onClick={() => setActiveSlide(0)}
            ></button>

            <button
              type="button"
              className={activeSlide === 1 ? 'active' : ''}
              onClick={() => setActiveSlide(1)}
            ></button>

            <button type="button"></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About