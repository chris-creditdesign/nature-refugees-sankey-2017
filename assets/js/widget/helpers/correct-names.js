function correctNames(str) {
	switch (str) {
		case "NorthAmerica":
			return "North America";
			break;
		case "FmrUSSR":
			return "Former Soviet Union";
			break;
		case "WestAsia":
			return "West Asia";
			break;
		case "SouthAsia":
			return "South Asia";
			break;
		case "EastAsia":
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
		case "other Africa":
			return "Other Africa";
			break;
		case "other Fmr USSR":
			return "Other former Soviet Union";
			break;
		case "Palestina":
			return "Palestinian territories";
			break;
		case "stateless":
			return "Stateless";
			break;
		case "other West Asia":
			return "Other West Asia";
			break;
		case "other South Asia":
			return "Other South Asia";
			break;
		case "other Southeast Asia":
			return "Other Southeast Asia";
			break;
		case "other Oceania":
			return "Other Oceania";
			break;
		case "other Latin America":
			return "Other Latin America";
			break;
		default:
			return str;
	}
}

export default correctNames;