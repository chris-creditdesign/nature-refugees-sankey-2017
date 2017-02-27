import d3 from "./d3-bundle";
import Widget from "./widget/widget";

d3.csv("./data/refugee-data-edit.csv", function(error, data) {
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
		var width = document.getElementsByClassName("section")[0].getBoundingClientRect().width;

		var myWidget = new Widget({
			target: "#sankey-chart",
			width: width,
			data: data
		});

		myWidget.buildSvg()
			.buildData()
			.buildSankey()
			.buildDefs()
			.buildLinks()
			.buildNodes()
			.buildText()
			.buildKey();

		if (document.getElementsByClassName("section")[0].getBoundingClientRect().width !== width) {
			width = document.getElementsByClassName("section")[0].getBoundingClientRect().width;
			myWidget.resize(width);
		}


		d3.select(window).on("resize", function() {

			didResize = true;

			/* Throttle the resize */
			setTimeout(function () {
				if (didResize) {
					width = document.getElementsByClassName("section")[0].getBoundingClientRect().width;
					myWidget.resize(width);
					didResize = false;
				}
			}, 60);

		});

	}

});