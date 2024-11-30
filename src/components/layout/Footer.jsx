import logo from "../../assets/logo.png";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const hotelInfo = {
    name: "Ramson Stay Inn",
    description: [
      "Hotel Ramson's Stay Inn, rated 4.3/5, is a popular 3-star choice in Shillong, Meghalaya, known for smooth check-ins, friendly management, and couple-friendly policies.",
      "Highly recommended among tourists, it stands out for its great customer satisfaction and flexible policies.",
    ],
  };

  const contactInfo = {
    phone: "+91 69094 22848",
    email: "Ramsonstayinn@gmail.com",
    address:
      "Ramson Stay Inn, Neigrihms-Mawpat Junction, Lumkhyriem, Itshyrwat, Shillong, Meghalaya 793019",
    mapLink: "https://maps.app.goo.gl/uVvgMMub9K8HPFvd8",
  };

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-gray-900">
                {hotelInfo.name}
              </span>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              {hotelInfo.description[0]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4">
            <p className="text-gray-600">
              © {year} {hotelInfo.name}. All rights reserved.
            </p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
