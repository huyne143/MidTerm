import React from "react";
import { Outlet } from "react-router-dom";
import Cars from "../components/Cars";

const Product = () => {
    return (
      <>
        <Cars />
        <Outlet/>
      </>
    );
  };
export default Product;
  