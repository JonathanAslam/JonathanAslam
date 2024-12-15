import React, { useState, useRef } from 'react';
import ToggleIcon from '../DarkLightToggle/ToggleIcon';
import { motion, useScroll, useTransform } from 'motion/react';

const MotionToggle = ({icon, onClick}) => {
  return (
    <motion.div className="toggle-container"
        whileTap={{rotate: "360deg"}}
        transition={{duration: 0.5}}
    >
        <ToggleIcon icon={icon} onClick={onClick}/>
    </motion.div>
  )
}

export default MotionToggle
