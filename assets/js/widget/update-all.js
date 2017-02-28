function updateAll() {

	this.showTopTen = this.topTenCheckbox.property("checked");

	if (this.showTopTen) {
		this.selectedCountry = "";
	}
	
	this.buildLinks();

	return this;
}

export default updateAll;