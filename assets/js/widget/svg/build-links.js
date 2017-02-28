import d3 from "../../d3-bundle";
import shortName from "../helpers/short-name";
import format from "../helpers/format";

function buildLinks() {
	var that = this;
	var filterdLinks;
	var notSelectedColor = "#fff";

	function isSelected (elem) {
		if (that.selectedCountry.slice(-2) === "-o") {
			return elem.origin_name === that.selectedCountry;
		} else if (that.selectedCountry.slice(-2) === "-d") {
			return elem.destination_name === that.selectedCountry;
		} else {
			return true;
		}
	}

	function isTopTen (elem) {
		return that.topLinks.indexOf(elem.id) > -1;
	}

	function shouldHaveGradient () {
		return that.selectedCountry.length > 0 || that.showTopTen;
	}

	function buildGradient (d) {
		return "url(#" + shortName(d.originregion_name).toLowerCase().replace(/\s+/g, '-') + "-" + shortName(d.destinationregion_name).toLowerCase().replace(/\s+/g, '-') + ")";
	}

	if (this.showTopTen) {
		filterdLinks = this.graph.links.filter(isTopTen);
	} else {
		filterdLinks = this.graph.links.filter(isSelected);
	}

	if (!this.g_links) {
		// Only make the group if it doesn't already exist
		this.g_links = this.svg_g.append("g")
			.attr("class", "links");

	}

	this.links = this.g_links
		.selectAll("path")
		.data(filterdLinks);
	
	// Enter	
	this.links.enter()
		.append("path")
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			return shouldHaveGradient() ?  buildGradient(d) : notSelectedColor;
		})
		.attr("class", () => {
			return shouldHaveGradient() ? "link gradient" : "link";
		})
		.on("mouseover", function(d) {
			that.buildTooltip(d, this);
		})
		.on("mouseout", function() {
			d3.select("#widget-tooltip")
				.classed("hidden", true);
		});

	// Update
	this.links
		.attr("d", this.path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.style("stroke", (d) => {
			return shouldHaveGradient() ?  buildGradient(d) : notSelectedColor;
		})
		.attr("class", () => {
			return shouldHaveGradient() ? "link gradient" : "link";
		})
		.on("mouseover", function(d) {
			that.buildTooltip(d, this);
		})
		.on("mouseout", function() {
			d3.select("#widget-tooltip")
				.classed("hidden", true);
		});

	// Exit
	this.links
		.exit()
		.remove();

	return this;
}

export default buildLinks;