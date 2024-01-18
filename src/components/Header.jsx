import React from "react";
import ButtonIcon from "./button-icon";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 w-full">
      <div className="flex justify-center space-x-5 items-center w-full">
        <div className="hidden lg:flex space-x-3">
          <ButtonIcon>
            <i className="fa-solid fa-arrow-left"></i>
          </ButtonIcon>
          <ButtonIcon>
            <i className="fa-solid fa-arrow-right"></i>
          </ButtonIcon>
        </div>
        <div className="flex items-center text-white-color rounded-full bg-btn-color py-2 px-4 w-[600px]">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            className=" bg-transparent text-sm text-white-color px-3 outline-none w-full"
          />
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-5">
        <div className="flex items-center justify-center py-3 bg-purple-light rounded-full w-[170px] text-[#9b4de0] text-sm font-bold space-x-2">
          <i className="fa-solid fa-download"></i>
          <span>Tải bản macOS</span>
        </div>
        <ButtonIcon>
          <p className="relative group">
            <i className="fa-solid fa-gear"></i>
            <span className="w-[60px] h-7 leading-7 text-white-color rounded absolute top-[110%] right-[-24%] text-[10px] bg-gray-color opacity-0 group-hover:opacity-100 z-5">
              Cài đặt
            </span>
          </p>
        </ButtonIcon>
        <ButtonIcon>
          <i className="fa-solid fa-user"></i>
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Header;
