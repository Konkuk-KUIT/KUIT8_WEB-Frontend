import "./App.css";
import { BottomNav } from "./components/BottomNav";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import marketModel from "./model.js/marketModel";

function App() {
  const location = marketModel.location;
  const items = marketModel.items;

  return (
    <>
      <Header location={location}></Header>
      <Content items={items}></Content>
      <BottomNav></BottomNav>
    </>
  );
}

export default App;
