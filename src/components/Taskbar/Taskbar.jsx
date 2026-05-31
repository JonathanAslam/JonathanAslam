import { useState, useEffect } from 'react'
import { FiMonitor } from 'react-icons/fi'
import './Taskbar.css'

export default function Taskbar({ apps, windows, onAppClick, onStartClick }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateStr = now.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: '2-digit' })

  return (
    <div className="taskbar">

      {/* Start button */}
      <button className="taskbar-start" onClick={onStartClick}>
        <span className="start-smiley">☺</span>
        <span className="start-label">Start</span>
      </button>

      {/* Vertical separator */}
      <div className="taskbar-sep" />

      {/* Jonathan's Computer */}
      <div className="taskbar-computer">
        <FiMonitor size={15} />
        <span>Jonathan's Computer</span>
      </div>

      {/* Vertical separator */}
      <div className="taskbar-sep" />

      {/* Open app buttons */}
      <div className="taskbar-apps">
        {apps.map((app) => {
          const win = windows[app.id]
          const isOpen = win?.open
          const isMinimized = win?.minimized
          return (
            <button
              key={app.id}
              className={`taskbar-app-btn${isOpen ? (isMinimized ? ' minimized' : ' active') : ''}`}
              onClick={() => onAppClick(app.id)}
              title={app.label}
            >
              <app.icon size={14} />
              <span>{app.label}</span>
            </button>
          )
        })}
      </div>

      {/* System tray — clock */}
      <div className="taskbar-tray">
        <span className="tray-time">{timeStr}</span>
        <span className="tray-date">{dateStr}</span>
      </div>

    </div>
  )
}
