import React from 'react';

const WordNotFound = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-text">
      <h2 className="text-primary text-4xl lg:text-6xl font-heading mt-32 mb-6">
        Word Not Found :(
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        Sorry, the requested word was not found in the dictionary. Please check the spelling or try another word.
      </p>
    </div>
  );
};

export default WordNotFound;