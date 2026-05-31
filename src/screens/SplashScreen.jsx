import { useEffect, useState } from 'react'
import './SplashScreen.css'

const DURATION = 2800 // ms total before transitioning

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Starting up...')

  useEffect(() => {
    const steps = [
      { at: 0,    progress: 0,   text: 'Starting up...' },
      { at: 400,  progress: 20,  text: 'Loading system files...' },
      { at: 900,  progress: 45,  text: 'Initializing desktop...' },
      { at: 1500, progress: 70,  text: 'Loading user profile...' },
      { at: 2000, progress: 90,  text: 'Almost ready...' },
      { at: 2400, progress: 100, text: 'Welcome!' },
    ]

    const timers = steps.map(({ at, progress, text }) =>
      setTimeout(() => {
        setProgress(progress)
        setStatusText(text)
      }, at)
    )

    const done = setTimeout(onComplete, DURATION)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(done)
    }
  }, [onComplete])

  return (
    <div className="splash-bg">
      <div className="splash-center">
        <div className="splash-smiley">☺</div>
        <h1 className="splash-title">Jonathan's Computer</h1>
        <p className="splash-version">Portfolio Edition — 2026</p>
      </div>

      <div className="splash-bottom">
        <p className="splash-status">{statusText}</p>
        <div className="splash-bar-track">
          <div
            className="splash-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
