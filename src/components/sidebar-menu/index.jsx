import React from "react";
import Nav from "../Nav";

const SideBarMenu = () => {
  return (
    <>
      <ul className="pr-6 min-w-[100vh]">
        <Nav text="Khám phá" icon={"fa-solid fa-compact-disc"} />
        <Nav text="Khám phá" icon={"fa-solid fa-compact-disc"} />
        <Nav text="Khám phá" icon={"fa-solid fa-compact-disc"} />
        <Nav text="Khám phá" icon={"fa-solid fa-compact-disc"} />
      </ul>
    </>
  );
};

export default SideBarMenu;
