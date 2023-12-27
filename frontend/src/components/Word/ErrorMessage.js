import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-semibold mt-32 mb-6">Error!</h2>
        <p className="text-lg md:text-xl lg:text-2xl">An error occurred: {error}</p>
        <p className="text-lg md:text-xl lg:text-2xl">And that's all we know.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
