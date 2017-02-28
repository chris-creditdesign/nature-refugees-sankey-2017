import d3 from "../../d3-bundle";

function removeSvg() {
	this.svg.remove();

	delete this.g_links; 
	delete this.g_nodes; 
	delete this.g_text; 

	return this;
}

export default removeSvg;