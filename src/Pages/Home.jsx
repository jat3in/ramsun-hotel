import { useState, useEffect } from "react";
import DealsComponent from "../components/Deals";
import Footer from "../components/layout/Footer";
import ReviewList from "../components/ReviewList";
import RoomList from "../components/RoomList";
import Navbar from "../components/layout/Navbar";
import Carousel from "../components/Carousel";

const Home = () => {
  const images = [
    "https://i.postimg.cc/FR6xkSrN/image-1.jpg",
    "https://i.postimg.cc/TYQHTCFW/image-4.jpg",
  ];

  return (
    <main className="h-full w-full">
      <Navbar></Navbar>
      <Carousel images={images} autoSlide={true} autoSlideInterval={3000} />
      <ReviewList />
      <RoomList />
      <DealsComponent />
      <Footer />
    </main>
  );
};

export default Home;
