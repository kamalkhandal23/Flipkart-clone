// src/components/ProductScroller.js
import React, { useRef } from 'react';
import ArrowButton from './ArrowButton';
import './ProductScroller.css';

const ProductScroller = ({ title, products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="product-section">
      <h2 className="section-title">{title}</h2>
      <div className="product-container">
        <ArrowButton direction="left" onClick={() => scroll('left')} />
        <div className="product-list" ref={scrollRef}>
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.subTitle}</p>
            </div>
          ))}
        </div>
        <ArrowButton direction="right" onClick={() => scroll('right')} />
      </div>
    </div>
  );
};

export default ProductScroller;
