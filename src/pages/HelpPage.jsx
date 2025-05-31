import React from 'react';
import { ChevronDown } from 'lucide-react';


const faqs = [
  {
    question: "How do I track my order?",
    answer: "You can track your order by visiting the Orders page in your account. Each order will show its current status and tracking information once shipped."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are securely processed."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Contact our support team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Express shipping (2-3 business days) is available for most locations. International shipping may take 7-14 business days."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Import duties and taxes may apply."
  },
  {
    question: "How can I change or cancel my order?",
    answer: "You can modify or cancel your order within 1 hour of placing it. Contact our customer support team immediately for assistance."
  },
  {
    question: "Are my payment details secure?",
    answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details."
  },
  {
    question: "What if my item arrives damaged?",
    answer: "Please take photos of the damaged item and packaging, then contact our support team within 48 hours of delivery. We'll arrange a replacement or refund."
  }
];

const HelpPage = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Help Center</h1>
        <p className="text-gray-600 mb-8">Find answers to frequently asked questions about our services.</p>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">How can we help you?</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-gray-900 font-medium">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-4">
            Our customer support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="space-y-2">
            <a
              href="mailto:support@example.com"
              className="block w-full sm:w-auto text-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;