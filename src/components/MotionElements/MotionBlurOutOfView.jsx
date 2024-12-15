import React from 'react'
import { motion } from 'motion/react'
import { duration } from '@mui/material'

const MotionBlurOutOfView = ({Component}) => {
  return (
    <motion.div
        initial={{opacity: .2}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        component={Component}
    />
  )
}

export default MotionBlurOutOfView
