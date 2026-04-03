import React from "react";

const ProductCard = ({ product, addToCart, buyNow }) => {
  return (
    <div className="
      group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden
      shadow-[0_10px_25px_rgba(0,0,0,0.08)]
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
      transition-all duration-300 hover:-translate-y-3">

      {/* IMAGE SECTION */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-teal-600/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {product.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-3">
        <h2 className="font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
          {product.name}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* PRICE */}
        <p className="text-2xl font-extrabold text-teal-600">
          ${product.price}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-4">

          {/* Add To Cart */}
          <button
            onClick={() => addToCart(product)}
            className="
              flex-1 px-4 py-2 text-sm font-semibold rounded-xl
              bg-gradient-to-r from-teal-600 to-emerald-500
              text-white shadow-md hover:shadow-xl
              hover:scale-105 transition-all duration-300"
          >
            Add to Cart
          </button>

          {/* Buy Now */}
          <button
            onClick={() => buyNow(product)}
            className="
              flex-1 px-4 py-2 text-sm font-semibold rounded-xl
              bg-orange-500 text-white
              shadow-md hover:bg-orange-600
              hover:scale-105 transition-all duration-300"
          >
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;