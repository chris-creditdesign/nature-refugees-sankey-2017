import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";

function buildText() {
	var that = this;

	function isBigEnough(d) {
		return d.value >= that.textLimit;
	}

	function isOnTheRight(d) {
		return d.x > (that.width / 2);
	}

	if (!this.g_text) {
		// Only make the group if it doesn't already exist
		this.g_text = this.svg_g.append("g")
			.attr("class", "text");
	}

	this.text = this.g_text
		.selectAll("text")
		.data(this.graph.nodes.filter(isBigEnough), function(d) {
			return d.name;
		});

	// Enter
	this.text.enter()
		.append("text")
		.attr("class", "text")
		.attr("x", function(d) {
			return isOnTheRight(d) ? (d.x - 6) : 6 + that.sankey.nodeWidth();
		} )
		.attr("y", (d) => (d.y + d.dy / 2))
		.attr("dy", "0.35em")
		.attr("text-anchor", function(d) {
			return isOnTheRight(d) ? "end" : "start";
		})
		.text(function(d) {
			return shortName(d.name);
		});

	// Update 
	this.text
		.transition()
		.duration(this.duration)
		.attr("x", function(d) {
			return isOnTheRight(d) ? (d.x - 6) : 6 + that.sankey.nodeWidth();
		} )
		.attr("y", (d) => (d.y + d.dy / 2))

	// Exit 
	this.text
		.exit()
		.remove();

	return this;
}

export default buildText;