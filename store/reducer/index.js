import config from "./config.reducer";
import sider from "./sider.reducer";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const appReducer = combineReducers({
  config,
  sider,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: {
      reducers,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
