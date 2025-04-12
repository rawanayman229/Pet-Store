import React from "react";

interface KnowledgeCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    tag: string;
  };
}

const KnowledgeCardSection: React.FC<KnowledgeCardProps> = ({ item }) => {
  return (
    <div className=" bg-white rounded-2xl shadow-md sm:p-4 p-2 hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-2 sm:mb-4">
      <img src={item.image} alt={item.title} className="w-full h-40 sm:h-44 object-cover rounded" />
      </div>
      <div className="p-4">
        <span className="inline-block text-xs bg-[#00A7E7] text-white font-medium px-3 py-1 rounded-full mb-3">
          Pet knowledge
        </span>
        <h3 className="font-semibold text-base mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default KnowledgeCardSection;
