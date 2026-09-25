import "../App.css";
import expand_arrow from "../assets/expand_arrow.svg";
import menu from "../assets/menu.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";

export function Header({ location }) {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <span className="header-left__location">{location}</span>
          <img
            src={expand_arrow}
            alt="지역 선택"
            className="header-left__arrow"
          />
        </div>
        <div className="header-right">
          <img src={search} alt="search" className="header-right__icon" />
          <img src={menu} alt="menu" className="header-right__icon" />
          <img
            src={notification}
            alt="notification"
            className="header-right__icon"
          />
        </div>
      </header>
    </>
  );
}
