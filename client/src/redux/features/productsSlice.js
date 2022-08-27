import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
  }
);
export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (item) => {
    const response = await axios.get(
      `http://localhost:5000/api/products/${item._id}`
    );
    return response.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
    products: [],
    relatedProducts: [],
    sellingProducts: [],
    status: null,
  },
  reducers: {
    filterByCategory: (state, { payload }) => {
      const productsClone = JSON.parse(localStorage.getItem("products"));
      if (payload === "all") state.products = productsClone;
      else {
        const filteredProducts = productsClone.filter(
          (item) => item.category === payload
        );
        state.products = filteredProducts;
      }
    },
    getSellingProducts: (state) => {
      const productsClone = JSON.parse(localStorage.getItem("products"));
      const allProducts = productsClone.filter((item) =>
        item.hasOwnProperty("oldprice")
      );
      state.sellingProducts = allProducts;
    },
    filterSellingsProductsByCategory: (state, { payload }) => {
      const productsClone = JSON.parse(localStorage.getItem("products"));
      const sellingProductsClone = productsClone.filter((item) =>
        item.hasOwnProperty("oldprice")
      );
      if (payload === "all") state.sellingProducts = sellingProductsClone;
      else {
        const filteredProducts = sellingProductsClone.filter(
          (item) => item.category === payload
        );
        state.sellingProducts = filteredProducts;
      }
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "Rejected";
    },
    [getProductDetails.fulfilled]: (state, { payload }) => {
      state.product = payload;
    },
  },
});
export const {
  filterByCategory,
  getSellingProducts,
  filterSellingsProductsByCategory,
} = productsSlice.actions;
export default productsSlice.reducer;
