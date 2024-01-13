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
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 overflow-hidden">
        {albumsRecomended.map((al, index) => (
          <AlbumRecomended album={al} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default HintAlbums;
