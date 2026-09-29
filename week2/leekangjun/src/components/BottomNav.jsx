import homeIcon from "../assets/home.svg"
import newsIcon from "../assets/news.svg"
import placeMarkerIcon from "../assets/placeMarker.svg"
import chatIcon from "../assets/chat.svg"
import userIcon from "../assets/user.svg"

function BottomNav() {
    return(
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
    )
}

export default BottomNav