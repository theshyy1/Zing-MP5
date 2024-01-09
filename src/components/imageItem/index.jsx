import React from "react";

const ImageItem = ({ img }) => {
  return (
    <div className="">
      <img
        src={img}
        alt=""
        className="w-[340px] h-[190px] object-contain rounded-lg bg-btn-color"
      />
    </div>
  );
};

export default ImageItem;
