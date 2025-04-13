import React, { useState, useEffect } from "react";
import PetCardSection from "../components/card/cardGategories";
import { Disclosure } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Pet } from "../types";


const colors = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];
const breeds = ["Small", "Medium", "Large"];
const colorMap: Record<string, string> = {
  "Red": "#FF0000",
  "Black": "#000000",
  "Black & White": "linear-gradient(to right, black 50%, white 50%)",
  "Apricot": "#FFBF00",
  "Silver": "#C0C0C0",
  "Tan": "#D2B48C",
};


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
    <label key={color} className="flex items-center gap-2 mb-2 cursor-pointer">
      <input
        type="checkbox"
        className="accent-[#003459]"
        checked={selectedColors.includes(color)}
        onChange={() => toggleFilter(color, setSelectedColors)}
      />
      {/* Surface color box */}
      <div
        className="w-4 h-4 rounded-full border"
        style={{ background: colorMap[color] }}
      />
      <span className="text-sm text-gray-800">{color}</span>
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
    className="mt-0 pt-20 w-full h-auto rounded-xl bg-[url('/images/hero.png')]  sm:bg-[url('/images/Group22.png')] flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-right md:text-right  bg-cover bg-center   rounded-xl flex flex-col md:flex-row justify-between items-center px-4 md:px-20 text-center md:text-left mb-10"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
      {/* Left Content (Hidden on small screens) */}
      <img
        src="images/groupDogs.png"
        alt="dogs"
        width={700}
        height={800}
        className="mt-10 -mb-0 md:block hidden"
      />


            {/* Right Content (Order changed on small screens) */}
            <div className="text-white mt-6 md:mt-0 sm:text-center sm:justify-center sm:items-center md:text-right w-full md:w-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 md:text-white">
  One More Friend
</h1>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 md:text-white mt-3">
  Thousands More Fun!
</h2>
<p className="text-sm sm:text-base md:text-lg mt-4 text-blue-900 md:text-white max-w-xl mx-auto md:mx-0">
  Having a pet means you have more joy, a new friend, a happy
  <br />
  person who will always be with you to have fun. We have 200+
  <br />
  different pets that can meet your needs!
</p>


                {/* Buttons */}
                <div className="flex flex-row justify-end sm:flex-row gap-4 w-full mt-6 p ">
                <button
                        className="bg-transparent border border-gray-900 text-gray-900 font-semibold transition-all duration-400 
                    px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white justify-center flex items-center gap-2 cursor-pointer"
                    >
                        View Intro
                        <i className="pi pi-play-circle"></i>
                    </button>

                    <button
                        className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-transparent hover:border
                    hover:border-gray-900 hover:text-black transition-all duration-400  cursor-pointer"
                    >
                        Explore Now
                    </button>

                </div>
            </div>

            

            {/* Image for small screens (appears below the text) */}
            <img
                src="./images/groupDogs.png"
                alt="dogs"
                className="mt-8 sm:order-1 md:hidden block w-full max-w-md mx-auto"
            />
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


