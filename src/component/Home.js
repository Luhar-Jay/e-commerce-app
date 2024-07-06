import React from "react";
import ProductList from "./ProductList";
import { Outlet } from "react-router";
// import ButtonList from "./ButtonList";

const Home = () => {
  return (
    <div className="bg-slate-100">
      {/* <ButtonList /> */}
      <ProductList />
      <Outlet />
    </div>
  );
};

export default Home;
