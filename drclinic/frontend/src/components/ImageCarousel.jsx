// drclinic/frontend/src/components/ImageCarousel.jsx
import React, { useState, useEffect } from 'react';

const images = [
  'https://placehold.co/1200x400/0056b3/white?text=Clinic+Image+1',
  'https://placehold.co/1200x400/333333/white?text=Modern+Facility',
  'https://placehold.co/1200x400/007bff/white?text=Caring+Staff',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden shadow-2xl rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Clinic view ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'} hover:bg-blue-400 focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
