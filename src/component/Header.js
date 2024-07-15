import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { USER_IMG } from "../utils/constants";

const Header = ({ items }) => {
  const cartItem = useSelector((store) => store.cart.items);
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="shadow-lg flex flex-row justify-between bg-orange-200 bg-gradient-to-b top-0 z-50 sticky">
      <div className="flex col-span-1 ">
        <Link to="/">
          <img
            className="w-12 md:w-20 md:h-22  my-2 mx-4 px-2 py-2 rounded-full"
            alt="logo"
            src="https://png.pngtree.com/element_our/png_detail/20181226/supercar-shop-logo-design-vector-png_285475.jpg"
          />
        </Link>
      </div>

      <div className="hidden md:flex justify-end m-4">
        <ul className="flex flex-row">
          <Link to="/">
            <li
              className={`px-2 py-2 rounded-lg ${
                location.pathname === "/" ? "bg-red-500" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`px-2 py-2 rounded-lg ${
                location.pathname === "/about" ? "bg-red-500" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`px-2 py-2 rounded-lg ${
                location.pathname === "/contact" ? "bg-red-500" : ""
              }`}
            >
              contact
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`px-2 py-2 rounded-lg ${
                location.pathname === "/cart" ? "bg-red-500" : ""
              }`}
            >
              Cart ({cartItem.length})
            </li>
          </Link>
          <img className=" w-12 h-12 mx-2" alt="avatar" src={USER_IMG} />
        </ul>
      </div>

      <div className="flex justify-end md:hidden items-center m-4 px-2 my-6 py-0 bg-red-500 border border-black ">
        <ion-icon
          name="menu"
          className=" "
          onClick={handleToggleDropdown}
        ></ion-icon>
      </div>

      {showDropdown && (
        <div className="absolute top-12 right-0 w-48 bg-white shadow-md py-2">
          <ul className="flex flex-col">
            <Link to="/">
              <li
                className={`px-2 py-2 rounded-lg ${
                  location.pathname === "/" ? "bg-red-500" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`px-2 py-2 rounded-lg ${
                  location.pathname === "/about" ? "bg-red-500" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`px-2 py-2 rounded-lg ${
                  location.pathname === "/contact" ? "bg-red-500" : ""
                }`}
              >
                contact
              </li>
            </Link>
            <Link to="/cart">
              <li
                className={`px-2 py-2 rounded-lg ${
                  location.pathname === "/cart" ? "bg-red-500" : ""
                }`}
              >
                Cart ({cartItem.length})
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
