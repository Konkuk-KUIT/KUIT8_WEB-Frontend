import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import BottomNav from "./components/BottomNav";
import marketModel from "./model.js/marketModel";

function App() {
  return (
    <div className="main-container">
      <Header location={marketModel.location}/>
      <Content items={marketModel.items}/>
      <BottomNav/>
    </div>
  );
}
export default App;
