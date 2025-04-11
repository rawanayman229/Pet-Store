// da component elly lelshakl elly fe card bta3 el card home

import React from "react";
import { Pet } from "../../data/pets";

const PetCardSection: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md sm:p-4 p-2 hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-2 sm:mb-4">
      <img src={pet.image} alt={pet.breed} className="w-full h-40 sm:h-44 object-cover rounded" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#003459] mb-1">{pet.id} - {pet.breed}</h3>
        <p className="text-sm text-gray-600">Color: {pet.color}  &nbsp; • &nbsp; Age: {pet.age}</p>
        <p className="text-sm text-gray-600 mb-2">Gender: {pet.gender}</p>
        <p className="text-lg font-bold text-[#003459]">{pet.price.toLocaleString()} </p>
      </div>
    </div>
  );
};


export default PetCardSection;
