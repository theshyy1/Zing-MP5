import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./musicSlice";
import releaseReducer from "./releaseSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    release: releaseReducer,
  },
});
