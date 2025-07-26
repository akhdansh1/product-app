import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center p-8 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          About <span className="text-blue-600">MyProduct</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          MyProduct is a modern product listing web application built with React and Tailwind CSS. 
          It’s designed to demonstrate responsive layouts, clean user interfaces, and integration with public APIs.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          For any inquiries, suggestions, or support, feel free to reach out to us at:&nbsp;
          <a href="mailto:support@myproduct.com" className="text-blue-600 font-semibold hover:underline">
            support@myproduct.com
          </a>
        </p>
      </div>
    </section>
  );
}
