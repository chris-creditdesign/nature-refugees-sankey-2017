import d3 from "../d3-bundle";
import onlyUnique from "./helpers/only-unique";
import shortName from "./helpers/short-name";

function buildData() {
	
	this.graph = {"nodes": [], "links": []};
	
	var nodes = [];
	var uniqueNames;

	this.data.forEach((elem, index, array) => {
		if (parseInt(elem.countryflow_2016, 10) > 0) {
			nodes.push(elem.origin_name + "-o" );
			nodes.push(elem.destination_name + "-d");
			
			this.graph.links.push({
				"source": (elem.origin_name + "-o"), 
				"target": (elem.destination_name + "-d"), 
				

				"origin_name": (elem.origin_name + "-o"),
				"destination_name": (elem.destination_name + "-d"),

				"originregion_name": (elem.originregion_name + "-o"), 
				"destinationregion_name": (elem.destinationregion_name + "-d"),

				"value": parseInt(elem.countryflow_2016, 10)
			});

			this.origins.push((elem.originregion_name + "-o"));
			this.destins.push((elem.destinationregion_name + "-d"));
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