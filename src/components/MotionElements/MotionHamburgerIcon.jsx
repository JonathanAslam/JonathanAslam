import React, {useState, useEffect} from 'react'
import './MotionHamburgerIcon.css'
import {motion, MotionConfig} from 'motion/react'

const MotionHamburgerIcon = ({toggleOpen, onClick}) => {
    const [toggleActive, setToggleActive] = useState(toggleOpen);
    
    useEffect(() => {
        setToggleActive(toggleOpen);
    }, [toggleOpen]);

    const handleClick = () => {
        setToggleActive(!toggleActive);
        onClick();
    }
return (
    <MotionConfig transition={{duration: 0.5, ease: "easeInOut"}}>
        <motion.button 
            id='hamburger-icon' 
            onClick={handleClick}
            animate={toggleActive ? "open" : "close"}
            >
            {/* button span (creating the graphic) */}
            <motion.span id='top'
                style={{
                    top: "35%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "45deg"],
                        top: ["35%", "50%", "50%"],
                        
                    },
                    close: {
                        rotate: ["45deg", "0deg", "0deg"],
                        top: ["50%", "50%", "35%"],
                    }
                }}
                />
            <motion.span id='middle'
                style={{
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                variants={{
                    open: {
                        opacity: [1, 0, 0],
                    },
                    close: {
                        opacity: [0, 0, 1],
                    }
                }}        
                />
            <motion.span id='bottom'
                style={{
                    bottom: "35%",
                    left: "50%",
                    x: "-50%",
                    y: "50%"
                }}
                variants={{
                    open: {
                        rotate: ["0deg", "0deg", "-45deg"],
                        bottom: ["35%", "50%", "50%"],
                    },
                    close: {
                        rotate: ["-45deg", "0deg", "0deg"],
                        bottom: ["50%", "50%", "35%"],
                    }
                }}    
                />
        </motion.button>
    </MotionConfig>
    )
}

export default MotionHamburgerIcon
