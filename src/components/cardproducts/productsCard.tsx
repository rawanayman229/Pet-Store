import React from "react";
import { useNavigate } from "react-router-dom";

import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCardSection: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (

    <div
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300"
    >
      <div className="flex justify-center mb-4 cursor-pointer" onClick={handleNavigate}>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      </div>

      <h3
        className="text-base font-bold text-[#00171F] leading-snug cursor-pointer hover:underline"
        onClick={handleNavigate}
      >
        {product.name}
      </h3>

      <p className="text-sm text-gray-600">
        Product: {product.category} . Size: {product.size} </p>

      
      <h3 className="text-sm sm:text-base font-bold text-[#00171F] leading-snug mb-1">
        {product.name}
      </h3>

      
      <p className="text-[#002A48] font-bold text-sm sm:text-lg mt-1">
        {product.price}
      </p>

      
      <div className="bg-[#FCEED5] text-[#002A48] text-xs sm:text-sm font-semibold py-1 px-3 rounded-xl mt-2 inline-block">
        {product.offer}
      </div>
    </div>
  );

};

export default ProductCardSection;
