import React from "react";
import { Link, Outlet } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Navigation from "../Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Drawer></Drawer>
    </div>
  );
};

export default Home;
