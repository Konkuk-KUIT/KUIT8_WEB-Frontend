import { useState } from 'react'
import bxChatIcon from "../assets/bxChat.svg"
import heartIcon from "../assets/heart.svg"
import redHeartIcon from "../assets/redHeart.svg"

function ItemCard({model}){
    const [isClicked, setColor] = useState(false)

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
                                <span>{model.likes + (isClicked?1:0)}</span>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard