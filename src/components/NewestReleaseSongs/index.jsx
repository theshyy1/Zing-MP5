import React, { Fragment } from "react";
import { songsLastRelease } from "../../data";
import OptionBtn from "./OptionBtn";
import LastRelease from "./NewRelease-Item";

const NewestReleaseSongs = () => {
  return (
    <Fragment>
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-4">Mới Phát Hành</h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <ul className="flex space-x-5">
          <OptionBtn name="Tất cả" active={true} />
          <OptionBtn name="Việt Nam" />
          <OptionBtn name="Quốc tế" />
        </ul>
        <p className="text-gray-color space-x-2">
          <span className=" cursor-pointer">Tất cả</span>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 h-[240px] overflow-hidden">
        {songsLastRelease.map((song, index) => (
          <LastRelease song={song} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default NewestReleaseSongs;
