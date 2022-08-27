import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id == payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        const choosenItem = { ...payload, qty: 1 };
        state.cartItems.push(choosenItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, { payload }) => {
      const cartItemsClone = [...state.cartItems];
      const newCartItems = cartItemsClone.filter(
        (item) => item._id != payload._id
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, { payload }) => {
      const cartItemsClone = [...state.cartItems];
      const itemIndex = cartItemsClone.findIndex(
        (item) => item._id == payload._id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].qty > 1)
          state.cartItems[itemIndex].qty -= 1;
        else if (state.cartItems[itemIndex].qty == 1) {
          const newCartItems = cartItemsClone.filter(
            (item) => item._id != payload._id
          );
          state.cartItems = newCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});
export const { addToCart, removeFromCart, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
