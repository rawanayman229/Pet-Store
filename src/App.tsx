import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import Home from './pages/Homepage';
import HomeBanner1 from './components/HomeBanner1';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Home/>
      <HomeBanner1 />
    </>
  );
};

export default App;
