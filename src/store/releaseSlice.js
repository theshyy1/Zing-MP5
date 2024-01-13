import { createSlice } from "@reduxjs/toolkit";
import { songsLastRelease } from "../data";

const initialState = {
  listSongs: songsLastRelease,
};

export const releaseSlice = createSlice({
  name: "releaseSongs",
  initialState,
  reducers: {
    getSongsByType: (state, action) => {
      if (action.payload === "Tất cả") {
        state.listSongs = songsLastRelease;
      } else {
        state.listSongs = songsLastRelease.filter(
          (i) => i.typeMusic === action.payload
        );
      }
    },
  },
});

export const { getSongsByType } = releaseSlice.actions;

export default releaseSlice.reducer;
