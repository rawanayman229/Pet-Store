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
import Footer from "./components/footer";
import CategoryPage from "./pages/categoriespage";


const App: React.FC = () => {
  return (
    <Router basename="/">

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
        <Route path="/categoriespage" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
