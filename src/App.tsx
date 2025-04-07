
import React from "react";
import Home from "./../src/pages/Homepage";  
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* call lel navbar */}
      <Home />  {/* call lel home */}
    </div>


  );
};

export default App;
