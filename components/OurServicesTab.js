"use client";
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function TabBar() {
  const [activeTab, setActiveTab] = useState('accounting');

  const tabs = [
    { id: 'accounting', label: 'Accounting' },
    { id: 'softwaredevelopment', label: 'Software Development' },
    { id: 'cloudcomputing', label: 'Cloud Computing' },
    { id: 'websolutions', label: 'Web & App Solutions' },
    { id: 'graphicdesign', label: 'Graphic Design & Animation' }
  ];

  const tabContent = {
    accounting: {
      title: 'Accounting',
      description: 'Record all your accounting transactions seamlessly within Global Tech.',
      features: [
        'Double Entry Accounting System',
        'Journal Voucher',
        'Charts of Accounts',
        'Sales and Purchase Cycle Management',
        'Payment Receipts'
      ],
      image: '/accounting-preview.png'
    },
    softwaredevelopment: {
      title: 'Software Development',
      description: 'Manage your inventory with real-time tracking and automated stock updates.',
      features: [
        'Real-time Stock Tracking',
        'Multi-location Warehouse Management',
        'Automatic Reorder Alerts',
        'Barcode Integration',
        'Stock Valuation Reports'
      ],
      image: '/inventory-preview.png'
    },
    cloudcomputing: {
      title: 'Cloud Computing',
      description: 'Create professional invoices and get paid faster with automated reminders.',
      features: [
        'Customizable Invoice Templates',
        'Recurring Invoices',
        'Payment Gateway Integration',
        'Automated Payment Reminders',
        'Multi-currency Support'
      ],
      image: '/invoicing-preview.png'
    },
    websolutions: {
      title: 'Web & App Solutions',
      description: 'Streamline your retail operations with our integrated POS system.',
      features: [
        'Quick Sales Processing',
        'Receipt Printing',
        'Customer Management',
        'Multiple Payment Methods',
        'Sales Analytics Dashboard'
      ],
      image: '/pos-preview.png'
    },
    graphicdesign: {
      title: 'Graphic Design & Animation',
      description: 'Store and manage all your business documents in one secure place.',
      features: [
        'Cloud Storage Integration',
        'Document Version Control',
        'Secure File Sharing',
        'OCR Document Scanning',
        'Automated Backup'
      ],
      image: '/documents-preview.png'
    }
   
  };

  const content = tabContent[activeTab];

  return (
    <section className="bg-linear-to-b from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          Global Tech Handles All Unique Needs for Your{' '}
          <span className="text-indigo-600">diverse Businesses!</span>
        </h2>

        {/* Tab Bar */}
        <div className="bg-white rounded-full shadow-lg p-2 mb-16 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Preview Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="aspect-video bg-linear-to-br from-indigo-100 to-blue-50 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 font-medium">{content.title} Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {content.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-colors">
                Explore More
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}