import downIcon from "../assets/down.svg"
import searchIcon from "../assets/search.svg"
import menuIcon from "../assets/menu.svg"
import notificationIcon from "../assets/notification.svg"

function Header({location}) {
    return(
        <header className="danggn1-header">
            <div className="danggn1-header__title">
                <span>{location}</span>
                <img src={downIcon} alt="아래 화살표"/>
            </div>

            <div className="danggn1-header__icons">
                <button>
                    <img src={searchIcon} alt="검색"/>
                </button>

                <button>
                    <img src={menuIcon} alt="메뉴"/>
                </button>

                <button>
                    <img src={notificationIcon} alt="알림"/>
                </button>
            </div>
      </header>
    )
}

export default Header