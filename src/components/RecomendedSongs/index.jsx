import React, { Fragment } from "react";
import { songsRecomended } from "../../data";
import SongRecomnended from "./Song-Item";

const RecomendedSongs = () => {
  return (
    <Fragment>
      <div className="">
        <p className="text-sm text-gray-color">Bắt đầu nghe từ một bài hát</p>
        <h3 className="text-xl font-bold mb-5 text-white-color">
          Gợi ý dành riêng cho bạn
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 h-[240px] overflow-auto">
        {songsRecomended.map((song, index) => (
          <SongRecomnended song={song} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default RecomendedSongs;
