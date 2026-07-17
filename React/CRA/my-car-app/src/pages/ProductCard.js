import React from "react";

const ProductCard = ({ product, onAction, label }) => {
  return (
    <>
      <div className="productcard">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        {product.inStock ? (
          <button className="btn">Add to Cart</button>
        ) : (
          <p>Out of Stock</p>
        )}
        <ul>
          {product.tag.map((products, idx) => (
            <li key={idx}>{products}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={onAction}>{label}</button>
      </div>
    </>
  );
};

export default ProductCard;
