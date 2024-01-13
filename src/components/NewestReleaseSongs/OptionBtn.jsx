import React from "react";

const OptionBtn = ({ type: { name, isActive }, onHandleClick }) => {
  const handleClickOption = () => {
    onHandleClick(name);
  };
  return (
    <li
      onClick={handleClickOption}
      className={`w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full ${
        isActive === true && "bg-btn-color"
      }`}
    >
      {name}
    </li>
  );
};

export default OptionBtn;
