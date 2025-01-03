import React from "react";
import Navigation from "./Navigation";
import CarouselWithMenu from "./CarouselWithMenu";
import Menubar from "./Menubar";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container bg-white shadow-xl px-0 lg:px-8 mx-auto">
      <Navigation />
      <CarouselWithMenu />
      <Menubar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
