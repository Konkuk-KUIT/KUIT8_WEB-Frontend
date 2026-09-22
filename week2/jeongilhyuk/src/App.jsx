import marketModel from './model.js/marketModel.js'

// 2주차 미션 1단계다. 이번 커밋에서는 컴포넌트를 쪼개지 않고
// 미션 JSX 를 전부 이 파일 안에 둔다. Header, ItemCard, BottomNav 같은
// 분리는 다음 단계에서 한다.

// 하단 탭 다섯 칸. 지금은 홈 화면만 있어서 나머지는 눌러도 갈 곳이 없다.
const navItems = [
  { id: 'home', label: '홈', icon: '/assets/home.png' },
  { id: 'town', label: '동네생활', icon: '/assets/news.png' },
  { id: 'nearby', label: '내 근처', icon: '/assets/nearby.png' },
  { id: 'chat', label: '채팅', icon: '/assets/chat.png' },
  { id: 'my', label: '나의 당근', icon: '/assets/profile.png' },
]

const CURRENT_TAB = 'home'

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

      <header className="market-header">
        <button
          type="button"
          className="location-button"
          disabled
          title="동네 선택은 아직 만들지 않았습니다"
          aria-label={`현재 동네 ${location}, 동네 선택은 아직 만들지 않았습니다`}
        >
          {location}
          <img className="location-chevron" src="/assets/chevron-down.png" alt="" />
        </button>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            disabled
            title="검색은 아직 만들지 않았습니다"
            aria-label="검색, 아직 만들지 않았습니다"
          >
            <img src="/assets/search.png" alt="" />
          </button>
          <button
            type="button"
            className="icon-button"
            disabled
            title="카테고리는 아직 만들지 않았습니다"
            aria-label="카테고리, 아직 만들지 않았습니다"
          >
            <img src="/assets/menu.png" alt="" />
          </button>
          <button
            type="button"
            className="icon-button"
            disabled
            title="알림은 아직 만들지 않았습니다"
            aria-label="알림, 아직 만들지 않았습니다"
          >
            <img src="/assets/bell.png" alt="" />
          </button>
        </div>
      </header>

      {/* 상품 일곱 개를 map 으로 돌린다. key 는 모델에 더해 둔 id 를 쓴다. */}
      <ul className="market-list">
        {items.map(({ id, title, location: itemLocation, timeAgo, price, image, comments, likes, isSold }) => (
          <li className="market-item" key={id}>
            <img className="item-photo" src={image} alt="" />
            <div className="item-body">
              {/* 팔린 물건에만 거래완료 딱지를 붙인다. */}
              {isSold && <span className="badge-sold">거래완료</span>}
              <h2 className="item-title">{title}</h2>
              <p className="item-meta">
                {itemLocation} · {timeAgo}
              </p>
              <p className="item-price">{price}</p>
              {/* 0 이면 아예 그리지 않는다. comments 는 숫자라서 comments > 0 으로
                  불린을 만들어야 한다. comments && 로 쓰면 0 이 그대로 찍힌다. */}
              <div className="item-counts">
                {comments > 0 && (
                  <span className="count">
                    <img src="/assets/comments.png" alt="" />
                    {comments}
                    <span className="sr-only">개의 댓글</span>
                  </span>
                )}
                {likes > 0 && (
                  <span className="count">
                    <img src="/assets/heart.png" alt="" />
                    {likes}
                    <span className="sr-only">개의 관심</span>
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="fab"
        disabled
        title="글쓰기는 아직 만들지 않았습니다"
        aria-label="글쓰기, 아직 만들지 않았습니다"
      >
        <img src="/assets/plus.png" alt="" />
      </button>

      <nav className="bottom-nav" aria-label="주요 메뉴">
        {navItems.map(({ id, label, icon }) => {
          const isCurrent = id === CURRENT_TAB
          return (
            <button
              type="button"
              className="nav-item"
              key={id}
              disabled
              aria-current={isCurrent ? 'page' : undefined}
              title={isCurrent ? `${label} (지금 보고 있는 화면)` : `${label} 화면은 아직 만들지 않았습니다`}
              aria-label={isCurrent ? `${label}, 지금 보고 있는 화면` : `${label}, 아직 만들지 않았습니다`}
            >
              <img src={icon} alt="" />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>

      <div className="home-indicator" />
    </div>
  )
}

export default App
