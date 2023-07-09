import React from "react";

function DetailsPage({ product }) {
  return (
    <div>
      <h1 className="text-xl">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default DetailsPage;
