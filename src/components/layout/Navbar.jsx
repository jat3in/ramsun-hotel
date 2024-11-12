import { useState } from "react";
import { Menu, Plus ,MoveLeft,MoveRight } from "lucide-react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://i.postimg.cc/FR6xkSrN/image-1.jpg",
    "https://i.postimg.cc/TYQHTCFW/image-4.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
          <h2 className="text-2xl font-bold mb-4">Beautiful Destinations</h2>
          <p className="mb-6 text-center px-4">Discover amazing places with us</p>
          <button className="bg-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors">
            Book Now
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white transition-colors backdrop-blur-md rounded-full size-10 flex items-center justify-center"
      >
        <MoveLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-white transition-colors backdrop-blur-md rounded-full size-10 flex items-center justify-center"
      >
        <MoveRight />
      </button>
    </div>
  );
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="w-full bg-white ">
      <nav className="flex items-center h-12 justify-between shadow-md  md:px-0 px-2">
        {/* Logo */}
        <div className="flex-1 flex md:justify-center justify-start">
          <img src="" alt="logo" className="size-8 rounded-full bg-primary" />
        </div>
        <div className="flex-1 flex justify-center">
          <button onClick={toggleMenu} className="">
            {!isOpen ? (
              <Menu className="size-6 text-gray-600" />
            ) : (
              <Plus className="size-6 rotate-45 bg-primary rounded-full text-white" />
            )}
          </button>
        </div>
        <div className="flex-1 flex md:justify-center justify-end">
          <button className="bg-primary text-white px-4 py-1 rounded-md">
            Book Now
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-gray-100 shadow-md absolute top-12 right-0 left-0 max-h-[calc(100%-3rem)] h-full p-2 flex gap-2.5 md:flex-row flex-col">
          <ul className="flex flex-col gap-2 p-2 bg-white rounded-lg md:w-4/5 ">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:bg-primary hover:text-white p-2 rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className=" aspect-square rounded-lg overflow-hidden"> <ImageCarousel></ImageCarousel> </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
