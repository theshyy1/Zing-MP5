import React, { useState } from "react";
import SideBarItem from "../SideBarItem";

const SideBarMenu = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      text: "Khám phá",
      icon: "fa-regular fa-circle-dot",
      isChoose: true,
      path: "khampha",
    },
    {
      id: 2,
      text: "#zingchart",
      icon: "fa-regular fa-chart-bar",
      isChoose: false,
      path: "zingchart",
    },
    {
      id: 3,
      text: "Radio",
      icon: "fa-solid fa-music",
      isChoose: false,
      path: "raido",
    },
    {
      id: 4,
      text: "Thư viện",
      icon: "fa-regular fa-file-audio",
      isChoose: false,
      path: "thuvien",
    },
    {
      id: 5,
      text: "Yêu thích",
      icon: "fa-regular fa-heart",
      isChoose: false,
      path: "yeuthich",
    },
  ]);

  const handleClickItemSidebar = (name) => {
    const newUpdateCategories = categories.map((item) => {
      if (item.text === name) {
        return { ...item, isChoose: !item.isChoose };
      }
      return { ...item, isChoose: false };
    });
    setCategories(newUpdateCategories);
  };
  return (
    <>
      <ul className="">
        {categories.map((item) => (
          <SideBarItem
            key={item.id}
            onHandleClick={handleClickItemSidebar}
            category={item}
          />
        ))}
      </ul>
    </>
  );
};

export default SideBarMenu;
