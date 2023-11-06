import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "../features/goods/GoodsSlice";

const store = configureStore({
  reducer: {
    goodsReducer: goodsReducer,
  },
});

export default store;
