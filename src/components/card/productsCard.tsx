// src/components/card/productsCard.tsx
import React from "react";
import { Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCardSection: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      </div>

      <h3 className="text-base font-bold text-[#00171F] leading-snug">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600">Product: {product.category}  . Size: {product.size}</p>

      <p className="text-[#002A48] font-bold text-lg mt-2">{product.price}</p>

      <div className="bg-[#FCEED5] text-[#592B00] text-sm font-semibold py-2 px-3 rounded-xl mt-3 inline-block">
        {product.offer}
      </div>
    </div>
  );
};

export default ProductCardSection;
