import React from 'react';

const deals = [
  {
    title: 'LEROI10 Promo Code Discount',
    description: 'Use promo code LEROI10 and get a discount of up to 25% off.',
    image: '/image (10).jpeg', // Replace with the actual image path
    buttonLabel: 'Learn More'
  },
  {
    title: 'Exclusive Benefits',
    description: 'Book directly from our website and get exclusive benefits on your stay.',
    image: '/image (20).jpeg', // Replace with the actual image path
    buttonLabel: 'Learn More'
  },
  {
    title: 'Long Stay Deal',
    description: 'Book for 2 nights and get 30% off on your 3rd night.',
    image: '/image (21).jpeg', // Replace with the actual image path
    buttonLabel: 'Learn More'
  }
];

const DealsComponent = () => {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center mb-6">Irresistible Deals, Only For You!</h2>
      <p className="text-center text-gray-600 mb-8">The deals we offer on stays will make you want to take a vacation now!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-700 mb-4">{deal.description}</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                {deal.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsComponent;
