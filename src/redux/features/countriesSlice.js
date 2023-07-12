/** @format */
/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	countries: [],
	isLoading: false,
	error: null,
};

const options = {
	method: "GET",
	url: "https://rest-country-api.p.rapidapi.com/",
	headers: {
		"X-RapidAPI-Key": "ff86c6343emsh602050387db329cp11bacfjsn1ca6719c841b",
		"X-RapidAPI-Host": "rest-country-api.p.rapidapi.com",
	},
};

export const fetchCountries = createAsyncThunk(
	"home/fetchCountries",
	async () => {
		const response = await axios.request(options);
		return response.data;
	}
);

const countrySlice = createSlice({
	name: "countries",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCountries.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			// console.log(action.payload);
			if (action.payload && Array.isArray(action.payload)) {
				state.countries = [];
				action.payload.forEach((item) => {
					state.countries.push(item);
				});
			} else {
				state.countries = [];
			}
			state.isLoading = false;
		});
		builder.addCase(fetchCountries.rejected, (state) => {
			state.isLoading = false;
			state.error = "something went wrong";
		});
	},
});

export const { actions } = countrySlice.actions;
export default countrySlice.reducer;
