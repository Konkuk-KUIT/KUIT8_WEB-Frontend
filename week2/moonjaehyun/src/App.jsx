import "./App.css";
import chat from "./assets/chat.svg";
import chat_bottom from "./assets/chat_bottom.svg";
import expand_arrow from "./assets/expand_arrow.svg";
import heart from "./assets/heart.svg";
import home from "./assets/home.svg";
import item1 from "./assets/item1.png";
import item2 from "./assets/item2.png";
import item3 from "./assets/item3.png";
import item4 from "./assets/item4.png";
import item5 from "./assets/item5.png";
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
      <div className="item-list">
        <div className="item-card">
          <img className="item-card__img" src={item1} alt="에어팟 프로" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">에어팟 프로</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>.</span>
                <span className="item-info__date">3일 전</span>
              </div>
              <span className="item-info__price">220,000원</span>
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
          <img
            className="item-card__img"
            src={item2}
            alt="바이레도 블랑쉬 50ml"
          />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">바이레도 블랑쉬 50ml</span>
              <div className="item-info__body">
                <span className="item-info__location">광진구 구의제3동</span>
                <span>·</span>
                <span className="item-info__date">26초 전</span>
              </div>
              <span className="item-info__price">4,000원</span>
            </div>
            <div className="item-info__icons">
              <div className="item-info__like">
                <img src={heart} alt="" />
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img className="item-card__img" src={item3} alt="샌드위치" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">샌드위치</span>
              <div className="item-info__body">
                <span className="item-info__location">동대문구 휘경동</span>
                <span>·</span>
                <span className="item-info__date">끌올 59초 전</span>
              </div>
              <span className="item-info__price">8,000원</span>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img className="item-card__img" src={item4} alt="아이폰 13프로맥스" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">아이폰 13프로맥스</span>
              <div className="item-info__body">
                <span className="item-info__location">군자동</span>
                <span>·</span>
                <span className="item-info__date">1일 전</span>
              </div>
              <span className="item-info__price">1,000,000원</span>
            </div>
          </div>
        </div>
        <div className="item-card">
          <img className="item-card__img" src={item5} alt="커피머신" />
          <div className="item-info">
            <div className="item-info__texts">
              <span className="item-info__title">커피머신</span>
              <div className="item-info__body">
                <span className="item-info__location">구리시 교문1동</span>
                <span>·</span>
                <span className="item-info__date">1초 전</span>
              </div>
              <span className="item-info__price">100,000원</span>
            </div>
          </div>
        </div>
      </div>
      <bottom>
        <div className="append-item">
          <button className="append-item__button">
            <img src={plus} alt="상품 등록" className="append-item__img" />
          </button>
        </div>
        <div className="navigate">
          <div className="footer-item">
            <img src={home} alt="" className="footer-item__icon" />
            <span className="footer-item__name">홈</span>
          </div>
          <div className="footer-item">
            <img src={news} alt="" className="footer-item__icon" />
            <span className="footer-item__name">동네생활</span>
          </div>
          <div className="footer-item">
            <img src={place_marker} alt="" className="footer-item__icon" />
            <span className="footer-item__name">내 근처</span>
          </div>
          <div className="footer-item">
            <img src={chat_bottom} alt="" className="footer-item__icon" />
            <span className="footer-item__name">채팅</span>
          </div>
          <div className="footer-item">
            <img src={user} alt="" className="footer-item__icon" />
            <span className="footer-item__name">나의 당근</span>
          </div>
        </div>
      </bottom>
    </>
  );
}

export default App;
