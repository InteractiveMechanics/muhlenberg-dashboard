import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export function Background(props) {	
	const bg = props.bg;
	
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
      transition={{ duration: 1 }}
      className="background">
				<img src={ bg } />
		</motion.div>
  );
}
