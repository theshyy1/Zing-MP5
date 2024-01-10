import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ImageItem from "../components/imageItem";
import AlbumItem from "../components/album-item";
import SongRecomnended from "../components/song-recomend";
import LastRelease from "../components/last-release";
import AlbumRecomended from "../components/album-recomended";
import {
  albumRecently,
  albumsRecomended,
  songsLastRelease,
  songsRecomended,
} from "../data";

const imgList = [img1, img2, img3];

const Homepage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-8">
        {imgList.map((img, index) => (
          <ImageItem img={img} key={index} />
        ))}
      </div>
      {/* Recently */}
      <div className="overflow-hidden">
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
      </div>
      {/* Recomendation songs */}
      <div className="mt-12">
        <div className="">
          <p className="text-sm text-gray-color">Bắt đầu nghe từ một bài hát</p>
          <h3 className="text-xl font-bold mb-5 text-white-color">
            Gợi ý dành riêng cho bạn
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-2 h-[240px] overflow-hidden">
          {songsRecomended.map((song, index) => (
            <SongRecomnended song={song} key={index} />
          ))}
        </div>
      </div>
      {/* ALbum */}
      <div className="mt-12">
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
      </div>

      {/* Moi Phat Hanh */}
      <div className="mt-12 text-white-color mb-4">
        <div className="mb-5">
          <h3 className="text-xl font-bold mb-4">Mới Phát Hành</h3>
        </div>
        <div className="flex justify-between items-center mb-4">
          <ul className="flex space-x-5">
            <li className="w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full bg-btn-color">
              Tất cả
            </li>
            <li className="w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full">
              Việt Nam
            </li>
            <li className="w-[107px] text-center text-sm border-[1px] border-btn-color rounded-full">
              Quốc Tế
            </li>
          </ul>
          <p className="text-gray-color space-x-2">
            <span className=" cursor-pointer">Tất cả</span>
            <i className="fa-solid fa-chevron-right"></i>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 h-[240px] overflow-hidden">
          {songsLastRelease.map((song, index) => (
            <LastRelease song={song} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
