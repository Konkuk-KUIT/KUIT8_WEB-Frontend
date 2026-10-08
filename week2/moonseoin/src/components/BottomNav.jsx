function BottomNav({ navItems }) {
  return (
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
  );
}

export default BottomNav;
