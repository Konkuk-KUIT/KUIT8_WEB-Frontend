import ItemCard from './ItemCard.jsx'

export default function Content({ items }) {
  return (
    <main className="market-main">
      <article className="product-list">
        {items.map(product => (
          <ItemCard key={product.title} product={product} />
        ))}
      </article>
      
      <button className="plus-button">
        <img src="/assets/plus.svg" width="24" height="24" alt="글쓰기" />
      </button>
    </main>
  )
}
