import React from "react";

const SongRecomnended = () => {
  return (
    <article className="flex items-center space-x-3 w-[320px] px-2 py-1 hover:bg-btn-color hover:rounded">
      <img
        src="https://picsum.photos/60/60"
        className="object-contain rounded max-w-[60px]"
        alt=""
      />
      <div className="text-white-color">
        <h4>Tại vì anh</h4>
        <p className="text-gray-color">Yanbi, T-Akayz</p>
      </div>
    </article>
  );
};

export default SongRecomnended;
