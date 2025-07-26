import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-center py-8 mt-16 shadow-inner border-t border-blue-100">
      <div className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-700">MyProduct</span>. All rights reserved.
      </div>
    </footer>
  );
}
