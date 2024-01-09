import React from "react";

const ButtonIcon = ({ children }) => {
  return (
    <span className="block w-10 h-10 bg-btn-color rounded-full text-white-color text-center leading-10 hover:opacity-60">
      {children}
    </span>
  );
};

export default ButtonIcon;
