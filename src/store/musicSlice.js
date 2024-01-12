import { createSlice } from "@reduxjs/toolkit";
import { songsRecomended } from "../data";

const initialState = {
  currentSong: null,
  stackSongs: songsRecomended,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getSong: (state, action) => {
      state.currentSong = action.payload;
    },
    addToStack: (state, action) => {
      state.stackSongs.push(action.payload);
    },
    shuffleStack: (state) => {
      const randomArray = () => Math.random() - 0.5;
      state.stackSongs.sort(randomArray);
    },
    shuffleOff: (state) => {
      const newSongs = [...songsRecomended];
      state.stackSongs = newSongs;
    },
    setCurrentSongNull: (state) => {
      state.currentSong = null;
    },
  },
});

export const {
  getSong,
  addToStack,
  shuffleStack,
  shuffleOff,
  setCurrentSongNull,
} = musicSlice.actions;

export default musicSlice.reducer;
