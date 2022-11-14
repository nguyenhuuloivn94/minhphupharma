import config from "./config.reducer";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";

const appReducer = combineReducers({
  config,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;

const makeStore = () =>
  configureStore({
    reducer: {
      reducers,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
