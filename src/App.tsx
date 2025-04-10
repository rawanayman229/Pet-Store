
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import HomePage from "./pages/Homepage";
import CategoryPage from "./pages/categoriespage";

const App: React.FC = () => {
  return (
    <Router basename="/">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoriespage" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
