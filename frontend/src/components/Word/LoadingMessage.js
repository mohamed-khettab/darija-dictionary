import React from "react";

const LoadingMessage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-4xl lg:text-6xl font-semibold mt-32 mb-6">
        Loading...
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        Please wait while we fetch the data.
      </p>
    </div>
  );
};

export default LoadingMessage;