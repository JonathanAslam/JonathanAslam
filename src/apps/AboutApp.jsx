import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'
import profileImg from '../assets/profileImage.jpg'
import './AboutApp.css'

const SKILLS = [
  { label: 'Languages', items: ['JavaScript', 'Python', 'HTML/CSS', 'SQL'] },
  { label: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Vite'] },
  { label: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Vercel'] },
]

export default function AboutApp() {
  return (
    <div className="about-app">
      <div className="about-hero">
        <img src={profileImg} alt="Jonathan Aslam" className="about-photo" />
        <div className="about-intro">
          <h1 className="about-name">Jonathan Aslam</h1>
          <p className="about-role">Software Developer</p>
          <p className="about-bio">
            Hey! I'm Jonathan, a developer who loves building clean, thoughtful digital experiences.
            I enjoy working across the full stack — from designing intuitive UIs to architecting
            solid back-end systems. Always learning, always building.
          </p>
          <div className="about-links">
            <a href="https://github.com/JonathanAslam" target="_blank" rel="noreferrer" className="about-link">
              <FiGithub size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/jonathanaslam" target="_blank" rel="noreferrer" className="about-link">
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <h2 className="about-section-title">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div key={group.label} className="skill-group">
              <h3 className="skill-group-title">{group.label}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
