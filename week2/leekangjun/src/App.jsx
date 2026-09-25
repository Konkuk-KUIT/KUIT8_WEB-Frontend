import marketModel from "./model.js/marketModel"
import Header from './components/Header';
import Content from './components/Content';
import BottomNav from './components/BottomNav';

import './App.css'

function App() {

  return (
    <>
        <Header
            location={marketModel.location}
        />

        <Content
            items={marketModel.items}
        />

        <BottomNav/>
    </>
  )
}

export default App
