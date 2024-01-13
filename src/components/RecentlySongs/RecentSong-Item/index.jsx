import React from "react";

const AlbumItem = ({ item: { name, avatar } }) => {
  return (
    <div className="w-[130px] max-w-full space-y-2">
      <img src={avatar} className="max-w-[130px] rounded-lg " alt="" />
      <p className="text-white-color text-sm">{name}</p>
    </div>
  );
};

export default AlbumItem;
