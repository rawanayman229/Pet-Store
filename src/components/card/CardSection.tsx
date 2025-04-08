import React from "react";
import { pets } from "../../data/pets"; // Import the products data
import PetCardSection from "./cardGategories";
 

const PetGategories: React.FC = () => {
  return (
    <>
      <div className="min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-black">Whats new?</p>
          <h2 className="text-2xl text-[#003459] font-bold">Take A look At Some Of Our Pets</h2>
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
      </div>
      </div>
    </>
  );
};

export default PetGategories;
