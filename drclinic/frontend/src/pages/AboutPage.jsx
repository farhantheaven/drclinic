// drclinic/frontend/src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700 sm:text-5xl">
            About DrClinic
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to providing exceptional healthcare with a personal touch.
          </p>
        </header>

        {/* Detailed Clinic Description Section */}
        <section className="bg-white p-8 rounded-xl shadow-xl mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-3">
            Our Story & Commitment
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              DrClinic was founded with a singular vision: to create a healthcare environment where patients feel valued, understood, and receive the highest standard of medical care. We believe in a holistic approach to health, addressing not just symptoms but also focusing on preventative care and patient education.
            </p>
            <p>
              Our clinic is equipped with modern medical technology to ensure accurate diagnoses and effective treatments. We are committed to continuous improvement and staying abreast of the latest advancements in medicine to serve our community better.
            </p>
          </div>
        </section>

        {/* Doctor's Profile Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl shadow-xl mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Meet Our Leading Physician
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Placeholder for Doctor's Photo */}
            <div className="md:mr-8 mb-6 md:mb-0 flex-shrink-0">
              <img
                src="https://placehold.co/300x300/0056b3/white?text=Dr.+[Name]"
                alt="Doctor's Portrait"
                className="rounded-full shadow-lg w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-white"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-700">Dr. [Doctor's Name Here]</h3>
              <p className="text-lg font-medium text-indigo-600">MD (Medicine), MBBS</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Dr. [Doctor's Name Here] brings a wealth of experience and a deep commitment to patient care. With a distinguished background in internal medicine and a passion for ongoing medical education, Dr. [Doctor's Name Here] is dedicated to providing comprehensive and compassionate treatment to all patients.
                (Further details about experience, specializations, and approach can be added here.)
              </p>
            </div>
          </div>
        </section>

        {/* Our Philosophy/Mission Section */}
        <section className="bg-white p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-3">
            Our Philosophy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Patient-Centered Care:</strong> We believe every patient is unique, and we tailor our treatments to individual needs and circumstances. Your health goals are our priority.
            </p>
            <p>
              <strong>Excellence & Integrity:</strong> We uphold the highest standards of medical ethics and strive for excellence in all aspects of our practice.
            </p>
            <p>
              <strong>Compassion & Respect:</strong> We treat all patients with dignity, respect, and empathy, creating a supportive and understanding environment.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
