import ItemCard from './ItemCard.jsx'

// 헤더와 하단 탭 사이의 본문이다. 상품 목록과 오른쪽 아래 글쓰기 단추를 맡는다.
// 둘은 원래 .app 바로 아래에 나란히 있던 형제라서, 새 div 로 묶지 않고
// 조각(<> </>)으로 감싼다. 조각은 DOM 에 아무 태그도 남기지 않아서
// 화면에 그려지는 모양과 CSS 가 1단계와 똑같이 유지된다.
function Content({ items }) {
  return (
    <>
      <ul className="market-list">
        {/* 상품 일곱 개를 map 으로 돌린다. key 는 모델에 더해 둔 id 를 쓴다. */}
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>

      <button
        type="button"
        className="fab"
        disabled
        title="글쓰기는 아직 만들지 않았습니다"
        aria-label="글쓰기, 아직 만들지 않았습니다"
      >
        <img src="/assets/plus.png" alt="" />
      </button>
    </>
  )
}

export default Content
