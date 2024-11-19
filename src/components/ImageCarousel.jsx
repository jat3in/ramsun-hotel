import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

const ImageCarousel = ({ classNameProps = "" }) => {
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
    <div className={`relative w-full  ${classNameProps}`}>
      <div className="h-full w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
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

export default ImageCarousel;
