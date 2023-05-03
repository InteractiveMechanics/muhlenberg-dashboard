import React, { useState, useEffect } from "react";
import { RadialChart } from 'react-vis';

export function DashboardWater(props) {	
	const loading = props.loading;
	const liveData = props.liveData;	
	const updatedTime = props.updatedTime;
	
	const [pieChartData, setPieChartData] = useState([]);
	const [cisternLevel, setCisternLevel] = useState(0);
	const [totalWaterUsage, setTotalWaterUsage] = useState(0);
	
	useEffect(() => {		
		setPieChartData([
			{ angle: findValueById('Rainwater_Used_YTD'), label: convertToKilos(findValueById('Rainwater_Used_YTD')), color: '#0380b1' }, 
			{ angle: findValueById('Domestic_Water_Used_YTD'), label: convertToKilos(findValueById('Domestic_Water_Used_YTD')), color: '#272160' }
		]);
		
		setCisternLevel(findValueById('Active_Rainwater_Tank_Level') / 11 * 100);
		setTotalWaterUsage(findValueById('Rainwater_Used_YTD') + findValueById('Domestic_Water_Used_YTD'));
		
	}, [liveData, loading]);
	
	const findValueById = (id) => {
		if (liveData) {
			const val = liveData.find((val) => id == val.point);
			const index = liveData.indexOf(val);
			if (liveData[index].value > 0) {
				return liveData[index].value;
			} else {
				return 0.1;
			}
		}
	}
	
	const convertToKilos = (num) => {
		const lookup = [
	    { value: 1, symbol: "" },
	    { value: 1e3, symbol: "K" },
	    { value: 1e6, symbol: "M" },
	    { value: 1e9, symbol: "G" },
	    { value: 1e12, symbol: "T" },
	    { value: 1e15, symbol: "P" },
	    { value: 1e18, symbol: "E" }
	  ];
	  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	  var item = lookup.slice().reverse().find(function(item) {
	    return num >= item.value;
	  });
	  return item ? (num / item.value).toFixed(0).replace(rx, "$1") + item.symbol : "0";
	}
	
	if (loading) {
		return <div className="loading"><img src="/src/assets/loading.gif" /></div>;
	}
	
  return (
		<div className="dashboard dashboard--water">
			<div className="dashboard--container small padding-right">
				
				<h3 className="text-left">Rainwater Harvesting</h3>
				<img src="/src/assets/slide4_rainwater.png" style={{ width: 400, height: 650, marginTop: 50 }} />
				
			</div>
			<div className="dashboard--container large">
				<div className="row">
					<div className="col">
					
						<h3>Year to Date Water Consumption</h3>
						<RadialChart
							data={pieChartData}
							width={250}
							height={250}
							showLabels={true}
							labelsAboveChildren={true}
							labelsRadiusMultiplier={0.5}
							colorType="literal" />
							
							<ul className="legend" style={{ left: 300, top: 100 }}>
								<li><div className="legend--block legend--block-lightBlue" /> Re-used Rainwater</li>
								<li><div className="legend--block legend--block-darkBlue" /> Consumed Domestic Water</li>
								<br/>
								<li><div className="legend--block" /> <b>Total Water Consumption: <span className="larger-text">{ convertToKilos(totalWaterUsage) }</span></b></li>
								<li><div className="legend--block" /> Unit: Gallon YTD</li>
							</ul>
													
						<br/>
						
					</div>
				</div>
				<div className="row">
					<div className="col">
					
						<h3>Current Rainwater Cistern Level</h3>
						
						<div className="rainwater-tank">
							<img src="/src/assets/slide4_cistern.svg" />
							<div className="rainwater-tank--container">
								<div className="rainwater-tank--level" style={{ height: `${cisternLevel}%` }} />
							</div>
						</div>
						
						<span className="last-updated">{ updatedTime ? `Last updated: ${updatedTime}` : "Data not available" }</span>
						
					</div>
				</div>
			</div>
		</div>
  );
}
