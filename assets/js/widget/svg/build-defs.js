import d3 from "../../d3-bundle";
import color from "../helpers/color";
import shortName from "../helpers/short-name";

function buildDefs() {

	/* Iterate through each of the colours and create a gradient for each combination */
	var gradient;
	this.origins.forEach((elem_o, index_o, array_o) => {
		this.destins.forEach((elem_d, index_d, array_d) => {

				gradient = this.svg_g.append("svg:defs")
					.append("svg:linearGradient")
						.attr("id", elem_o + "-" + elem_d)
						.attr("gradientUnits", "userSpaceOnUse");

				gradient.append("svg:stop")
					.attr("offset", "30%")
					.attr("stop-color", color(shortName(elem_o)))
					.attr("stop-opacity", 1);

				gradient.append("svg:stop")
					.attr("offset", "70%")
					.attr("stop-color", color(shortName(elem_d)))
					.attr("stop-opacity", 1);
		})
	});

	return this;
}

export default buildDefs;