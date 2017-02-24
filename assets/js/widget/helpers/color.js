import d3 from "../../d3-bundle.js"

// var color = d3.scaleOrdinal(d3.schemeCategory10);

function color(str) {
	switch(str) {
		case "North America":
			return "#a78bc0";
			break;
		case "Africa":
			return "#f5d8b0";
			break;
		case "Europe":
			return "#003c6f";
			break;
		case "Former Soviet Union":
			return "#96d6f7";
			break;
		case "West Asia":
			return "#eb5e50";
			break;
		case "South Asia":
			return "#e40424";
			break;
		case "East Asia":
			return "#ad1e54";
			break;
		case "Southeast Asia":
			return "#540636";
			break;
		case "Latin America":
			return "#cdb5d8";
			break;
		case "Oceania":
			return "#2dbad7";
			break;
		default:
			return "#CCCCCC";

	}
}

export default color;