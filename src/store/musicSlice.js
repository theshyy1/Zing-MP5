import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { getSong } = musicSlice.actions;

export default musicSlice.reducer;
