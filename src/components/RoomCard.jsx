import React from 'react';



const RoomCard = ({ room, index }) => {

  return (
    <div className={`flex flex-wrap md:flex-nowrap gap-4 p-4 m-4 border-b  bg-neutral-100 rounded-lg`}>
      <div className="w-96">
        <img src={room.image} alt={room.title} className="w-full rounded-lg object-cover mb-4" />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold">{room.title}</h2>
        <p className="text-gray-600 mt-2">{room.description}</p>
        <div className="flex items-center justify-start mt-4">
          <div className="flex items-center mr-6">
            <span className="material-icons">bed</span>
            <p className="ml-2">{room.bedInfo}</p>
          </div>
          <div className="flex items-center">
            <span className="material-icons">person</span>
            <p className="ml-2">{room.guestInfo}</p>
          </div>
        </div>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Book Now</button>
      </div>   
    </div>
  );
};

export default RoomCard;
