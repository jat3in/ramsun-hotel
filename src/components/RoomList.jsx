import RoomCard from "./RoomCard";

const RoomList = () => {
  const seasonalMultipliers = {
    peak: 1.3, // Peak season (Oct-Dec)
    high: 1.15, // High season (Mar-May)
    regular: 1, // Regular season (Jan-Feb, Jun-Sep)
  };
  // Function to get current season based on month
  const getCurrentSeason = () => {
    const month = new Date().getMonth() + 1; // Get current month (1-12)

    if (month >= 10 && month <= 12) return "peak";
    if (month >= 3 && month <= 5) return "high";
    return "regular";
  };

  // Base room data
  const baseRooms = [
    {
      id: 1,
      image: "image (9).jpeg",
      title: "Silver Deluxe Room",
      description:
        "Graciously designed, the Silver Deluxe Rooms at Le ROI, Shillong, Meghalaya offer a luxurious stay to our guests.",
      bedInfo: "1 double bed",
      guestInfo: "2 Guests",
      basePrice: 2999,
      amenities: ["Free WiFi", "Room Service", "Air Conditioning", "TV"],
      size: "225 sq.ft.",
      viewType: "City View",
    },
    {
      id: 2,
      image: "image (15).jpeg",
      title: "Premium Golden Rooms with Balcony",
      description:
        "Spread across 265 sq.ft., these Shillong, Meghalaya Rooms are meticulously crafted and elaborately furnished for a relaxing stay in Shillong, Meghalaya.",
      bedInfo: "1 double bed",
      guestInfo: "2 Guests",
      basePrice: 3499,
      amenities: [
        "Free WiFi",
        "Balcony",
        "Mini Bar",
        "Room Service",
        "Mountain View",
      ],
      size: "265 sq.ft.",
      viewType: "Mountain View",
    },
  ];

  // Calculate current prices based on season
  const currentSeason = getCurrentSeason();
  const rooms = baseRooms.map((room) => ({
    ...room,
    price: Math.round(room.basePrice * seasonalMultipliers[currentSeason]),
  }));

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Rooms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort in our thoughtfully designed rooms,
            each crafted to provide an unforgettable stay in Shillong.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomList;
