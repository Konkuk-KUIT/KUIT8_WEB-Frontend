import ItemCard from "./ItemCard";

function Content({ items }) {
    return (
        <main className="content">
            {
                items.filter((item)=>item.isSold === true )
                .map((item) => (
                    <ItemCard key={item.title} item={item} />
                ))
            }
        </main>
    )
}

export default Content

//item={item} 에서, 왼쪽은 props 이름, 오른쪽은 map에서 현재 꺼낸 상품 데이터.
//<ItemCard item={item} /> 란, 지금 상품 데이터를 item이란 이름으로 ItemCard에 전달하겠다는 뜻. 