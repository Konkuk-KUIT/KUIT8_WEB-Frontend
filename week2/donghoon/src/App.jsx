import './App.css'
import marketModel from './model.js/marketModel'

// 이제 이 아래에, 컴포넌트들 조립
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="market">
      <Header location={marketModel.location} />

      <Content items={marketModel.items} />

      <BottomNav />
    </div>
  )
}

export default App