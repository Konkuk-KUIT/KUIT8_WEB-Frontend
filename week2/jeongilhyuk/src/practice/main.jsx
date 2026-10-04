import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'
import './practice.css'
import PracticeApp from './PracticeApp.jsx'

// practice.html 의 <div id="root"> 안에 실습 화면을 그린다.
// 실습 스타일은 이 진입점에서만 불러서 미션 화면에 섞이지 않게 한다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PracticeApp />
  </StrictMode>,
)
