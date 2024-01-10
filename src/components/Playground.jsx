import React from "react";

const Playground = ({ isPlaying, setPlaying }) => {
  return (
    <>
      <div className="p-2">
        <div className="flex items-center justify-between mx-5">
          <div className="flex items-center gap-2">
            <img src="https://picsum.photos/64/64" />
            <div className="leading-5">
              <p>Hoa sứ nhà mày</p>
              <span className="text-xs text-gray-400">Tuấn Vũ, Xuân Mai</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center gap-5 transition-all">
              <button>
                <i class="fa-solid fa-shuffle text-2xl"></i>
              </button>
              <button>
                <i class="fa-solid fa-backward-step text-2xl"></i>
              </button>
              {isPlaying ? (
                <>
                  <button
                    onClick={() => {
                      setPlaying(!isPlaying);
                    }}
                  >
                    <i class="fa-solid fa-pause text-3xl"></i>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setPlaying(!isPlaying);
                  }}
                >
                  <i class="fa-solid fa-circle-play text-3xl"></i>
                </button>
              )}

              <button>
                <i class="fa-solid fa-forward-step text-2xl"></i>
              </button>
              <button>
                <i class="fa-solid fa-repeat text-2xl"></i>
              </button>
            </div>
            <div className="w-[500px] h-1 mt-2 bg-white"></div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <button>
                <i class="fa-solid fa-microphone text-xl"></i>
              </button>
              <div className="flex items-center gap-2">
                <button className="hidden">
                  <i class="fa-solid fa-volume-xmark"></i>
                </button>
                <button>
                  <i class="fa-solid fa-volume-high text-xl"></i>
                </button>
                <div className="w-20 bg-white h-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
