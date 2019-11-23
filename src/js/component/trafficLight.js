import React from "react";
import { useState } from "react";

export const TrafficLight = () => {
	const [light, setLight] = useState({ clickedLight: "" });

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
