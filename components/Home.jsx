import React from "react";
import Carousel from "./Carousel";
import slides from "@util/carouselData";
import ProductList from "./ProductList";

function Home() {
  return (
    <section className=" w-full">
      {/* Carousel section */}
      <Carousel data={slides} />

      {/* Filter section */}

      {/* Feature section */}
      <div className="mt-10">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">
          Items For You!
        </h1>
        <ProductList />
      </div>
    </section>
  );
}

export default Home;
