import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pronunciation from "./pages/Pronunciation";
import NotFound from "./pages/NotFound";
import WordPage from "./components/Word/WordPage";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/word/:englishWord" element={<WordPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/pronunciation" element={<Pronunciation />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;