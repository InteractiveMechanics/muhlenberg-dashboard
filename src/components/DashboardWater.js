import React from "react";
import { Connector, useMqttState, useSubscription } from 'mqtt-react-hooks';

export function DashboardWater(props) {		
	const { message, connectionStatus } = useSubscription('my/test/topic');
	
  return (
	  <Connector brokerUrl="wss://2199f66541494bce8833122e68316717.s1.eu.hivemq.cloud:8884/mqtt" options={{ username: "muhlenberg_test", password: "muhlenberg2022!" }}>
			<div className="dashboard dashboard--water">
				<div className="dashboard--container padding-right">
					
					<h3>Rainwater Harvesting {connectionStatus}</h3>
					<img src="#" style={{ width: 788, height: 1300 }} />
					
				</div>
				<div className="dashboard--container padding-right">
					<div className="row">
						<div className="col">
						
							<h3>Annual Rainwater Collection & Re-use Amount (YTD)</h3>
							
							<div className="rainwater-chart">
								<div className="rainwater-chart--xAxis" />
								<div className="rainwater-chart--yAxis" />
								
								<div className="rainwater-chart--tick-marks">
									<div className="rainwater-tank--tick-marks--tick"><span>100k</span></div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick"><span>0</span></div>
								</div>
								
								<div className="rainwater-chart--bar blue" style={{ height: 320-25 }}>
									<span>80k</span>
								</div>
								<div className="rainwater-chart--bar lightblue" style={{ height: 400-25 }}>
									<span>100k</span>
									<div className="rainwater-chart--subbar gray" style={{ height: 160-12 }}><span>40k</span></div>
									<div className="rainwater-chart--subbar green" style={{ height: 240-12 }}><span>60k</span></div>
								</div>
							</div>
							
							<ul className="legend no-margin">
								<li><div className="legend--block legend--block-blue"></div>Collected rainwater</li>
								<li><div className="legend--block legend--block-green"></div>Re-used rainwater</li>
								<li><div className="legend--block legend--block-gray"></div>Consumed fresh water</li>
								<li><div className="legend--block legend--block-lightblue"></div>Total water consumption</li>
							</ul>
					
						</div>
					</div>
					<div className="row">
						<div className="col">
						
							<h3>Current Rainwater Tank Level</h3>
							
							<div className="rainwater-tank">
								<div className="rainwater-tank--container">
									<div className="rainwater-tank--level" />
								</div>
								
								<div className="rainwater-tank--tick-marks">
									<div className="rainwater-tank--tick-marks--tick large">10k</div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick large">8k</div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick large">6k</div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick large">4k</div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick large">2k</div>
									<div className="rainwater-tank--tick-marks--tick" />
									<div className="rainwater-tank--tick-marks--tick large">0 (Gallon)</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				<div className="dashboard--container no-background no-padding">
					<p>A conventional building of this size is expected to consume XXXXX gallons of water per year. Using sustainable strategies like landscaping that does not require irrigation and low flush and flow plumbing fixtures, the Fahy Commons uses XXXXX gallons of year, a X% reduction. To further increase water efficiency, rainwater that falls on the roof of this building is collected in a 10,000 gallon cistern buried under the central terrace. A filtration and pump system distributes the water back into the building to flush toilets. Through a combination of thoughtful design and rainwater recycling, the actual water use of the Fahy Commons is X% lower than a conventional building.</p>
				</div>
			</div>
		</Connector>
  );
}
