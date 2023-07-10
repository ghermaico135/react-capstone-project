/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
	let navigate = useNavigate();

	return (
		<div>
			<div
				onClick={() => {
					navigate("/");
				}}>
				home
			</div>
		</div>
	);
};

export default Detail;