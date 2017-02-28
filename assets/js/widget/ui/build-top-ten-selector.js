import d3 from "../../d3-bundle";

function buildTopTenSelector() {

	this.topTenCheckbox = d3.select("#widget-top-10-checkbox")
		.on("change", () => {
			this.updateAll();
		});


	return this;
}

export default buildTopTenSelector;