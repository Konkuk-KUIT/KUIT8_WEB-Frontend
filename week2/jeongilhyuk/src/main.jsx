import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css'
import './styles/practice.css'
import App from './App.jsx'

// practice.html 의 <div id="root"> 안에 App 컴포넌트를 그린다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
