import { configureStore } from "@reduxjs/toolkit";
import phones from "./slices/phonesSlice";
import auth from "./slices/authSlice";
import basket from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    phones,
    auth,
    basket,
  },
});
