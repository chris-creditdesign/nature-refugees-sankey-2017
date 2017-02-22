import d3 from "./d3-bundle";

var margin = {
	top: 1,
	right: 10,
	bottom: 6,
	left: 10
};

var width = 630 - margin.left - margin.right;
var height = 800 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f");

var format = function(d) {
	return formatNumber(d) + " people";
};

var color = d3.scaleOrdinal(d3.schemeCategory20);

var svg = d3.select("#sankey-chart").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var sankey = d3.sankey()
	.nodeWidth(15)
	.nodePadding(10)
	.size([width, height]);

var path = sankey.link();

var graph = {"nodes": [], "links": []};

function onlyUnique (elem, index, array) {
	return array.indexOf(elem) === index;
}

function shortName(str) {
	var name = str.replace(/ .*/, "");
	var newName = name.substr(0, name.length - 2);
	return newName;
}

d3.csv("./data/refugee-data-edit.csv", function(error, data) {
  
	var nodes = [];
	
	data.forEach(function (elem, index, array) {
		if (parseInt(elem.countryflow_2016, 10) > 0) {
			nodes.push(elem.originregion_name + "-o" );
			nodes.push(elem.destinationregion_name + "-d");
			
			graph.links.push({
				"source": (elem.originregion_name + "-o"), 
				"target": (elem.destinationregion_name + "-d"), 
				"value": parseInt(elem.countryflow_2016, 10),
				"origin_name": (elem.origin_name + "-o"),
				"destination_name": (elem.destination_name + "-d")
			});
		}
	});

	var uniqueNames = nodes.filter(onlyUnique);
	
	graph.links.forEach(function(elem, index, array) {
		graph.links[index].source = uniqueNames.indexOf(graph.links[index].source);
		graph.links[index].target = uniqueNames.indexOf(graph.links[index].target);
	});
	
	uniqueNames.forEach(function(elem, index, array) {
		graph.nodes.push({"name": elem });
	});

	sankey.nodes(graph.nodes)
		.links(graph.links)
		.layout(32);

	var link = svg.append("g").selectAll(".link")
		.data(graph.links)
		.enter()
		.append("path")
		.attr("class", "link")
		.attr("d", path)
		.style("stroke-width", function(d) {
			return Math.max(1, d.dy); // Set the stroke to the dy value - making sure it is at least 1
		})
		.sort(function(a, b) {
			return b.dy - a.dy;
		}); // What does this do? 

	link.append("title")
		.text(function(d) {
			return shortName(d.origin_name) + " to " + shortName(d.destination_name) + "\n" + format(d.value);
		});

	var node = svg.append("g").selectAll(".node")
		.data(graph.nodes)
		.enter()
		.append("g")
		.attr("class", "node")
		.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});

	node.append("rect")
		.attr("height", function(d) {
			return d.dy;
		})
		.attr("width", sankey.nodeWidth())
		.style("fill", function(d) {
			d.color = color(shortName(d.name));
			return d.color;
		})
		.append("title")
		.text(function(d) {
			return shortName(d.name) + "\n" + format(d.value);
		});

	node.append("text")
		.attr("x", -6)
		.attr("y", function(d) {
			return d.dy / 2;
		})
		.attr("dy", "0.35em")
		.attr("text-anchor", "end")
		.text(function(d) {
			return shortName(d.name);
		})
		.filter(function(d) {
			return d.x < width / 2;
		})
		.attr("x", 6 + sankey.nodeWidth())
		.attr("text-anchor", "start");



	// console.log(graph);

});