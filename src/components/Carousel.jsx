import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ images, autoSlide = true, autoSlideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full mx-auto group">
      {/* Main Carousel Container */}
      <div className="overflow-hidden relative md:h-[750px] h-96">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

        {/* Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full md:opacity-0 opacity-100 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg text-white p-3 rounded-full md:opacity-0 opacity-100 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Counter */}
      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-full z-20">
        <span className="font-medium">{currentIndex + 1}</span>
        <span className="mx-1">/</span>
        <span className="text-white/70">{images.length}</span>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        {[0, 1, 2].map((buttonIndex) => {
          const offset = (currentIndex + buttonIndex - 1 + images.length) % images.length;
          return (
            <button
              key={buttonIndex}
              onClick={() => setCurrentIndex(offset)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                buttonIndex === 1
                  ? "w-8 bg-primary"
                  : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
