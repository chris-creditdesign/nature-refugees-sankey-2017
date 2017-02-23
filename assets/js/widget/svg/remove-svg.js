import d3 from "../../d3-bundle";

function removeSvg() {
	console.log("We're removing the svg");
	this.svg.remove();

	// delete this.svg;
	// delete this.nodes;
	// delete this.links;
	delete this.g_links;

	return this;
}

export default removeSvg;