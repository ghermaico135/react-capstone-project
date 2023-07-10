/** @format */
/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	countries: [],
	isLoading: false,
	error: null,
};

const fetchCountries = createAsyncThunk("fetchCountries", async () => {});

const countrySlice = createSlice({
	name: "countries",
	initialState,
	reducers: {},
	extraReducers: () => {},
});

export const { actions } = countrySlice.actions;
export default countrySlice.reducer;
