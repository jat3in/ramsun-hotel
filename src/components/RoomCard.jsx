import { Bed, Users, Wifi, Coffee, Bath } from "lucide-react";
import { useState } from "react";

const RoomCard = ({ room }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, label: "Free WiFi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Breakfast" },
    { icon: <Bath className="w-5 h-5" />, label: "Attached Bath" },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto max-w-6xl">
      {/* Image Container with Skeleton */}
      <div className="md:w-2/5 relative overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse
          ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
        
        <img
          src={room.image}
          alt={room.title}
          className={`w-full h-[300px] md:h-full object-cover transform group-hover:scale-110 transition-all duration-500
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Price Tag with Skeleton */}
        <div className={`absolute top-4 left-4 ${!imageLoaded && 'animate-pulse'}`}>
          <div className="bg-white/90 px-3 py-1 rounded-full">
            <span className="text-primary font-semibold">
              {imageLoaded ? `₹${room.price}/night` : 'Loading...'}
            </span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        {!imageLoaded ? (
          // Skeleton Content
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded-md w-3/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
            </div>
            <div className="flex gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-28 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          // Actual Content
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {room.title}
            </h2>
            <p className="text-gray-600 mb-6">{room.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Bed className="w-5 h-5 text-primary" />
                <span>{room.bedInfo}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-primary" />
                <span>{room.guestInfo}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="text-primary">{amenity.icon}</span>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <button className={`flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold 
            transition-all duration-300 hover:bg-primary hover:text-white
            ${!imageLoaded && 'opacity-50 cursor-not-allowed'}`}
            disabled={!imageLoaded}>
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
