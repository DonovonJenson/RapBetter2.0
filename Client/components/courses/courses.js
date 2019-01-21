import React from "react";

import Banner from "../banner/banner";
import Course from "./course.js";
import "./courses.scss";

export default class Courses extends React.Component{
	render(){

		const courseBanner = {
			message: "Join thousands of students in rap courses",
		};


		return (
			<div>
				<img className='banner-image' src={"../../dist/images/RapBetterBanner.jpg"}

				/>
				<Banner {...courseBanner}/>
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