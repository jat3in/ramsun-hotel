import { useState, useEffect } from "react";
import DealsComponent from "../components/Deals";
import Footer from "../components/layout/Footer";
import ReviewList from "../components/ReviewList";
import RoomList from "../components/RoomList";
import Navbar from "../components/layout/Navbar";
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
