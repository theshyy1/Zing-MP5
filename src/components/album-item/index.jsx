import React from "react";

const AlbumItem = () => {
  return (
    <div className="max-w-[130px] space-y-2 ">
      <img
        src="https://picsum.photos/130/130"
        className="max-w-[130px] rounded-lg"
        alt=""
      />
      <p className="text-white-color text-sm">Kiếm thế soundtrack</p>
    </div>
  );
};

export default AlbumItem;
