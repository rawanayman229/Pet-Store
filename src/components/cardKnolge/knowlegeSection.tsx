import React from "react";
import { petKnowledge } from "../../data/petKnowledge"; // Import your pet knowledge data
import KnowledgeCard from "../cardKnolge/KnowledgeCard"; // Import the KnowledgeCard component

const PetKnowledge: React.FC = () => {
  return (
    <div>
      
      <div className="pt-[1px] row-span-1  min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-black">You already know?</p>
          <h2 className="text-2xl text-[#003459] font-bold">Useful Pet Knowledge</h2>
        </div>
        <button className="hidden sm:inline-block text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
      </div>

      {/* Knowledge Cards */}
      <div className="grid grid-cols-1 min-[475px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        {petKnowledge.map((item, idx) => (
          <KnowledgeCard key={idx} item={item} />
        ))}
      </div>
      <div className="sm:hidden">
          <button className="w-full text-[#003459] font-medium border border-[#003459] rounded-full px-4 py-2 hover:bg-[#003459] hover:text-white transition">
            View more →
          </button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default PetKnowledge;
