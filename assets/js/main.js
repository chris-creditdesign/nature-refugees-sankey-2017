import d3 from "./d3-bundle";
import Widget from "./widget/widget";

var localUrl = "./data/refugee-data-edit.csv";
var polopolyUrl = "http://www.nature.com/widget_assets_polopoly/refugee-data-edit.csv";

function getWidth() {
	return document.getElementById("content").getBoundingClientRect().width;
}

d3.csv(localUrl, function(error, data) {
	if (error) {
		d3.select("#outerwrapper")
			.style("display", "none");

		d3.select("#status-message")
			.style("display", "block");

	} else {
		d3.select("#outerwrapper")
			.style("display", "block");

		d3.select("#status-message")
			.style("display", "none");
		
		var didResize = false;
		var width = getWidth();

		var myWidget = new Widget({
			target: "#sankey-chart",
			width: width,
			data: data,
			margin: {'top': 20, 'left': 10, 'bottom': 10, 'right': 10},
			groupByContinents: false
		});

		myWidget.buildSvg()
			.buildData()
			.buildSankey()
			.buildDefs()
			.buildLinks()
			.buildNodes()
			.buildText()
			.buildLabels()
			.buildKey();

		if (getWidth() !== width) {
			width = getWidth();
			myWidget.resize(width);
		}


		d3.select(window).on("resize", function() {

			didResize = true;

			/* Throttle the resize */
			setTimeout(function () {
				if (didResize) {
					width = getWidth();
					myWidget.resize(width);
					didResize = false;
				}
			}, 60);

		});

	}

});