import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="  mx-4 p-4">
      <div className="border-b border-black">
        <h1 className="text-2xl font-bold p-2">Category</h1>
      </div>
      <div className="flex py-2 font-bold">
        <Button name="jewelery" />
        <Button name="electronics" />
        <Button name="men's clothing" />
        <Button name="women's clothing" />
      </div>
    </div>
  );
};

export default ButtonList;
