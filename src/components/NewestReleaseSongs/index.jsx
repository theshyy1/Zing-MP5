import React, { Fragment, useState } from "react";
import OptionBtn from "./OptionBtn";
import LastRelease from "./NewRelease-Item";
import { useSelector, useDispatch } from "react-redux";
import { getSongsByType } from "../../store/releaseSlice";

const NewestReleaseSongs = () => {
  const [types, setTypes] = useState([
    { id: 1, name: "Việt Nam", isActive: true },
    { id: 2, name: "Quốc tế", isActive: false },
    { id: 3, name: "Tất cả", isActive: false },
  ]);
  const dispatch = useDispatch();
  const listSongsRelease = useSelector((state) => state.release.listSongs);

  const handleClick = (name) => {
    dispatch(getSongsByType(name));
    const newUpdated = types.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: !item.isActive };
      }
      return { ...item, isActive: false };
    });
    setTypes(newUpdated);
  };

  return (
    <Fragment>
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-4">Mới Phát Hành</h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <ul className="flex space-x-5">
          {types.map((type) => (
            <OptionBtn type={type} onHandleClick={handleClick} key={type.id} />
          ))}
        </ul>
        <p className="text-gray-color space-x-2">
          <span className=" cursor-pointer">Tất cả</span>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-start gap-2 max-h-[240px] overflow-hidden">
        {listSongsRelease.map((song, index) => (
          <LastRelease song={song} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default NewestReleaseSongs;
