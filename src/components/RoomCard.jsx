import { Bed, Users, Wifi, Coffee, Bath } from 'lucide-react';

const RoomCard = ({ room }) => {
  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, label: "Free WiFi" },
    { icon: <Coffee className="w-5 h-5" />, label: "Breakfast" },
    { icon: <Bath className="w-5 h-5" />, label: "Attached Bath" }
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto max-w-6xl">
      {/* Image Container */}
      <div className="md:w-2/5 relative overflow-hidden group">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-[300px] md:h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
          <span className="text-green-600 font-semibold">₹{room.price}/night</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{room.title}</h2>
          <p className="text-gray-600 mb-6">{room.description}</p>

          {/* Room Details */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Bed className="w-5 h-5 text-green-600" />
              <span>{room.bedInfo}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-green-600" />
              <span>{room.guestInfo}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-4 mb-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">{amenity.icon}</span>
                <span>{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <button 
            className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold  transition-colors duration-300"
          >
  Check Availability          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
