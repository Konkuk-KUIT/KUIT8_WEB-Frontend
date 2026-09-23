import "../App.css";
import expand_arrow from "../assets/expand_arrow.svg";
import menu from "../assets/menu.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <select name="location" className="header-left__location">
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
          </select>
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
