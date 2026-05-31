import './Dock.css'

export default function Dock({ apps, windows, onAppClick }) {
  return (
    <div className="dock-wrap">
      <div className="dock">
        {apps.map((app) => {
          const win = windows[app.id]
          const isOpen = win?.open
          const isMinimized = win?.minimized
          return (
            <button
              key={app.id}
              className="dock-item"
              title={app.label}
              onClick={() => onAppClick(app.id)}
            >
              <div className="dock-icon" style={{ '--icon-color': app.color }}>
                <app.icon size={26} />
              </div>
              {isOpen && <span className={`dock-dot${isMinimized ? ' dim' : ''}`} />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
