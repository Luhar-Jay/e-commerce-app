import React from "react";

const ProductCard = ({ product }) => {
  const { price, title, image } = product;
  return (
    <div className="w-64 h-fit hover:scale-110 m-4 mt-10 border rounded-lg ">
      <div className="bg-slate-200    rounded-lg border hover:border-gray-500 shadow-md p-2">
        <img alt="img" src={image} className="w-64 h-64 rounded-lg " />
        <p className="text-black p-1  truncate hover:text-balance"> {title} </p>
        <h1 className="text-black p-1 font-bold">Rs. {price}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
