import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClasses = (path) =>
    `hover:text-blue-200 transition ${
      pathname === path ? 'underline underline-offset-4' : ''
    }`;

  return (
    <nav className="bg-blue-600/90 backdrop-blur-sm text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-white">
          MyProduct
        </Link>
        <div className="space-x-8 text-base font-medium">
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link to="/products" className={linkClasses('/products')}>
            Products
          </Link>
          <Link to="/about" className={linkClasses('/about')}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
