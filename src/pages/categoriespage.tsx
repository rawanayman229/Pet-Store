import React, { useState } from "react";
import PetCardSection from "../components/card/cardGategories";
import { pets } from "../data/pets";
import { Disclosure } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";

const colors = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];
const breeds = ["Small", "Medium", "Large"];

const CategoryPage: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const toggleFilter = (value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };



  const renderFilters = () => (
    <>
      {/* Gender */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Gender</h4>
        {["Male", "Female"].map((gender) => (
          <label key={gender} className="block">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedGender.includes(gender)}
              onChange={() => toggleFilter(gender, setSelectedGender)}
            />
            {gender}
          </label>
        ))}
      </div>

      {/* Color */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Color</h4>
        {colors.map((color) => (
          <label key={color} className="block">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedColors.includes(color)}
              onChange={() => toggleFilter(color, setSelectedColors)}
            />
            {color}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Price</h4>
        <div className="flex gap-2">
          <input
            type="number"
            name="min"
            placeholder="Min"
            className="border p-1 w-1/2 rounded"
            value={priceRange.min}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            name="max"
            placeholder="Max"
            className="border p-1 w-1/2 rounded"
            value={priceRange.max}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Breed */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Breed</h4>
        {breeds.map((breed) => (
          <label key={breed} className="block">
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedBreeds.includes(breed)}
              onChange={() => toggleFilter(breed, setSelectedBreeds)}
            />
            {breed}
          </label>
        ))}
      </div>
    </>
  );

  return (
    <div className="pt-[130px] min-h-screen px-4 md:px-20 py-10 bg-white">
      <div className="text-sm text-gray-500 mb-4">Home &gt; Dog &gt; Small Dog</div>

      {/* Banner */}
      <section
        className="relative bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden mb-10 flex flex-col md:flex-row items-center justify-between p-6"
        style={{ backgroundImage: "url('images/banner1.png')" }}
      >
        <div className="max-w-lg text-center md:text-left z-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">One More Friend</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">Thousands More Fun!</h2>
          <p className="text-sm md:text-base mt-4">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex mt-6 gap-4 justify-center md:justify-start">
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-gray-900 flex items-center gap-2 cursor-pointer">
              View Intro <img src="/images/Play_Circle.png" alt="Arrow" className="inline-block ml-2" />
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-gray-800 hover:border hover:border-gray-800 transition">
              Explore Now
            </button>
          </div>
        </div>
        <img src="/images/groupDogs.png" alt="Dogs" className="w-full md:w-[50%] object-contain" />
      </section>

      {/* Mobile: Sort + Filter */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <select className="border rounded-full px-3 py-1 text-sm">
          <option>Sort by: Popular</option>
        </select>

        <Disclosure>
          {() => (
            <>
              <Disclosure.Button className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                <FunnelIcon className="w-4 h-4" />
                Filter
              </Disclosure.Button>
              <Disclosure.Panel className="mt-4 bg-gray-50 p-4 rounded-lg shadow-sm w-full">
                {renderFilters()}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden md:block md:w-1/4 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-[#003459] mb-4">Filter</h3>
          {renderFilters()}
        </aside>

        {/* Pet List */}
        <div className="w-full md:w-3/4">
          <div className="hidden md:flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#003459]">
              Small Dog <sub><span className="text-gray-500 font-medium">{pets.length} puppies</span></sub>
            </h2>
            <select className="border rounded-full px-3 py-1 text-sm">
              <option>Sort by: Popular</option>
            </select>
          </div>

          {/* Pet Grid */}
          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
            {pets.map((pet, idx) => (
              <PetCardSection key={idx} pet={pet} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">
            <button className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-600">1</button>
            <button className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-600">2</button>
            <button className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-600">3</button>
            <span className="px-2 text-gray-600">...</span>
            <button className="w-8 h-8 flex items-center justify-center border rounded text-sm text-gray-600">28</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
