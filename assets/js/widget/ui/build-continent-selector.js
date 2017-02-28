import d3 from "../../d3-bundle";

function buildContinentSelector() {
	var that = this;

	this.topContinentCheckbox = d3.select("#widget-continent-checkbox")
		.on("change", function() {
			that.groupByContinents = d3.select(this).property("checked");
			that.buildSankey()
				.updateAll();
		});


	return this;
}

export default buildContinentSelector;