/** @format */
/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Details";
import Home from "./components/Home";

const App = () => (
	<Router>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/Detail" element={<Detail />} />
		</Routes>
	</Router>
);

export default App;
