import DealsComponent from "../components/Deals";
import ReviewList from "../components/ReviewList";
import RoomList from "../components/RoomList";
import Carousel from "../components/Carousel";

const Home = () => {
  const images = [
    "image (56).jpeg",
    "image (3).jpeg",
    "image (5).jpeg",
    "image (8).jpeg",
    "image (10).jpeg",
    "image (15).jpeg",
    "image (17).jpeg",
    "image (23).jpeg",
    "image (24).jpeg",
    "image (30).jpeg",
    "image (36).jpeg",
    "image (53).jpeg",
    "image (60).jpeg",
    "image (77).jpeg",
    "image (74).jpeg",
  ];

  return (
    <main className="h-full w-full">
      <Carousel images={images} autoSlide={true} autoSlideInterval={10000} />
      <ReviewList />
      <RoomList />
      <DealsComponent />
    </main>
  );
};

export default Home;
