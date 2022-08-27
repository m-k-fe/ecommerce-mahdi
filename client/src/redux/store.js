import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import cartSlice from "./features/cartSlice";
import favoriteSlice from "./features/favoriteSlice";
import productsSlice from "./features/productsSlice";
const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});
export default store;
