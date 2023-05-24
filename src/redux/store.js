import { configureStore } from "@reduxjs/toolkit";
import phones from "./slices/phonesSlice";

export const store = configureStore({
  reducer: {
    phones,
  },
});
