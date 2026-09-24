import ItemCard from "./ItemCard"
import plusIcon from "../assets/plus.svg"

function Content({items}){
    return(
        <article className='product-list'>
            {items.map((model)=>(
                <ItemCard
                    key={model.id}
                    model={model}
                />
            ))}

            <button>
                <img className="plusButton" src={plusIcon} alt="+아이콘"/>
            </button>
	  </article>
    )
}

export default Content