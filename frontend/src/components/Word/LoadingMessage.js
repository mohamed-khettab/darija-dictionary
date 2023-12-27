import React from "react";

const LoadingMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-semibold mt-32 mb-6">Loading...</h2>
        <p className="text-lg md:text-xl lg:text-2xl">Please wait while we fetch the data.</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
