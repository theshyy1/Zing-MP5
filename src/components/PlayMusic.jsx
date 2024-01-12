import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const PlayMusic = () => {
  const audioRef = useRef(null);
  const inputAudioRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setMuted] = useState(false);
  const [isRepeat, setRepeat] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState({});
  const listSongs = useSelector((state) => state.music.stackSongs);
  const music = useSelector((state) => state.music.currentSong);

  useEffect(() => {
    if (music) {
      const index = listSongs.findIndex((item) => item.id === music.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [music]);

  useEffect(() => {
    const audio = audioRef.current;
    setCurrentSong(listSongs[currentIndex]);
    setPlaying(true);
    audio.autoplay = true;

    const handleTimeUpdate = (e) => {
      if (audio.duration) {
        const newProgress = (audio.currentTime / audio.duration) * 100;
        if (newProgress === 100) {
          setPlaying(false);
        }
        setProgress(newProgress);
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      if (isPlaying) {
        audio.play();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newProgress = e.target.value;
    const newTime = (newProgress / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(newProgress);
  };

  const previousSong = () => {
    setCurrentIndex((p) => p - 1);
    if (currentIndex === 0) {
      setCurrentIndex(listSongs.length - 1);
    }
  };

  const nextSong = () => {
    setCurrentIndex((p) => p + 1);
    if (currentIndex >= listSongs.length) {
      setCurrentIndex(0);
    }
  };

  const handleRepeat = () => {
    const audio = audioRef.current;
    audio.loop === true ? (audio.loop = false) : (audio.loop = true);
    setRepeat(!isRepeat);
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    const newVolume = e.target.value;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    audio.muted === true ? (audio.muted = false) : (audio.muted = true);
    setMuted(!isMuted);
  };

  return (
    <div className="w-full mt-[100px] h-[90px] fixed bottom-0 left-0 bg-[#130c1c] text-white-color z-20">
      <main className="h-full flex justify-between items-center">
        <section className="flex items-center space-x-3 ml-4 w-[400px]">
          <div className="">
            {isPlaying ? (
              <img
                src={currentSong?.avatar}
                className="w-16 h-16 rounded-full animate-spin-slow"
                alt=""
              />
            ) : (
              <img
                src={currentSong?.avatar}
                className="w-16 h-16 rounded-full"
                alt=""
              />
            )}
          </div>
          <div className="mx-4">
            <h3 className="text-sm">{currentSong?.name}</h3>
            <p className="text-[12px] text-gray-color">{currentSong?.artis}</p>
          </div>
          <div className="space-x-4 mx-4">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </section>
        <section className="">
          <div className="flex justify-around items-center">
            <span>
              <i className="fa-solid fa-shuffle"></i>
            </span>
            <span
              className="border-white-color hover:opacity-60 cursor-pointer w-6 h-6 block"
              onClick={previousSong}
            >
              <i className="fa-solid fa-backward-step"></i>
            </span>
            <span
              onClick={handlePlay}
              className="text-xl flex items-center justify-center h-10 w-10 rounded-full border-[1px] border-white-color hover:opacity-60 cursor-pointer"
            >
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </span>
            <span
              className="border-white-color hover:opacity-60 cursor-pointer w-6 h-6 block"
              onClick={nextSong}
            >
              <i className="fa-solid fa-forward-step "></i>
            </span>
            <span className="border-white-color hover:opacity-60 cursor-pointer">
              {isRepeat ? (
                <i
                  className="fa-solid fa-repeat text-red-600"
                  onClick={handleRepeat}
                ></i>
              ) : (
                <i className="fa-solid fa-repeat" onClick={handleRepeat}></i>
              )}
            </span>
          </div>
          <div className="mt-2 flex items-between space-x-3 w-[500px]">
            <span>{formatTime(currentTime)}</span>
            <input
              ref={inputAudioRef}
              type="range"
              value={progress}
              min="0"
              max="100"
              className="w-full"
              onChange={handleProgressChange}
            />
            <audio ref={audioRef} src={currentSong?.path}></audio>
            <span>{formatTime(duration)}</span>
          </div>
        </section>
        <section className="flex items-center space-x-3 mr-4">
          <span
            className="hover:opacity-60 cursor-pointer w-5"
            onClick={toggleMute}
          >
            {isMuted === true || volume <= 0 ? (
              <i className="fa-solid fa-volume-xmark"></i>
            ) : volume > 0.5 ? (
              <i className="fa-solid fa-volume-high"></i>
            ) : (
              <i className="fa-solid fa-volume-low"></i>
            )}
          </span>
          <input
            type="range"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
          />
        </section>
      </main>
    </div>
  );
};

export default PlayMusic;
