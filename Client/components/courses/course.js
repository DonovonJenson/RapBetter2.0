import React from "react";

export default class Course extends React.Component{
	render(){
        
		const {title, price} = this.props;
		return (
			<div>
				<div> {title} {price}</div>
			</div>
		);
	}
}