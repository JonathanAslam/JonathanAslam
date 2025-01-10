import React, {useEffect, useState} from 'react'
import './AboutMeNew.css'
import linkedinicon from '../../../assets/linkedin-icon.svg';
import githubicon from '../../../assets/github-icon.svg';

const AboutMeNew = () => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    /*useEffect function to create timer that will set 'setIsTyping' to true after 3.5 seconds 
    when the typing animtion has completed in the 'typewriter' id in the .css file*/
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTypingComplete(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='about-me-content' id='about-me-content'>
            <div className='welcome-text'>
                <h1 id='typewriter' className={isTypingComplete ? 'cursor' : ''}>
                    Hello I am Jonathan, please take a look around!
                </h1>
            </div>
            <div className="about-me-text">
                <h2>I am an aspiring game developer and web designer. Please take a look around my site and feel free to contact me! </h2>
                <div className='h3-and-icons'>
                    <h3>The icons to the side will take you to my LinkedIn and my GitHub profile.</h3>
                    <div className='social-media-icons'>
                        <a href='https://www.linkedin.com/in/jonathan-aslam/' target='_blank' rel='noreferrer'>
                            <img src={linkedinicon} alt='linkedin'/>
                        </a>
                        <a href="https://github.com/JonathanAslam/" target='_blank' rel='noreferrer'>
                            <img src={githubicon} alt='github'/>
                        </a>
                    </div>
                </div>  
            </div>

    </div>   
    )
}

export default AboutMeNew
