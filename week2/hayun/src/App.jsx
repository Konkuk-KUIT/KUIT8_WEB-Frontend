import './App.css'
import marketModel from './model.js/marketModel.js'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  return (
    <div className="container" aria-label="당근마켓 1">
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />
      <BottomNav />
    </div>
  )
}
