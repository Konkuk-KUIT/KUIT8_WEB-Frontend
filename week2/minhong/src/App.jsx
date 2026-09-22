import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header>
        <div className="header__location">
          <h2 className="header__location-name">군자동</h2>
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
      <main>
        <section className="product__item">
          <img
            src="../assets/product1.png"
            alt=""
            className="product__item-img"
          />
          <div className="product__item-box">
            <div className="box__text">
              <h3 className="box__text-title">에어팟 프로</h3>
              <div className="box__text-info">
                <p>군자동 · 3일 전</p>
              </div>
              <p className="box__text-amount">220,000원</p>
            </div>
            <div className="box_btns">
              <div className="box_btns-item">
                <img src="../assets/bx_chat.svg" alt="" />
                <p>3</p>
              </div>
              <div className="box_btns-item">
                <img src="../assets/heart-outlined.svg" alt="" />
                <p>11</p>
              </div>
            </div>
          </div>
        </section>
        <section className="product__item">
          <img
            src="../assets/product2.png"
            alt=""
            className="product__item-img"
          />
          <div className="product__item-box">
            <div className="box__text">
              <h3 className="box__text-title">바이레도 블랑쉬 50ml</h3>
              <div className="box__text-info">
                <p>광진구 구의제3동 · 26초 전</p>
              </div>
              <p className="box__text-amount">4,000원</p>
            </div>
            <div className="box_btns">
              <div className="box_btns-item">
                <img src="../assets/heart-outlined.svg" alt="" />
                <p>2</p>
              </div>
            </div>
          </div>
        </section>
        <section className="product__item">
          <img
            src="../assets/product3.png"
            alt=""
            className="product__item-img"
          />
          <div className="product__item-box">
            <div className="box__text">
              <h3 className="box__text-title">샌드위치</h3>
              <div className="box__text-info">
                <p>동대문구 휘경동 · 끌올 59초 전</p>
              </div>
              <p className="box__text-amount">8,000원</p>
            </div>
            <div className="box_btns"></div>
          </div>
        </section>
        <section className="product__item">
          <img
            src="../assets/product4.png"
            alt=""
            className="product__item-img"
          />
          <div className="product__item-box">
            <div className="box__text">
              <h3 className="box__text-title">아이폰 13프로맥스</h3>
              <div className="box__text-info">
                <p>군자동 · 1일 전</p>
              </div>
              <p className="box__text-amount">1,000,000원</p>
            </div>
            <div className="box_btns"></div>
          </div>
        </section>
        <section className="product__item">
          <img
            src="../assets/product5.png"
            alt=""
            className="product__item-img"
          />
          <div className="product__item-box">
            <div className="box__text">
              <h3 className="box__text-title">커피머신</h3>
              <div className="box__text-info">
                <p>구리시 교문1동 · 1초 전</p>
              </div>
              <p className="box__text-amount">100,000원</p>
            </div>
            <div className="box_btns"></div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <div className="roundbox">
            <img src="../assets/Plus Math.png" alt=""/>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__item">
            <img
              src="../assets/Home.svg"
              alt="집 모양 아이콘"
              className="footer__item__img"
            />
            <p className="footer__item__text">홈</p>
          </div>
          <div className="footer__item">
            <img
              src="../assets/news.svg"
              alt="뉴스 아이콘"
              className="footer__item__img"
            />
            <p className="footer__item__text">동네생활</p>
          </div>
          <div className="footer__item">
            <img
              src="../assets/Place Marker.svg"
              alt="장소 마커"
              className="footer__item__img"
            />
            <p className="footer__item__text">내 근처</p>
          </div>
          <div className="footer__item">
            <img
              src="../assets/Chat.svg"
              alt="채팅 아이콘"
              className="footer__item__img"
            />
            <p className="footer__item__text">채팅</p>
          </div>
          <div className="footer__item">
            <img
              src="../assets/user.png"
              alt="유저 아이콘"
              className="footer__item__img"
            />
            <p className="footer__item__text">나의 당근</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
