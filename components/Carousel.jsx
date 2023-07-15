"use client";

import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="w-full m-auto relative group shadow-md rounded-md"
      // key={data.name}
    >
      <div className="absolute w-full h-full bg-black/70  rounded-md"></div>
      <div
        style={{ backgroundImage: `url(${data[currentIndex].url})` }}
        className="w-full  h-[500px] bg-center bg-cover rounded-md"
      ></div>

      {/* arrow */}
      <div className="absolute top-0 right-0 m-10 flex z-10">
        {/* Left */}
        <div
          onClick={prevSlide}
          className="cursor-pointer w-full h-full bg-white px-3 border-r-[1px] py-2 rounded-l-md"
        >
          <AiOutlineLeft size={20} />
        </div>

        {/* Right */}
        <div
          onClick={nextSlide}
          className="cursor-pointer w-full h-full bg-white px-3 py-2  rounded-r-md"
        >
          <AiOutlineRight size={20} />
        </div>
      </div>
      <div className="absolute  inset-0 w-full text-2xl md:text-4xl lg:text-7xl flex items-center justify-center  text-white  font-bold  z-[7]">
        <h1 className="text-center">{data[currentIndex].title}</h1>
      </div>
      <div className="absolute flex flex-row bottom-0 gap-4 items-center justify-center w-full mb-14 z-10">
        {data.map((dot, dotIndex) => (
          <div
            className={
              dotIndex === currentIndex
                ? "w-2 h-2 bg-white rounded-full cursor-pointer"
                : "w-2 h-2 bg-white/60 rounded-full cursor-pointer"
            }
            onClick={() => goToSlide(dotIndex)}
            key={dot}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
