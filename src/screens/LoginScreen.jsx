import { useRef } from 'react'
import './LoginScreen.css'

export default function LoginScreen({ onLogin }) {
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="login-bg">
      <form className="login-dialog" onSubmit={handleSubmit}>

        {/* Title bar */}
        <div className="login-titlebar">
          <span className="login-titlebar-icon">☺</span>
          <span className="login-titlebar-text">Enter Network Password</span>
        </div>

        {/* Body */}
        <div className="login-body">
          <div className="login-profile-row">
            <div className="login-avatar">☺</div>
            <div className="login-welcome">
              <p className="login-welcome-title">Welcome</p>
              <p className="login-welcome-sub">Jonathan's Computer</p>
            </div>
          </div>

          <div className="login-divider" />

          <div className="login-field-row">
            <label className="login-label" htmlFor="login-user">User name:</label>
            <input
              id="login-user"
              className="login-input"
              type="text"
              defaultValue="Jonathan"
              readOnly
            />
          </div>

          <div className="login-field-row">
            <label className="login-label" htmlFor="login-pass">Password:</label>
            <input
              id="login-pass"
              ref={passwordRef}
              className="login-input"
              type="password"
              defaultValue="portfoli095"
              readOnly
            />
          </div>
        </div>

        {/* Footer buttons */}
        <div className="login-footer">
          <button type="submit" className="login-btn login-btn-ok">OK</button>
          <button type="button" className="login-btn" disabled>Cancel</button>
        </div>

      </form>
    </div>
  )
}
