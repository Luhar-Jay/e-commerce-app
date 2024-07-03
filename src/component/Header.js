import React from "react";
import { USER_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-lg flex flex-row justify-between bg-orange-200 bg-gradient-to-b">
      <div className="flex col-span-1 ">
        <img
          className="w-[124px] h-[124px] mx-2 px-2 py-2"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYo0sFIC899TtKVeUXKCJaJ-AAuooFPxKGg&s"
        />
      </div>
      <div className="col-span-10 flex items-center px-2">
        <input
          className="border border-black rounded-l-lg p-2 w-96"
          type="text"
          placeholder="Search"
        />
        <button className="bg-green-400 p-2 border border-black rounded-r-lg">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <ul className="flex text-2xl mt-4 p-4 ">
          <Link to={"/"}>
            <li className="px-2 mx-2 hover:bg-red-300 py-2 rounded-lg">Home</li>
          </Link>
          <Link to={"about"}>
            <li className="px-2 mx-2 hover:bg-red-300 py-2 rounded-lg">
              About
            </li>
          </Link>
          <Link to={"contact"}>
            <li className="px-2 mx-2 hover:bg-red-300 py-2 rounded-lg">
              Contact
            </li>
          </Link>
          <img className=" w-12 h-12 mx-2" alt="avatar" src={USER_IMG} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
