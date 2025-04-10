import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import FirstBanner from './components/FirstBanner';
import ProductCardSection from './components/cardproducts/ProductsSection';
import PetCardSection from './components/card/CardSection';
import PetKnowledge from './components/cardKnolge/knowlegeSection';
import PetsSellers from './components/PetsSellers';
import SecondBanner from './components/SecondBanner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';


const App: React.FC = () => {
  return (
    <BrowserRouter  basename="/round-3-pet-store-front">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HomeHero />
            <PetCardSection />
            <FirstBanner />
            <ProductCardSection />
            <PetsSellers />
            <SecondBanner />
            <PetKnowledge />
          </>
        } />
        
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
