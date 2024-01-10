import React from "react";
import Nav from "../Nav";

const MenuPersonal = () => {
  return (
    <>
      <ul className="pr-6 min-w-[100vh]">
        <Nav text="BXH Nhạc Mới" icon={"fa-regular fa-square-plus"} />
        <Nav text="Chủ Đề & Thể Loại" icon={"fa-solid fa-icons"} />
        <Nav text="Top 100" icon={"fa-regular fa-star"} />
      </ul>
    </>
  );
};

export default MenuPersonal;
