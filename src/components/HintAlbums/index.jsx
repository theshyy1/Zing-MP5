import React, { Fragment } from "react";
import { albumsRecomended } from "../../data";
import AlbumRecomended from "./album-recomended";

const HintAlbums = () => {
  return (
    <Fragment>
      <div className="">
        <h3 className="text-xl font-bold mb-5 text-white-color">
          Có Thể Bạn Muốn Nghe
        </h3>
      </div>
      <div className="grid grid-cols-5 gap-2 overflow-hidden">
        {albumsRecomended.map((al, index) => (
          <AlbumRecomended album={al} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default HintAlbums;
