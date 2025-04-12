import React from "react";
import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCardSection: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="pt-[2px] row-span-1  bg-white rounded-2xl shadow-md sm:p-4 p-2 hover:shadow-lg transition duration-300">
      
      
      <div className="flex justify-center mb-2 sm:mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-44 object-cover rounded"
        />
      </div>

      
      <h3 className="text-sm sm:text-base font-bold text-[#00171F] leading-snug mb-1">
        {product.name}
      </h3>

     
      <p className="text-xs sm:text-sm text-gray-600 mb-1">
        Product: {product.category} &nbsp; • &nbsp; Size: {product.size}
      </p>

      
      <p className="text-[#002A48] font-bold text-sm sm:text-lg mt-1">
        {product.price}
      </p>

      
     
     <div className="bg-[#FCEED5] text-[#002A48] text-xs sm:text-sm font-semibold py-1 px-3 rounded-xl mt-2 inline-block">
     offer: "🎁 Free Cat Food"
      </div>
    </div>
    
  );
};

export default ProductCardSection;
