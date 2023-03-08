import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/Player";
export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
export default store;
