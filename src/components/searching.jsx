/* eslint-disable */

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const searching = ({countriesArray,input}) => {
  const myUuid = uuidv4();
  const navigate = useNavigate()
  return (
    <div> 
      {countriesArray.filter((country) =>{
           if(country && country.name.common){
              const countryName =  country.name.common.toLowerCase() 
              return countryName.includes(input.toLowerCase())
           }
           return false
      }).map((country) =>{
        <div key={myUuid} onClick= {()=>navigate("/Details")} state={{country : country}}>
        <p>
        <span>{country.flag}</span>
          <br />
          <br />
          {country.name.common}
          {' '}
          <br />
          {country.population}
          {' '}
          people
        </p>
      </div>
      })
      }
    </div>

  )}

export default searching
