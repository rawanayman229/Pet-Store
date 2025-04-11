import React from "react";
import { products } from "../../data/products"; // Import the products data
import ProductCardSection from "./productsCard"; 

const ProductsSection: React.FC = () => {
  return (
    <>
      <div className="min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-black">Hard to choose right products for your pets?</p>
          <h2 className="text-2xl text-[#003459] font-bold">Our Products</h2>
        </div>
        <button className="button-transparent">
          View more → 
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, idx) => (
          <ProductCardSection key={idx} product={product}  /> 
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default ProductsSection;
