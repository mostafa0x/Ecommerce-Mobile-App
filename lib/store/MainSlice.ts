import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  categories: [
    {
      _id: "67d827a52e353b49a8414538",
      id: 0,
      name: "All",
      slug: "all",
      image: "xx",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
    {
      _id: "67d827a52e353b49a841453b",
      id: 4,
      name: "Shoes",
      slug: "shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
    {
      _id: "67d827a52e353b49a8414539",
      id: 2,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
    {
      _id: "67d827a52e353b49a841453a",
      id: 3,
      name: "Furniture",
      slug: "furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
    {
      _id: "67d827a52e353b49a841453c",
      id: 5,
      name: "Miscellaneous",
      slug: "miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
    {
      _id: "67d827a58e353b49a8414538",
      id: 1,
      name: "Clothes",
      slug: "clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2025-03-16T16:55:44.000Z",
      updatedAt: "2025-03-16T16:55:44.000Z",
    },
  ],
};

const MainSlice = createSlice({
  name: "MainSlice",
  initialState,
  reducers: {
    addToCount: (state, action) => {
      state.count += 1;
      console.log(state.count);
    },
  },
});

export const MainReducer = MainSlice.reducer;

export const { addToCount } = MainSlice.actions;
