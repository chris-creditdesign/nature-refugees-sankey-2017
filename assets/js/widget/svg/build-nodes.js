import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";
import format from "../helpers/format";
import color from "../helpers/color";

function buildNodes() {
	var that = this;

	if (!this.g_nodes) {
		// Only make the group if it doesn't already exist
		this.g_nodes = this.svg_g.append("g")
			.attr("class", "nodes");
	}

	this.nodes = this.g_nodes
		.selectAll(".node")
		.data(this.graph.nodes, function(d) {
			return d.name;
		});
	
	// Enter	
	this.nodes.enter()
		.append("rect")
		.attr("class", "node")
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y )
		.attr("height", function(d) {
			return Math.max(1, d.dy);
		})
		.attr("width", this.sankey.nodeWidth())
		.style("fill", (d) => {
			if (d.x < this.width / 2) {
				return color(shortName(d.sourceLinks[0].originregion_name));
			} else {
				return color(shortName(d.targetLinks[0].destinationregion_name));
			}
		})
		.attr("cursor", "pointer")
		.on("mouseover", function (d) {
			that.buildTooltip(d, this);
		})
		.on("mouseout", () => {
			d3.select("#widget-tooltip")
				.classed("hidden", true);
		})
		.on("click", (d) => {
			if (this.selectedCountry !== d.name) {
				this.selectedCountry = d.name;
			} else {
				this.selectedCountry = "";
			}

			this.topTenCheckbox.property("checked", false);

			this.updateAll();
		});

	// Update
	this.nodes
		.transition()
		.duration(this.duration)
		.attr("x", (d) => d.x)
		.attr("y", (d) => d.y )
		.attr("height", function(d) {
			return Math.max(1, d.dy);
		})
		.attr("width", this.sankey.nodeWidth())
		.style("fill", (d) => {
			if (d.x < this.width / 2) {
				return color(shortName(d.sourceLinks[0].originregion_name));
			} else {
				return color(shortName(d.targetLinks[0].destinationregion_name));
			}
		});

	// Exit
	this.nodes
		.exit()
		.remove();

	return this;
}

export default buildNodes;