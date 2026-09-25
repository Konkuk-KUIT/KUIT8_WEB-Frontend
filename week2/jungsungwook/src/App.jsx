import './App.css'
import marketModel from './model.js/marketModel.js'



function App() {
  // 비 구조분해 할당으로 안의 내용 꺼내기
  const { location, items } = marketModel

  return <div>
    <header className="header">
      <div className="header-left">
        <div>{location}</div>
        <div><img src="/imgSrc/arrow.png" alt="" className="src" /></div>
      </div>
      <div className="header-right">
        <button>
          <img src="/imgSrc/search.svg" alt="" className="src" />
        </button>
        <button>
          <img src="/imgSrc/search.svg" alt="" className="src" />
        </button>
        <button>
          <img src="/imgSrc/search.svg" alt="" className="src" />
        </button>
      </div>
    </header>


    <main className="item-list">
      {
        items.map(item => (

          item.isSold > 0 && (
            <section className="item-card" key={item.title}>
              {/*js에 고유값이 안들어있어 제목을 키로 설정함 */}
              <div className="item-img" >
                <img src={item.image} alt="상품 사진" />
              </div>
              <div className="item-info">
                <div className="item">
                  <div className="item-name">
                    {item.title}
                  </div>
                  <div className="item-meta">
                    <div className="item-loc">
                      {item.location}
                    </div>
                    <div className="dot">
                      ·
                    </div>
                    <div className="item-time-ago">
                      {item.timeAgo}
                    </div>
                  </div>
                  <div className="item-price">
                    {item.price}
                  </div>
                </div>
                <div className="item-etc">
                  {
                    item.comments > 0 &&
                    <div className="item-chat">
                      <img src="/imgSrc/chat.svg" alt="chat" className="item-chat-img" />
                      <div className="commentNum">
                        {item.comments}
                      </div>
                    </div>
                  }
                  {
                    item.likes > 0 &&
                    <div className="item-heart">
                      <img src="/imgSrc/heart.svg" alt="heart" className="item-heart-img" />
                      <div className="commentNum">
                        {item.likes}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </section>
          )

        ))
      }
    </main>

     {/* 플러스 버튼을 어떻게 만드는지 잘 모르겠습니다.. */}
      <div className="plus">
        <div className="plus-icon">
          <img src="/imgSrc/plus.png" alt="/imgSrc/plus.png" className="src" />
        </div>
      </div>


    <nav className="bottom-nav">
      <div className="nav-item">
        <div className="nav-img">
          <img src="/imgSrc/Home.svg" alt="홈" className="src" />
        </div>
        <div className="nav-info">
          홈
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-img">
          <img src="/imgSrc/Home.svg" alt="동네생활" className="src" />
        </div>
        <div className="nav-info">
          동네생활
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-img">
          <img src="/imgSrc/Home.svg" alt="내 근처" className="src" />
        </div>
        <div className="nav-info">
          내 근처
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-img">
          <img src="/imgSrc/Home.svg" alt="채팅" className="src" />
        </div>
        <div className="nav-info">
          채팅
        </div>
      </div>

     

      <div className="nav-item">
        <div className="nav-img">
          <img src="/imgSrc/Home.svg" alt="나의 당근" className="src" />
        </div>
        <div className="nav-info">
          나의 당근
        </div>
      </div>

    </nav>

      

  </div>
}

export default App
