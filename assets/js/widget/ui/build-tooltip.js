import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";
import format from "../helpers/format";

function buildTooltip(d, node) {
	var that = this;
	var data = d;

	d3.select("#widget-tooltip")
		.classed("hidden", false)
		.style("top", () => {
			if (d.name) {
				return `${d.y + d.dy}px`;
			} else {
				return `${node.getBBox().y + (node.getBBox().height / 2)}px`;
			}
		})
		.style("left", function () {
			// console.log(d3.select(this).node().getBoundingClientRect().width);
			
			if (data.name) {
				// It is a node
				if (data.x > that.width / 2) {
					// It is on the right
					return `${that.width - d3.select(this).node().getBoundingClientRect().width - that.sankey.nodeWidth()}px`;
				} else {
					// It is on the left
					return `${that.sankey.nodeWidth() + 20}px`;
				}
			} else {
				return `${(that.width / 2) - (d3.select(this).node().getBoundingClientRect().width / 2)}px`;
			}
		})
		.select("p")
		.text(() => {
			if (d.name) {
				return `${shortName(d.name)}: ${format(d.value)}`;
			} else {
				return `${shortName(d.origin_name)} to ${shortName(d.destination_name)}: ${format(d.value)}`;
			}
		});
		
	return this;
}

export default buildTooltip;