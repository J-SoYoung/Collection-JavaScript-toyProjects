import { configureStore } from "@reduxjs/toolkit";
import musicPlayerSlice from "./musicPlayerSlice";

const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerSlice,
  },
});

export default store;
