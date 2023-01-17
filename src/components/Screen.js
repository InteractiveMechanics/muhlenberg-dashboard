import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import { Background } from './Background';
import { BackgroundOverlay } from './BackgroundOverlay';
import { Navigation } from './Navigation';
import { Layout } from './Layout';


export function Screen(props) {	
	const data = props.data;
	const activeId = props.activeId;
	
	const animationConfiguration = {
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
		    delay: 0
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
	  <AnimatePresence mode="wait">
		  <motion.main
		  	variants={ animationConfiguration }
	      initial="initial"
	      animate="animate"
	      exit="exit"
	      key={activeId}>
	      		<Navigation data={data.screens[activeId]} allData={data.screens} />
						<Layout data={data.screens[activeId]} allData={data.screens} />
						
						{ data.screens[activeId].showBackgroundOverlay ? <BackgroundOverlay /> : null }
						
						<Background bg={data.screens[activeId].bg} />
			</motion.main>
		</AnimatePresence>
  );
}
