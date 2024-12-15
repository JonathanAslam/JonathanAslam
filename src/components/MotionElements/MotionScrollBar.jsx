import React from 'react'
import { motion, useScroll} from 'motion/react'
import { div } from 'motion/react-client';

const MotionScrollBar = ({targetRef}) => {
    const { scrollYProgress } = useScroll({
        target: targetRef
    });
        
  return (
    <div>
        <motion.div
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            background: "var(--scrollbar-color)",
            position: "fixed",
            width: "95vw",
            height: "10px",
        }}
        />
    </div>
  )
}

export default MotionScrollBar
