import React from "react";
import SideBarItem from "../SideBarItem";

const SideBarMenu = () => {
  return (
    <>
      <ul className="px-7">
        <SideBarItem text="Khám phá" icon={"fa-regular fa-circle-dot"} />
        <SideBarItem text="#zingchart" icon={"fa-regular fa-chart-bar"} />
        <SideBarItem text="Radio" icon={"fa-solid fa-music"} />
        <SideBarItem text="Thư viện" icon={"fa-regular fa-file-audio"} />
        <SideBarItem text="Yêu thích" icon={"fa-regular fa-heart"} />
      </ul>
    </>
  );
};

export default SideBarMenu;
