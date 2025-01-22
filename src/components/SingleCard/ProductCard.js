import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 m-4 max-w-sm shadow-lg bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
      <div className="mb-2">
        <span className="text-lg font-bold text-green-500">${product.price}</span>{" "}
        <span className="line-through text-gray-400">${product.oldPrice}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">Rating: {product.rating.rate}⭐</p>
        <p className="text-sm text-gray-500">{product.rating.count} reviews</p>
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
