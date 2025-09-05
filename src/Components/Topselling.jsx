

import React from "react";
import shirt2 from "../assets/shirt2.png";
import image from "../assets/image.png"; 
import pant3 from "../assets/pant3.png"; 
import pant2 from "../assets/pant2.png";

const Topselling = () => {
  const products = [
    {
      id: 1,
      name: "Vertical striped Shirt",
      image: shirt2,   
      rating: 4.5,
      price: 212,
      oldPrice: null,
      discount: null,
    },
    {
      id: 2,
      name: "LOOSE FIT BERMUDA SHORTS",
      image: pant3,    
      rating: 3.5,
      price: 80,
      oldPrice: 260,
      discount: "-20%",
    },
    {
      id: 3,
     
      name: " COURAGE GRAPHIC T-SHIRT",
      image: image,   
      rating: 4.5,
      price: 145,
      oldPrice: null,
      discount: null,
    },
    {
      id: 4,
      name: "Faded Skkiny Jeans ",
     
      image: pant2,   
      rating: 4.5,
      price: 120,
      oldPrice: 160,
      discount: "-30%",
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="bg-gray-200 rounded-xl shadow-md p-12 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-60 h-90 object-contain mb-4"
        />
        <h3 className="text-lg font-medium text-center">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐⭐⭐⭐</span>
          <span className="ml-1 text-sm text-gray-600">{product.rating}/5</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-semibold">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
          {product.discount && (
            <span className="text-red-500 text-sm font-medium bg-red-100 px-2 rounded-full">
              {product.discount}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">NEW ARRIVAL</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-12 py-6 bg-white border-gray border-2 text-black rounded-full hover:bg-white">
          View All
        </button>
      </div>
    </section>
  );
};

export default Topselling;
