import { useRef } from 'react'
import { motion } from 'motion/react'
import './Window.css'

export default function Window({ id, title, icon: Icon, children, state, onClose, onMinimize, onFocus, onMove }) {
  const { position, size, zIndex } = state
  const drag = useRef(null)

  const handleTitleBarMouseDown = (e) => {
    if (e.button !== 0) return
    if (e.target.closest('.window-controls')) return
    e.preventDefault()
    onFocus()

    drag.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    }

    const onMove_ = (e) => {
      if (!drag.current) return
      const x = e.clientX - drag.current.startX
      const y = Math.max(0, e.clientY - drag.current.startY)
      onMove({ x, y })
    }

    const onUp = () => {
      drag.current = null
      window.removeEventListener('mousemove', onMove_)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove_)
    window.addEventListener('mouseup', onUp)
  }

  return (
    <motion.div
      className="window"
      style={{ left: position.x, top: position.y, width: size.width, height: size.height, zIndex }}
      initial={{ opacity: 0, scale: 0.9, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 16, transition: { duration: 0.16 } }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      onMouseDown={onFocus}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="window-titlebar" onMouseDown={handleTitleBarMouseDown}>
        <div className="window-title">
          {Icon && <Icon size={12} />}
          <span>{title}</span>
        </div>
        <div className="window-controls">
          <button className="win-btn" onClick={(e) => { e.stopPropagation(); onMinimize() }}>─</button>
          <button className="win-btn" disabled>□</button>
          <button className="win-btn win-btn-close" onClick={(e) => { e.stopPropagation(); onClose() }}>×</button>
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </motion.div>
  )
}
