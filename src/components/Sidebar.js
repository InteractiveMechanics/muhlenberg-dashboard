import React, { dangerouslySetInnerHTML }  from "react";
import { motion } from "framer-motion/dist/framer-motion";

export function Sidebar(props) {
	const data = props.data;
	
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
		    delay: 5
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
		
	const buildClasses = `sidebar ${data.showSidebar ? "" : "no-content"} ${data.showSidebarBackground ? "" : "no-background"}`;
			
  return (
	  <motion.div
	  	variants={ animationConfiguration }
      initial="initial"
      animate="animate"
      exit="exit"
	    className={ buildClasses }>
			<div className="sidebar--wrapper">
				<div className="sidebar--logo"><img src={ data.showSidebarBackground ? "./src/assets/logo.svg" : "./src/assets/logo-white.svg" } /></div>
				<div className="sidebar--content" dangerouslySetInnerHTML={{ __html: data.sidebar }} />
				{ data.qrcode ? (
						<div className="sidebar--qrcode">
							For more information
							<img src={ data.qrcode } />
						</div>
				) : null }
			</div>
		</motion.div>
  );
}
