import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import './ContactApp.css'

const SERVICE_ID  = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_PUBLIC_KEY

export default function ContactApp() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-app">
      <div className="contact-header">
        <h2 className="contact-title">Get in touch</h2>
        <p className="contact-subtitle">Send me a message and I'll get back to you.</p>
      </div>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-row">
          <label className="form-label">Message</label>
          <textarea
            className="form-input form-textarea"
            name="message"
            value={fields.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className={`form-submit${status === 'sending' ? ' sending' : ''}`}
          disabled={status === 'sending' || status === 'success'}
        >
          {status === 'sending' && <span className="btn-spinner" />}
          {status === 'success' && <FiCheck size={15} />}
          {status === 'idle' || status === 'error' ? <FiSend size={15} /> : null}
          <span>
            {status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send message'}
          </span>
        </button>

        {status === 'error' && (
          <p className="form-error">
            <FiAlertCircle size={13} /> Something went wrong — please try again.
          </p>
        )}
      </form>
    </div>
  )
}
