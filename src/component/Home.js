import React from "react";
import ProductList from "./ProductList";
import { Outlet } from "react-router";
import MainContainer from "./MainContainer";
// import ButtonList from "./ButtonList";

const Home = () => {
  return (
    <div className="bg-slate-100">
      {/* <ButtonList /> */}
      <MainContainer />
      <Outlet />
    </div>
  );
};

export default Home;
