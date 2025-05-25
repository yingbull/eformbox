/***********************************************************************
 *   LOCATION FUNCTION
 *   as per PM Sep 2017
 ************************************************************************/

function setLabLocation(i) {
	var address = ""; /* address = lab address */
	var lh = ""; /* lh = lab hours */

	switch (i) {
		default:
			address = "";
			lh = "";
			break;

		/* Kelowna */
		case "KelownaDowntown":
			address = "Downtown Kelowna \n105 - 537 Leon Avenue \nKelowna, BC \n250 763-4813 Fax: 250 862-2843 \nMon-Fri 8:00-5:00";
			break;

		case "KelownaMission":
			address = "Mission \n2 - 616 KLO Road \nKelowna, BC \n250 868-3965 Fax: 250 868-3974 \nMon-Fri 8:00-4:30";
			break;

		case "KelownaRutland":
			address = "Rutland, Plaza 33 Mall \n32 - 301 Hwy 33 W \nKelowna, BC \n250 765-8822 Fax: 250 765-4994 \nMon-Fri 8:00-4:30";
			break;

		case "KelownaWest":
			address = "2427 Main Street \nWest Kelowna, BC \n250 768-1778 Fax: 250 707-5167 \nMon-Fri 8:00-4:30";
			break;

		case "KelownaWinfield":
			address = "9966 Pollard Road \nWinfield, BC \n250 766-4443 Fax: 250 766-4467 \nMon-Fri 8:30-4:30, by appointment only";
			break;

		case "KelownaGlenmore":
			address = "Glenmore, Glenpark Village \n122 - 1940 Kane Road \nKelowna, BC \n250 762-2709 Fax: 250 868-2581 \nMon-Fri 7:30-4:00";
			break;

		case "KelownaCapri":
			address = "Capri Mall \n114 - 1835 Gordan Drive \nKelowna, BC \n250 762-5011 Fax: 250 762-5020 \nMon-Fri 8:00-4:30, by appointment only";
			break;

		/* Peachland */
		case "Peachland":
			address = "IGA Plaza \n26 - 5500 Clements Crescent \nPeachland, BC \n250 767-7694 Fax: 250 767-7695 \nMon-Fri 8:00-4:00 \nWed 07:30-1:00, by appointment only";
			break;

		/* Vernon */
		case "VernonDowntown":
			address = "Downtown Vernon \n101 - 3207 - 30th Avenue \nVernon, BC \n250 549-1207 Fax: 250 549-1259 \nMon-Fri 8:00-4:30, by appointment only";
			break;

		case "VernonRailway":
			address = "Railway Plaza \n106 - 4710 - 31st Street \nVernon, BC \n250 503-1914 Fax: 250 503-1924 \nMon-Fri 7:30-4:00";
			break;

		case "VernonLumby":
			address = "Lumby Health Unit \n2135 Norris Avenue \nLumby, BC \nTue only, 7:30-11:30, by appointment only";
			break;

		/* Penticton */
		case "PentictonDowntown":
			address = "Downtown Penticton \n302 - 383 Ellis Street \nPenticton, BC \n250 493-0715 Fax: 250 493-2714 \nMon-Fri 8:00-4:30";
			break;

		case "PentictonSomerset":
			address = "Somerset Plaza \n108 - 2504 Skaha Lake Road \nPenticton, BC \n250 493-7522 Fax: 250 492-2850 \nMon-Fri 7:30-4:00";
			break;

		/* Osoyoos */
		case "Osoyoos":
			address = "Lakeview Plaza \n2 - 9150 Main Street \nOsoyoos, BC \n250 495-2677 Fax: 250 495-2585 \nMon-Fri 8:00-3:00";
			break;
	}
	document.FormName.LabLocation.value = address;
}
