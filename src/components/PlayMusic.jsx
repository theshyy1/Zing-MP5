import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentSongNull,
  shuffleOff,
  shuffleStack,
} from "../store/musicSlice";
import ButtonPlay from "./button-play";

const PlayMusic = () => {
  const audioRef = useRef(null);
  const inputAudioRef = useRef(null);
  const btnExit = useRef(null);
  const dispatch = useDispatch();

  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setMuted] = useState(false);
  const [isRepeat, setRepeat] = useState(false);
  const [isShuffle, setShuffle] = useState(false);
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
          setCurrentIndex(currentIndex + 1);
          setCurrentSong(listSongs[currentIndex]);
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
  }, [currentIndex, music]);

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
    if (currentIndex >= listSongs.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handleShuffle = () => {
    if (!isShuffle) {
      setShuffle(true);
      dispatch(shuffleStack());
    } else {
      setShuffle(false);
      dispatch(shuffleOff());
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

  const handleMouseEnter = () => {
    btnExit.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    btnExit.current.style.display = "none";
  };

  const handleExit = () => {
    setPlaying(false);
    setCurrentSong(null);
    dispatch(setCurrentSongNull());
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full mt-[100px] h-[90px] fixed bottom-0 left-0 bg-[#130c1c] text-white-color z-20"
    >
      <div ref={btnExit} className="hidden absolute top-[-15%] right-[2%]">
        <ButtonPlay textNode={"Thoát phát nhạc"}>
          <i onClick={handleExit} className="fa-solid fa-xmark"></i>
        </ButtonPlay>
      </div>
      <main className="h-full flex items-center mx-8">
        <section className="flex items-center space-x-4 w-[400px]">
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
          <div className="mx-6">
            <h3 className="text-sm">{currentSong?.name}</h3>
            <p className="text-[12px] text-gray-color">{currentSong?.artis}</p>
          </div>
          <div className="space-x-6 mx-4">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </section>
        <section className="flex-1">
          <div className="flex justify-center space-x-6 items-center">
            <span onClick={handleShuffle}>
              <ButtonPlay textNode={"Bật phát ngẫu nhiên"}>
                {isShuffle ? (
                  <i className="fa-solid fa-shuffle text-red-600"></i>
                ) : (
                  <i className="fa-solid fa-shuffle"></i>
                )}
              </ButtonPlay>
            </span>
            <span onClick={previousSong}>
              <ButtonPlay>
                <i className="fa-solid fa-backward-step"></i>
              </ButtonPlay>
            </span>
            <span
              onClick={handlePlay}
              className="text-xl flex items-center justify-center h-10 w-10 rounded-full border-[1px] border-white-color hover:text-[#9b4de0] hover:border-[#9b4de0] cursor-pointer"
            >
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </span>
            <span onClick={nextSong}>
              <ButtonPlay>
                <i className="fa-solid fa-forward-step"></i>
              </ButtonPlay>
            </span>
            <span className="border-white-color cursor-pointer">
              <ButtonPlay textNode={"Bật phát lại tất cả"}>
                {isRepeat ? (
                  <i
                    className="fa-solid fa-repeat text-red-600"
                    onClick={handleRepeat}
                  ></i>
                ) : (
                  <i className="fa-solid fa-repeat" onClick={handleRepeat}></i>
                )}
              </ButtonPlay>
            </span>
          </div>
          <div className="flex justify-center mx-auto mt-2 space-x-3 w-[500px]">
            <span className="text-[12px]">{formatTime(currentTime)}</span>
            <input
              ref={inputAudioRef}
              type="range"
              value={progress}
              min="0"
              max="100"
              className="w-full animate-pulse"
              onChange={handleProgressChange}
            />
            <audio ref={audioRef} src={currentSong?.path}></audio>
            <span className="text-[12px]">{formatTime(duration)}</span>
          </div>
        </section>
        <section className="w-[400px] flex items-center justify-end space-x-5">
          <span className="w-5" onClick={toggleMute}>
            <ButtonPlay>
              {isMuted === true || volume <= 0 ? (
                <i className="fa-solid fa-volume-xmark"></i>
              ) : volume > 0.5 ? (
                <i className="fa-solid fa-volume-high"></i>
              ) : (
                <i className="fa-solid fa-volume-low"></i>
              )}
            </ButtonPlay>
          </span>
          <input
            type="range"
            value={volume}
            min="0"
            max="1"
            step="0.01"
            className="w-[120px] h-1"
            onChange={handleVolumeChange}
          />
        </section>
      </main>
    </div>
  );
};

export default PlayMusic;
