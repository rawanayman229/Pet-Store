import React from "react";
import { products } from "../../data/products"; // Import the products data
import ProductCardSection from "./productsCard"; 

const ProductsSection: React.FC = () => {
  return (
    <>
      <div className="pt-[2px] row-span-1  min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-black">Hard to choose right products for your pets?</p>
          <h2 className="text-2xl text-[#003459] font-bold">Our Products</h2>
        </div>
        <button className="hidden sm:inline-block text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
      </div>

      <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {products.map((product, idx) => (
            <ProductCardSection key={idx} product={product} />
          ))}
        </div>
        <div className="sm:hidden">
          <button className="w-full text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default ProductsSection;
