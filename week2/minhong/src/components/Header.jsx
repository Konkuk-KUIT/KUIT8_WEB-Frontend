const Header = ({location}) => {
  return (
    <header>
      <div className="header__location">
        <h2 className="header__location-name">{location}</h2>
        <img
          src="../assets/Expand-Arrow.png"
          alt=""
          className="header__location-img"
        />
      </div>
      <div className="header__menu">
        <img src="../assets/Search.svg" alt="" className="header__menu-btn" />
        <img src="../assets/Menu.svg" alt="" className="header__menu-btn" />
        <img
          src="../assets/Notification.png"
          alt=""
          className="header__menu-btn"
        />
      </div>
    </header>
  );
};

export default Header;
