import academicImg from '../assets/academic-project.png'
import shopsphereImg from '../assets/shopsphere-project.png'
import feedoneImg from '../assets/feedone-project.png'
import feedbackImg from '../assets/feedback-project.png'

import '../styles/projects.css'

function Projects() {
  const projects = [
    {
      title: 'Academic Complaints Project',
      category: 'MERN Stack',
      image: academicImg,
      url: 'https://academic-complaints-fr.vercel.app/',
    },
    {
      title: 'ShopSphere',
      category: 'E-commerce',
      image: shopsphereImg,
      url: 'https://shopsphere-ochre.vercel.app/',
    },
    {
      title: 'FeedOne Project',
      category: 'Donation Platform',
      image: feedoneImg,
      url: 'https://feedone.free.nf/',
    },
    {
      title: 'Feedback Portal',
      category: 'Dashboard System',
      image: feedbackImg,
      url: '#',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg" aria-hidden="true">
        <span className="project-glow glow-orange"></span>
        <span className="project-glow glow-red"></span>
      </div>

      <div className="container projects-container">
        <div className="projects-panel">
          <div className="projects-header">
            <span>Featured Work</span>

            <h2>Projects</h2>

            <div className="title-line"></div>

            <p>
              Practical web applications built with modern UI, backend logic,
              database handling and real-world problem solving.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <a
                href={project.url}
                target={project.url === '#' ? '_self' : '_blank'}
                rel="noreferrer"
                className="project-item"
                key={project.title}
              >
                <div className="project-thumb">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <span className="open-icon">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </a>
            ))}
          </div>

          <div className="project-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects