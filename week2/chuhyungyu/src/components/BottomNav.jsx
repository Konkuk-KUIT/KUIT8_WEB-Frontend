function BottomNav() {
  return (
    <nav className="bottom-bar">
      <div className="bar-content">
        <button>
          <img src="/assets/home.svg" alt="홈" />
          <span className="bar-info">홈</span>
        </button>

        <button>
          <img src="/assets/article.svg" alt="동네생활" />
          <span className="bar-info">동네생활</span>
        </button>

        <button>
          <img src="/assets/map-pin.svg" alt="내 근처" />
          <span className="bar-info">내 근처</span>
        </button>

        <button>
          <img src="/assets/message.svg" alt="채팅" />
          <span className="bar-info">채팅</span>
        </button>

        <button>
          <img src="/assets/user.svg" alt="나의 당근" />
          <span className="bar-info">나의 당근</span>
        </button>
      </div>
    </nav>
  );
}

export default BottomNav;