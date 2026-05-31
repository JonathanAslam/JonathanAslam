import { useState, useEffect } from 'react'
import './MenuBar.css'

export default function MenuBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateStr = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className="menubar">
      <span className="menubar-name">Jonathan Aslam</span>
      <div className="menubar-right">
        <span className="menubar-date">{dateStr}</span>
        <span className="menubar-time">{timeStr}</span>
      </div>
    </div>
  )
}
