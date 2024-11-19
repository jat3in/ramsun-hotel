
import DealsComponent from "../components/Deals";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ReviewList from "../components/ReviewList";
import RoomList from "../components/RoomList";

const Home = () => {
  return <main>
    <Navbar/>
    <ReviewList/>
    <RoomList/>
    <DealsComponent/>
    <Footer/>
  </main>;
};

export default Home;
