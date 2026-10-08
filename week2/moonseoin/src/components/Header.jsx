function Header({ location }) {
  return (
    <header className="header">
      <div className="header-title">
        <span>{location}</span>
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
  );
}

export default Header;
