import d3 from "../../d3-bundle";
import color from "../helpers/color";

function buildKey() {

	d3.select("#temp-key")
		.selectAll("li")
		.data(this.continents)
		.enter()
		.append("li")
		.html(d => `<span style="background-color: ${color(d)}"></span> ${d}`);

	return this;
}

export default buildKey;