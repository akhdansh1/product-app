import React from 'react';

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col-reverse md:flex-row items-center gap-8 animate-fadeIn">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
            Discover the best at <span className="text-blue-600">MyProduct</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Handpicked products, unbeatable prices. Experience shopping the smarter way.
          </p>
          <a
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Explore Products
          </a>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2">
          <img
            src="https://illustrations.popsy.co/gray/product-launch.svg"
            alt="Product Showcase"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
