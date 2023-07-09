import DetailsPage from "@components/DetailsPage";
import Product from "@models/product";
import { connectToDB } from "@util/Database";
import React from "react";

async function Page({ params: { slug } }) {
  connectToDB();
  const product = await Product.findOne({ slug });
  return (
    <>
      <DetailsPage product={product} />
    </>
  );
}

export default Page;
