import React from "react";
import classNames from "classnames";
const OptionBtn = ({ type: { name, isActive }, onHandleClick }) => {
  const handleClickOption = () => {
    onHandleClick(name);
  };
  const liClassnames = classNames(
    "w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full",
    {
      "bg-btn-color": isActive,
    }
  );
  return (
    <li onClick={handleClickOption} className={liClassnames}>
      {name}
    </li>
  );
};

export default OptionBtn;
