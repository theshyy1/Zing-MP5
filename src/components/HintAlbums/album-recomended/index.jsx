import React from "react";
import { Link } from "react-router-dom";

const AlbumRecomended = ({ album: { id, avatar, title, artis } }) => {
  return (
    <Link to={`/albums/${id}`}>
      <article className="max-w-[194px] space-y-2 ">
        <img src={avatar} className="max-w-[194px] rounded-lg" alt="" />
        <p className="text-white-color text-sm">{title}</p>
        <span className="text-gray-color text-sm">{artis}</span>
      </article>
    </Link>
  );
};

export default AlbumRecomended;
