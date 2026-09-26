import "./App.css";
import marketModel from "./model.js/marketModel.js";

const navItems = [
  { name: "홈", img: "./home.svg" },
  { name: "동네생활", img: "./news.svg" },
  { name: "내 근처", img: "./map.svg" },
  { name: "채팅", img: "./chatting.svg" },
  { name: "나의 당근", img: "./me.svg" },
];

function App() {
  return (
    <div className="app">
      {/* 상단 헤더 */}
      <header className="header">
        <div className="header-title">
          <span>{marketModel.location}</span>
          <img src="./dropdown.svg" alt="" />
        </div>
        <div className="header-icons">
          <button aria-label="검색">
            <img src="./search.svg" alt="" />
          </button>
          <button aria-label="메뉴">
            <img src="./menu.svg" alt="" />
          </button>
          <button aria-label="알림">
            <img src="./alarm.svg" alt="" />
          </button>
        </div>
      </header>

      {/* 상품 목록 */}
      <main className="container" aria-label="중고 상품 목록">
        {marketModel.items.map((item) => (
          <article key={item.title} className="market-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-info">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-details">
                {item.location} · {item.timeAgo}
              </p>
              <p className="item-price">{item.price}</p>
              <div className="item-stats">
                {item.comments > 0 && (
                  <span className="item-comments">
                    <img src="./comment.svg" alt="댓글" />
                    {item.comments}
                  </span>
                )}
                {item.likes > 0 && (
                  <span className="item-likes">
                    <img src="./heart.svg" alt="좋아요" />
                    {item.likes}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* 글쓰기 버튼 */}
      <button className="fixed-btn" aria-label="글쓰기">
        <img src="./plus.svg" alt="" />
      </button>

      {/* 하단 메뉴 */}
      <nav aria-label="주 메뉴">
        <ul className="bottom-nav">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href="/" className="nav-element" aria-current={item.name === "홈" ? "page" : undefined}>
                <img src={item.img} alt="" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
