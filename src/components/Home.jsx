/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {fetchCountries} from "../redux/features/countriesSlice"
import { NavLink } from "react-router-dom";
import Searching from "./searching"
import "../Style/home.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const myUuid = uuidv4();
  let dispatch = useDispatch()
  const [input ,setInput] = useState('')
  console.log(input)
    const {countries,isLoading,error} = useSelector(state => state.countries)
    console.log(countries)

  useEffect(()=>{
			if(countries.length === 0){
				dispatch(fetchCountries())
			}
    
  },[dispatch,countries.length])

  const handleInput = (e) =>{
    e.preventDefault()
    setInput(e.target.value)
  }

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

	return (
    <Container fluid> 
      <div>
      <h1>Searching by countries</h1>
   
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control  type="search" name="input" value={input} onChange={handleInput} placeholder="searchByCountry" />
      </Form.Group>
      </div>
      <Card className="grid-container">
					{ input.length <= 0 ?(
              countries.map((country) =>(
              <Card.Body className="d-flex">
                <NavLink key={myUuid} to="/Details" state={{country : country}}>
                <Card className="p-4"  variant="Secondary" style={{ width: '14rem' }}>
                <span>{country.flag}</span>
                  <br />
                  <br />
                  {country.name.common}
                     <br />
                  {country.population}
                
                  people
                </Card>
                    </NavLink>
                   
              </Card.Body>
          ))) :(
               <Searching countriesArray={countries} input={input} />
              )
              
				}
    
    </Card>
    </Container>
	
	)
};

export default Home;