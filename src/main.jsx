import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/css/Design.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
  </StrictMode>,
)
