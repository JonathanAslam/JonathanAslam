import React from 'react'
import './index.css'
import { Analytics } from "@vercel/analytics/react"
import PageContent from './components/PageContent/PageContent'

function App() {

  return (
    <div className='App'>
      <PageContent/>
      <Analytics></Analytics>
    </div>
  )
}

export default App
