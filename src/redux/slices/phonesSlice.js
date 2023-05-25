import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhones = createAsyncThunk("phones/getAll", async (params = '') => {
  const { data } = await axios.get(
    `https://646e116a9c677e23218b00a8.mockapi.io/Phone_resource?id=${params}`
  );
  return await data;
});

const initialState = {
  phones: null,
  status: "",
};

export const phonesSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state) => {
      state.phones = null;
      state.status = "loading";
    });

    builder.addCase(fetchPhones.fulfilled, (state, action) => {
      state.phones = action.payload;
      state.status = "succes";
    });

    builder.addCase(fetchPhones.rejected, (state) => {
      state.phones = null;
      state.status = "error";
    });
  },
});

export default phonesSlice.reducer;
