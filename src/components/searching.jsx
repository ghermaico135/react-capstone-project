/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../Style/home.css';

const searching = ({ countriesArray, input }) => {
  const myUuid = uuidv4();
  const ItemFound = countriesArray.filter((country) => {
    if (country && country.name && country.name.common) {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(input.toLowerCase());
    }
    return false;
  });

  // {countriesArray.filter((country) =>{
  //   if(country && country.name && country.name.common){
  //      const countryName =  country.name.common.toLowerCase()
  //      return countryName.includes(input.toLowerCase())
  //   }
  //   return false
  // })
  // console.log(ItemFound)

  // ItemFound.map((country) =>{
  //      console.log(country.population)
  // <div key={myUuid}>

  // <span>{country.flag}</span>
  // <p>{country.name.common}</p>
  // <p>{country.population} { ' '} people</p>

  // </div>
  // })
  return (
    <div>
      {/* <div className="grid-container"> */}
      {ItemFound.map((country) => {
        <NavLink className="text-decoration" key={myUuid} to="/" state={{ country }}>
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
        </NavLink>;
      })}
    </div>
  );
};

export default searching;
