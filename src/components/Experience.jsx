import '../styles/experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Assistant Web Developer & Web Designer',
      company: 'MakeStudy',
      period: 'Current',
      description:
        'Working on responsive web pages, UI improvements and modern design implementation.',
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'DC Infotech',
      period: 'Internship',
      description:
        'Built and integrated full stack features using MongoDB, Express, React and Node.js.',
    },
  ]

  const contacts = [
    { icon: 'bi-geo-alt-fill', text: 'Jalandhar, Punjab, India' },
    { icon: 'bi-envelope-fill', text: 'ravneet.sawhney123@gmail.com' },
    { icon: 'bi-telephone-fill', text: '+91 62834 41364' },
    { icon: 'bi-linkedin', text: 'in/ravneet-kaur-aa2b332a8' },
    { icon: 'bi-github', text: 'github.com/Ravneet-project' },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-bg" aria-hidden="true">
        <span className="exp-glow glow-one"></span>
        <span className="exp-glow glow-two"></span>
        <span className="exp-dot dot-one"></span>
        <span className="exp-dot dot-two"></span>
      </div>

      <div className="container experience-container">
        <div className="experience-card">
          <span className="experience-badge">Experience & Contact</span>

          <div className="experience-block">
            <h2>Experience</h2>
            <div className="heading-line"></div>

            <div className="timeline">
              {experiences.map((experience) => (
                <article
                  key={`${experience.title}-${experience.company}`}
                  className="timeline-item"
                >
                  <span className="timeline-dot"></span>

                  <h3>{experience.title}</h3>

                  <p className="meta">
                    {experience.company} • {experience.period}
                  </p>

                  <p className="desc">{experience.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="contact-block">
            <h2>Get In Touch</h2>
            <div className="heading-line"></div>

            <div className="contact-list">
              {contacts.map((item) => (
                <div className="contact-row" key={item.text}>
                  <span>
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <a href="mailto:ravneet.sawhney123@gmail.com" className="send-btn">
              Send Message <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience