import { createSelector } from "@reduxjs/toolkit";

const getConfig = (state) => state.config;
export const configSelector = createSelector([getConfig], (config) => {
  return config;
});
