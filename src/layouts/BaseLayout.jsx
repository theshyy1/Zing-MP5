import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import PlayMusic from "../components/PlayMusic";
import { useSelector } from "react-redux";

const BaseLayout = () => {
  const music = useSelector((state) => state.music.currentSong);
  return (
    <div className=" font-inter flex fixed top-0 left-0 right-0 bottom-0">
      <div className="w-[240px] h-full">
        <Sidebar />
        {music !== null && <PlayMusic />}
      </div>
      <div className="flex-1 h-screen overflow-y-auto bg-purple-bold">
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
