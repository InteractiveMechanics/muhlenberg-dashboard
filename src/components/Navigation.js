import React from "react";

export function Navigation(props) {	
	const data = props.data;
	const allData = props.allData;
	
	const buildNavBar = 
		allData.map((screen, index) =>
			
			<div className={ "nav--icon " + screen.iconSize } key={index}>
				{ screen.id === data.id ? <img src={ screen.icon } className="active" /> : <img src={ screen.icon } /> }
			</div>
		)
			
  return (
	  <div className="nav">
	  	{ buildNavBar }
	  </div>
  );
}
