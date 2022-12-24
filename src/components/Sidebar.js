import React, { dangerouslySetInnerHTML }  from "react";

export function Sidebar(props) {
	const data = props.data;
		
	const buildClasses = `sidebar ${data.showSidebar ? "" : "no-content"} ${data.showSidebarBackground ? "" : "no-background"}`;
			
  return (
	  <div className={ buildClasses }>
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
		</div>
  );
}
