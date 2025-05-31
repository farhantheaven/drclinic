// drclinic/frontend/src/pages/ContactPage.jsx
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsError(false);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all required fields: Name, Email, and Message.');
      setIsError(true);
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatusMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatusMessage(responseData.message || 'Enquiry submitted successfully!');
        setIsError(false);
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      } else {
        setStatusMessage(responseData.error || 'An error occurred while submitting the enquiry.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setStatusMessage('An unexpected error occurred. Please try again later.');
      setIsError(true);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-purple-700 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help. Reach out to us with your questions or to schedule an appointment.
          </p>
        </header>

        <div className="bg-white p-8 rounded-xl shadow-xl md:grid md:grid-cols-2 md:gap-12">
          {/* Enquiry Form Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300">
                  Send Message
                </button>
              </div>
              {statusMessage && (
                <p className={`text-sm mt-2 ${isError ? 'text-red-600' : 'text-green-600'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </section>

          {/* Direct Contact Info Section */}
          <section className="mt-10 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Clinic Information</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Address:</strong><br />123 Health St, Wellness City, ST 98765 (Placeholder)</p>
              <p><strong>Phone:</strong><br />(123) 456-7890 (Placeholder)</p>
              <p><strong>Email:</strong><br />contact@drclinic.example (Placeholder)</p>
              <p><strong>Hours:</strong><br />Open 24/7</p>
            </div>
            {/* Placeholder for Map */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Find Us</h3>
              <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center text-gray-500">
                Map Placeholder (e.g., Embedded Google Map)
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
