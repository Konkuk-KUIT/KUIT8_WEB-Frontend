import "./App.css";
import marketModel from "./model.js/marketModel";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <>
      <Header />
      <Content items={marketModel.items} />
      <BottomNav />
    </>
  );
};

export default App;
