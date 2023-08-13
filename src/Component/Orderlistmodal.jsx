import React from "react";

const OrderModal = ({ products, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Product Details</h2>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <p>Name: {product.name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;
