import React from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

export function DashboardEnergy(props) {		
	let annualEnergyProduction = [{
		x: 'Jan',
		y: 12,
	},
	{
		x: 'Feb',
		y: 36,
	},
	{
		x: 'Mar',
		y: 24,
	}];
	
	let annualEnergyConsumption = [{
		x: 'Jan',
		y: 4,
	},
	{
		x: 'Feb',
		y: 7,
	},
	{
		x: 'Mar',
		y: 9,
	}];
	
  return (
		<div className="dashboard dashboard--energy">
			<div className="dashboard--container large padding-right">
				
				<div className="row">
					<div className="col">
					
						<h3>Current Energy Production</h3>
						<div className="chart--wrapper">
							<div className="chart--donut chart--donut-2seg">
								<div className="ticker" style={{ transform: 'rotate(-90deg)' }}></div>
							</div>
							<span className="min">0</span>
							<span className="max">10</span>
							<span className="total">1%</span>
							
							<small>Solar Panel Power Generated</small>
						</div>
						
					</div>
					<div className="col">
					
						<h3>Current Energy Consumption</h3>
						<div className="chart--wrapper">
							<div className="chart--donut chart--donut-3seg">
								<div className="ticker" style={{ transform: 'rotate(-90deg)' }}></div>
							</div>
							<span className="min">0</span>
							<span className="max">10</span>
							<span className="total">1%</span>
							
							<ul className="legend">
								<li><div className="legend--block legend--block-green"></div>Below expected kWh</li>
								<li><div className="legend--block legend--block-yellow"></div>Expected kWh</li>
								<li><div className="legend--block legend--block-red"></div>Above expected kWh</li>
							</ul>
						</div>
						
					</div>
				</div>
				<div className="row">
					<div className="col">
					
						<h3>Annual Energy Production vs. Consumption</h3>
						<XYPlot xType="ordinal" width={1550} height={500}>
							<XAxis />
							<YAxis />
							<VerticalBarSeries data={annualEnergyProduction} />
							<VerticalBarSeries data={annualEnergyConsumption} />
						</XYPlot>
						
					</div>
				</div>
			</div>
			<div className="dashboard--container">
				<div className="row">
					<div className="col">
				
						<h3>Carbon Footprint Equivalent</h3>
						
			
					</div>
				</div>
			</div>
		</div>
  );
}
