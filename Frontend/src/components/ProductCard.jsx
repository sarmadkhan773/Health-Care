import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
      <h2 className="font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-semibold mt-1">${product.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
