import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { fetchCountries, setInputValue } from '../redux/features/countriesSlice';
import Searching from './searching';
import style from '../Style/home.module.css';

const Home = () => {
  const myUuid = uuidv4();
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const {
    countries, isLoading, error,
  } = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries.length]);

  const handleInput = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setText(value);
    dispatch(setInputValue(value));
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
  const filteredCountries = countries.filter((country) => country.name.common.toLowerCase()
    .includes(text.toLowerCase()));

  return (
    <div className={style.wrapper}>
      <div>
        <h1 className={style.title}>Searching Info By countries</h1>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="search" name="input" value={text} onChange={handleInput} placeholder="searchByCountry" />
        </Form.Group>
      </div>
      <div className={style['grid-container']} key={myUuid}>
        { text.length <= 0 ? (
          countries.map((country) => (
            <NavLink className={style['text-decoration']} key={myUuid} to="/Details" state={{ country }}>
              <div className={style['card-item']}>
                <img className={style['next-page']} src="https://img.icons8.com/windows/32/circled-right-2.png" alt="circled-right-2" />
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
          : (
            <Searching countriesArray={filteredCountries} />
          )}

      </div>
    </div>

  );
};

export default Home;
