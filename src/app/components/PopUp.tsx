'use client'
import React, { useState } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed hidden bottom-0 gap-10 md:flex flex-col right-0 w-[40%] z-50 bg-black text-white py-10 px-10  justify-between items-center shadow-lg ">
        <div className=" w-full flex justify-between">
          <h2 className="text-3xl font-bold">Newsletter</h2>
          <button
          onClick={handleClose}
          className="ml-4 text-white hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> 
        </div>

          <p className="mt-2 text-sm">
            Get the latest about SINC Partners, our startup Incubator program,
            Portfolio company offerings - straight into your inbox.
          </p>
        <form className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full border border-gray-500 bg-dark focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-black rounded-full font-semibold"
          >
            Subscribe
          </button>
        </form>
       
      </div>
    )
  );
};

export default NewsletterPopup;
