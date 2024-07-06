import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-4 m-2 bg-blue-300 text-white rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
