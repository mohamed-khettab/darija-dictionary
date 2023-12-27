import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-4xl lg:text-6xl font-semibold mt-32 mb-6">Error!</h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        An error occurred: {error}
      </p>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        And that's all we know.
      </p>
    </div>
  );
};

export default ErrorMessage;