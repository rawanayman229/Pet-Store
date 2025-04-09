import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import HomeBanner1 from './components/HomeBanner1';
import ProductCardSection from './components/cardproducts/ProductsSection';
import PetCardSection from './components/card/CardSection';
import PetKnowledge from './components/cardKnolge/knowlegeSection';
import PetsSellers from './components/PetsSellers';
import HomeBanner2 from './components/HomeBanner2';



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <PetCardSection  />
      <HomeBanner1 />
      <ProductCardSection  />
      <PetsSellers />
      <HomeBanner2 />
      <PetKnowledge />
      

    </>
  );
};

export default App;
