import React from "react";
import ProductList from "./ProductList";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <ProductList />
      <Outlet />
    </div>
  );
};

export default Home;
