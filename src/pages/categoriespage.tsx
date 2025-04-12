import React, { useState, useEffect } from "react";
import PetCardSection from "../components/card/cardGategories";
import { Disclosure } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Pet } from "../types";


const colors = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];
const breeds = ["Small", "Medium", "Large"];

const CategoryPage: React.FC = () => {
 const [pets, setPets] = useState<Pet[]>([]);
   const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const [currentPage, setCurrentPage] = useState(1);
const petsPerPage = 6; // Or whatever number you want per page

const indexOfLastPet = currentPage * petsPerPage;
const indexOfFirstPet = indexOfLastPet - petsPerPage;
const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

const totalPages = Math.ceil(pets.length / petsPerPage);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage]);
  // Fetch pets data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`https://round-3-pet-store.digital-vision-solutions.com/api/pets`); 
        console.log("Pets response:", response.data);
        setPets(response.data.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

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
  className="relative bg-no-repeat bg-cover bg-center rounded-xl overflow-hidden mb-10   flex flex-col-reverse md:flex-row items-end md:items-center justify-between h-[470px] md:h-[400px]"
  style={{ backgroundImage: "url('/images/Group22.png')" }}
>
  {/* Text Section */}
  <div className="z-10 text-center md:text-left text-white md:text-white max-w-lg w-full">
    <h1 className="text-3xl md:text-4xl font-bold">One More Friend</h1>
    <h2 className="text-2xl md:text-3xl font-semibold mt-2">Thousands More Fun!</h2>
    <p className="text-sm md:text-base mt-4">
      Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
      We have 200+ different pets that can meet your needs!
    </p>
    <div className="flex mt-6 gap-4 justify-center md:justify-start ">
      <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-gray-900 flex items-center gap-2 cursor-pointer">
        View Intro <img src="/images/Play_Circle.png" alt="Play" className="inline-block ml-2" />
      </button>
      <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-transparent hover:text-gray-800 hover:border hover:border-gray-800 transition">
        Explore Now
      </button>
    </div>
  </div>

  {/* Image Section */}
  <div className="relative w-full md:w-[50%] flex justify-center md:justify-end items-end md:items-center mt-4 md:mt-0 flex-col-reversed z-0">
    <img
      src="/images/groupDogs.png"
      alt="Dogs"
      className="w-full max-h-[180px] md:max-h-[300px] object-contain md:object-cover"
    />
  </div>
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
         
       
       
          {loading ? (
          <p className="text-center">Loading pets...</p>
        ) : (
          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {currentPets.map((pet, idx) => (
              <PetCardSection key={idx} pet={pet} />
            ))}
          </div>
        )}
        


          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2 flex-wrap items-center">
  {/* Previous Arrow */}
  <button
    className="w-8 h-8 flex items-center justify-center  text-sm text-gray-600 disabled:opacity-50"
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
  >
    ←
  </button>

  {/* Page Numbers */}
  {[1, 2, currentPage > 3 ? "..." : null, currentPage, currentPage < totalPages - 2 ? "..." : null, totalPages]
    .filter((value, index, self) => value !== null && self.indexOf(value) === index)
    .map((page, idx) =>
      page === "..." ? (
        <span key={idx} className="px-2 text-gray-600">...</span>
      ) : (
        <button
          key={idx}
          onClick={() => setCurrentPage(Number(page))}
          className={`w-8 h-8 flex items-center justify-center  rounded text-sm ${
            currentPage === page
              ? "bg-[#003459] text-white"
              : "text-gray-600"
          }`}
        >
          {page}
        </button>
      )
    )}

  {/* Next Arrow */}
  <button
    className="w-8 h-8 flex items-center justify-center  text-sm text-gray-600 disabled:opacity-50"
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
  >
    →
  </button>
</div>


        </div>
      </div>
    </div>
  );
};

export default CategoryPage;


