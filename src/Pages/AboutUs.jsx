import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Award, Users, Clock } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Experience",
      description: "Rated 4.3/5 by our valued guests",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Couple Friendly",
      description: "Perfect destination for couples",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Policies",
      description: "Smooth check-in/check-out process",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative md:min-h-[60vh] lg:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="image (77).jpeg"
          alt="Hotel Exterior"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About Ramson's Stay Inn
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Experience luxury and comfort in the heart of Shillong
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Luxury & Comfort
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Hotel Ramson's Stay Inn stands as a premier 3-star accommodation
                in Shillong, Meghalaya. Our commitment to excellence has earned
                us a stellar 4.3/5 rating, making us one of the most recommended
                hotels in the region. We pride ourselves on delivering
                exceptional service, comfortable stays, and memorable
                experiences for all our guests.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden text-center p-8 bg-white rounded-xl border border-gray-100
      hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Decorative Background Element */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 
        group-hover:scale-x-100 transition-transform duration-300"
                    />

                    {/* Icon Container */}
                    <div
                      className="relative inline-flex p-3 rounded-full bg-primary/5 group-hover:bg-primary/10 
        transition-colors duration-300"
                    >
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3
                      className="text-xl font-bold mt-6 mb-3 text-gray-900 group-hover:text-primary 
        transition-colors duration-300"
                    >
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Optional Hover Indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center text-primary font-medium">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/*  */}
            </div>
            <div className="space-y-6">
              <img
                src="image (56).jpeg"
                alt="Hotel Interior"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="image (3).jpeg"
                  alt="Hotel Amenity"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
                <img
                  src="image (5).jpeg"
                  alt="Hotel Room"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mt-4">
              We're here to assist you with your booking and inquiries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 69094 22848</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@ramsonstayinn.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Neigrihms-Mawpat Junction, Shillong
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
