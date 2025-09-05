
import React from "react";
import heroImage from "../assets/hero.jpg"; 

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-16">
      
        <div className="max-w-lg text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="mt-8 px-8 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition">
            Shop Now
          </button>

        
          <div className="flex flex-wrap gap-12 mt-12">
            <div>
              <h2 className="text-3xl font-bold">200+</h2>
              <p className="text-gray-600">International Brands </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">2,000+</h2>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">30,000+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Fashion Models"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        
      </div>
     <div className="bg-black w-full py-6">
  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 px-4">
    <span className="text-white text-xl font-semibold">VERSACE</span>
    <span className="text-white text-xl font-semibold">ZARA</span>
    <span className="text-white text-xl font-semibold">GUCCI</span>
    <span className="text-white text-xl font-semibold">PRADA</span>
    <span className="text-white text-xl font-semibold">Calvin Klein</span>
  </div>
</div>

    </section>
   
  );
};

export default Home;
