/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();

	return (
		<div>
			<div
				onClick={() => {
					navigate("/Detail");
				}}>
				detail
			</div>
		</div>
	);
};

export default Home;