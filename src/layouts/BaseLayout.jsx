import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import PlayMusic from "../components/PlayMusic";

const BaseLayout = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-[237px]">
        <Sidebar />
        <PlayMusic />
      </div>
      <div className="flex-1 bg-purple-bold">
        <div className="container h-screen overflow-auto">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
