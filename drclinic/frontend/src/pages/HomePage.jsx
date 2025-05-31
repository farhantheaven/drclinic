// drclinic/frontend/src/pages/HomePage.jsx
import React from 'react';
import ImageCarousel from '../components/ImageCarousel'; // Import the carousel

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to DrClinic</h1>
        <p className="text-xl mb-8">Your health, our priority. Quality care, 24/7.</p>
        {/* Optional: Add a Call to Action button here if desired later */}
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Facilities</h2>
          <ImageCarousel />
        </div>
      </section>

      {/* Clinic Introduction Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About DrClinic</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            DrClinic is a state-of-the-art medical facility dedicated to providing top-quality healthcare services.
            Our experienced doctor and compassionate staff are committed to your well-being.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">24/7 Availability</h3>
              <p className="text-gray-700">
                We are open around the clock, every day of the year, to ensure you receive medical attention whenever you need it.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">Expert Credentials</h3>
              <p className="text-gray-700">
                Our leading physician holds advanced degrees: MD (Doctor of Medicine) and MBBS (Bachelor of Medicine, Bachelor of Surgery), ensuring expert care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
