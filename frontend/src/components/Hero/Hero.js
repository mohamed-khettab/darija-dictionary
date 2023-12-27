import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  const imageUrl = process.env.PUBLIC_URL + "/assets/image.jpg";

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="p-8 bg-opacity-75 text-white text-center max-w-2xl">
        <h1 className="text-4xl font-semibold lg:text-6xl mb-6">
          Darija Dictionary
        </h1>
        <p className="text-base lg:text-lg break-words">
          Welcome to Darija Dictionary, your go-to resource for understanding
          and learning Moroccan Arabic. Whether you're a language enthusiast, a
          traveler, or someone interested in Moroccan culture, you'll find a
          wealth of information here.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;