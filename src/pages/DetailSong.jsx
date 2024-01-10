import React from "react";
import { useParams } from "react-router-dom";
import { songsRecomended } from "../data";

const DetailSong = () => {
  const { id } = useParams();
  const song = songsRecomended.find((song) => song.id === +id);
  return (
    <div className="h-screen">
      <h1 className="text-white-color">{song.name}</h1>
    </div>
  );
};

export default DetailSong;
