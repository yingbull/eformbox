/***********************************************************************
*   LOCATION FUNCTION
*   PM Sep 2017
************************************************************************/

function SetLocation(i) {
	switch(i) {
		default:
		LocationSite = "";
		CopyFax = "";
		break;

		case "ARH":
		LocationSite = 'Abbotsford Regional Hospital, 32900 Marshall Rd, Abbotsford \nPh: 604-851-4700; Fax: 604-851-4904';
		CopyFax = '604-851-4904';
		break;

		case "BCWH":
		LocationSite = "BC Women's and Children's Hospital, 4500 Oak St, Vancouver \nPh: 604-875-2424; Fax: 604-875-2367";
		CopyFax = '604-875-2367';
		break;

		case "JPOCSC":
		LocationSite = 'Jim Pattison Outpatient Care and Surgical Centre, 9750 140th St, Surrey \nPh: 604-588-3308 ext 763926; Fax: 604-582-3766';
		CopyFax = '604-582-3766';
		break;

		case "LGH":
		LocationSite = "Lion's Gate Hospital, 231 15th St E, North Vancouver \nPh: 604-984-5780; Fax: 604-984-5781";
		CopyFax = '604-984-5781';
		break;

		case "RCH":
		LocationSite = 'Royal Columbian Hospital, 330 Columbia St E, New Westminster \nPh: 604-523-8810; Fax: 604-523-8811';
		CopyFax = '604-523-8811';
		break;

		case "SPH":
		LocationSite = "St. Paul's Hospital, 1081 Burrard St, Vancouver \nPh: 604-806-8008; Fax: 604-806-8075";
		CopyFax = '604-806-8075';
		break;

		case "VGH":
		LocationSite = 'Vancouver General Hospital, 899 12th Ave W, Vancouver \nPh: 604-875-4611; Fax: 604-875-5009';
		CopyFax = '604-875-5009';
		break;

		case "MedRay":
		LocationSite = 'MedRay, Suite 100 - 3001 Gordon Ave, Coquitlam \nPh: 604-941-7611; Fax: 604-942-4612';
		CopyFax = '604-942-4612';
		break;

		case "BrookeBurnaby":
		LocationSite = 'Brooke Radiology, Suite 100 - 4980 Kingsway, Burnaby \nPh: 604-434-1345; Fax: 604-604-435-1309';
		CopyFax = '604-435-1309';
		break;

		case "GreigVictoria":
		LocationSite = 'Greig Associates - Victoria, 5752 Victoria Dr (42nd Ave), Vancouver \nPh: 604-321-6769; Fax: 604-327-6767';
		CopyFax = '604-327-6767';
		break;

		case "GreigOakridge":
		LocationSite = 'Greig Associates - Oakridge, 219-650 41st Ave W, Vancouver \nPh: 604-261-3177; Fax: 604-264-4815';
		CopyFax = '604-264-4815';
		break;

		case "NorthShoreImaging":
		LocationSite = 'North Shore Imaging, 139 West 16th St, North Vancouver \nPh: 604-987-9729; Fax: 604-984-8395';
		CopyFax = '604-984-8395';
		break;
		}

	document.FormName.LocationSite.value = LocationSite;
	document.FormName.CopyFax.value = CopyFax
	}