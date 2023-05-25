import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPhoneItem: (state, action) => {
      const findId = state.items.find((item) => item.id === action.payload.id);

      if (findId) {
        findId.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      const sumCount = state.items.reduce((sum, current) => {
        return current.count + sum;
      }, 0);
      state.totalCount = sumCount;

      const price = state.items.reduce((acumulator, current) => {
        return acumulator + current.count * current.price;
      }, 0);

      state.totalPrice = price;
    },

    deletePhone: (state, action) => {
      const index = state.items.findIndex((obj) => obj.id === action.payload);

      const before = state.items.slice(0, index);
      const after = state.items.slice(index + 1);

      state.items = [...before, ...after];
    },
  },
});

export const { deletePhone, addPhoneItem } = basketSlice.actions;

export default basketSlice.reducer;
