import React from "react";
import { listCovers as imgList } from "../ultils/exports-img";
import RecentlySongs from "../components/RecentlySongs";
import RecomendedSongs from "../components/RecomendedSongs";
import NewestReleaseSongs from "../components/NewestReleaseSongs";
import HintAlbums from "../components/HintAlbums";
import ImageItem from "../components/imageItem";

const Homepage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-8">
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
