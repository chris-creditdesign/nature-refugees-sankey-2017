import {format} from "d3-format";
import {scaleOrdinal, schemeCategory10} from "d3-scale";
import {select} from "d3-selection";
import {sankey} from "d3-sankey";
import {csv} from "d3-request";
import {rgb} from "d3-color";
import {nest} from "d3-collection";

export default {
	format: format,
	scaleOrdinal: scaleOrdinal,
	schemeCategory10: schemeCategory10,
	select: select,
	sankey: sankey,
	rgb: rgb,
	csv: csv,
	nest: nest
};
