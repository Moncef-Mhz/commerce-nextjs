import Product from "@models/product";
import { connectToDB } from "@util/Database";

const handler = async (req) => {
  const { name, slug, image, price, size, categories, instock, description } =
    await req.json();

  try {
    await connectToDB();

    const newProduct = new Product({
      name,
      slug,
      image,
      price,
      size,
      categories,
      instock,
      description,
    });

    await newProduct.save();

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new Product", { status: 500 });
  }
};

export default handler;
