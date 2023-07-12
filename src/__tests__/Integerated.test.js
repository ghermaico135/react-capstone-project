/** @format */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [
          {
            name: {
              common: 'Country 1',
            },
            flag: 'Flag 1',
            population: '1000000',
          },
          {
            name: {
              common: 'canada',
            },
            flag: 'Flag 2',
            population: '2000000',
          },
        ],
        isLoading: false,
        error: null,
      },
    });
  });

  // Integrated testing
  test('renders home page, searches and navigates to detail page', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );

    const searchInput = screen.getByPlaceholderText('searchByCountry');
    fireEvent.change(searchInput, { target: { value: 'canada' } });

    expect(screen.getByText('Searching Info By countries')).toBeInTheDocument();
    fireEvent.click(screen.getByText('canada'));
    expect(screen.getByText('canada')).toBeInTheDocument();
    expect(screen.getByText('Flag 2')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
