const Header = () => {
  return (
    <header className="header">
      <div className="header-location">
        <p className="text-black-1">군자동</p>
        <img src="/assets/bottomarrow.svg" alt="열기" />
      </div>
      <div className="header-tool">
        <img src="/assets/search.svg" alt="검색" />
        <img src="/assets/menu.svg" alt="메뉴" />
        <img src="/assets/notification.svg" alt="알림" />
      </div>
    </header>
  );
};

export default Header;
