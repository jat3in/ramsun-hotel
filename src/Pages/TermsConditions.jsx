import React from 'react';
import { Book, Clock, CreditCard, Shield, UserCheck, Hotel } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      title: "Booking and Reservations",
      icon: <Book className="w-8 h-8 text-primary" />,
      content: [
        "Reservations are subject to room availability",
        "Valid identification is required at check-in",
        "Standard check-in time is 2:00 PM and check-out time is 12:00 PM",
        "Early check-in and late check-out are subject to availability",
        "Minimum stay requirements may apply during peak seasons"
      ]
    },
    {
      title: "Cancellation Policy",
      icon: <Clock className="w-8 h-8 text-primary" />,
      content: [
        "Free cancellation up to 24 hours before check-in",
        "Cancellations within 24 hours of check-in may incur charges",
        "No-shows will be charged the full amount of the stay",
        "Special event bookings may have different cancellation terms",
        "Refunds will be processed within 7-10 business days"
      ]
    },
    {
      title: "Payment Terms",
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      content: [
        "All rates are in Indian Rupees (INR)",
        "We accept major credit cards and digital payments",
        "A valid credit card is required for reservation guarantee",
        "Additional charges may apply for extra amenities",
        "Government taxes will be applied as per regulations"
      ]
    },
    {
      title: "Guest Responsibilities",
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      content: [
        "Guests must maintain peaceful conduct",
        "Smoking is prohibited in non-smoking rooms",
        "Pets are not allowed unless specifically arranged",
        "Damage to hotel property will incur charges",
        "Room occupancy limits must be strictly followed"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 pt-8">Terms & Conditions</h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12 border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <Hotel className="w-10 h-10 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Ramson Stay Inn</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            These terms and conditions outline the rules and regulations for staying at Ramson Stay Inn. By booking with us, you accept these terms and conditions in full. Please read them carefully before making a reservation.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary mr-3 text-lg">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-primary/5 rounded-2xl p-10 mt-12">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900">Legal Notice</h2>
          </div>
          <p className="text-gray-700 text-lg mb-4">
            Ramson Stay Inn reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes indicates your acceptance of the new terms.
          </p>
          <p className="text-gray-700 text-lg">
            For any questions regarding these terms and conditions, please contact our front desk or email us at legal@ramsonstayinn.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
