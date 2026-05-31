import { useState, useCallback } from 'react'
import { AnimatePresence } from 'motion/react'
import { Analytics } from '@vercel/analytics/react'
import { FiUser, FiFolder, FiMail, FiInfo } from 'react-icons/fi'

import DesktopIcon from './components/DesktopIcon/DesktopIcon'
import Window from './components/Window/Window'
import Taskbar from './components/Taskbar/Taskbar'
import AboutApp from './apps/AboutApp'
import ProjectsApp from './apps/ProjectsApp'
import ContactApp from './apps/ContactApp'
import WelcomeApp from './apps/WelcomeApp'
import LoginScreen from './screens/LoginScreen'
import SplashScreen from './screens/SplashScreen'

import './App.css'

const APPS = [
  {
    id: 'about',
    label: 'About Me',
    icon: FiUser,
    color: '#505050',
    defaultPosition: { x: 120, y: 70 },
    defaultSize: { width: 660, height: 490 },
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: FiFolder,
    color: '#505050',
    defaultPosition: { x: 180, y: 90 },
    defaultSize: { width: 740, height: 540 },
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: FiMail,
    color: '#505050',
    defaultPosition: { x: 240, y: 110 },
    defaultSize: { width: 500, height: 480 },
  },
]

const WELCOME_CONFIG = {
  id: 'welcome',
  label: 'Welcome!',
  icon: FiInfo,
}

function welcomeInitialState() {
  const w = window.innerWidth
  const h = window.innerHeight
  return {
    welcome: {
      open: true,
      minimized: false,
      zIndex: 10,
      position: { x: Math.round(w / 2 - 220), y: Math.round(h / 2 - 180) },
      size: { width: 440, height: 360 },
    },
  }
}

export default function App() {
  // ── All hooks must be at the top, unconditionally ──
  const [phase, setPhase] = useState('login')
  const [windows, setWindows] = useState(welcomeInitialState)
  const [topZ, setTopZ] = useState(10)

  const openApp = useCallback((id) => {
    setTopZ((z) => {
      const next = z + 1
      setWindows((prev) => {
        if (prev[id]?.open) {
          return { ...prev, [id]: { ...prev[id], minimized: false, zIndex: next } }
        }
        const app = APPS.find((a) => a.id === id)
        return {
          ...prev,
          [id]: {
            open: true,
            minimized: false,
            zIndex: next,
            position: { ...app.defaultPosition },
            size: { ...app.defaultSize },
          },
        }
      })
      return next
    })
  }, [])

  const openWelcome = useCallback(() => {
    setTopZ((z) => {
      const next = z + 1
      setWindows((prev) => {
        if (prev.welcome?.open) {
          return { ...prev, welcome: { ...prev.welcome, minimized: false, zIndex: next } }
        }
        const { welcome } = welcomeInitialState()
        return { ...prev, welcome: { ...welcome, zIndex: next } }
      })
      return next
    })
  }, [])

  const closeApp = useCallback((id) => {
    setWindows((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const minimizeApp = useCallback((id) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], minimized: true } }))
  }, [])

  const focusApp = useCallback((id) => {
    setTopZ((z) => {
      const next = z + 1
      setWindows((prev) => ({ ...prev, [id]: { ...prev[id], zIndex: next } }))
      return next
    })
  }, [])

  const moveWindow = useCallback((id, position) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], position } }))
  }, [])

  const getConfig = (id) => {
    if (id === 'welcome') return WELCOME_CONFIG
    return APPS.find((a) => a.id === id)
  }

  // ── Phase rendering ────────────────────────────────
  if (phase === 'login') {
    return <LoginScreen onLogin={() => setPhase('splash')} />
  }

  if (phase === 'splash') {
    return <SplashScreen onComplete={() => setPhase('desktop')} />
  }

  return (
    <div className="desktop" onClick={() => document.activeElement?.blur()}>
      <div className="desktop-area">
        <div className="desktop-icons-grid">
          {APPS.map((app) => (
            <DesktopIcon
              key={app.id}
              id={app.id}
              label={app.label}
              icon={app.icon}
              color={app.color}
              isOpen={!!windows[app.id]?.open}
              onOpen={openApp}
            />
          ))}
        </div>

        <AnimatePresence>
          {Object.entries(windows).map(([id, state]) => {
            const config = getConfig(id)
            return state.open && !state.minimized ? (
              <Window
                key={id}
                id={id}
                title={config?.label}
                icon={config?.icon}
                state={state}
                onClose={() => closeApp(id)}
                onMinimize={() => minimizeApp(id)}
                onFocus={() => focusApp(id)}
                onMove={(pos) => moveWindow(id, pos)}
              >
                {id === 'about'    && <AboutApp />}
                {id === 'projects' && <ProjectsApp />}
                {id === 'contact'  && <ContactApp />}
                {id === 'welcome'  && <WelcomeApp onClose={() => closeApp('welcome')} />}
              </Window>
            ) : null
          })}
        </AnimatePresence>
      </div>

      <Taskbar
        apps={APPS}
        windows={windows}
        onAppClick={openApp}
        onStartClick={openWelcome}
      />
      <Analytics />
    </div>
  )
}
