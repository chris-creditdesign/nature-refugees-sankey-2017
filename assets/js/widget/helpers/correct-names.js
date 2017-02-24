function correctNames(str) {
	switch (str) {
		case "FmrUSSR":
			return "Former Soviet Union";
			break;
		case "WestAsia":
			return "West Asia";
			break;
		case "SouthAsia":
			return "South Asia";
			break;
		case "East Asia":
			return "East Asia";
			break;
		case "SoutheastAsia":
			return "Southeast Asia";
			break;
		case "LatinAmerica":
			return "Latin America";
			break;
		case "Ivory Coast":
			return "Côte d'Ivoire";
			break;
		case "DR Congo":
			return "Democratic Republic of the Congo";
			break;
		case "other Fmr USSR":
			return "Other former Soviet Union";
			break;
		case "Palestina":
			return "Palestinian territories";
			break;
		default:
			return str;
	}
}

export default correctNames;