import React from "react";

import { DashboardEnergy } from './DashboardEnergy';
import { DashboardWater } from './DashboardWater';

export function Content(props) {
	const data = props.data;
	
	const buildClasses = `content--main ${data.showSidebar ? "" : "expanded"} ${data.layout}`;
	
	const buildContent = () => {
		if (data.layout == "1col") {
			return (
				<>
					<img src={ data.content } />
				</>
			)
		} else if (data.layout == "2col") {
			return (
				<>
					<div dangerouslySetInnerHTML={{ __html: data.content.column1 }} />
					<div dangerouslySetInnerHTML={{ __html: data.content.column2 }} />
				</>
			)
		} else {
			if (data.id == 3) { return ( <DashboardEnergy /> ) }
			if (data.id == 4) { return ( <DashboardWater /> ) }
		}
	}
	
  return (
	  <div className="content">
			<div className="content--title"><h1>{ data.title }</h1></div>
			<div className={ buildClasses }>
				{ buildContent() }
			</div>
		</div>
  );
}
