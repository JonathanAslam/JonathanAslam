import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './ProjectsApp.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of what this project does, the problem it solves, and what you learned building it.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 2,
    title: 'Hackathon Project',
    description: 'Built during a hackathon — a fast-paced project that pushed the limits of what could be shipped in 24 hours.',
    tech: ['Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Another project showcasing a different aspect of your skill set or interests.',
    tech: ['TypeScript', 'React', 'Vite'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A project description goes here — talk about the impact, the stack, and your role in building it.',
    tech: ['Next.js', 'Tailwind', 'Supabase'],
    github: 'https://github.com/JonathanAslam',
    live: null,
  },
]

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
