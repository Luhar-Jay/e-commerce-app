import React from "react";

const ProductCard = ({ product }) => {
  const { price, title, image } = product;
  return (
    <div className="md:w-64 w-36  h-fit md:h-fit m-2  hover:scale-110 md:m-10 md:mt-10 border rounded-lg ">
      <div className="bg-slate-200    rounded-lg border hover:border-gray-500 shadow-md p-2">
        <div className="flex items-center md:mx-0 mx-10">
          <img
            alt="img"
            src={image}
            className="md:w-64 md:h-64 w-12 h-12 rounded-lg text-center flex items-center"
          />
        </div>
        <p className="text-black p-1   truncate hover:text-balance">
          {" "}
          {title}{" "}
        </p>
        <h1 className="text-black md:p-1 font-bold">Rs. {price}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
