const BottomNav = () => {
  return (
    <section className="bottomnav">
      <div className="bottomnav-content">
        <img src="/assets/home.svg" alt="홈" />
        <p className="text-black-2">홈</p>
      </div>
      <div className="bottomnav-content">
        <img src="/assets/news.svg" alt="동네생활" />
        <p className="text-black-2">동네생활</p>
      </div>
      <div className="bottomnav-content">
        <img src="/assets/placemarker.svg" alt="내 근처" />
        <p className="text-black-2">내 근처</p>
      </div>
      <div className="bottomnav-content">
        <img src="/assets/chatting.svg" alt="채팅" />
        <p className="text-black-2">채팅</p>
      </div>
      <div className="bottomnav-content">
        <img src="/assets/user.svg" alt="나의 당근" />
        <p className="text-black-2">나의 당근</p>
      </div>
    </section>
  );
};

export default BottomNav;
