import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PROJECTS } from '../data/portfolioData'
import './ProjectsApp.css'

export default function ProjectsApp() {
  return (
    <div className="projects-app">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">Things I've built and shipped</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-top">
              <h3 className="project-name">{project.title}</h3>
              <div className="project-card-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                    <FiGithub size={15} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link" title="Live">
                    <FiExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="project-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
