/** @format */
/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

const App = () => (
	<Router>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/Details" element={<Details />} />
		</Routes>
	</Router>
);

export default App;
