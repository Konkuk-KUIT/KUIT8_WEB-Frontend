import "./App.css";
import marketModel from "./model.js/marketModel";

const Header = () => {
  return (
    <header className="header">
      <div className="header-location">
        <p className="text-black-1">{marketModel.location}</p>
        <img src="/assets/bottomarrow.svg" alt="열기" />
      </div>
      <div className="header-tool">
        <img src="/assets/search.svg" alt="검색" />
        <img src="/assets/menu.svg" alt="메뉴" />
        <img src="/assets/notification.svg" alt="알림" />
      </div>
    </header>
  );
};

const ItemCard = ({ item }) => {
  const hasComments = item.comments > 0;
  const hasLikes = item.likes > 0;

  return (
    <article className="itemcard">
      <section className="itemcard-content">
        <img src={`/${item.image}`} alt={item.title} />
        <section className="itemcard-data">
          <div className="itemcard-info">
            <p className="text-black-3">{item.title}</p>
            <p className="text-gray-1">
              {item.location} · {item.timeAgo}
            </p>
            <p className="text-orange-1">{item.price}</p>
          </div>
          {(hasComments || hasLikes) && (
            <div className="itemcard-count">
              {hasComments && (
                <span className="itemcard-countcss">
                  <img src="/assets/chat.svg" alt="댓글" />
                  {item.comments}
                </span>
              )}
              {hasLikes && (
                <span className="itemcard-countcss">
                  <img src="/assets/heart.svg" alt="좋아요" />
                  {item.likes}
                </span>
              )}
            </div>
          )}
        </section>
      </section>
    </article>
  );
};

const Content = () => {
  return (
    <main className="content">
      {marketModel.items.map((item) => (
        <ItemCard key={item.title} item={item} />
      ))}
    </main>
  );
};

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

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <BottomNav />
    </>
  );
};

export default App;
