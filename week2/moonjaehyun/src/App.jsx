import chat from "./assets/chat.svg";
import chat_bottom from "./assets/chat_bottom.svg";
import expand_arrow from "./assets/expand_arrow.svg";
import heart from "./assets/heart.svg";
import home from "./assets/home.svg";
import menu from "./assets/menu.svg";
import news from "./assets/news.svg";
import notification from "./assets/notification.svg";
import place_marker from "./assets/place_marker.svg";
import plus from "./assets/plus.svg";
import search from "./assets/search.svg";
import user from "./assets/user.svg";

function App() {
  return (
    <>
      <header class="header">
        <div class="header-left">
          <select name="location" class="header-left__location">
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
            <option value="군자동">군자동</option>
          </select>
          <expand_arrow
            src={expand_arrow}
            alt="arrow"
            class="header-left__arrow"
          />
        </div>
        <div className="header-right">
          <img src={menu} alt="menu" className="header-right__icon" />
          <img
            src={notification}
            alt="notification"
            className="header-right__icon"
          />
          <img src={search} alt="search" className="header-right__icon" />
        </div>
      </header>
      <div class="item-list">
        <div className="item-card">
          <img class="item-card__img" src="" alt="item-img" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__chat">
                <img src={chat} alt="" />
                <span>3</span>
              </div>
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img class="item-card__img" src="" alt="item-img" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__chat">
                <img src={chat} alt="" />
                <span>3</span>
              </div>
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img class="item-card__img" src="" alt="item-img" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__chat">
                <img src={chat} alt="" />
                <span>3</span>
              </div>
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img class="item-card__img" src="" alt="item-img" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__chat">
                <img src={chat} alt="" />
                <span>3</span>
              </div>
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img class="item-card__img" src="" alt="item-img" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__chat">
                <img src={chat} alt="" />
                <span>3</span>
              </div>
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <bottom>
        <div class="append-item">
          <button class="append-item__button">
            <img src={plus} alt="" class="append-item__img" />
          </button>
        </div>
        <div>
          <div class="footer-item">
            <img src={user} alt="" class="footer-item__icon" />
            <span class="footer-item__name">홈</span>
          </div>
          <div class="footer-item">
            <img src={news} alt="" class="footer-item__icon" />
            <span class="footer-item__name">동네 생활</span>
          </div>
          <div class="footer-item">
            <img src={place_marker} alt="" class="footer-item__icon" />
            <span class="footer-item__name">내 근처</span>
          </div>
          <div class="footer-item">
            <img src={chat_bottom} alt="" class="footer-item__icon" />
            <span class="footer-item__name">채팅</span>
          </div>
          <div class="footer-item">
            <img src={home} alt="" class="footer-item__icon" />
            <span class="footer-item__name">나의 당근</span>
          </div>
        </div>
      </bottom>
    </>
  );
}

export default App;
