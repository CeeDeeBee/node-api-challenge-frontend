import React from "react";
import { Route } from "react-router-dom";

import ProjectList from "./components/ProjectsList";
import ProjectDetails from "./components/ProjectDetails";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Route exact path="/">
				<h1>Projects</h1>
				<ProjectList />
			</Route>
			<Route path="/projects/:id">
				<ProjectDetails />
			</Route>
		</div>
	);
}

export default App;
