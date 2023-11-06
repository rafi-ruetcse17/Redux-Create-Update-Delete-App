const { createSlice } = require("@reduxjs/toolkit");

const initialGoods = {
  goods: [
    { id: 1, title: "Fair & Handsome", brand: "Uniliver" },
    { id: 2, title: "Hair Gel", brand: "Acme" },
  ],
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState: initialGoods,
  reducers: {
    showGoods: (state) => state,
    addGoods: (state, action) => {
      state.goods.push(action.payload);
    },
    updateGoods: (state, action) => {
      const { id, title, brand } = action.payload;
      const isGoodsExit = state.goods.filter((good) => good.id === id);
      if (isGoodsExit) {
        isGoodsExit[0].title = title;
        isGoodsExit[0].brand = brand;
      }
    },
    deleteGoods: (state, action) => {
      const id = action.payload;
      state.goods = state.goods.filter((good) => good.id !== id);
    },
  },
});

export const { showGoods, addGoods, deleteGoods, updateGoods } =
  goodsSlice.actions;
export default goodsSlice.reducer;
