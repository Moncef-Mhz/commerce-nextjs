import Product from "@models/product";
import { connectToDB } from "@util/Database";

export const GET = async (request, res) => {
  try {
    await connectToDB();
    const products = await Product.find({});
    return new Response(JSON.stringify(products), { status: 201 });
  } catch (err) {
    return new Response("Faild to fetch all products", { status: 500 });
  }
};
