/*eslint-disable @next/next/no-img-element */
import { useStateContext } from "@context/StateContext";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Product({ data }) {
  const { onAdd } = useStateContext;
  return (
    <div className="group relative rounded-md">
      <Link href={`/product/${data.slug}`}>
        <img
          src={data.image}
          alt={data.name}
          className="object-cover h-[300px] w-full sm:w-[400px] bg-slate-100 rounded-md group-hover:opacity-75 md:w-full"
        />
      </Link>
      <div className="flex justify-between items-center px-1 pb-1">
        <Link href={`/product/${data.slug}`}>
          <div className="flex flex-col mt-1">
            <h1 className="font-semibold">{data.name}</h1>
            <p>{data.price} da</p>
          </div>
        </Link>
        <div className="rounded-md bg-slate-500 p-2 cursor-pointer z-10">
          <AiOutlineShoppingCart color="white" size={18} />
        </div>
      </div>
    </div>
  );
}

export default Product;
