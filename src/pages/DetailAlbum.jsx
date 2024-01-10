import React from "react";
import { useParams } from "react-router-dom";
import { albumsRecomended } from "../data";
import ButtonIcon from "../components/button-icon";

const DetailAlbum = () => {
  const { id } = useParams();
  const currentAlbum = albumsRecomended.find((album) => album.id === +id);
  return (
    <div className="flex w-full h-full mt-5 text-white-color">
      <aside className="w-[300px]">
        <div className="flex flex-col items-center text-white-color text-center">
          <img
            src={currentAlbum.avatar}
            className="w-[300px] h-[300px] rounded-lg"
            alt=""
          />
          <article className="mt-2">
            <h3 className="text-xl">{currentAlbum.title}</h3>
            <div className="text-[12px] text-gray-color space-y-1">
              <span>Cập nhật: 17/10/2023</span>
              <p>{currentAlbum.artis}</p>
              <p>26k yêu thích</p>
            </div>
            <div className="mt-2">
              <button className="py-2 px-6 rounded-full bg-[#9b4de0] text-white-color text-sm">
                PHÁT NGÃU NHIÊN
              </button>
            </div>
            <div className="flex justify-center space-x-3 mt-3">
              <ButtonIcon>
                <i className="fa-regular fa-heart"></i>
              </ButtonIcon>
              <ButtonIcon>
                <i className="fa-solid fa-ellipsis"></i>
              </ButtonIcon>
            </div>
          </article>
        </div>
      </aside>
      <main className="flex-1 ml-5">
        <h4>
          <span>Lời tựa</span> Tôn vinh những cây đại thụ trong làng rap Việt
        </h4>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-4 items-center">
            <i className="fa-solid fa-music"></i>
            <img
              src="https://picsum.photos/40/40"
              className="object-contain rounded"
              alt=""
            />
            <div className="">
              <h3 className="text-sm">Nói với em</h3>
              <p className="text-[12px] text-gray-color">Bigdaddy</p>
            </div>
          </div>
          <span className="text-[12px] text-gray-color">03:15</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-4 items-center">
            <i className="fa-solid fa-music"></i>
            <img
              src="https://picsum.photos/40/40"
              className="object-contain rounded"
              alt=""
            />
            <div className="">
              <h3 className="text-sm">Nói với em</h3>
              <p className="text-[12px] text-gray-color">Bigdaddy</p>
            </div>
          </div>
          <span className="text-[12px] text-gray-color">03:15</span>
        </div>
      </main>
    </div>
  );
};

export default DetailAlbum;
