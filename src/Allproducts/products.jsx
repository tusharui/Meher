import React from "react";
import jacket from "../assets/jacket.jpeg"; 
import addidas from "../assets/addidas.jpeg";
import headphone from "../assets/headphone.jpeg";
import lamp from "../assets/lamp.jpeg";
import bag from "../assets/bags.jpeg";
import cap from "../assets/cap.jpeg";

function Products() {
  const products = [
    { id: 1, name: "Stylish Jacket", image: jacket },
    { id: 2, name: "Adidas Shoes", image: addidas },
    { id: 3, name: "Headphones", image: headphone },
    { id: 4, name: "Modern Lamp", image: lamp },
    { id: 5, name: "Travel Bag", image: bag },
    { id: 6, name: "Cool Cap", image: cap },
  ];

  return (
    <div className="min-h-screen  p-10">
      <h1 className="text-5xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-6 w-72 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 rounded-lg object-cover"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
