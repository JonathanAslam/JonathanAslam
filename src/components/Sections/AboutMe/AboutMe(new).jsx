import React, {useEffect, useState} from 'react'
import './AboutMeNew.css'

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
        </div>
    )
}

export default AboutMeNew
