import React from "react";
import Nav from "../Nav";

const SideBarMenu = () => {
  return (
    <>
      <ul className="pr-6 min-w-[100vh]">
        <Nav text="Khám phá" icon={"fa-solid fa-compact-disc"} />
        <Nav text="#zingchart" icon={"fa-solid fa-ranking-star"} />
        <Nav text="Radio" icon={"fa-solid fa-radio"} />
        <Nav text="Playlist" icon={"fa-solid fa-sliders"} />
      </ul>
    </>
  );
};

export default SideBarMenu;
