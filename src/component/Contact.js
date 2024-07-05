import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const Contact = () => {
  return (
    <div>
      <Header />
      <Outlet />
      Contact
    </div>
  );
};

export default Contact;
