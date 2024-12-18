import React from 'react'
import './Projects.css'
import purpleImage from '../../../assets/purpleImage.png'

const Projects = () => {
  return (
    <div className='project-page-content' id='project-page'>
        <h1>Projects:</h1>
      <ul className='project-list-items'>
        <a href="https://github.com/JonathanAslam/ParkNow362/" target='_blank' rel='noreferrer'>
          <li>
            Park Now
            <br />
            <br />
            (still in development)
          </li>
        </a>
        <a href="https://google.com" target='_blank' rel='noreferrer'>
          <li>
            Pygame Platformer
            <br />
            <br />
            (still in development <br /> links to google.com)
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Projects
