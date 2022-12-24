import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import { Sidebar } from './Sidebar';
import { Content } from './Content';


export function Layout(props) {	
	const data = props.data;
	const allData = props.allData;
	
	const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
	};
		
  return (
	  <motion.div
	  	variants={ animationConfiguration }
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 3, duration: 1 }}
      className="layoutContainer">
      	<div className="wrapper">
					<Content data={data} />
					<Sidebar data={data} />
				</div>
		</motion.div>
  );
}
