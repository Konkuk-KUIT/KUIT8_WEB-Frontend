import './App.css';
import marketModel from './model.js/marketModel.js';

function App() {
  return (
    <>
      {/* 상단 헤더 */}
      <header className="header">
        <div className="header-location">
          <span className="header-title">{marketModel.location}</span>
          <button className="location-btn">
            <img src="/assets/down-arrow.svg" alt="다른 지역 선택"/>
          </button>
        </div>

        <div className="header-icons">
          <button className="search-btn">
            <img src="/assets/search.svg" alt="검색"/>
          </button>
          <button className="menu-btn">
            <img src="/assets/menu.svg" alt="메뉴"/>
          </button>
          <button className="notifications-btn">
            <img src="/assets/notifications.svg" alt="알림"/>
          </button>
        </div>
      </header>

      {/* 상품 리스트 */}
      <main className="market-list">
        {marketModel.items.map((item, index) => (
          <article className="market-item" key={index}>
            <img  
              className="market-item-image"
              src={'assets/'+item.image}
              alt={item.title}
            />

            <div className="market-item-content">
              <div className="market-item-info">
                <h2 className="market-item-title">{item.title}</h2>

                <p className="market-item-meta">
                  {item.location} · {item.timeAgo}
                </p>

                <strong className="market-item-price">
                  {item.price}
                </strong>
              </div>

              <div className="market-item-status">
                {item.comments > 0 && (
                  <div className="market-item-count">
                    <img src="/assets/chat.svg" alt="" />
                    <span>{item.comments}</span>
                  </div>
                )}

                {item.likes > 0 && (
                  <div className="market-item-count">
                    <img src="/assets/likes.svg" alt="" />
                    <span>{item.likes}</span>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* 글쓰기 버튼 */}
      <button className="write-button">
            <img src="/assets/plus.svg" alt="글쓰기" />
      </button>

      {/* 하단 바 */}
      <nav className="bottom-bar">
        <div className="bar-content">
          <button>
            <img src="/assets/home.svg" alt="홈" />
            <span className="bar-info">홈</span>
          </button>

          <button>
            <img src="/assets/article.svg" alt="동네생활" />
            <span className="bar-info">동네생활</span>
          </button>

          <button>
            <img src="/assets/map-pin.svg" alt="내 근처" />
            <span className="bar-info">내 근처</span>
          </button>

          <button>
            <img src="/assets/message.svg" alt="채팅" />
            <span className="bar-info">채팅</span>
          </button>

          <button>
            <img src="/assets/user.svg" alt="나의 당근" />
            <span className="bar-info">나의 당근</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default App;