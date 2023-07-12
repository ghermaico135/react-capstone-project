/** @format */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Searching from '../components/searching';

describe('Searching component', () => {
  test('renders filtered countries list', () => {
    const countries = [
      {
        name: {
          common: 'United Arab emirates',
        },
        flag: 'Flag 1',
        population: '1000000',
      },
      {
        name: {
          common: 'Eritrea ',
        },
        flag: 'Flag 2',
        population: '2000000',
      },
    ];

    render(
      <MemoryRouter>
        <Searching countriesArray={countries} input="United Arab emirates" />
      </MemoryRouter>,
    );

    expect(screen.getByText('United Arab emirates')).toBeInTheDocument();
    expect(screen.queryByText('Eritrea')).toBeInTheDocument();
  });
});
