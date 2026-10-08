function ItemCard({ item }) {
    return (
        <section className="item-card" key={item.title}>
            {/*js에 고유값이 안들어있어 제목을 키로 설정함 */}
            <div className="item-img" >
                <img src={item.image} alt="상품 사진" />
            </div>
            <div className="item-info">
                <div className="item">
                    <div className="item-name">
                        {item.title}
                    </div>
                    <div className="item-meta">
                        <div className="item-loc">
                            {item.location}
                        </div>
                        <div className="dot">
                            ·
                        </div>
                        <div className="item-time-ago">
                            {item.timeAgo}
                        </div>
                    </div>
                    <div className="item-price">
                        {item.price}
                    </div>
                </div>
                <div className="item-etc">
                    {
                        item.comments > 0 &&
                        <div className="item-chat">
                            <img src="/imgSrc/chat.svg" alt="chat" className="item-chat-img" />
                            <div className="commentNum">
                                {item.comments}
                            </div>
                        </div>
                    }
                    {
                        item.likes > 0 &&
                        <div className="item-heart">
                            <img src="/imgSrc/heart.svg" alt="heart" className="item-heart-img" />
                            <div className="commentNum">
                                {item.likes}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )

}

export default ItemCard