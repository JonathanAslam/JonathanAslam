import React from 'react'
import './ToggleIcon.css'

const ToggleIcon = ({icon, onClick}) => {
  return (
      // <div className='icon-border' onClick={onClick}>
      //     {icon}
      // </div>
      <div className="icon-border" onClick={onClick}>
        {icon}
      </div>

  )
}

export default ToggleIcon
