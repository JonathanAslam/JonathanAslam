import React, { useState, useRef } from 'react';
import './PageContent.css';
import AboutMeNew from '../Sections/AboutMe/AboutMe(new)';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import MotionToggle from '../MotionElements/MotionToggle';
import Navbar from '../Navbar/Navbar';
import RenderModelOne from '../ThreeJS/RenderModelOne';
import ContactMe from '../Sections/Contact/ContactMe';
import Projects from '../Sections/Projects/Projects';
import Skills from '../Sections/Skills/Skills';

// import emileAsset from '../../assets/emile-scene.gltf';

const PageContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMainPageHidden, setIsMainPageHidden] = useState(false);
  const [icon, setIcon] = useState(<MdLightMode />);
  const mainPageRef = useRef(null);
  const wholePageRef = useRef(null);
  const modelBackgroundColor = 'var(--section-bg-color)';

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIcon(isDarkMode ? <MdDarkMode /> : <MdLightMode />);
  };

  const toggleNoScroll = (add) => {
    if (mainPageRef.current) {
      if (add) {
        mainPageRef.current.classList.add('no-scroll');
      } else {
        mainPageRef.current.classList.remove('no-scroll');
      }
    }
  };

  const toggleHideMainPage = () => {
    if (wholePageRef.current && mainPageRef.current) {
      if (isMainPageHidden) {
        mainPageRef.current.classList.remove('hidden');
        setIsMainPageHidden(false);
      } else {
        mainPageRef.current.classList.add('hidden');
        setIsMainPageHidden(true);
      }
    }
  };

  return (
    <div className="whole-page" ref={wholePageRef} data-theme={isDarkMode ? "dark" : "light"}>
      <div className="set-toggle-duration">
        <MotionToggle icon={icon} onClick={toggleDarkMode} />
      </div>

      <div className='hide-main-page' onClick={toggleHideMainPage}>
        <ul>
          <li>
            <p>Click On Me!</p>
          </li>
        </ul>
      </div>

      {/* need to figure out how to get it to resize without reloading page, canvas does not want to resize until page is reloaded */}
      <div className='three-js-scene' >
        <RenderModelOne backgroundColor={modelBackgroundColor}/>
      </div>

      <div className="main-page" ref={mainPageRef}>        
        {/* scroll bar feature */}
        {/* <MotionScrollBar targetRef={mainPageRef} /> */}
        {/* navbar component */}
        <div className='main-page-content'>
          <Navbar toggleNoScroll={toggleNoScroll}/>
          {/* sections */}
          <AboutMeNew/>
          <div id="section1">
            <ul>
              <li>something1</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
          <div id="section9">
            <ul>
              <li>something9</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
              <li>something</li>
            </ul>
          </div>
          <div className='project-section'>
            <Projects/>
          </div>
          <div className='skill-section'>
            <Skills/>
          </div>
          <div className='contact-section'>
            <ContactMe/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;