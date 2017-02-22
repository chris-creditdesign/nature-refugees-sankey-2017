import buildSvg from './svg/build-svg';
import buildData from "./build-data";
import buildSankey from "./sankey/build-sankey";
import buildLinks from "./svg/build-links";
import buildNodes from "./svg/build-nodes";
import buildText from "./svg/build-text";

function Widget(data) {
	this.totalWidth = data.width ? data.width : 630;
	this.totalHeight = data.height ? data.height : 2500;
	this.margin = data.margin ? data.margin : {'top': 0, 'left': 10, 'bottom': 10, 'right': 10};
	this.width = this.totalWidth - this.margin.left - this.margin.right;
	this.height = this.totalHeight - this.margin.top - this.margin.bottom;
	this.data = data.data;
	this.target = data.target ? data.target : "body";
}

Widget.prototype.buildSvg = buildSvg;
Widget.prototype.buildData = buildData;
Widget.prototype.buildSankey = buildSankey;
Widget.prototype.buildLinks = buildLinks;
Widget.prototype.buildNodes = buildNodes;
Widget.prototype.buildText = buildText;

export default Widget;