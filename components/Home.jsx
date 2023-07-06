import React from "react";
import Carousel from "./Carousel";
import slides from "@util/carouselData";

function Home() {
  return (
    <div className=" w-full px-10">
      <Carousel data={slides} />
    </div>
  );
}

export default Home;
