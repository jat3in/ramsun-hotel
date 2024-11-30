import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Stayed here for 2 nights. We find rooms are well designed and are equipped with all the necessary items like tea kettle, refrigerator, dental and shaving kits. The balcony with rooms and parking space is what impress us the most.",
    author: "Himanshubanna",
    date: "Nov 25, 2020",
    rating: 5,
  },
  {
    id: 2,
    text: "I would like to tell about the Ramson Stay Inn This is nice property well maintained room superb service and staff prime location in mid City of Shillong, Meghalaya easy going over all nicely experience with this I recommend and must visit.",
    author: "MahendraV74",
    date: "Nov 25, 2020",
    rating: 4,
  },
  {
    id: 3,
    text: "Best location, easy to roam around in city from the hotel, neat & clean room staff, they are taking precautions about sanitisation. Hope will visit again soon with bunch of more people. All the best!",
    author: "Rahulmumbai70",
    date: "Nov 25, 2020",
    rating: 5,
  },
];

const ReviewCard = ({ text, author, date, rating }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-green-600 text-green-600" />
      ))}
    </div>

    <div className="relative mb-6">
      <Quote className="absolute -left-2 -top-2 w-8 h-8 text-green-600/20" />
      <p className="text-gray-700 leading-relaxed pl-6">{text}</p>
    </div>

    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <img
        src="https://img.icons8.com/ios-filled/50/000000/tripadvisor.png"
        alt="Tripadvisor icon"
        className="h-6 w-6 opacity-70"
      />
    </div>
  </div>
);

const ReviewList = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Guest Experiences
        </h2>
        <p className="text-gray-600">
          Discover what our guests have to say about their stay at Ramson Stay
          Inn
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  </section>
);

export default ReviewList;
