import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiMonitor } from 'react-icons/fi'
import { PROFILE, SKILLS, EXPERIENCES, PROJECTS } from '../data/portfolioData'
import './SimplePortfolio.css'

export default function SimplePortfolio({ onLaunch }) {
  return (
    <div className="simple-portfolio">
      <header className="sp-hero">
        <p className="sp-eyebrow">Portfolio</p>
        <h1 className="sp-name">{PROFILE.name}</h1>
        <p className="sp-role">{PROFILE.role}</p>
        <p className="sp-bio">{PROFILE.bio}</p>

        <div className="sp-links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="sp-link">
            <FiGithub size={16} /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="sp-link">
            <FiLinkedin size={16} /> LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="sp-link">
            <FiMail size={16} /> Email
          </a>
        </div>

        <button type="button" className="sp-launch-btn" onClick={onLaunch}>
          <FiMonitor size={16} />
          View the Interactive Desktop Experience
        </button>
      </header>

      <main className="sp-main">
        <section className="sp-section">
          <h2 className="sp-section-title">Skills</h2>
          <div className="sp-skills-grid">
            {SKILLS.map((group) => (
              <div key={group.label} className="sp-skill-group">
                <h3 className="sp-skill-group-title">{group.label}</h3>
                <div className="sp-skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="sp-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sp-section">
          <h2 className="sp-section-title">Experience</h2>
          <div className="sp-experience-list">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="sp-experience-entry">
                <div className="sp-experience-top">
                  <div>
                    <h3 className="sp-experience-role">{exp.title}</h3>
                    <p className="sp-experience-company">{exp.company}</p>
                  </div>
                  <div className="sp-experience-meta">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="sp-experience-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="sp-section">
          <h2 className="sp-section-title">Projects</h2>
          <div className="sp-projects-grid">
            {PROJECTS.map((project) => (
              <div key={project.id} className="sp-project-card">
                <div className="sp-project-top">
                  <h3 className="sp-project-title">{project.title}</h3>
                  <div className="sp-project-card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                        <FiGithub size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live">
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="sp-project-desc">{project.description}</p>
                <div className="sp-project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="sp-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="sp-footer">
        <p>Want to see the fun version?</p>
        <button type="button" className="sp-launch-btn" onClick={onLaunch}>
          <FiMonitor size={16} />
          Launch Desktop Experience
        </button>
      </footer>
    </div>
  )
}
