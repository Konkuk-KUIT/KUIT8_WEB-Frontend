import './App.css';
import marketModel from './model.js/marketModel.js';

import Header from './components/Header';
import Content from './components/Content';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <>
      <Header location={marketModel.location} />

      <Content items={marketModel.items} />

      <button className="write-button">
        <img src="/assets/plus.svg" alt="글쓰기" />
      </button>

      <BottomNav />
    </>
  );
}

export default App;