import d3 from "./d3-bundle";
import Widget from "./widget/widget";

d3.csv("./data/refugee-data-edit.csv", function(error, data) {
	if (error) {
		console.log("error: " + error);
	} else {
		
		var didResize = false;

		var myWidget = new Widget({
			target: "#sankey-chart",
			width: d3.select("#content").node().clientWidth,
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

		d3.select(window).on("resize", function() {

			didResize = true;

			/* Throttle the resize */
			setTimeout(function () {
				if (didResize) {
					myWidget.removeSvg()
						.updateProps({
							width: d3.select("#content").node().clientWidth
						})
						.buildSvg()
						.buildSankey()
						.buildDefs()
						.buildLinks()
						.buildNodes()
						.buildText();

					didResize = false;
				}
			}, 60);

		});

	}

});