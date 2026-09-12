import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'
import profileImg from '../assets/profileImage.jpg'
import { PROFILE, SKILLS } from '../data/portfolioData'
import './AboutApp.css'

export default function AboutApp() {
  return (
    <div className="about-app">
      <div className="about-hero">
        <img src={profileImg} alt={PROFILE.name} className="about-photo" />
        <div className="about-intro">
          <h1 className="about-name">{PROFILE.name}</h1>
          <p className="about-role">{PROFILE.role}</p>
          <p className="about-bio">{PROFILE.bio}</p>
          <div className="about-links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="about-link">
              <FiGithub size={16} /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="about-link">
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
