import React from 'react';
import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import HomeBanner1 from '../components/HomeBanner1';
import ProductCardSection from '../components/cardproducts/ProductsSection';
import PetCardSection from '../components/card/CardSection';
import PetKnowledge from '../components/cardKnolge/knowlegeSection';



const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <PetCardSection />
      <HomeBanner1 />
      <ProductCardSection />
      <PetKnowledge />
     
    </>
  );
};

export default HomePage;
