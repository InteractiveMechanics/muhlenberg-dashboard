import React, { useState, useEffect } from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries, LabelSeries, HorizontalBarSeries } from 'react-vis';

export function DashboardEnergy(props) {
	const loading = props.loading;
	const liveData = props.liveData;
	const updatedTime = props.updatedTime;
	
	const [annualEnergyProd, setAnnualEnergyProd] = useState([]);
	const [annualEnergyConsp, setAnnualEnergyConsp] = useState([]);
	const [currentEnergy, setCurrentEnergy] = useState([]);
	const [currentEnergyLabels, setCurrentEnergyLabels] = useState([]);
	const [totalEnergy, setTotalEnergy] = useState([]);
	
	useEffect(() => {
		if (liveData !== null) {			
			
			setAnnualEnergyProd([
				{ x: 'Jan', y: findValueById('January_Total_Production') },
				{ x: 'Feb', y: findValueById('February_Total_Production') },
				{ x: 'Mar', y: findValueById('March_Total_Production') },
				{ x: 'Apr', y: findValueById('April_Total_Production') },
				{ x: 'May', y: findValueById('May_Total_Production') },
				{ x: 'Jun', y: findValueById('June_Total_Production') },
				{ x: 'Jul', y: findValueById('July_Total_Production') },
				{ x: 'Aug', y: findValueById('August_Total_Production') },
				{ x: 'Sep', y: findValueById('September_Total_Production') },
				{ x: 'Oct', y: findValueById('October_Total_Production') },
				{ x: 'Nov', y: findValueById('November_Total_Production') },
				{ x: 'Dec', y: findValueById('December_Total_Production') }
			]);
			setAnnualEnergyConsp([
				{ x: 'Jan', y: findValueById('January_Total_Consumption') },
				{ x: 'Feb', y: findValueById('February_Total_Consumption') },
				{ x: 'Mar', y: findValueById('March_Total_Consumption') },
				{ x: 'Apr', y: findValueById('April_Total_Consumption') },
				{ x: 'May', y: findValueById('May_Total_Consumption') },
				{ x: 'Jun', y: findValueById('June_Total_Consumption') },
				{ x: 'Jul', y: findValueById('July_Total_Consumption') },
				{ x: 'Aug', y: findValueById('August_Total_Consumption') },
				{ x: 'Sep', y: findValueById('September_Total_Consumption') },
				{ x: 'Oct', y: findValueById('October_Total_Consumption') },
				{ x: 'Nov', y: findValueById('November_Total_Consumption') },
				{ x: 'Dec', y: findValueById('December_Total_Consumption') }
			]);
			
			setCurrentEnergy([
				{ x: getConsumptionValue(findValueById('Active_Distribution_Power'), findValueById('Active_Solar_Production')), y: 'Consumption', color: '#840c08' },
				{ x: findValueById('Active_Solar_Production'), y: 'Production', color: '#6aac6e' },
			]);
			
			// ALWAYS GIVE A POSITIVE VALUE
			setCurrentEnergyLabels([
				{ x: getConsumptionValue(findValueById('Active_Distribution_Power'), findValueById('Active_Solar_Production'))/2, 
					y: 'Consumption', 
					label: getConsumptionValue(findValueById('Active_Distribution_Power'), findValueById('Active_Solar_Production')).toLocaleString(undefined, { maximumFractionDigits: 1 }) + " kWh" },
				{ x: findValueById('Active_Solar_Production')/2, 
					y: 'Production', 
					label: findValueById('Active_Solar_Production').toLocaleString(undefined, { maximumFractionDigits: 1 }) + " kWh" },
			]);
			
			setTotalEnergy(
				findValueById('January_Total_Production') +
				findValueById('February_Total_Production') +
				findValueById('March_Total_Production') +
				findValueById('April_Total_Production') +
				findValueById('May_Total_Production') +
				findValueById('June_Total_Production') +
				findValueById('July_Total_Production') +
				findValueById('August_Total_Production') +
				findValueById('September_Total_Consumption') +
				findValueById('October_Total_Consumption') +
				findValueById('November_Total_Consumption') +
				findValueById('December_Total_Consumption')
			);
			
		}		
	}, [liveData]);
	
	const findValueById = (id) => {
		if (liveData) {
			const val = liveData.find((val) => id == val.point);
			const index = liveData.indexOf(val);
			return liveData[index].value;
		}
	}
	
	const getConsumptionValue = (cons, prod) => {
		if (cons > 0) {
			return cons;
		} else {
			return prod + cons;
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
	
	const convertToCO2 = (kwh) => {
		return (kwh / 1410.437235543).toFixed(0);
	}
	const convertToTrees = (kwh) => {
		return (kwh / 1191.89511323).toFixed(0);
	}
	const convertToHomes = (kwh) => {
		return (kwh / 7246.376811594).toFixed(0);
	}
	const convertToCars = (kwh) => {
		return (kwh / 0.568472514).toFixed(0);
	}
	
		
	if (loading) {
		return <div className="loading"><img src="/src/assets/loading.gif" /></div>;
	}

  return (
		<div className="dashboard dashboard--energy">
			<div className="dashboard--container large padding-right">
				
				<div className="row">
					<div className="col">
					
						<h3 className="text-left">Current Energy Production vs. Consumption</h3><br/>

						<XYPlot yType="ordinal" width={775} height={250} colorType="literal">
							<XAxis tickSizeOuter={0} tickSizeInner={4} tickTotal={5} />
							
							<HorizontalBarSeries data={currentEnergy} barWidth={0.65} />
							<LabelSeries data={currentEnergyLabels} allowOffsetToBeReversed labelAnchorX="middle" labelAnchorY="middle" />
						</XYPlot>
						
						<ul className="legend" style={{ left: 650, top: 0 }}>
							<li><div className="legend--block legend--block-green" /> Current energy production</li>
							<li><div className="legend--block legend--block-red" /> Current energy consumption</li>
						</ul>
						<br/>
					</div>
				</div>
				<div className="row">
					<div className="col">
					
						<h3 className="text-left">Annual Energy Production vs. Consumption (kWh)</h3><br/>
						
						<XYPlot xType="ordinal" width={775} height={250}>
							<XAxis tickSizeOuter={4} tickSizeInner={0} />
							<YAxis tickFormat={v => convertToKilos(v)} />
							<VerticalBarSeries data={annualEnergyProd} color="#6aac6e" />
							<VerticalBarSeries data={annualEnergyConsp} color="#840c08" />
						</XYPlot>
						
						<ul className="legend" style={{ left: 650, top: 0 }}>
							<li><div className="legend--block legend--block-green" /> Energy production</li>
							<li><div className="legend--block legend--block-red" /> Energy consumption</li>
						</ul>
					
						<br/>
						<span className="last-updated">{ updatedTime ? `Last updated: ${updatedTime}` : "Data not available" }</span>
						
					</div>
				</div>
			</div>
			<div className="dashboard--container small">
				<div className="row">
					<div className="col">
				
						<h3 className="text-left">Carbon Footprint Equivalent (YTD)</h3>
						
							<div className="stat-row">
								<div className="stat-col stat-col-md text-left">
									<img src="./src/assets/symbols/symbols-SolarPanel.svg" className="icon icon-solar" />
									<span className="stat stat-md">{ convertToKilos(totalEnergy) } kWh</span>
									<span className="stat stat-label stat-label-bold text-left">solar energy<br/>production</span>
								</div>
								<div className="stat-col stat-col-sm">
									<span className="stat stat-lg"><br/><br/>=</span>
								</div>
								<div className="stat-col stat-col-md text-center stat-bg" style={{ backgroundImage: `url('./src/assets/symbols/symbols-CO2.svg')` }}>
									<br/>
									<span className="stat stat-lg stat-color-black">{ parseFloat(convertToCO2(totalEnergy)).toLocaleString(undefined, { maximumFractionDigits: 1 }) }</span>
									<span className="stat stat-label stat-color-black">Metric tons<br/>of <span className="stat stat-label stat-label-bold stat-color-black">CO2</span></span>
								</div>
							</div>

							<br/>

							<div className="stat-row">
								<div className="stat-col">
									<img src="./src/assets/symbols/symbols-Tree.svg" className="icon icon-tree icon-center" />
								</div>
								<div className="stat-col stat-col-lg">
									<span className="stat stat-lg stat-color-green">{ parseFloat(convertToTrees(totalEnergy)).toLocaleString(undefined, { maximumFractionDigits: 1 }) }</span>
									<span className="stat stat-label">acres of U.S. forest carbon<br/>sequestration in 1 year</span>
								</div>
							</div>
							
							<div className="stat-row">
								<div className="stat-col">
									<img src="./src/assets/symbols/symbols-Electricity.svg" className="icon icon-electricity icon-center" />
								</div>
								<div className="stat-col stat-col-lg">
									<span className="stat stat-lg stat-color-yellow">{ parseFloat(convertToHomes(totalEnergy)).toLocaleString(undefined, { maximumFractionDigits: 1 }) }</span>
									<span className="stat stat-label">houses worth of electricity<br/>for 1 year</span>
								</div>
							</div>
							
							<div className="stat-row">
								<div className="stat-col">
									<img src="./src/assets/symbols/symbols-Car.svg" className="icon icon-car icon-center" />
								</div>
								<div className="stat-col stat-col-lg">
									<span className="stat stat-lg stat-color-beige">{ convertToKilos(convertToCars(totalEnergy)) }</span>
									<span className="stat stat-label">vehicle miles/year<br/>greenhouse gas emissions</span>
								</div>
							</div>

					</div>
				</div>
			</div>
		</div>
  );
}
