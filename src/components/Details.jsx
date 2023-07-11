/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";


const Detail = () => {
	let navigate = useNavigate();
	const location = useLocation();
const country = location.state?.country;

console.log(country.name.common)


	return (
			<div>
					<div onClick={() => { navigate("/")}}>
					<img width="50" height="50" src="https://img.icons8.com/ios/50/circled-left-2.png" alt="circled-left-2"/>
					</div>
					<div>
						{country && country.name.common && country.name.official && (
								<>
									<h2>{country.name.official}</h2>
									{country.flag && <p>{country.flag}</p>}
								</>
							)}
					</div>
		
				<div>
					{country && country.continents[0] &&(<p><span>Continent =</span>{country.continents[0]}</p>) }
					{country && country.region &&(<p><span> Region = </span>{country.region}</p>)}
					{country && country.subregion &&(<p> <span>subregion =</span>{country.subregion}</p>)}
					{country && country.capital && country.capital[0] &&(<p><span>Capital City =</span>{country.capital[0]}</p>) }
					{country && country.status &&(<p> <span>Status =</span> {country.status}</p>)}
					{country && country.timezones &&(<p><span>TimeZone =</span>{country.timezones[0]}</p>) }
					{country && country.population !== 0 &&(<p><span>Population =</span>{country.population}</p>)}
					{country && country.area  &&(<p> <span>Area in Square Km =</span> {country.area} <span>km</span></p>)}
				</div>

			
		</div>
	);
};

export default Detail;