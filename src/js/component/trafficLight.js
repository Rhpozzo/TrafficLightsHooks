import React from "react";
import { useState } from "react";

export const TrafficLight = () => {
	//set state for the app to store values.
	const [light, setLight] = useState({ clickedLight: "" });

	//logic, declare 3 variables and apply if logic to give each variable the "selected" css rule so that the light will turn on.
	let redSelected = "";
	if (light.clickedLight == "red") {
		redSelected = "selected";
	}
	let yellowSelected = "";
	if (light.clickedLight == "yellow") {
		yellowSelected = "selected";
	}
	let greenSelected = "";
	if (light.clickedLight == "green") {
		greenSelected = "selected";
	}

	//render the react component adding onClick functions to each light div so one one is selected the other turns off.

	return (
		<div className="main-container">
			<div className="palito" />
			<div className="lightContainer">
				<div
					className={"light red " + redSelected}
					onClick={() => setLight({ clickedLight: "red" })}
				/>
				<div
					className={"light yellow " + yellowSelected}
					onClick={() => setLight({ clickedLight: "yellow" })}
				/>
				<div
					className={"light green " + greenSelected}
					onClick={() => setLight({ clickedLight: "green" })}
				/>
			</div>
		</div>
	);
};
