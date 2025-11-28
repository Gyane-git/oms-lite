"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqData = [
    {
      question: 'Can I access my accountings using a mobile device?',
      answer: 'Yes, Global Tech is fully responsive and optimized for mobile devices. You can access your accounting data anytime, anywhere through our mobile-friendly web application. We also offer native mobile apps for iOS and Android for the best mobile experience.'
    },
    {
      question: 'Can I give access to other people in my company?',
      answer: 'Absolutely! Global Tech supports multi-user access with role-based permissions. You can invite team members, assign specific roles (Admin, Accountant, Staff, etc.), and control what features and data each user can access. This ensures secure collaboration across your organization.'
    },
    {
      question: 'How much time does it take to get the Global Tech set up?',
      answer: 'Getting started with Global Tech is quick and easy. Basic setup can be completed in as little as 15-30 minutes. This includes creating your account, setting up your company profile, and configuring basic settings. For more complex setups with data migration, our team can have you up and running within 1-2 business days.'
    },
    {
      question: 'What types of training do you offer during implementation?',
      answer: 'We provide comprehensive training to ensure your team is confident using Global Tech. This includes: live onboarding sessions, video tutorials, detailed documentation, one-on-one training calls, and ongoing webinars. Our support team is always available to answer questions and provide guidance.'
    },
    {
      question: 'What kind of support do you provide after implementation?',
      answer: 'We offer continuous support through multiple channels including 24/7 email support, live chat during business hours, phone support for urgent issues, a comprehensive knowledge base, regular software updates, and a dedicated account manager for enterprise customers. Your success is our priority!'
    },
    {
      question: 'Is my data secure with Global Tech?',
      answer: 'Security is our top priority. We use bank-level encryption (256-bit SSL), regular data backups, secure cloud infrastructure, compliance with international data protection standards, and two-factor authentication. Your data is stored in secure data centers with 99.9% uptime guarantee.'
    },
    {
      question: 'Can I import data from my existing accounting software?',
      answer: 'Yes! Global Tech supports data import from various accounting software including QuickBooks, Xero, Tally, and Excel spreadsheets. Our migration team will assist you in transferring your data smoothly to ensure no information is lost during the transition.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), bank transfers, PayPal, and for enterprise customers, we offer invoicing options. All payments are processed securely through encrypted payment gateways.'
    }
  ];

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          <span className="text-indigo-600">Frequently Asked Questions</span>{' '}
          <span className="text-gray-900">About Global Tech</span>
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left py-4 hover:text-indigo-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <Minus className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-4 pr-12 text-gray-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-12 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Show More &gt;&gt;
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}