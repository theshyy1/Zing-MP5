import React from "react";
import { listCovers as imgList } from "../ultils/exports-img";
import RecentlySongs from "../components/RecentlySongs";
import RecomendedSongs from "../components/RecomendedSongs";
import NewestReleaseSongs from "../components/NewestReleaseSongs";
import HintAlbums from "../components/HintAlbums";
import ImageItem from "../components/ImageItem";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Homepage = () => {
  const music = useSelector((state) => state.music.currentSong);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={`${music && "pb-20"}`}>
      <Slider
        className="w-full  justify-between md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-8"
        {...settings}
      >
        {imgList.map((img, index) => (
          <ImageItem img={img} key={index} />
        ))}
      </Slider>
      <div className="overflow-hidden mt-5">
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
