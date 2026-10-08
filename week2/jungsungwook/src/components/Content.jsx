import ItemCard from "./ItemCard.jsx"

function Content({ items }) {
    return (
        <main className="item-list">
            {
                items.map(item => (
                    item.isSold&& (
                        <ItemCard key = {item.title} item={item}>
                        </ItemCard>
                    )

                ))
            }
        </main>
    )
}

export default Content