import './ExperienceApp.css'

const EXPERIENCES = [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    period: 'Jan 2024 – Present',
    location: 'City, State',
    bullets: [
      'Key responsibility or achievement one.',
      'Key responsibility or achievement two.',
      'Key responsibility or achievement three.',
    ],
  },
  {
    id: 2,
    title: 'Job Title',
    company: 'Company Name',
    period: 'May 2023 – Aug 2023',
    location: 'City, State',
    bullets: [
      'Key responsibility or achievement one.',
      'Key responsibility or achievement two.',
    ],
  },
  {
    id: 3,
    title: 'Job Title',
    company: 'Company Name',
    period: 'Jan 2023 – Apr 2023',
    location: 'City, State',
    bullets: [
      'Key responsibility or achievement one.',
      'Key responsibility or achievement two.',
    ],
  },
]

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
