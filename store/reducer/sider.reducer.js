import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedKey: [],
  openKey: [],
};

const siderSlice = createSlice({
  name: "sider",
  initialState,
  reducers: {
    addSelectedKey(state, action) {
      return {
        ...state,
        selectedKey: action.payload,
      };
    },
    addOpenKey(state, action) {
      return {
        ...state,
        openKey: action.payload,
      };
    },
  },
});

export const { addSelectedKey, addOpenKey } = siderSlice.actions;

export default siderSlice.reducer;
