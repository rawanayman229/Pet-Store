import React from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import Home from "./../src/pages/Homepage";

const App: React.FC = () => {
  return (
    <div>
     
      <Navbar /> {/* call lel navbar */}
      <HomeHero /> {/* call lel hero */}
      <Home />  {/* call lel home */}
    </div>


  );
};

export default App;
