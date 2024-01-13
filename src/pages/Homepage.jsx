import React from "react";
import { listCovers as imgList } from "../ultils/exports-img";
import RecentlySongs from "../components/RecentlySongs";
import RecomendedSongs from "../components/RecomendedSongs";
import NewestReleaseSongs from "../components/NewestReleaseSongs";
import HintAlbums from "../components/HintAlbums";
import ImageItem from "../components/imageItem";
import { useSelector } from "react-redux";

const Homepage = () => {
  const music = useSelector((state) => state.music.currentSong);
  return (
    <div className={`${music && "pb-20"}`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
        {imgList.map((img, index) => (
          <ImageItem img={img} key={index} />
        ))}
      </div>
      <div className="overflow-hidden">
        <RecentlySongs />
      </div>
      <div className="mt-12">
        <RecomendedSongs />
      </div>
      <div className="mt-12">
        <HintAlbums />
      </div>
      <div className="mt-12 text-white-color mb-4">
        <NewestReleaseSongs />
      </div>
    </div>
  );
};

export default Homepage;
