import React from 'react';
import { ArrowRight, Tag, Clock, Percent } from 'lucide-react';

const deals = [
  {
    title: 'LEROI10 Promo Code Discount',
    description: 'Use promo code LEROI10 and get a discount of up to 25% off.',
    image: '/image (10).jpeg',
    icon: <Tag className="w-6 h-6" />,
    validity: 'Valid until Dec 31, 2024',
    discount: '25% OFF'
  },
  {
    title: 'Exclusive Benefits',
    description: 'Book directly from our website and get exclusive benefits on your stay.',
    image: '/image (20).jpeg',
    icon: <Percent className="w-6 h-6" />,
    validity: 'Limited time offer',
    discount: 'Special Benefits'
  },
  {
    title: 'Long Stay Deal',
    description: 'Book for 2 nights and get 30% off on your 3rd night.',
    image: '/image (21).jpeg',
    icon: <Clock className="w-6 h-6" />,
    validity: 'For stays above 2 nights',
    discount: '30% OFF'
  }
];

const DealsComponent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Offers & Deals
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our special packages and promotional offers designed to make your stay even more memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {deal.discount}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-green-600 mb-3">
                  {deal.icon}
                  <span className="text-sm font-medium">{deal.validity}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {deal.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {deal.description}
                </p>

                <button className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group">
                  View Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default DealsComponent;
