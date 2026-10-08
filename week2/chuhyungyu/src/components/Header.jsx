function Header({ location }) {
  return (
    <header className="header">
      <div className="header-location">
        <span className="header-title">{location}</span>

        <button className="location-btn">
          <img
            src="/assets/down-arrow.svg"
            alt="다른 지역 선택"
          />
        </button>
      </div>

      <div className="header-icons">
        <button className="search-btn">
          <img src="/assets/search.svg" alt="검색" />
        </button>

        <button className="menu-btn">
          <img src="/assets/menu.svg" alt="메뉴" />
        </button>

        <button className="notifications-btn">
          <img src="/assets/notifications.svg" alt="알림" />
        </button>
      </div>
    </header>
  );
}

export default Header;