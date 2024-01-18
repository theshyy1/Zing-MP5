import React from "react";
const ImageItem = ({ img }) => {
  return (
    <div className="">
      <img
        src={img}
        className="w-[340px] h-[190px] object-contain rounded-lg bg-btn-color"
      />
    </div>
  );
};

export default ImageItem;
