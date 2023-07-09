"use client";

import { Form } from "@components";
import React, { useState } from "react";

function CreateProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [inStock, setInStock] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // if (
      //   name == "" ||
      //   image == [] ||
      //   size == "" ||
      //   price == "" ||
      //   description == "" ||
      //   categories == [] ||
      //   inStock == ""
      // ) {
      //   console.log("you need to fullfil all the champ");
      // }
      let Size = size.split(",");
      let Categories = categories.split(",");
      let Slug = name.replace(" ", "-");

      const response = await fetch("/api/admin/products/new", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          slug: Slug,
          image: image,
          size: Size,
          price: price,
          description: description,
          categories: Categories,
          inStock: inStock,
        }),
      });

      setCategories("");
      setDescription("");
      setImage("");
      setInStock("");
      setName("");
      setPrice("");
      setSize("");

      if (response.ok) {
        console.log("done");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        method="POST"
        className="flex flex-col gap-2"
      >
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">image:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="">Size:</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label htmlFor="">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Categories:</label>
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <label htmlFor="">in Stock:</label>
        <input
          type="text"
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
        />
        <button onClick={submitHandler}>submit</button>
      </form>
    </>
  );
}

export default CreateProduct;
