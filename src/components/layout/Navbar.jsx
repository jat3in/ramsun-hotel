import { useState } from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Rooms", href: "/" },
    { title: "About us", href: "/" },
  ];

  return (
    <nav className="bg-white shadow-lg  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full border-2 border-primary p-1">             <img src={logo} alt="Logo"  />
            </div>
              <span className="text-2xl font-bold text-primary">Ramson Stay Inn</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/"
              className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-purple-50 transition-colors duration-300"
                >
                  {item.title}
                </a>
              ))}
              <a
                href="/"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary transition-colors duration-300 shadow-md"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
