import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 8ad53903cafe4405b09f1f3221d2c42967ac9914
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
    <App />
=======

  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 8ad53903cafe4405b09f1f3221d2c42967ac9914
  </StrictMode>,
)
