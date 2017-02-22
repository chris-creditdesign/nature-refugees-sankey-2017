import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";
import format from "../helpers/format";

function buildLinks() {
	this.links = this.svg.append("g")
		.attr("class", "links")
		.selectAll(".link")
		.data(this.graph.links)
		.enter()
		.append("path")
		.attr("class", "link")
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", function(d) {
			// return "url(#" + d.source.id + "-" + d.target.id + ")";
			// console.log(d);
			return "hotpink";
		})
		.sort(function(a, b) {
			return b.dy - a.dy;
		});

	this.links.append("title")
		.text(function(d) {
			return shortName(d.origin_name) + " to " + shortName(d.destination_name) + "\n" + format(d.value);
		});

	return this;
}

export default buildLinks;