/*eslint-disable @next/next/no-img-element */
"use client";
import { useStateContext } from "@context/StateContext";
import Link from "next/link";
import React, { useRef } from "react";
import {
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";

const CartPage = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    Size,
    Color,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  return (
    <div className="w-full z-[9999]" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          {cartItems.length < 1 ? (
            <span className=" text-indigo-600">Is Empty</span>
          ) : (
            <span className=" ml-2 text-indigo-600">
              ({totalQuantities} items)
            </span>
          )}
        </button>

        {cartItems.length < 1 && (
          <div className=" flex flex-col items-center h-full justify-center">
            <AiOutlineShopping size={150} className="" opacity={0.8} />
            <h3 className="text-2xl">Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-[400px] px-4 py-3 text-white border-none mt-10 uppercase cursor-pointer hover:scale-110 duration-500 ease-linear bg-indigo-600"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="mt-4 overflow-auto max-h-[60vh] px-3 py-5">
          {cartItems.length >= 1
            ? cartItems.map((item) => (
                <li key={item._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={urlFor(item?.image[0])}
                      className="h-full w-full object-cover object-center"
                      alt={item.name}
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <p>{item.name}</p>
                        </h3>
                        <p className="ml-4">{item.price} da</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize">
                        {item.orederSize} -- {item.orderColor}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex border-[1px] items-center justify-between w-[40%] py-2 rounded-md">
                        <div
                          className="minus pl-4  cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </div>
                        <div className="text-md">{item.quantity}</div>
                        <div
                          className="text-indigo-700 pr-4  cursor-pointer"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </div>
                      </div>
                      {/* <p className="text-gray-500">Qty {item.quantity}</p> */}

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => onRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </div>
        {cartItems.length >= 1 && (
          <div className="border-t border-gray-200 px-4 py-4 sm:px-6 bottom-0 absolute w-full left-0 bg-white">
            <div className="flex justify-between text-lg font-medium text-gray-900 mb-2">
              <p>Subtotal</p>
              <p>{totalPrice} da</p>
            </div>
            <Link href="/checkout" className="mt-6">
              <p
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={() => setShowCart(false)}
              >
                Checkout
              </p>
            </Link>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or &nbsp;
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                  <span> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
