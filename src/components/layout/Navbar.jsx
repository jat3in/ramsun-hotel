import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/aboutus" },
    // { title: "Gallery", href: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      (!isScrolled && isMenuOpen) || isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`h-10 w-10 rounded-full border-2 ${
              (!isScrolled && isMenuOpen) || isScrolled  ? 'border-primary' : 'border-white'
            } p-1 transition-all duration-300 group-hover:border-primary`}>
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              (!isScrolled && isMenuOpen) || isScrolled  ? 'text-primary' : 'text-white'
            } group-hover:text-primary`}>
              Ramson Stay Inn
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
  <Link
    key={item.href}
    to={item.href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      location.pathname === item.href 
        ? 'text-primary' 
        : (!isScrolled && !isMenuOpen) 
          ? 'text-white hover:text-primary'
          : 'text-gray-600 hover:text-primary'
    }`}
  >
    {item.title}
  </Link>
))}

            <Link
              to="/"
              className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            } hover:text-primary focus:outline-none`}
          >
            {!isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.href 
                    ? 'text-primary bg-primary/5' 
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
