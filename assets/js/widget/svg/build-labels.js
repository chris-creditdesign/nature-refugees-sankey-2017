import d3 from "../../d3-bundle";

function buildLabels() {
	var label_width = {
		left: 0,
		right: 0
	};

	var triangle = d3.symbol().type(d3.symbolTriangle).size(30);

	this.g_labels = this.svg_g.append("g")
			.attr("class", "labels");

	this.g_labels.append("text")
		.attr("x", 0)
		.attr("y", 0)
		.attr("dy", "-0.5em")
		.attr("text-anchor", "start")
		.text("ORIGIN")
		.select(function() {
			label_width.left = this.getBBox().width;
		});

	this.g_labels.append("text")
		.attr("x", this.width)
		.attr("y", 0)
		.attr("dy", "-0.5em")
		.attr("text-anchor", "end")
		.text("DESTINATION")
		.select(function() {
			label_width.right = this.getBBox().width;
		});

	this.g_labels.append("line")
		.style("stroke", "#ffffff")
		.attr("x1", (label_width.left + 10))
		.attr("y1", (this.margin.top * -0.6))
		.attr("x2", (this.width - (label_width.right + 10)))
		.attr("y2", (this.margin.top * -0.6));

	this.g_labels.append("path")
		.attr("d", triangle())
		.attr("fill", "#ffffff")
		.attr("transform", `translate(${this.width - (label_width.right + 10)},${this.margin.top * -0.6}) rotate(90 0 0)`);

	return this;
}

export default buildLabels;