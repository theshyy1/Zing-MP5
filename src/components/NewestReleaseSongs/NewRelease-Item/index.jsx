import React from "react";

const LastRelease = ({ song: { name, artis, time, avatar } }) => {
  return (
    <article className="flex items-center space-x-3 w-[320px] px-2 py-1 hover:bg-btn-color hover:rounded">
      <img
        src={avatar}
        className="object-contain rounded max-w-[60px]"
        alt=""
      />
      <div className="flex flex-col text-white-color">
        <h4 className="text-sm">{name}</h4>
        <p className="text-gray-color text-[12px]">{artis}</p>
        <span className="text-gray-color text-[12px]">{time}</span>
      </div>
    </article>
  );
};

export default LastRelease;
