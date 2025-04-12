import React from "react";
import { pets } from "../../data/pets"; 
import PetCardSection from "./cardGategories";


const PetGategories: React.FC = () => {
  return (
    <div className="pt-[2px] row-span-1  min-h-screen bg-white">
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">

      
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <p className="text-sm text-black">What's new?</p>
            <h2 className="text-2xl text-[#003459] font-bold">
              Take A Look At Some Of Our Pets
            </h2>
          </div>

         
          <button className="hidden sm:inline-block text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
        </div>

        
        <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {pets.map((pet, idx) => (
            <PetCardSection key={idx} pet={pet} />
          ))}
        </div>

        
        <div className="sm:hidden">
          <button className="w-full text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
        </div>

      </div>
    </div>
  );
};

export default PetGategories;

