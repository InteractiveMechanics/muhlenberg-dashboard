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
	    
	    setLiveData(parsedData.boundQueryResult);
            
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
