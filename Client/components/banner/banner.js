import React from "react";
import "./banner.scss";


export default class Banner extends React.Component{

	render(){
		return (
			<div className='banner'>
				{this.props.message}
			</div>
		);
	}
}