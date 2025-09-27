import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  reducers: {
    addToCount: (state, action) => {
      state.count += 1;
      console.log("x");
    },
  },
});

export const CategoriesReducer = CategoriesSlice.reducer;

export const { addToCount } = CategoriesSlice.actions;
