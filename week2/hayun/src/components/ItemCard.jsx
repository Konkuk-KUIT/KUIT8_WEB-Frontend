export default function ItemCard({ product }) {
  return (
    <section className="product">
      <img className="product-image" src={`/${product.image}`} alt={`${product.title} 제품 사진`} />
      
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-meta">{product.location} · {product.timeAgo}</p>
        <p className="product-price">{product.price}</p>
        
        <div className="reactions">
          {product.comments > 0 && (
            <button className="reaction">
              <img src="/assets/comment.svg" width="14" height="14" alt="댓글" />
              {product.comments}
            </button>
          )}
          {product.likes > 0 && (
            <button className="reaction">
              <img src="/assets/heart.svg" width="14" height="14" alt="관심" />
              {product.likes}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
