import d3 from "../../d3-bundle";

function removeSvg() {
	this.svg.remove();

	// delete this.svg;
	// delete this.nodes;
	// delete this.links;
	delete this.g_links;

	return this;
}

export default removeSvg;