import React from "react";
import classNames from "classnames";

const ButtonPlay = ({ children, textNode }) => {
  const textClassName = classNames("", {
    "w-[105px] h-6 leading-6 text-white-color rounded absolute top-[-74%] right-[-65%] text-[10px] px-1 opacity-0 bg-[#302f31] group-hover:opacity-100 z-5":
      textNode,
  });
  return (
    <span className="block w-10 h-10 rounded-full text-white-color text-center leading-10 cursor-pointer hover:bg-btn-color">
      <p className="relative group">
        {children}
        <span className={textClassName}>{textNode && textNode}</span>
      </p>
    </span>
  );
};

export default ButtonPlay;
