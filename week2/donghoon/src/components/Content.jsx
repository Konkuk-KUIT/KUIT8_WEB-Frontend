import ItemCard from "./ItemCard";

function Content({ items }) {
    // step 3 체크리스트 - 조건부 렌더링 사용하기
    // step 3 체크리스트 - 배열 렌더링 사용하기
    return (
        <main className="content">
            {
                items.map((item) => (
                    item.isSold===true && (
                    <ItemCard key={item.title} item={item} />
                    )
                ))
            }
        </main>
    )
}

export default Content

//item={item} 에서, 왼쪽은 props 이름, 오른쪽은 map에서 현재 꺼낸 상품 데이터.
//<ItemCard item={item} /> 란, 지금 상품 데이터를 item이란 이름으로 ItemCard에 전달하겠다는 뜻. 