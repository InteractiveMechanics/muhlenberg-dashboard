import React, { useState, useEffect } from "react";
import mqtt from 'mqtt';
import { motion } from "framer-motion/dist/framer-motion";

import { DashboardEnergy } from './DashboardEnergy';
import { DashboardWater } from './DashboardWater';

export function Content(props) {
	const data = props.data;
	
	const [updatedTime, setUpdatedTime] = useState(null);
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = mqtt.connect('mqtts://fce989dae43640fba529af52befc4ea2.s2.eu.hivemq.cloud:8884/mqtt', { username: 'muhlwebapps', password: 'MuhlHiveMQ24!' });
    
    client.on('connect', () => {
	    client.subscribe('Muhlenberg/Fahy_Commons/Energy_Data');
	  });
	  
    client.on('message', (topic, payload, packet) => {	    
	    let data = payload.toString('utf8');
	    let parsedData = JSON.parse(data);
	    
	    //setLiveData(parsedData.boundQueryResult);
      setLiveData([{
					"point": "Active_Rainwater_Tank_Level",
					"value": 4.14,
					"status": "{ok} @ 10"
				}, {
					"point": "Annual_Water_Consumption_YTD",
					"value": 11515.5166,
					"status": "{ok} @ 10"
				}, {
					"point": "Rainwater_Used_YTD",
					"value": 588.24,
					"status": "{ok} @ 10"
				}, {
					"point": "Domestic_Water_Used_YTD",
					"value": 993.8204,
					"status": "{ok} @ 10"
				}, {
					"point": "January_Total_Production",
					"value": 0.0973,
					"status": "{ok} @ 10"
				}, {
					"point": "February_Total_Production",
					"value": 0.2913,
					"status": "{ok} @ 10"
				}, {
					"point": "March_Total_Production",
					"value": 731.2441,
					"status": "{ok} @ 10"
				}, {
					"point": "April_Total_Production",
					"value": 0.1914,
					"status": "{ok} @ 10"
				}, {
					"point": "May_Total_Production",
					"value": 0.0967,
					"status": "{ok} @ 10"
				}, {
					"point": "June_Total_Production",
					"value": 0.2891,
					"status": "{ok} @ 10"
				}, {
					"point": "July_Total_Production",
					"value": 0.097,
					"status": "{ok} @ 10"
				}, {
					"point": "August_Total_Production",
					"value": 0.0968,
					"status": "{ok} @ 10"
				}, {
					"point": "September_Total_Production",
					"value": 0.0957,
					"status": "{ok} @ 10"
				}, {
					"point": "October_Total_Production",
					"value": 0.1929,
					"status": "{ok} @ 10"
				}, {
					"point": "November_Total_Production",
					"value": 0.0975,
					"status": "{ok} @ 10"
				}, {
					"point": "December_Total_Production",
					"value": 0,
					"status": "{ok} @ 10"
				}, {
					"point": "January_Total_Consumption",
					"value": -0.0391,
					"status": "{ok} @ 10"
				}, {
					"point": "February_Total_Consumption",
					"value": -0.1719,
					"status": "{ok} @ 10"
				}, {
					"point": "March_Total_Consumption",
					"value": 893.2188,
					"status": "{ok} @ 10"
				}, {
					"point": "April_Total_Consumption",
					"value": -0.082,
					"status": "{ok} @ 10"
				}, {
					"point": "May_Total_Consumption",
					"value": -0.043,
					"status": "{ok} @ 10"
				}, {
					"point": "June_Total_Consumption",
					"value": -0.1367,
					"status": "{ok} @ 10"
				}, {
					"point": "July_Total_Consumption",
					"value": -0.043,
					"status": "{ok} @ 10"
				}, {
					"point": "August_Total_Consumption",
					"value": -0.0469,
					"status": "{ok} @ 10"
				}, {
					"point": "September_Total_Consumption",
					"value": -0.043,
					"status": "{ok} @ 10"
				}, {
					"point": "October_Total_Consumption",
					"value": -0.0898,
					"status": "{ok} @ 10"
				}, {
					"point": "November_Total_Consumption",
					"value": -0.0469,
					"status": "{ok} @ 10"
				}, {
					"point": "December_Total_Consumption",
					"value": 0,
					"status": "{ok} @ 10"
				}, {
					"point": "Active_Solar_Production",
					"value": 140000,
					"status": "{null} @ def"
				}, {
					"point": "Active_Distribution_Power",
					"value": 12000,
					"status": "{ok} @ 10"
				}]);
            
      let date = new Date(parsedData.currentTime);
      setUpdatedTime((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()));
      
	    setLoading(false);
    });
  }, []);
	
	const animationTitleConfiguration = {
    initial: { 
	    opacity: 0,
	    transition: {
		    duration: 1,
		    delay: 0
	    }
	  },
    animate: { 
	    opacity: 1,
	    transition: {
		    duration: 1,
		    delay: 4
	    }
	  },
    exit: { 
	    opacity: 0,
	    transition: {
		    duration: 1,
		    delay: 0
	    }
	  }
	};
	
	const animationBodyConfiguration = {
    initial: { 
	    opacity: 0,
	    transition: {
		    duration: 0,
		    delay: 0
	    }
	  },
    animate: { 
	    opacity: 1,
	    transition: {
		    duration: 1,
		    delay: 4.5
	    }
	  },
    exit: { 
	    opacity: 0,
	    transition: {
		    duration: 1,
		    delay: 0
	    }
	  }
	};
	
	const addZero = (i) => {
	  if (i < 10) {i = "0" + i}
	  return i;
	}
	
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
			if (data.id == 3) { return ( <DashboardEnergy loading={loading} liveData={liveData} updatedTime={updatedTime} /> ) }
			if (data.id == 4) { return ( <DashboardWater loading={loading} liveData={liveData} updatedTime={updatedTime} /> ) }
		}
	}
	
  return (
  	<div className="content">
			<motion.div
	  	  variants={ animationTitleConfiguration }
        initial="initial"
        animate="animate"
        exit="exit"
        className="content--title">
          <h1>{ data.title }</h1>
      </motion.div>
			<motion.div
	  	  variants={ animationBodyConfiguration }
        initial="initial"
        animate="animate"
        exit="exit"
        className={ buildClasses }>
				  { buildContent() }
			</motion.div>
		</div>
  );
}
