'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with real API call
    console.log('Form submitted:', formData);
    alert('Form submitted successfully (mock)');
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Submit Your Pitch</h1>
        <p className="text-gray-600 text-center mb-8">
          Founders: Submit your pitch deck and tell us about your venture.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 mb-1">Pitch Deck (PDF)</label>
            <input
              type="file"
              name="file"
              accept=".pdf"
              required
              onChange={handleChange}
              className="w-full text-sm text-gray-500"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Submit Pitch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
