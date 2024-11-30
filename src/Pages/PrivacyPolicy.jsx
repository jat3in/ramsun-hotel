import { Shield, Lock, Cookie, Mail ,Phone,Map, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Shield className="w-8 h-8 text-primary" />,
      content: [
        "Personal identification information (Name, email address, phone number)",
        "Booking and reservation details",
        "Payment information",
        "Device and browser information",
        "Location data when using our services"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Mail className="w-8 h-8 text-primary" />,
      content: [
        "Process your hotel reservations",
        "Send booking confirmations and updates",
        "Provide customer support",
        "Send promotional offers and newsletters",
        "Improve our services and user experience"
      ]
    },
    {
      title: "Information Security",
      icon: <Lock className="w-8 h-8 text-primary" />,
      content: [
        "We implement industry-standard security measures",
        "Data encryption during transmission",
        "Regular security assessments",
        "Limited access to personal information",
        "Secure data storage systems"
      ]
    },
    {
      title: "Cookie Policy",
      icon: <Cookie className="w-8 h-8 text-primary" />,
      content: [
        "We use essential cookies for website functionality",
        "Analytics cookies to improve user experience",
        "Marketing cookies for personalized content",
        "You can manage cookie preferences in your browser"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 pt-8">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12 border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-lg">
            At Ramson Stay Inn, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Policy Sections Grid */}
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

        {/* Contact Section */}
        <div className="bg-primary/5 rounded-2xl p-10 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <p>Email: privacy@ramsonstayinn.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <p>Phone: +91 69094 22848</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p>Address: Ramson Stay Inn, Neigrihms-Mawpat Junction, Lumkhyriem, Itshyrwat, Shillong, Meghalaya 793019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
