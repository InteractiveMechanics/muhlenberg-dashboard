import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { Background } from './Background';
import { Navigation } from './Navigation';
import { Layout } from './Layout';


export function Screen(props) {	
	const data = props.data;
	const activeId = props.activeId;
	
	const configuration = {
    initial: { 
	    opacity: 0
	  },
    animate: {
    	opacity: 1
    },
    exit: { 
	    opacity: 0 
	  },
	};
	
  return (
	  <AnimatePresence mode="wait">
		  <motion.main
		  	variants={ configuration }
	      initial="initial"
	      animate="animate"
	      exit="exit"
	      key={activeId}>
	      		<Navigation data={data.screens[activeId]} allData={data.screens} />
						<Layout data={data.screens[activeId]} allData={data.screens} />
						<Background bg={data.screens[activeId].bg} />
			</motion.main>
		</AnimatePresence>
  );
}
