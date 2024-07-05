import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { useParams } from "react-router";

const ViewProduct = () => {
  const [item, setItems] = useState();

  const { id } = useParams();

  useEffect(() => {
    getFectItems();
  }, []);

  const getFectItems = async () => {
    const data = await fetch(`${API_URL}/${id}`);
    const json = await data.json();
    console.log("items list", json);

    setItems(json);
  };

  // const { image, description, category, price, title, rating } = item;
  // const { rate } = rating;
  return (
    <div className="bg-slate-200 h-screen">
      <div className=" p-4 w-3/6 flex flex-col  mx-auto ">
        {/* <div>{item && <ProductCard product={item} />}</div> */}
        {item && (
          <>
            <div className="flex justify-center">
              <img className="h-64 w-52 " alt={item.title} src={item.image} />
            </div>
            <h1 className="text-xl font-bold mt-2 ">{item.title}</h1>
            <p className="text-lg py-2">{item.category}</p>
            <p className="font-bold p-2">Rs. {item.price}</p>
            <p className="p-2">⭐ {item.rating.rate}</p>
            <p className="p-2">{item.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
