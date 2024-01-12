import React, { Fragment } from "react";
import AlbumItem from "./RecentSong-Item";
import { albumRecently } from "../../data";

const RecentlySongs = () => {
  return (
    <Fragment>
      <section className="mb-5 flex justify-between items-center">
        <h3 className="text-xl font-bold text-white-color">Gần Đây</h3>
        <p className="text-gray-color space-x-2">
          <span className=" cursor-pointer">Tất cả</span>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      </section>
      <section className="flex justify-start space-x-7">
        {albumRecently.map((ab, index) => (
          <AlbumItem item={ab} key={index} />
        ))}
      </section>
    </Fragment>
  );
};

export default RecentlySongs;
