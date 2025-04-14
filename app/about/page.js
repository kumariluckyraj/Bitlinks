import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-600">About Bitlinks</h1>
        <p className="text-lg mb-4">
          Bitlinks is your go-to URL shortener designed to simplify long, messy links and make them easier to share. Whether you're managing links for social media, campaigns, or just want to make things look cleaner, Bitlinks has your back.
        </p>
        <p className="text-lg mb-4">
          Our goal is to provide a seamless, fast, and user-friendly experience with customizable short URLs and powerful tracking capabilities (coming soon).
        </p>
        <p className="text-lg mb-6">
          Built using modern technologies like <span className="font-semibold text-green-700">Next.js</span> and <span className="font-semibold text-green-700">MongoDB</span>, Bitlinks is designed to be lightweight, scalable, and developer-friendly.
        </p>
        <p className="text-lg font-medium">
          Start shortening and sharing smarter — with <span className="text-green-600 font-bold">Bitlinks</span>.
        </p>
      </div>
    </div>
  );
}
