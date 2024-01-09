import React from "react";
import ButtonIcon from "./button-icon";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex justify-center space-x-5 items-center">
        <div className="flex space-x-3">
          <ButtonIcon>
            <i className="fa-solid fa-arrow-left"></i>
          </ButtonIcon>
          <ButtonIcon>
            <i className="fa-solid fa-arrow-right"></i>
          </ButtonIcon>
        </div>
        <div className="flex items-center text-white-color rounded-full bg-btn-color py-2 px-4 w-[400px]">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            className=" bg-transparent text-sm text-white-color px-3 outline-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center justify-center py-3 bg-purple-light rounded-full w-[170px] text-[#9b4de0] text-sm font-bold space-x-2">
          <i className="fa-solid fa-download"></i>
          <span>Tải bản macOS</span>
        </div>
        <ButtonIcon>
          <i className="fa-solid fa-gear"></i>
        </ButtonIcon>
        <ButtonIcon>
          <i className="fa-solid fa-user"></i>
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Header;
