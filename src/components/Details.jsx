import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../Style/detail.css';

const Detail = () => {
  const location = useLocation();
  const country = location.state?.country;

  return (
    <div className="wrapper mt-5">
      <div className="detail-container">
        <NavLink className="mt-4 p-3" to="/">
          <img className="back-page" src="https://img.icons8.com/ios/50/circled-left-2.png" alt="circled-left-2" />
        </NavLink>
        <div className="p-2 mt-4">
          {country && country.name.common && country.name.official && (
          <div>
            <h1 className="text-center">{country.name.official}</h1>
            {country.flag && <p className="text-center">{country.flag}</p>}
          </div>
          )}
        </div>

        <div className="p-2 text-center">
          {country && country.continents[0] && (
          <p className="detail">
            <span className="span-text">Continent =</span>
            {country.continents[0]}
          </p>
          ) }
          {country && country.region && (
          <p className="detail">
            <span className="span-text"> Region = </span>
            {country.region}
          </p>
          )}
          {country && country.subregion && (
          <p className="detail">
            {' '}
            <span className="span-text">subregion =</span>
            {country.subregion}
          </p>
          )}
          {country && country.capital && country.capital[0] && (
          <p className="detail">
            <span className="span-text">Capital City =</span>
            {country.capital[0]}
          </p>
          ) }
          {country && country.status && (
          <p className="detail">
            {' '}
            <span className="span-text">Status =</span>
            {' '}
            {country.status}
          </p>
          )}
          {country && country.timezones && (
          <p className="detail">
            <span className="span-text">TimeZone =</span>
            {country.timezones[0]}
          </p>
          ) }
          {country && country.population !== 0 && (
          <p className="detail">
            <span className="span-text">Population =</span>
            {country.population}
          </p>
          )}
          {country && country.area && (
          <p className="detail">
            {' '}
            <span className="span-text">Area in Square Km =</span>
            {' '}
            {country.area}
            {' '}
            <span>km</span>
          </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Detail;
