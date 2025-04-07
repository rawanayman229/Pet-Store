import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import Home from "./../src/pages/Homepage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Home />
    </>
  );
};

export default App;
