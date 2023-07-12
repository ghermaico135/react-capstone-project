/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { fetchCountries } from '../redux/features/countriesSlice';
import Searching from './searching';
import '../Style/home.css';

const Home = () => {
  const myUuid = uuidv4();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  // console.log(input)
  const { countries, isLoading, error } = useSelector((state) => state.countries);
  // console.log(countries)

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries.length]);

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  } if (error) {
    return (
      <div>
        <h4>
          Error:
          {error}
        </h4>
      </div>
    );
  } if (countries.length === 0) {
    return (
      <div>
        <h3>No Countries found</h3>
      </div>
    );
  }

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div className="mt-4  wrapper">
      <div>
        <h1 className="title">Searching Info By countries</h1>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="search" name="input" value={input} onChange={handleInput} placeholder="searchByCountry" />
        </Form.Group>
      </div>
      <div className="grid-container">
        { input.length <= 0 ? (
          countries.map((country) => (
            <NavLink className="text-decoration" key={myUuid} to="/Details" state={{ country  }}>
              <div className="p-4 card-item">
                <img className="next-page" src="https://img.icons8.com/windows/32/circled-right-2.png" alt="circled-right-2" />
                <p className="text-center">{country.flag}</p>
                <p className="text-center ">{country.name.common}</p>
                <p className="text-center">
                  {country.population}
                  {' '}

                  {' '}
                  people
                </p>

              </div>
            </NavLink>
          )))
          : (// <p>{input}</p>
            <Searching countriesArray={filteredCountries} input={input} />
          )}

      </div>
    </div>

  );
};

export default Home;
