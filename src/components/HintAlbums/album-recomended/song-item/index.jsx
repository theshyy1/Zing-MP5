import React, { Fragment } from "react";

const SongAlbumItem = ({ song }) => {
  return (
    <tr className="flex justify-between items-center mt-3">
      <td className="w-3/5">
        <div className="flex space-x-4 items-center">
          <i className="fa-solid fa-music text-gray-color text-[12px]"></i>
          <img src={song.avatar} className="object-contain w-10 h-10 rounded" />
          <div className="">
            <h3 className="text-sm">{song.name}</h3>
            <p className="text-[12px] text-gray-color">{song.artis}</p>
          </div>
        </div>
      </td>
      <td className="w-1/5">
        <span className="text-[12px] text-gray-color">{song.album || ""}</span>
      </td>
      <td className="w-1/5">
        <span className="text-[12px] text-gray-color">{song.timeplay}</span>
      </td>
    </tr>
  );
};

export default SongAlbumItem;
