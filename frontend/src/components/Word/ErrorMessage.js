import React from 'react'

const ErrorMessage = ({ error }) => {
    return (
      <div className="flex flex-col items-center min-h-screen bg-background text-text">
        <h2 className="text-primary text-4xl lg:text-6xl font-heading mt-32 mb-6">
          Error occurred!
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          An error occurred: {error}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-center">
          And thats all we know.
        </p>
      </div>
    );
  };

export default ErrorMessage