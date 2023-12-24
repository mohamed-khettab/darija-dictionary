import React from 'react';
import SearchBar from '../components/Searchbar/Searchbar';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col w-full items-center rounded-lg mt-32">
        <h1 className="text-primary text-4xl lg:text-6xl font-heading mb-10">
          Darija Dictionary
        </h1>
        <div className="max-w-2xl">
          <p className="text-text text-base text-center lg:text-lg break-words">
            Welcome to Darija Dictionary, your go-to resource for understanding and learning Moroccan Arabic. Whether you're a language enthusiast, a traveler, or someone interested in Moroccan culture, you'll find a wealth of information here.
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
