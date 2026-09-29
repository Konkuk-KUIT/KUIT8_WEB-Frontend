import './App.css'
import marketModel from './model.js/marketModel'
// step 3 체크리스트 - props 사용 + 데이터 import 한 번

// 이제 이 아래에, 컴포넌트들 조립
import Header from './components/Header'
import Content from './components/Content'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="market">
      <Header location={marketModel.location} />

      <Content items={marketModel.items} />

      <button className="floating-button" type="button">
        <img src="/icons/plus.png" alt="글쓰기" />
      </button>

      <BottomNav />
    </div>
  )
}

export default App