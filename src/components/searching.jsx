import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../Style/home.css';

const searching = ({ countriesArray }) => {
  const myUuid = uuidv4();

  return (
    <div>
      {countriesArray.map((country) => (
        <NavLink className="text-decoration" key={myUuid} to="/Details" state={{ country }}>
          <div className="p-4 card-item">
            <img className="next-page" src="https://img.icons8.com/windows/32/circled-right-2.png" alt="circled-right-2" />
            <p className="text-center">{country.flag}</p>
            <p className="text-center ">{country.name.common}</p>
            <p className="text-center">
              {country.population}
              {' '}
              people
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

searching.propTypes = {
  countriesArray: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      population: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default searching;
