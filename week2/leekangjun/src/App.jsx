import { useState } from 'react'
import marketModel from "./model.js/marketModel"
import downIcon from "./assets/down.svg"
import searchIcon from "./assets/search.svg"
import menuIcon from "./assets/menu.svg"
import bxChatIcon from "./assets/bxChat.svg"
import heartIcon from "./assets/heart.svg"
import redHeartIcon from "./assets/redHeart.svg"
import notificationIcon from "./assets/notification.svg"
import homeIcon from "./assets/home.svg"
import newsIcon from "./assets/news.svg"
import placeMarkerIcon from "./assets/placeMarker.svg"
import chatIcon from "./assets/chat.svg"
import userIcon from "./assets/user.svg"
import plusIcon from "./assets/plus.svg"

import './App.css'

function App() {
  const [isClicked, setColor] = useState(false)


  return (
    <>
      <header className="danggn1-header">
		<div className="danggn1-header__title">
          <span>{marketModel.location}</span>
          <img src={downIcon} alt="아래 화살표"/>
        </div>

        <div className="danggn1-header__icons">
            <button>
              <img src={searchIcon} alt="검색"/>
            </button>

            <button>
			  <img src={menuIcon} alt="메뉴"/>
            </button>

            <button>
			  <img src={notificationIcon} alt="알림"/>
            </button>
        </div>
      </header>

	  <article className='product-list'>
        {marketModel.items.map((model)=>{ //key필요
            return(
                <div className='product-card'>
                    <img className='prodict-img' src={model.image} alt=""/>
                    <div className='product-info'>
                        <div className='product-detail'>
                            <span className='product-name'>{model.title}</span>
                            <span className='product-time'>{model.location} · {model.timeAgo}</span>
                            <span className='product-price'>{model.price}</span>
                        </div>
                        <div className='product-review'>
                            <div>
                                {model.comments>0 && 
                                <>
                                    <button>
                                        <img src={bxChatIcon} alt="채팅아이콘"/>
                                    </button>
                                    <span>{model.comments}</span>
                                </>
                                }
                            </div>

                            <div>
                                {model.likes>0 && 
                                <>
                                    <button onClick={()=>setColor(prevColor=>!prevColor)}>
                                        {isClicked
                                        ? <img src={redHeartIcon} alt="빨간아이콘"/>
                                        : <img src={heartIcon} alt="하트아이콘"/>}
                                    </button>
                                    <span>{model.likes}</span>
                                </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}

        <button>
            <img className="plusButton" src={plusIcon} alt="+아이콘"/>
        </button>
	  </article>

      <nav className="bottom-bar">
        <div className="barItems">
            <div className="barItem">
                <img src={homeIcon} alt="홈" id="homeImg"/>
                <span id="homeDes">홈</span>
            </div>

            <div className="barItem">
                <img src={newsIcon} alt="동네생활" id="newsImg"/>
                <span id="newsDes">동네생활</span>
            </div>

            <div className="barItem">
                <img src={placeMarkerIcon} alt="내 근처" id="placeMarkerImg"/>
                <span id="placeMarkerDes">내 근처</span>
            </div>

            <div className="barItem">
                <img src={chatIcon} alt="채팅" id="chatImg"/>
                <span id="chatDes">채팅</span>
            </div>

            <div className="barItem">
                <img src={userIcon} alt="나의 당근" id="userImg"/>
                <span id="userDes">나의 당근</span>
            </div>
        </div>
    </nav>
    </>
  )
}

export default App
