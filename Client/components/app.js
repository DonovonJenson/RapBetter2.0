import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homePage/home.js";

import NavBar from "./navBar/navbar.js";

export default class App extends React.Component{
	render(){
		return (
			<NavBar>
				<Switch>
					<Route
						exact
						path="/"
						component={HomePage}
					/>
				</Switch>
			</NavBar>

		);
	}

}