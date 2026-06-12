import { createSelector } from "@reduxjs/toolkit";

const selectFilter = state => state.filter;
export const getFilter = createSelector([selectFilter], filter => filter);