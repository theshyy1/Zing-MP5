import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-purple-bold">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
