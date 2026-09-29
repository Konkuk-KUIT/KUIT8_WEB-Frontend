import './App.css'
import marketModel from './model.js/marketModel.js'

import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import BottomNav from './components/BottomNav.jsx'


function App() {
  // 비 구조분해 할당으로 안의 내용 꺼내기
  const { location, items } = marketModel

  return <div>
    <Header location={location}>
    </Header>

    <Content items={items}>

    </Content>

     {/* 플러스 버튼을 어떻게 만드는지 잘 모르겠습니다.. */}
      <div className="plus">
        <div className="plus-icon">
          <img src="/imgSrc/plus.png" alt="/imgSrc/plus.png" className="src" />
        </div>
      </div>

      <BottomNav>
        
      </BottomNav>
  </div>
}

export default App
