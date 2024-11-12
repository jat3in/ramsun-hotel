import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
  const rooms = [
    {
      image: 'path/to/silver-deluxe-image.jpg',
      title: 'Silver Deluxe Room',
      description: 'Graciously designed, the Silver Deluxe Rooms at Le ROI, Udaipur offer a luxurious stay to our guests.',
      bedInfo: '1 double bed',
      guestInfo: '2 Guests',
    },
    {
      image: 'path/to/premium-golden-image.jpg',
      title: 'Premium Golden Rooms with Balcony',
      description: 'Spread across 265 sq.ft., these Udaipur Rooms are meticulously crafted and elaborately furnished for a relaxing stay in Udaipur.',
      bedInfo: '1 double bed',
      guestInfo: '2 Guests',
    },
    // Add more room objects as needed
  ];

  return (
    <div className="container mx-auto px-4">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} index={index} />
      ))}
    </div>
  );
};

export default RoomList;
