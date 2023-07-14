/** @format */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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
              common: 'United States of America',
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

  test('renders countries list when countries array is not empty', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('United States of America')).toBeInTheDocument();
    expect(screen.getByText('canada')).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
