import "../App.css";
import chat_bottom from "../assets/chat_bottom.svg";
import home from "../assets/home.svg";
import news from "../assets/news.svg";
import place_marker from "../assets/place_marker.svg";
import plus from "../assets/plus.svg";
import user from "../assets/user.svg";

export function BottomNav() {
  return (
    <>
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
