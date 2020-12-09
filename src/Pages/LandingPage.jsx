import React from "react";
import Hero from "../Components/LandingPage/Hero";
import CardProduct from "../Components/LandingPage/CardProduct";
import products from "../Data/products.json";

function LandingPage() {
  return (
    <div>
      <Hero />
      <div className="mt-50 mb-51 grid-container">
        {products.map((product, index) => {
          return <CardProduct product={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default LandingPage;
