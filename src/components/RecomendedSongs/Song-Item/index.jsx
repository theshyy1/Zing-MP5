import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToStack, getSong } from "../../../store/musicSlice";

const SongRecomnended = ({ song: { name, artis, avatar, id, path } }) => {
  const dispatch = useDispatch();

  const handleAddToStack = () => {
    dispatch(addToStack({ id, name, artis, image: avatar, path }));
  };

  return (
    // <Link to={`/songs/${id}`}>
    <article className="relative flex items-center space-x-3 w-[320px] px-2 py-1 group">
      <div className="absolute top-0 left-0 rounded h-full w-full bg-btn-color opacity-0 group-hover:opacity-40">
        <div className="flex h-full justify-between text-white-color text-2xl items-center">
          <span
            onClick={() =>
              dispatch(getSong({ id, name, artis, image: avatar, path }))
            }
            className="block h-6 w-6 cursor-pointer ml-11"
          >
            <i className="fa-solid fa-caret-right w-full"></i>
          </span>
          <span></span>
          <div className="space-x-8 mr-4 z-2">
            <i className="fa-regular fa-heart" onClick={handleAddToStack}></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
      <img
        src={avatar}
        className="object-contain rounded max-w-[60px]"
        alt=""
      />
      <div className="text-white-color z-10">
        <h4 className="text-[15px]">{name}</h4>
        <p className="text-gray-color text-[13px]">{artis}</p>
      </div>
    </article>
    // </Link>
  );
};

export default SongRecomnended;
