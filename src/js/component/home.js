import React from "react";
import { TrafficLight } from "./trafficLight.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<TrafficLight />
		</div>
	);
}
