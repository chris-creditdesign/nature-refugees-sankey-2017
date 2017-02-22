function shortName(str) {
	var newName = str.substr(0, str.length - 2);
	return newName;
}

export default shortName;