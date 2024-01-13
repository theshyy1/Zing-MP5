import React from "react";

const ButtonIcon = ({ children, text }) => {
  return (
    <div
      className={`${
        text
<<<<<<< HEAD
          ? "flex items-center p-2 m-5 gap-2 text-white-color"
=======
          ? "flex items-center p-3 ml-3 gap-2 text-sm text-white-color"
>>>>>>> d4437bb26d1a58da509d0453b42e5f597a7107b7
          : "flex items-center text-white-color"
      }`}
    >
      <span className="block w-10 h-10 bg-btn-color cursor-pointer rounded-full text-white-color text-center leading-10 hover:opacity-60">
        {children}
      </span>
      {text ? text : ""}
    </div>
  );
};

export default ButtonIcon;
