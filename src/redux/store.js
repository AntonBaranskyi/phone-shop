import { configureStore } from "@reduxjs/toolkit";
import phones from "./slices/phonesSlice";
import auth from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    phones,
    auth,
  },
});
