import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Apply saved theme before React mounts to prevent flash
const savedTheme = (() => { try { return JSON.parse(localStorage.getItem('workshop_theme')) || 'dark'; } catch { return 'dark'; } })();
document.documentElement.setAttribute('data-theme', savedTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
