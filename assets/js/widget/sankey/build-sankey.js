import d3 from "../../d3-bundle";

function buildSankey() {
	this.sankey = d3.sankey()
		.nodeWidth(30)
		.nodePadding(10)
		.size([this.width, this.height]);

	this.sankey.nodes(this.graph.nodes)
		.links(this.graph.links)
		.layout(5);

	this.path = this.sankey.link();

	return this;
}

export default buildSankey;