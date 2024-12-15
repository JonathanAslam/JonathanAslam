import React, {useEffect, useState} from 'react'
import './Navbar.css';
import MotionHamburgerIcon from '../MotionElements/MotionHamburgerIcon';
import {motion, MotionConfig} from 'motion/react';

const Navbar = ({toggleNoScroll}) => {
    const [isToggled, setIsToggled] = useState("load");
    const [toggleState, setToggleState] = useState(false);
    
    const handleToggleClick = () => {
        if (isToggled === "load") {
            setIsToggled(true);
        } else {
            setIsToggled(!isToggled);
        }
        setToggleState(!toggleState);
    };

    const handleLinkClick = () => {
        setIsToggled(false);
        setToggleState(false);
    }
    // we created a no-scroll class in the css file to prevent scrolling when the navbar is open.
    // we add the class to the body when the navbar is open and remove it when it is closed.
    useEffect(() => {
        if (isToggled === true) {
            toggleNoScroll(true);
        } else {
            toggleNoScroll(false);
        }
    }, [isToggled, toggleNoScroll]);

    return (
        // z-index style seems to work, keep for now
        // alternative to current: style={{zIndex: isToggled ? 2 : 'auto'}} AND remove zIndex from close: in variants
    <motion.div className='navbar' style={{zIndex: isToggled ? 2 : 'auto'}}>
        <div id='hamburger-icon-position' onClick={handleToggleClick}>
            <MotionHamburgerIcon toggleOpen={toggleState} onClick={handleLinkClick} />
        </div>
        <MotionConfig >
            <motion.div transition={{duration: 1, ease: "easeInOut"}}
                className="page-links"
                id='blur'
                initial={{opacity: 0}}
                animate={isToggled === "load" ? "load": {opacity: isToggled? 1 : 0}}
                // style={{zIndex: isToggled ? normal : 2}}
                >
                    <motion.ul
                        variants={{
                            open: {
                                opacity: 1,
                            },
                            close: {
                                opacity: 0,
                                zIndex: 'auto',
                            },
                            load: {
                                opacity: 0,
                            }
                        }}
                        >
                            {/*  */}
                            {/* WORK ON BLUR EFFECT IN NAVBAR.CSS */}
                            {/*  */}
                        <div>
                            <li onClick={handleLinkClick}>
                                <a href="#">Home</a>
                            </li>
                            <li onClick={handleLinkClick}>
                                <a href="#about-me-content">About</a>
                            </li>
                            <li onClick={handleLinkClick}>
                                <a href="">Projects</a>
                            </li>
                            <li onClick={handleLinkClick}>
                                <a href="">Skills</a>
                            </li>
                            <li onClick={handleLinkClick}>
                                <a href="">Contact</a>
                            </li>
                        </div>  
                    </motion.ul>
            </motion.div>
        </MotionConfig>
    </motion.div>
    );
};

export default Navbar;
