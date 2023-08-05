import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
