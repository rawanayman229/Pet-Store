// da component elly lelshakl elly fe card bta3 el card home

import React from "react";
import { Pet } from "../../data/pets";

const PetCardSection: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300">
      
      <img src={pet.image} alt={pet.breed} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="h3-card">{`${pet.id} - ${pet.breed} ${pet.color}`}</h3>
        <p className="text-sm text-gray-600">Gene: {pet.gender}  . Age: {pet.age}</p>
        <p className="font-bold text-black mt-1">{pet.price}</p>
      </div>
    </div>
    

  );
};

export default PetCardSection;
