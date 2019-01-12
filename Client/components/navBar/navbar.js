import React from "react";

import AppBar from "@material-ui/core/AppBar";


//import { Link, } from "react-router-dom";

export default class NavBar extends React.Component{
	render(){
		return (
			<AppBar title='Rap Better'>
				{/* <Link to="/">Home</Link>
				<Link to="/whoah">Cool New Stuff</Link> */}
			</AppBar>
		);
	}
}