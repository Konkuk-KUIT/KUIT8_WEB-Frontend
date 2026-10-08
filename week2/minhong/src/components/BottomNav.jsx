const BottomNav = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="roundbox">
          <img src="../assets/Plus Math.png" alt="" />
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
  );
};

export default BottomNav;
