import React from "react";
import * as mui from '@mui/material';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Btn from "./buttonComponent"
import Btn2 from "./button2Component"
// this is a appbar component.
const Appbar = () => {
return (
	<div className="App-bar">
	<AppBar position="static">
		<Toolbar className="toolbar" >
		<Btn/>
        <Btn2/>
		</Toolbar>
	</AppBar>
	</div>
);
};

export default Appbar;
