import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    addConfig(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { addConfig } = configSlice.actions;

export default configSlice.reducer;
