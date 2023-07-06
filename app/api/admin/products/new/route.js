import Product from "@models/product";
import { connectToDB } from "@util/Database";

export const POST = async (request) => {
  const { name, slug, image, price, size, categories, inStock, description } =
    await request.json();

  try {
    await connectToDB();

    const newProduct = new Product({
      name: name,
      slug: slug,
      image: image,
      price: price,
      size: size,
      categories: categories,
      instock: inStock,
      description: description,
    });

    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new Product", { status: 500 });
  }
};
