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
import "primereact/resources/themes/lara-light-blue/theme.css"; // or your chosen theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


const App: React.FC = () => {
  return (
    <BrowserRouter>

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
