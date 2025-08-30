import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals' // remove if unused

const container = document.getElementById('root') as HTMLElement // or: document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals() // or pass (metric) => console.log(metric)
