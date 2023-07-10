/*eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
// import AiOutlineShoppingCart from "react-icons/ai";

function DetailsPage({ product }) {
  const [Size, setSize] = useState("");
  const [Color, setColor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Image */}
      <img
        src={product?.image}
        alt={product?.slug}
        className="object-cover lg:w-[500px] lg:h-[500px] bg-slate-200"
      />

      <div className="flex items-start flex-col gap-4 w-full p-1">
        {/* info */}
        <div className="flex items-center justify-between gap-20 w-full">
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <h2 className="text-xl">
            <span className="font-semibold text-xl">{product?.price}</span> da
          </h2>
        </div>

        {/* description */}
        <div>
          <h1 className="text-lg font-semibold mb-1">Details:</h1>
          <p>{product?.description}</p>
        </div>

        {/* chosing color & size */}
        <form>
          <div className="flex items-center space-x-3"></div>
          {product?.color ? (
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
              <h1 className="text-lg font-semibold mb-1">Color:</h1>
              <input
                type="radio"
                name="color-choice"
                value="White"
                className="sr-only"
                aria-labelledby="color-choice-0-label"
              />
              <span id="color-choice-0-label" className="sr-only">
                White
              </span>
              <span
                aria-hidden="true"
                className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10 ring ring-offset-1 ring-gray-200"
              ></span>
            </label>
          ) : (
            <></>
          )}

          {/* Size section */}
          {!product?.size ? null : (
            <h1 className="mt-1 font-semibold text-lg">Size:</h1>
          )}
          <div className="flex flex-row flex-wrap gap-5 group w-full mt-3 items-center">
            {product?.size?.map((size) => (
              <div
                key={size}
                className={
                  Size === size
                    ? "py-4 px-6 border border-black rounded-lg bg-black text-white  duration-150 cursor-pointer"
                    : "py-4 px-6 border border-black rounded-lg hover:bg-black hover:text-white hover:scale-[1.1] duration-150 cursor-pointer"
                }
                onClick={() => setSize(size)}
              >
                {size}
              </div>
            ))}
          </div>

          {/* Color Section */}
          {!product?.color ? null : <h1 className="mt-2">Color</h1>}
          <div className="flex flex-row flex-wrap gap-5 group w-full mt-3 items-center">
            {product?.color?.map((color, i) => (
              <div
                key={color}
                className={
                  color === Color
                    ? "py-6 px-6 outline outline-offset-2 rounded-full duration-150 ease-in-out cursor-pointer"
                    : `py-6 px-6  rounded-full hover:scale-[1] duration-150 cursor-pointer`
                }
                style={{
                  backgroundColor: color,
                  filter: "contrast(75%)",
                  outlineColor: color,
                  transition: 0.2,
                }}
                onClick={() => {
                  setColor(color);
                }}
              ></div>
            ))}
          </div>

          {/* Action button */}
          <h1 className="text-lg font-semibold">Make it yours!</h1>
          <button
            className="bg-black rounded-md text-white text-xl px-6 py-4 text-center hover:bg-white hover:border-black hover:border hover:text-xl hover:text-black duration-200 border mt-2"
            onClick={submitHandler}
          >
            Add to bag
            {/* <AiOutlineShoppingCart /> */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsPage;
