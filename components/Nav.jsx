"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";

const navlist = ["Shop", "Categories", "Men", "Women"];

function Nav() {
  const input = useRef(null);
  const [toggleMenu, settoggleMenu] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);

  return (
    <nav className="flex flex-row w-full min-h-[75px] items-center justify-between  mb-4">
      <Link href="/" className="font-bold text-2xl">
        Moncef-Shop
      </Link>
      {/**Desktop menu */}
      <ul className="hidden md:flex gap-8">
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
      <div className="flex items-center justify-center gap-3">
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
        <div onClick={() => {}} className="cursor-pointer flex gap-1">
          <AiOutlineShoppingCart size={25} className="text-black/90" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
