import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Subscription Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4H4"
              />
            </svg>
            <p>Join The Community To Be Updated Firstly?</p>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 mr-2 bg-gray-800 text-gray-300 border border-gray-600 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 mr-2 bg-gray-800 text-gray-300 border border-gray-600 rounded"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-wrap justify-between items-center text-center md:text-left">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
              <p className="text-lg font-semibold">Contact Us</p>
            </div>
            <p className="text-gray-400">+91 123456789</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <p className="text-lg font-semibold">Address</p>
            </div>
            <p className="text-gray-400">
              Your address goes here, Your Demo Address.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4H4"
                />
              </svg>
              <p className="text-lg font-semibold">Email</p>
            </div>
            <p className="text-gray-400">info@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8 0l-4-4m4 4l-4 4m0-4H4"
                />
              </svg>
              <p className="text-lg font-semibold">Follow Us</p>
            </div>
            <p className="text-gray-400">Facebook, Twitter, Instagram</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-gray-500">
            &copy; 2019 Optic Zone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
