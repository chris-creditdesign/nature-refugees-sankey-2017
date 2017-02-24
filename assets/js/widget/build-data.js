import d3 from "../d3-bundle";
import onlyUnique from "./helpers/only-unique";
import shortName from "./helpers/short-name";
import correctNames from "./helpers/correct-names";

function buildData() {
	
	this.graph = {"nodes": [], "links": []};
	
	var nodes = [];
	var uniqueNames;

	this.data.forEach((elem, index, array) => {
		if (parseInt(elem.countryflow_2016, 10) > 0) {
			nodes.push(correctNames(elem.origin_name) + "-o" );
			nodes.push(correctNames(elem.destination_name) + "-d");
			
			this.graph.links.push({
				"source": (correctNames(elem.origin_name) + "-o"), 
				"target": (correctNames(elem.destination_name) + "-d"), 
				

				"origin_name": (correctNames(elem.origin_name) + "-o"),
				"destination_name": (correctNames(elem.destination_name) + "-d"),

				"originregion_name": (correctNames(elem.originregion_name) + "-o"), 
				"destinationregion_name": (correctNames(elem.destinationregion_name) + "-d"),

				"value": parseInt(elem.countryflow_2016, 10)
			});

			this.origins.push((correctNames(elem.originregion_name) + "-o"));
			this.destins.push((correctNames(elem.destinationregion_name) + "-d"));
		}
	});

	uniqueNames = nodes.filter(onlyUnique);

	this.origins = this.origins.filter(onlyUnique);
	this.destins = this.destins.filter(onlyUnique);
	this.continents = this.origins.concat(this.destins).map(shortName).filter(onlyUnique);
	
	this.graph.links.forEach((elem, index, array) => {
		this.graph.links[index].source = uniqueNames.indexOf(this.graph.links[index].source);
		this.graph.links[index].target = uniqueNames.indexOf(this.graph.links[index].target);
	});
	
	uniqueNames.forEach((elem, index, array) => {
		this.graph.nodes.push({"name": elem });
	});

	return this;
}

export default buildData;