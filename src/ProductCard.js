import React, { useState } from 'react';
import "./ProductCard.css"
function ProductCard() {
  const [isPurchased, setIsPurchased] = useState(false);

  const handlePurchase = () => {
    // Simulate a purchase action (you can replace this with your actual logic)
    setTimeout(() => {
      setIsPurchased(true);
    }, 2000); // Simulate a delay for the purchase process

    // Optionally, you can also make an API call here to handle the real purchase
    // Replace the setTimeout with your API call
  };

  return (
    <div className="product-card">
      <h1>Cloud</h1>
      <p className='desc'>description goes here.</p>
      {isPurchased ? (
        <p className='purchage'>You've purchased this product!</p>
      ) : (
        <div>
          <button onClick={handlePurchase}>Buy Now</button>
          <p className='click'>Click the button to purchase the product.</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
