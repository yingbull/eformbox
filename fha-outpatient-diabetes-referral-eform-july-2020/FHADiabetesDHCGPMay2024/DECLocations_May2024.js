/***********************************************************************
 *   LOCATION FUNCTION
 *   PM Apr 24
 ************************************************************************/

function SetLocation(i) {
	switch (i) {
		default:
			LocationSite = "";
			document.getElementById("LocationSite").placeholder = "Choose a location";
			document.getElementById("LocationSite").style.background = "yellow";
			subject = "";
			break;

		case "ARHCC_Adult":
			LocationSite = "Abbotsford Diabetes Health Centre - Adult \nPhone: 604-851-4700, Ext. 646238 \nFax: 604-851-4774";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "ARHCC_Paed":
			LocationSite = "Abbotsford Diabetes Health Centre - Pediatric \nPhone: 604-851-4700, Ext. 646267 \nFax: 604-851-4790";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "ARHCC_MICY":
			LocationSite = "Abbotsford Diabetes & Pregnancy Program \nPhone: 604-851-4700, Ext. 646348 \nFax: 604-851-4813";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Chilliwack":
			LocationSite = "Chilliwack Diabetes Health Centre \nPhone: 604-702-4766 \nFax: 604-702-2880";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Fraser_Canyon":
			LocationSite = "Fraser Canyon Hospital (Hope) \nPhone: 604-702-4766 \nFax: 604-702-2880 \nSatellite Clinic from Chilliwack";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Mission":
			LocationSite = "Mission Diabetes Health Centre\nPhone: 604-814-5145\nFax: 604-814-5518";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Burnaby":
			LocationSite = "Burnaby Diabetes Health Centre\nPhone: 604-412-6139\nFax: 604-412-6233";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Burnaby_Pregnancy":
			LocationSite = "Burnaby Hospital and Pregnancy Program c/o Maternity Outpatient Clinic \nPhone: 604-434-4211 ext 533361\nFax: 604-412-6646";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Tri_Cities":
			LocationSite = "Tri-Cities Diabetes Health Centre\nPhone: 604-949-7771\nFax: 604-949-7772";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "New_Westminster":
			LocationSite = "New Westminster Diabetes Health Centre \nPhone: 604-523-8800 \nFax: 604-523-8801";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Ridge_Meadows":
			LocationSite = "Ridge Meadows Diabetes Health Centre \nPhone: 604-476-7056\nFax: 604-476-7084";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "RCH_DM_Pregnancy":
			LocationSite = "Royal Columbian Diabetes & Pregnancy Program \nPhone: 604-520-4473 \nFax: 604-520-1132";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Delta":
			LocationSite = "Delta Diabetes Health Centre \nPhone: 604-952-3558\nFax: 604-940-8944";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Langley":
			LocationSite = "Langley Diabetes Health Centre \nPhone: 604-539-4391\nFax: 604-532-7048";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Pattison_Adult":
			LocationSite = "Jim Pattison Diabetes Health Centre \nPhone: 604-582-4583 Fax: 604-582-4590 \nIncludes South Asian Diabetes Services";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Pattison_Pregnancy":
			LocationSite = "Jim Pattison Diabetes & Pregnancy Program \nPhone: 604-582-4558\nFax: 604-582-3775";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "White_Rock_S_Surrey_Adult":
			LocationSite = "White Rock Diabetes Health Centre \nPhone: 604-541-7162\nFax: 604-538-9809";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "Surrey_Pediatric":
			LocationSite = "Surrey Memorial Hospital - Pediatric Diabetes Clinic\nPhone: 604-587-3929\nFax: 604-585-5968";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;

		case "South_Asian":
			LocationSite = "South Asian Diabetes Services - in Jim Pattison DHC \nPhone: 604-582-4583 \nFax: 604-582-4590";
			document.getElementById("LocationSite").style.background = "transparent";
			subject = i;
			break;
	}

	document.FormName.LocationSite.value = LocationSite;
	document.FormName.subject.value = subject;
}
