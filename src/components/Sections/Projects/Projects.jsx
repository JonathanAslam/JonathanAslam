import React from 'react'
import './Projects.css'
import purpleImage from '../../../assets/purpleImage.png'

const Projects = () => {
  return (
    <div className='project-page-content' id='project-page'>
        <h1>Projects:</h1>
      <ul className='project-list-items'>
        <a href="https://github.com/JonathanAslam/JohnsAimLabs" target='_blank' rel='noreferrer'>
          <li>
            John'sAimLabs
            <br />
            <br />
            Built in Unity 3D
          </li>
        </a>
        <a href="https://github.com/JonathanAslam/Flarpy-Byrd" target='_blank' rel='noreferrer'>
          <li>
            Flarpy Byrd
            <br />
            <br />
            Built in Unity 2D
          </li>
        </a>
        <a href="https://github.com/JonathanAslam/CoolSpaceGames/" target='_blank' rel='noreferrer'>
          <li>
            CoolSpaceGames
            <br />
            <br />
            ReactJS + WebGL
            <br />
            Unity 2D and 3D
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Projects
