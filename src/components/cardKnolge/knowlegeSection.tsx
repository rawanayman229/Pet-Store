import React from "react";
import { petKnowledge } from "../../data/petKnowledge"; // Import your pet knowledge data
import KnowledgeCard from "../cardKnolge/KnowledgeCard"; // Import the KnowledgeCard component

const PetKnowledge: React.FC = () => {
  return (
    <div>
      
      <div className="min-h-screen"> 
      <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-black">You already know?</p>
          <h2 className="text-2xl text-[#003459] font-bold">Useful Pet Knowledge</h2>
        </div>
        <button className="button-transparent">
          View more →
        </button>
      </div>

      {/* Knowledge Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {petKnowledge.map((item, idx) => (
          <KnowledgeCard key={idx} item={item} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PetKnowledge;
