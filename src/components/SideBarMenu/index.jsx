import React from "react";
import SideBarItem from "../SideBarItem";

const listItemsSidebar = [
  {
    id: 1,
    text: "Khám phá",
    icon: "fa-regular fa-circle-dot",
  },
  {
    id: 2,
    text: "#zingchart",
    icon: "fa-regular fa-chart-bar",
  },
  {
    id: 3,
    text: "Radio",
    icon: "fa-solid fa-music",
  },
  {
    id: 4,
    text: "Thư viện",
    icon: "fa-regular fa-file-audio",
  },
  {
    id: 5,
    text: "Yêu thích",
    icon: "fa-regular fa-heart",
  },
];
const SideBarMenu = () => {
  return (
    <>
      <ul className="px-7">
        {listItemsSidebar.map((item) => (
          <SideBarItem key={item.id} text={item.text} icon={item.icon} />
        ))}
      </ul>
    </>
  );
};

export default SideBarMenu;
