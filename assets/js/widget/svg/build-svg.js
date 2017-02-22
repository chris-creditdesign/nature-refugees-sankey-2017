import d3 from "../../d3-bundle";

function buildSvg() {
	this.svg = d3.select(this.target).append("svg")
		.attr("width", this.width + this.margin.left + this.margin.right)
		.attr("height", this.height + this.margin.top + this.margin.bottom)
		.append("g")
		.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

	return this;
}

export default buildSvg;