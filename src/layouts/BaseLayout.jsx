import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import PlayMusic from "../components/PlayMusic";
import { useSelector } from "react-redux";

const BaseLayout = () => {
  const music = useSelector((state) => state.music.currentSong);
  return (
    <div className="flex w-full h-full">
      <div className="w-[237px]">
        <Sidebar />
        {music !== null && <PlayMusic />}
        {/* <PlayMusic /> */}
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
