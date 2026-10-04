import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import BottomNav from "./components/BottomNav.jsx";
import marketModel from "./model.js/marketModel.js";

const navItems = [
  { name: "홈", img: "./home.svg" },
  { name: "동네생활", img: "./news.svg" },
  { name: "내 근처", img: "./map.svg" },
  { name: "채팅", img: "./chatting.svg" },
  { name: "나의 당근", img: "./me.svg" },
];

function App() {
  return (
    <div className="app">
      <Header location={marketModel.location} />
      <Content items={marketModel.items} />

      {/* 글쓰기 버튼 */}
      <button className="fixed-btn" aria-label="글쓰기">
        <img src="./plus.svg" alt="" />
      </button>

      <BottomNav navItems={navItems} />
    </div>
  );
}

export default App;
