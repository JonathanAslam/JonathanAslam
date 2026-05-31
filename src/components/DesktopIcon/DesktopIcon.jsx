import { useState } from 'react'
import './DesktopIcon.css'

export default function DesktopIcon({ id, label, icon: Icon, color, onOpen, isOpen }) {
  const [selected, setSelected] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation()
    setSelected(true)
    onOpen(id)
  }

  const handleBlur = () => setSelected(false)

  return (
    <div
      className={`desktop-icon${selected ? ' selected' : ''}`}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div className="desktop-icon-img" style={{ '--icon-color': color }}>
        <Icon size={28} />
      </div>
      <span className="desktop-icon-label">{label}</span>
      {isOpen && <div className="desktop-icon-dot" />}
    </div>
  )
}
