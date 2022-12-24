import React, { useState, useEffect } from "react";

import { useInterval } from './hooks/useInterval';

import { Screen } from './components/Screen';

import './App.scss';

export function App(props) {		
	const data = props.data;
	const timer = 1500000;
	
	const [activeId, setActiveId] = useState(7);
  
  useInterval(() => {
	  if (activeId < data.screens.length - 1) {
    	setActiveId(activeId => activeId + 1);
    } else {
	  	setActiveId(0);
	  }
  }, timer);
  // Set timer back down

  return (
    <Screen data={data} activeId={activeId} />
  );
}
