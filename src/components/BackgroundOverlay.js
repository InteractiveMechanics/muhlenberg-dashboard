import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export function BackgroundOverlay(props) {		
	const animationConfiguration = {
    initial: { 
	    opacity: 1,
	    transition: {
		    duration: 0,
		    delay: 0
	    }
	  },
    animate: { 
	    opacity: 0,
	    transition: {
		    duration: 1,
		    delay: 3
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
      className="backgroundOverlay">
				<img src="./src/assets/backgrounds/overlay.png" />
		</motion.div>
  );
}
