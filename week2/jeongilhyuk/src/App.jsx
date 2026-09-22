import marketModel from './model.js/marketModel.js'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import BottomNav from './components/BottomNav.jsx'

// 2주차 미션 2단계다. 1단계에서 이 파일 하나에 몰아 두었던 미션 JSX 를
// Header, Content, ItemCard, BottomNav 로 쪼갰다.
// 모델을 부르는 곳은 여기 한 곳뿐이고, 아래 컴포넌트들은 props 로만 값을 받는다.

function App() {
  // 모델에서 필요한 값만 꺼내 쓴다.
  const { location, items } = marketModel

  return (
    <div className="app">
      <h1 className="sr-only">당근마켓 중고거래 홈 화면 따라 만들기</h1>
      <p className="sr-only">
        이번 주차는 화면만 만들었습니다. 흐리게 보이는 단추는 아직 동작하지 않습니다.
      </p>

      <img className="status-bar" src="/assets/status-bar.png" alt="" />

      <Header location={location} />

      <Content items={items} />

      <BottomNav />

      <div className="home-indicator" />
    </div>
  )
}

export default App
