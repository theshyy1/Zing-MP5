import React from "react";
import Nav from "../Nav";

const SideBarMenu = () => {
  return (
    <>
      <ul className="">
        <Nav text="Khám phá" icon={"fa-regular fa-circle-dot"} />
        <Nav text="#zingchart" icon={"fa-regular fa-chart-bar"} />
        <Nav text="Radio" icon={"fa-solid fa-music"} />
        <Nav text="Thư viện" icon={"fa-regular fa-file-audio"} />
      </ul>
    </>
  );
};

export default SideBarMenu;
