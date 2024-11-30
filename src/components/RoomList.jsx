import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
  const rooms = [
    {
      image: 'image (9).jpeg',
      title: 'Silver Deluxe Room',
      description: 'Graciously designed, the Silver Deluxe Rooms at Le ROI, Shillong, Meghalaya offer a luxurious stay to our guests.',
      bedInfo: '1 double bed',
      guestInfo: '2 Guests',
    },
    {     
      image: 'image (15).jpeg',
      title: 'Premium Golden Rooms with Balcony',
      description: 'Spread across 265 sq.ft., these Shillong, Meghalaya Rooms are meticulously crafted and elaborately furnished for a relaxing stay in Shillong, Meghalaya.',
      bedInfo: '1 double bed',
      guestInfo: '2 Guests',
    },
    
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
