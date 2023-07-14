import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
  input: '',
};

const options = {
  method: 'GET',
  url: 'https://rest-country-api.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'ff86c6343emsh602050387db329cp11bacfjsn1ca6719c841b',
    'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com',
  },
};

export const fetchCountries = createAsyncThunk(
  'home/fetchCountries',
  async () => {
    const response = await axios.request(options);
    return response.data;
  },
);
// updating the input
export const setInputValue = (value) => ({
  type: ' countries/searching',
  payload: value,
});

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      if (action.payload && Array.isArray(action.payload)) {
        state.countries = [];
        action.payload.forEach((item) => {
          state.countries.push(item);
        });
      }
      state.countries = action.payload.filter((country) => country.name.common.toLowerCase()
        .includes(state.input.toLowerCase()));
      state.isLoading = false;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false;
      state.error = 'something went wrong';
    });
  },
});

export const { actions } = countrySlice.actions;
export default countrySlice.reducer;
