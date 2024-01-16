import React from "react";
import classNames from "classnames";

const ButtonIcon = ({ children, text }) => {
  const btnIconClassName = classNames("", {
    "flex items-center p-3 ml-3 gap-2 text-sm text-white-color": text,
  });

  return (
    <div className={btnIconClassName}>
      <span className="block w-10 h-10 bg-btn-color cursor-pointer rounded-full text-white-color text-center leading-10 hover:bg-[#a6a6a6]">
        {children}
      </span>
      {text && text}
    </div>
  );
};

export default ButtonIcon;
