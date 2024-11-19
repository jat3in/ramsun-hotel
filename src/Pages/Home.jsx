
import DealsComponent from "../components/Deals";
import Footer from "../components/layout/Footer";
import ReviewList from "../components/ReviewList";
import RoomList from "../components/RoomList";
import ImageCarousel from "../components/ImageCarousel";
const Home = () => {
  return <main className="h-full w-full">
    <ImageCarousel classNameProps="md:h-[750px] h-[480px]" ></ImageCarousel>
    <ReviewList/>
    <RoomList/>
    <DealsComponent/>
    <Footer/>
  </main>;
};

export default Home;
