export default function Header({ location }) {
  return (
    <header className="header">
      <div className="location">
        <span>{location}</span>
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
  )
}
