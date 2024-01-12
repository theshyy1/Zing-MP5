import React from "react";

const ButtonPlay = ({ children, textNode }) => {
  return (
    <span className="block w-10 h-10  rounded-full text-white-color text-center leading-10 cursor-pointer hover:bg-btn-color">
      <p className="relative group">
        {children}
        {textNode ? (
          <span className="w-[105px] h-6 leading-6 text-white-color rounded absolute top-[-74%] right-[-65%] text-[10px] px-1 opacity-0 bg-[#302f31] group-hover:opacity-100 z-5">
            {textNode}
          </span>
        ) : (
          ""
        )}
      </p>
    </span>
  );
};

export default ButtonPlay;
