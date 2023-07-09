"use client";
import React, { useState, useEffect } from "react";
import Product from "./ProductCard";

function ProductList() {
  const [Products, setProducts] = useState(null);

  const fecthProduct = async () => {
    const response = await fetch("/api/client/products");
    const data = await response.json();

    setProducts(data);
  };

  useEffect(() => {
    fecthProduct();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-3 w-full">
      {Products?.slice(0, 4).map((product) => (
        <Product data={product} key={product.slug} />
      ))}
    </div>
  );
}

export default ProductList;
