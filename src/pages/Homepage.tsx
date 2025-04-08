import React from "react";
import PetCardSection from "../components/card/CardSection";
import ProductCardSection from "../components/card/productsCard";
import { pets } from "../data/pets";
import { products } from "./../data/products";
import { petKnowledge } from "../data/petKnowledge";
import KnowledgeCard from "../components/card/KnowledgeCard";




const Home: React.FC = () => {
  return (

    <div className="min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">

        
        
        {/* Pets Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-black">What's new ?</p>
            <h2 className="text-2xl text-[#003459] font-bold">Take A Look At Some Of Our Pets</h2>
          </div>
          <button className="button-transparent">
            View more → 
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {pets.map((pet, idx) => (
            <PetCardSection key={idx} pet={pet} />
          ))}
        </div>

        {/* Products Section */}
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
            <ProductCardSection key={idx} product={product} />
          ))}
        </div>

        {/* Pet Knowledge Section */}
<div className="flex justify-between items-center mb-6">
  <div>
    <p className="text-sm text-black">You already know?</p>
    <h2 className="text-2xl text-[#003459] font-bold">Useful Pet Knowledge</h2>
  </div>
  <button className="button-transparent">
    View more →
  </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
  {petKnowledge.map((item, idx) => (
    <KnowledgeCard key={idx} item={item} />
  ))}
</div>


      </div>
    </div>
  );
};

export default Home;
