import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import { Sidebar } from './Sidebar';
import { Content } from './Content';


export function Layout(props) {	
	const data = props.data;
	const allData = props.allData;
	
	const animationConfiguration = {
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
		    delay: 2
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
		
  return (
	  <motion.div
	  	variants={ animationConfiguration }
      initial="initial"
      animate="animate"
      exit="exit"
      className="layoutContainer">
      	<div className="wrapper">
					<Content data={data} />
					<Sidebar data={data} />
				</div>
		</motion.div>
  );
}
