import React from "react";
import Header from "./Header";
import "font-awesome/css/font-awesome.min.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg mb-4">
          Have a question, comment, or just want to say hello? We'd love to hear
          from you!
        </p>
        <form className="max-w-md mx-auto mb-4">
          <label className="block mb-2" htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Your Name"
            />
          </label>
          <label className="block mb-2" htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="your@email.com"
            />
          </label>
          <label className="block mb-2" htmlFor="message">
            Message
            <textarea
              id="message"
              className="w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="Your message..."
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
        <h2 className="text-2xl font-bold mb-4">Our Address</h2>
        <p className="text-lg mb-4">123 Main St, Anytown, USA 12345</p>
        <h2 className="text-2xl font-bold mb-4">Phone & Email</h2>
        <p className="text-lg mb-4">
          Phone: 555-555-5555
          <br />
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <h2 className="text-2xl font-bold mb-4">Social Media</h2>
        <ul className="flex justify-center mb-4">
          <li className="mr-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-2xl text-blue-500" />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-2xl text-blue-500" />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl text-pink-500" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
