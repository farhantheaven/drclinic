// drclinic/frontend/src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

// Placeholder services data
const services = [
  {
    id: 1,
    name: 'General Consultation',
    description: 'Comprehensive health check-ups and consultations for a wide range of medical conditions. We focus on preventive care and early diagnosis.',
    icon: '🩺', // Example: Stethoscope emoji as a simple icon placeholder
  },
  {
    id: 2,
    name: 'Specialized Treatments',
    description: 'Advanced diagnostic services and specialized treatment plans tailored to individual patient needs for specific conditions.',
    icon: '🔬', // Example: Microscope emoji
  },
  {
    id: 3,
    name: 'Preventive Care & Wellness',
    description: 'Programs and advice on lifestyle modifications, vaccinations, and health screenings to maintain long-term wellness.',
    icon: '❤️', // Example: Heart emoji
  },
  {
    id: 4,
    name: 'Emergency Services',
    description: 'Prompt and efficient care for urgent medical situations. Our clinic is equipped to handle a variety of minor emergencies.',
    icon: '🚑', // Example: Ambulance emoji
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-700 sm:text-5xl">
            Our Medical Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Providing a wide range of high-quality medical services to meet your health needs.
          </p>
        </header>

        {/* Services Grid Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </section>

        {/* Call to Action/Further Info Section */}
        <section className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-4">
            For more detailed information about our services or to schedule an appointment, please contact us.
          </p>
          <Link // Changed from <a> to <Link>
            to="/contact"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}
