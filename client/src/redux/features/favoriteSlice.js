import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteItems: localStorage.getItem("favorite-items")
      ? JSON.parse(localStorage.getItem("favorite-items"))
      : [],
  },
  reducers: {
    addToFavorite: (state, { payload }) => {
      const itemIndex = state.favoriteItems.findIndex(
        (item) => item._id == payload._id
      );
      if (itemIndex >= 0) {
        state.favoriteItems = state.favoriteItems;
      } else {
        state.favoriteItems.push(payload);
      }
      localStorage.setItem(
        "favorite-items",
        JSON.stringify(state.favoriteItems)
      );
    },
    removeFromFavorite: (state, { payload }) => {
      const favoriteItemsClone = [...state.favoriteItems];
      const newFavoriteItems = favoriteItemsClone.filter(
        (item) => item._id != payload._id
      );
      state.favoriteItems = newFavoriteItems;
      localStorage.setItem(
        "favorite-items",
        JSON.stringify(state.favoriteItems)
      );
    },
  },
});
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
