import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Stayed here for 2 nights. We find rooms are well designed and are equipped with all the necessary items like tea kettle, refrigerator, dental and shaving kits. The balcony with rooms and parking space is what impress us the most.",
    author: "Himanshubanna",
    date: "Nov 25, 2020",
  },
  {
    id: 2,
    text: "I would like to tell about the le-LOI This is nice property well maintained room superb service and staff prime location in mid City of Udaipur easy going over all nicely experience with this I recommend and must visit.",
    author: "MahendraV74",
    date: "Nov 25, 2020",
  },
  {
    id: 3,
    text: "Best location, easy to roam around in city from the hotel, neat & clean room staff, they are taking precautions about sanitisation. Hope will visit again soon with bunch of more people. All the best ????",
    author: "Rahulmumbai70",
    date: "Nov 25, 2020",
  },
];

const ReviewCard = ({ text, author, date }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 mb-6 mx-4 flex flex-col justify-between w-full max-w-md md:w-[30%] md:m-4 transition-transform transform hover:scale-105">
    <div className="text-gray-700 mb-4 relative">
      <div className="text-4xl text-gray-700 mb-2 absolute top-[-15px] left-[-15px]">“</div>
      <p className="text-base leading-relaxed">{text}</p>
    </div>
    <div className="flex items-center justify-between  mt-4">
      <div>
        <p className="text-sm font-semibold">{author}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
   
      <img
        src="https://img.icons8.com/ios-filled/50/000000/tripadvisor.png"
        alt="Tripadvisor icon"
        className="h-6 w-6 lg:mr-[-110px] md:mr-[-45px] mr-[-200px]"
      />
      <div>
        
 
      </div>
    </div>
  </div>
);

const ReviewList = () => (
<>
  <div className='text-center text-5xl font-medium text-gray-800 font-serif '>Reviews</div>
  <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:flex-wrap justify-center">
    {reviews.map((review) => (
      <ReviewCard key={review.id} {...review} />
    ))}
  </div>
</>
);

export default ReviewList;
