import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homePage/home.js";
import Courses from "./courses/courses.js";

//import NavBar from "./navBar/navbar.js";

export default class App extends React.Component{
	render(){
		return (
			<Switch>
				<Route
					exact
					path="/courses"
					component={Courses}
				/>
				<Route
					exact
					path="/"
					component={HomePage}
				/>
			</Switch>

		);
	}

}