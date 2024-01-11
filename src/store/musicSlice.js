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
  },
});

export const { getSong, addToStack } = musicSlice.actions;

export default musicSlice.reducer;
