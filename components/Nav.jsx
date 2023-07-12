"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const navlist = ["Shop", "Categories", "Men", "Women"];

const Nav = () => {
  let { showCart, setShowCart, totalQuantities } = useStateContext();
  const input = useRef(null);
  const [toggleSearch, settoggleSearch] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  // const menuHandler = () => {
  //   setShowCart((prev) => !prev);
  // };
  console.log(toggleMenu);
  return (
    <nav className="flex flex-row w-full min-h-[75px] items-center justify-between  mb-4 ">
      <Link href="/" className="font-bold text-2xl">
        Shop
      </Link>
      {/**Desktop menu */}
      <ul className="hidden lg:flex gap-8">
        {navlist.map((nav) => (
          <Link
            key={nav}
            href={`/${nav.toLowerCase()}`}
            className="text-md font-medium"
          >
            {nav}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-center gap-3 ">
        <div
          className=" flex w-full rounded-md"
          onClick={() => {
            input.current.focus();
          }}
        >
          <div
            className="px-2 py-2 cursor-pointer bg-slate-200/30 rounded-l-md"
            onClick={() => {}}
          >
            <AiOutlineSearch size={25} className="text-black/40" />
          </div>
          <input
            type="text"
            ref={input}
            className="outline-none border-none rounded-r-md  bg-slate-200/30  pr-2 py-2 outline-1 border-y-[1px] border-r"
            placeholder="Seacrh..."
            onChange={() => {}}
          />
        </div>
        <div
          className="cursor-pointer flex gap-1"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart size={25} className="text-black/90" />
        </div>
      </div>

      {/* Mobile menu */}
      {!toggleMenu ? (
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => settoggleMenu(true)}
        >
          <AiOutlineMenu size={25} />
        </div>
      ) : (
        <>
          <div className="absolute block lg:hidden w-[50%] h-screen bg-white z-[9999] right-0 top-0 px-4 py-7  overflow-hidden">
            <div
              className="flex items-center gap-4 mb-5  cursor-pointer"
              onClick={() => settoggleMenu(false)}
            >
              <AiOutlineArrowLeft size={30} />{" "}
              <span className="text-xl font-semibold">Menu</span>
            </div>
            <ul className="flex flex-col w-full items-start px-1  overflow-hidden ">
              {navlist.map((nav) => (
                <Link
                  key={nav}
                  href={`/${nav.toLowerCase()}`}
                  className="text-xl font-semibold py-10 w-full  hover:text-black/70 duration-200"
                >
                  {nav}
                </Link>
              ))}
            </ul>
            <div
              className="cursor-pointer flex  w-full justify-start items-center gap-5 border-t pt-4"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShoppingCart size={40} className="text-black/70" />
              <span className="text-xl font-semibold text-black/70">
                Shopping Cart
              </span>
            </div>
          </div>
          <div
            className="absolute block lg:hidden w-full h-screen bg-black/20 z-[300] right-0 top-0 "
            onClick={() => settoggleMenu(false)}
          ></div>
        </>
      )}
    </nav>
  );
};

export default Nav;
