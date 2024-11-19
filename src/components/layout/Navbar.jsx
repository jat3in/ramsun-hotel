import { useState } from "react";
import { Menu, Plus,Hotel } from "lucide-react";
import ImageCarousel from "../ImageCarousel"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" />
      )}
      <header className="w-full fixed top-0 left-0 right-0 z-50 px-4">
        <nav className="flex items-center h-12 justify-between bg-white/80 backdrop-blur-md shadow-lg my-2 rounded-lg md:px-4 px-2">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <div className="rounded-full size-8 text-primary flex items-center justify-center  border-2 border-primary p-1"><Hotel></Hotel></div>
          </div>
          <div className="flex-1 flex justify-center">
            <button onClick={toggleMenu}>
              {!isOpen ? (
                <Menu className="size-6 text-gray-600" />
              ) : (
                <Plus className="size-6 rotate-45 bg-primary rounded-full text-white" />
              )}
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="bg-primary text-white px-3 md:px-4 py-1 rounded-md text-sm whitespace-nowrap">
              Book Now
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg absolute top-16 right-0 left-0 md:max-h-[320px] p-2 flex gap-2.5 md:flex-row flex-col mx-4">
            <ul className="flex flex-col gap-2 p-2 bg-white rounded-lg md:w-4/5">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:bg-primary hover:text-white p-2 rounded-md cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-lg overflow-hidden md:max-w-[40%]">
              <ImageCarousel className="h-full" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
