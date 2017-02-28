function resize(width) {
	this.removeSvg()
		.updateProps({
			width: width
		})
		.buildSvg()
		.buildSankey()
		.buildDefs()
		.buildLinks()
		.buildNodes()
		.buildText()
		.buildLabels();

	return this;
}

export default resize;