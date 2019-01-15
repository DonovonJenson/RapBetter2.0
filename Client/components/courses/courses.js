import React from "react";

import Card from "@material-ui/core/Card";

import Course from "./course.js";

export default class Courses extends React.Component{
	render(){
		return (
			<div>
				<Card/>
				<Course 
					title = 'How To Rap Fundamentals'
					price = '$15'
				/>
				<Course 
					title = 'Learn To Write Song'
					price = '$10'
				/>
				<Course 
					title = 'Learn to Write Free'
					price = 'Free'
				/>
			</div>
		);
	}
}