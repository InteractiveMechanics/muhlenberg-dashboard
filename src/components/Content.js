import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

import { DashboardEnergy } from './DashboardEnergy';
import { DashboardWater } from './DashboardWater';

export function Content(props) {
	const data = props.data;
	
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
		}
		//else {
			//if (data.id == 3) { return ( <DashboardEnergy /> ) }
			//if (data.id == 4) { return ( <DashboardWater /> ) }
		//}
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
