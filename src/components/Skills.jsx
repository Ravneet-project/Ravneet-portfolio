import '../styles/skills.css'

function Skills() {
  const skillItems = [
    { name: 'React.js', icon: 'bi-hurricane', category: 'Frontend' },
    { name: 'Next.js', icon: 'bi-lightning-charge', category: 'Frontend' },
    { name: 'JavaScript', icon: 'bi-filetype-js', category: 'Frontend' },
    { name: 'HTML5', icon: 'bi-filetype-html', category: 'Frontend' },
    { name: 'CSS3', icon: 'bi-filetype-css', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'bi-bootstrap', category: 'Frontend' },
    { name: 'Redux Toolkit', icon: 'bi-diagram-3', category: 'Frontend' },
    { name: 'Node.js', icon: 'bi-node-plus', category: 'Backend' },
    { name: 'Express.js', icon: 'bi-hdd-network', category: 'Backend' },
    { name: 'REST APIs', icon: 'bi-plug', category: 'Backend' },
    { name: 'PHP CodeIgniter', icon: 'bi-filetype-php', category: 'Backend' },
    { name: 'MongoDB', icon: 'bi-database', category: 'Database' },
    { name: 'MySQL', icon: 'bi-server', category: 'Database' },
    { name: 'Postman', icon: 'bi-send', category: 'Tools' },
    { name: 'GitHub', icon: 'bi-github', category: 'Tools' },
    { name: 'API Testing', icon: 'bi-bug', category: 'Tools' },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg" aria-hidden="true">
        <span className="skills-glow glow-left"></span>
        <span className="skills-glow glow-right"></span>
        <span className="skills-dot dot-one"></span>
        <span className="skills-dot dot-two"></span>
      </div>

      <div className="container skills-container">
        <div className="skills-panel">
          <div className="skills-header">
            <span>What I do</span>
            <h2>
              Skills <em>&</em>
              <br />
              Technologies
            </h2>
            <p>
              I build responsive, modern and scalable web applications using
              frontend, backend, database and development tools.
            </p>
          </div>

          <div className="skills-content">
            <div className="skills-grid">
              {skillItems.map((skill, index) => (
                <article
                  className="skill-card"
                  key={skill.name}
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="skill-icon">
                    <i className={`bi ${skill.icon}`}></i>
                  </div>

                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </article>
              ))}
            </div>

            <div className="skills-right-lines" aria-hidden="true">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="skills-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills  