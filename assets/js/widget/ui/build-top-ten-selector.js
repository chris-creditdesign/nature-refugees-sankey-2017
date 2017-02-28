import d3 from "../../d3-bundle";

function buildTopTenSelector() {
	var that = this;

	this.topTenCheckbox = d3.select("#widget-checkbox")
		.on("change", function() {
			// that.showTopTen = this.checked;

			that.updateAll();
		});


	return this;
}

export default buildTopTenSelector;