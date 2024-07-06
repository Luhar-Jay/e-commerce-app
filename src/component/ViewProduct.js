import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ViewProduct = () => {
  const [item, setItems] = useState();

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getFectItems();
  }, []);

  const getFectItems = async () => {
    const data = await fetch(`${API_URL}/${id}`);
    const json = await data.json();
    console.log("items list", json);

    setItems(json);
  };

  return (
    <div className="h-screen">
      <div className=" p-4 w-3/6 flex flex-col  mx-auto ">
        {item && (
          <div className="">
            <div className="flex justify-center border-b">
              <img
                className="h-64 w-52 mb-2"
                alt={item.title}
                src={item.image}
              />
            </div>
            <div className="border p-2 shadow-lg">
              <h1 className="text-xl font-bold mt-2 ">{item.title}</h1>
              <p className="text-lg py-2">{item.category}</p>
              <p className="font-bold ">Rs. {item.price}</p>
              <p className="py-2">⭐ {item.rating.rate}</p>
              <button
                className="bg-black w-16 text-white px-2 rounded-lg py-1"
                onClick={handleAddItem(item)}
              >
                Add+
              </button>
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
