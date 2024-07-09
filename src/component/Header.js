import { useSelector } from "react-redux";
import { USER_IMG } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";

const Header = ({ items }) => {
  const cartItem = useSelector((store) => store.cart.items);

  const location = useLocation();

  return (
    <div className="shadow-lg md:flex md:flex-row justify-between bg-orange-200 bg-gradient-to-b top-0 z-50 sticky">
      <div className="flex col-span-1 ">
        <Link to="/">
          <img
            className="w-20 h-22 mx-4 px-2 py-2 rounded-full"
            alt="logo"
            src="https://png.pngtree.com/element_our/png_detail/20181226/supercar-shop-logo-design-vector-png_285475.jpg"
          />
        </Link>
      </div>
      <div className="col-span-1 mx-4">
        <ul className="flex text-lg  p-4 ">
          <Link to="/">
            {" "}
            <li
              className={`px-2 mx-2 py-2 rounded-lg ${
                location.pathname === "/" ? "bg-red-500" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`px-2 mx-2 py-2 rounded-lg ${
                location.pathname === "/about" ? "bg-red-500" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`px-2 mx-2 py-2 rounded-lg ${
                location.pathname === "/contact" ? "bg-red-500" : ""
              }`}
            >
              contact
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`px-2 mx-2 py-2 rounded-lg ${
                location.pathname === "/cart" ? "bg-red-500" : ""
              }`}
            >
              Cart ({cartItem.length})
            </li>
          </Link>

          <img className=" w-12 h-12 mx-2" alt="avatar" src={USER_IMG} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
