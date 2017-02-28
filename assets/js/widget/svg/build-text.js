import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";

function buildText() {
	this.nodes.append("text")
		.attr("x", -6)
		.attr("y", function(d) {
			return d.dy / 2;
		})
		.attr("dy", "0.35em")
		.attr("text-anchor", "end")
		.text(function(d) {
			return shortName(d.name);
		})
		.filter((d) => {
			return d.x < this.width / 2;
		})
		.attr("x", 6 + this.sankey.nodeWidth())
		.attr("text-anchor", "start");

	this.nodes.selectAll("text")
		.filter(function(d) {
			// Only label countries with more than
			// 25,000 people
			return d.value < 40000;
		})
		.remove();

	return this;
}

export default buildText;