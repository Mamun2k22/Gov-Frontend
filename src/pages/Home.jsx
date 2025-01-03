import React from "react";
import Navigation from "./Navigation";
import CarouselWithMenu from "./CarouselWithMenu";
import Menubar from "./Menubar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div className="container">
      <Navigation />
      <CarouselWithMenu />
      <Menubar />
      <MainContent />
    </div>
  );
};

export default Home;
