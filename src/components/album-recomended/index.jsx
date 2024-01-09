import React from "react";

const AlbumRecomended = ({ album: { avatar, title, artis } }) => {
  return (
    <article className="max-w-[194px] space-y-2 ">
      <img src={avatar} className="max-w-[194px] rounded-lg" alt="" />
      <p className="text-white-color text-sm">{title}</p>
      <span className="text-gray-color text-sm">{artis}</span>
    </article>
  );
};

export default AlbumRecomended;
