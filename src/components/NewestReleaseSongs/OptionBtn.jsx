import React from "react";

const OptionBtn = ({ name, active }) => {
  return (
    <li
      className={`w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full ${
        active === true && "bg-btn-color"
      }`}
    >
      {name}
    </li>
  );
};

export default OptionBtn;
