import { configureStore } from "@reduxjs/toolkit";
import { MainReducer } from "./MainSlice";
export const store = configureStore({
  reducer: {
    MainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
