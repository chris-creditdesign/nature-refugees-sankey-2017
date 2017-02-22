import d3 from "./d3-bundle";
import Widget from "./widget/widget";

d3.csv("./data/refugee-data-edit.csv", function(error, data) {
	if (error) {
		console.log("error: " + error);
	} else {
		var myWidget = new Widget({
			target: "#sankey-chart",
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

	}

});