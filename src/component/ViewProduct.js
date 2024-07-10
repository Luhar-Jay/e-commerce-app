import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // Add useSelector here
import { addItem, removeItems } from "../utils/cartSlice"; // Add removeItem here
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProduct = () => {
  const [item, setItem] = useState(null);
  const [inCart, setInCart] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    getFetchItem();
  }, []);

  useEffect(() => {
    if (item) {
      const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);
      setInCart(isInCart);
    }
  }, [cartItems, item]);

  const getFetchItem = async () => {
    const data = await fetch(`${API_URL}/${id}`);
    const json = await data.json();
    console.log("items list", json);
    setItem(json);
  };

  const handleAddItem = () => {
    if (item) {
      dispatch(addItem(item));
      toast.success(`One item "${item.title}" added from cart!`);
    }
  };

  const handleRemoveItem = () => {
    if (item) {
      dispatch(removeItems(item.id));
      toast.success(`One item of "${item.title}" removed from cart!`);
    }
  };

  return (
    <div className="h-screen">
      <div className="p-4 w-full md:w-3/6 flex flex-col mx-auto">
        <ToastContainer
          className="fixed right-0 m-4  text-green-800 rounded px-4 py-2 "
          autoClose={1000}
          hideProgressBar={true}
          closeButton={true}
        />
        {item && (
          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 mb-4 md:mb-0 border bg-gray-100 flex justify-center items-center">
              <img
                className="h-64 w-full md:w-52 mb-2"
                alt={item.title}
                src={item.image}
              />
            </div>
            <div className="md:w-1/2 p-2 shadow-lg">
              <h1 className="text-xl font-bold mt-2">{item.title}</h1>
              <p className="text-lg py-2">{item.category}</p>
              <p className="font-bold">Rs. {item.price}</p>
              <p className="py-2">⭐ {item.rating.rate}</p>
              <p className="py-2">Available for: {item.rating.count}</p>
              {inCart ? (
                <div className=" flex items-center justify-center w-32   ">
                  <div className=" w-11 text-center text-black font-bold text-3xl mr-2">
                    <button
                      className="border-r-black bg-red-500 pb-2 mr-1 px-4 rounded-full"
                      onClick={handleRemoveItem}
                    >
                      -
                    </button>
                  </div>
                  <span className=" py-2 bg-white ">{cartItems.length}</span>
                  <div className="w-9 text-center text-black font-bold text-3xl ml-2">
                    <button
                      className=" border-r-black bg-green-500 pb-2 ml-1 px-3 rounded-full  "
                      onClick={handleAddItem}
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="bg-green-500 w-24 text-white px-2 rounded-lg py-1"
                  onClick={handleAddItem}
                >
                  Add Cart
                </button>
              )}
              <div className="mt-2 border-gray-600">
                <p className="text-lg font-bold border-b border-gray-500">
                  Description
                </p>
                <p className="p-2">{item.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
