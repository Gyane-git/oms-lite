"use client";
import { useState } from 'react';

export default function FreeTrials() {
  const [email, setEmail] = useState('');

  const handleStartTrial = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Add your form submission logic here
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Is Your <span className="text-indigo-600">Accounting</span> Still
          <br />
          Stuck in the Past?
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience the Most Efficient Way to Manage Your Accounting in the Cloud.
        </p>

        {/* CTA Container */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 w-full sm:w-auto px-6 py-4 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />

            {/* Start Free Trial Button */}
            <button
              onClick={handleStartTrial}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Start Free Trial
            </button>

            {/* Explore Demo Button */}
            <button
              onClick={() => console.log('Demo clicked')}
              className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Explore Demo Account
            </button>
          </div>

          {/* Disclaimer Text */}
          <p className="text-sm text-indigo-600 italic mt-4">
            No Payment or Commitment Required
          </p>
        </div>
      </div>
    </section>
  );
}