import './App.css'
import marketModel from './model.js/marketModel.js'

export default function App() {
  return (
    <div className="container" aria-label="당근마켓 1">

      {/* 상단 메뉴 */}
      <header className="header">
        <div className="location">
          <span>{marketModel.location}</span>
          <button>
            <img src="/assets/down.svg" width="14" height="14" alt="아래화살표" />
          </button>
        </div>

        <nav className="actions">
          <button className="header-button">
            <img src="/assets/search.svg" width="21" height="21" alt="검색" />
          </button>
          <button className="header-button">
            <img src="/assets/menu.svg" width="22" height="22" alt="메뉴" />
          </button>
          <button className="header-button">
            <img src="/assets/bell.svg" width="21" height="21" alt="알림" />
          </button>
        </nav>
      </header>

      {/* 상품 목록 */}
      <main className="market-main">
        <article className="product-list">
          {marketModel.items.map(product => (
            <section className="product" key={product.title}>
              <img className="product-image" src={`/${product.image}`} alt={`${product.title} 제품 사진`} />

              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-meta">{product.location} · {product.timeAgo}</p>
                <p className="product-price">{product.price}</p>
                
                <div className="reactions">
                  {product.comments > 0 && 
                    <button className="reaction">
                      <img src="/assets/comment.svg" width="14" height="14" alt="댓글" />
                      {product.comments}
                    </button>}
                  {product.likes > 0 && 
                    <button className="reaction">
                      <img src="/assets/heart.svg" width="14" height="14" alt="관심" />
                      {product.likes}
                    </button>}
                </div>
              </div>
            </section>
          ))}
        </article>

        <button className="plus-button">
          <img src="/assets/plus.svg" width="24" height="24" alt="글쓰기" />
        </button>
      </main>

      {/* 하단 메뉴 */}
      <footer className="bottom-menu">
        <button className="menu-item">
          <img src="/assets/home.svg" width="21" height="21" alt="홈" />
          <span>홈</span>
        </button>
        <button className="menu-item">
          <img src="/assets/news.svg" width="21" height="21" alt="동네생활" />
          <span>동네생활</span>
        </button>
        <button className="menu-item">
          <img src="/assets/pin.svg" width="21" height="21" alt="내 근처" />
          <span>내 근처</span>
        </button>
        <button className="menu-item">
          <img src="/assets/chat.svg" width="21" height="21" alt="채팅" />
          <span>채팅</span>
        </button>
        <button className="menu-item">
          <img src="/assets/user.svg" width="21" height="21" alt="나의 당근" />
          <span>나의 당근</span>
        </button>
      </footer>
    </div>
  )
}
