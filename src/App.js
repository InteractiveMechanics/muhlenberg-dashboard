import React, { useState, useEffect } from "react";

import { useInterval } from './hooks/useInterval';

import { Screen } from './components/Screen';

import './App.scss';

export function App(props) {		
	const data = props.data;
	const timer = 300000;
	
	const [activeId, setActiveId] = useState(3);
  
  useInterval(() => {
	  if (activeId < data.screens.length - 1) {
    	setActiveId(activeId => activeId + 1);
    } else {
	  	setActiveId(0);
	  }
  }, timer);

  return (
    <Screen data={data} activeId={activeId} />
  );
}
