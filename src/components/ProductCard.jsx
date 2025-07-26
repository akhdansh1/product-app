import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-blue-800 mb-1 line-clamp-1">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>
        <p className="text-blue-600 font-bold text-right mt-4">${product.price}</p>
      </div>
    </div>
  );
}
