import { EXPERIENCES } from '../data/portfolioData'
import './ExperienceApp.css'

export default function ExperienceApp() {
  return (
    <div className="experience-app">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">Where I've worked</p>
      </div>
      <div className="experience-list">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="experience-entry">
            <div className="experience-entry-top">
              <div>
                <h3 className="experience-job-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
            </div>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
