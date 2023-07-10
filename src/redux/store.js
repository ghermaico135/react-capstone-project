/** @format */
/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./features/countriesSlice";

const store = configureStore({
	reducer: {
		countryStore: countryReducer,
	},
});

export default store;
