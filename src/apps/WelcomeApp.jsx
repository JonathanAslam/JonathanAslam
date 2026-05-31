import './WelcomeApp.css'

export default function WelcomeApp({ onClose }) {
  return (
    <div className="welcome-app">
      <div className="welcome-body">
        <div className="welcome-header">
          <span className="welcome-smiley">☺</span>
          <div className="welcome-heading">
            <h1 className="welcome-title">Welcome to Jonathan's Portfolio</h1>
            <p className="welcome-subtitle">Interactive Desktop Experience</p>
          </div>
        </div>

        <div className="welcome-divider" />

        <div className="welcome-content">
          <p className="welcome-intro">
            This portfolio is designed as an interactive desktop. Here's how to get started:
          </p>
          <ul className="welcome-list">
            <li>
              <strong>Open an app</strong> — click any icon on the desktop or the taskbar at the bottom
            </li>
            <li>
              <strong>Move windows</strong> — drag the blue title bar to reposition any window
            </li>
            <li>
              <strong>Minimize</strong> — click the <code>─</code> button; reopen from the taskbar
            </li>
            <li>
              <strong>Close</strong> — click the <code>×</code> button on any window
            </li>
          </ul>
          <p className="welcome-tip">
            Tip: You can open multiple apps at once and arrange them however you like.
          </p>
        </div>
      </div>

      <div className="welcome-footer">
        <button className="welcome-ok" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  )
}
