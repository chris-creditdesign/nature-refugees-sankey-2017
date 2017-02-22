import d3 from "../../d3-bundle.js"

function format(d) {
	var formatNumber = d3.format(",.0f");
	return formatNumber(d) + " people";
};

export default format;

