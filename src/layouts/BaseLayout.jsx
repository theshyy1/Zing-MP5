import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Playground from "../components/Playground";

const BaseLayout = () => {
  const [isPlaying, setPlaying] = React.useState(false);
  console.log(isPlaying);
  return (
    <div className="flex w-full h-full relative">
      <div className="w-1/6">
        <Sidebar isPlaying={isPlaying} />
      </div>
      <div className="w-5/6 bg-purple-bold">
        <div className="container h-screen overflow-auto">
          <Header />
          <Outlet />
        </div>
      </div>
      <div className="fixed bg-[#130c1c] w-full text-white bottom-0 h-20">
        <Playground isPlaying={isPlaying} setPlaying={setPlaying} />
      </div>
    </div>
  );
};

export default BaseLayout;
