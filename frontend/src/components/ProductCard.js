import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, university }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-meta">
          <span className="product-price">${price}</span>
          <span className="product-university">{university}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
