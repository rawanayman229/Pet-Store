import React from "react";

interface KnowledgeCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    tag: string;
  };
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ item }) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="inline-block text-xs bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full mb-3">
          {item.tag}
        </span>
        <h3 className="font-semibold text-base mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default KnowledgeCard;
