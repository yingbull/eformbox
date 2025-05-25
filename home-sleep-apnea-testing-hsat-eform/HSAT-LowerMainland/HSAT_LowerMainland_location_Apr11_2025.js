/****************************
Chrome Compatible Location drop-down menu as per P Mehta
****************************/
function SetLocation(i) {
	switch (i) {
		case "blank":
			web = "";
			LocationName = "";
			subject = "";
			address = "";
			eMail = "";
			HSAT_phone = "";
			HSAT_fax = "";
			break;

		case "CanSleep_central":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep";
			subject = "CanSleep Central";
			address = "CanSleep Central Intake";
			eMail = "info@cansleep.ca";
			HSAT_phone = "1-844-753-3740";
			HSAT_fax = "1-844-753-3750";
			break;

		case "ClinicalSleepSolutions_central":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions central";
			address = "All Locations/Central Repository";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "1(800) 732-7985";
			HSAT_fax = "(604) 800-8135";
			break;

		case "CPAP_Pros_central":
			web = "https://cpappros.ca/";
			LocationName = "CPAP Pros - Central";
			subject = "CPAP Pros central";
			address = "405-625 5th Ave, New Westminster";
			eMail = "info@cpappros";
			HSAT_phone = "604-229-1630";
			HSAT_fax = "1-833-490-1315";
			break;

		case "Mainland_VCH_FHA":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep Clinic";
			subject = "Mainland FHA-VCH";
			address = "Fraser Health, Vancouver Coastal Health";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-498-2145";
			HSAT_fax = "604-498-2165";
			break;

		case "MedPro_VancouverValley":
			web = "http://www.medprorespiratory.com/";
			LocationName = "MedPro Respiratory Care";
			subject = "MedPro Van Fraser Valley";
			address = "Vancouver / Fraser Valley";
			eMail = "HSAT@medprorespiratory.com";
			HSAT_phone = "1-888-310-1444";
			HSAT_fax = "1-888-310-1441";
			break;

		case "Mainland_IHA":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep Clinic";
			subject = "Mainland IHA";
			address = "Interior Health";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "236-426-4021";
			HSAT_fax = "236-426-4046";
			break;

		case "MedPro_Interior":
			web = "http://www.medprorespiratory.com/";
			LocationName = "MedPro Respiratory Care";
			subject = "MedPro Interior";
			address = "BC Interior";
			eMail = "HSAT@medprorespiratory.com";
			HSAT_phone = "1-888-310-1444";
			HSAT_fax = "1-888-310-1441";
			break;

		// end of central intake cases (CanSleep, Clinical Sleep Solutions, CPAP-Pro, Mainland, MedPro)

		case "CanSleep_NW":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep New Westminster";
			subject = "CanSleep NW";
			address = "409-301 E Columbia St, New West";
			eMail = "info@cansleep.ca";
			HSAT_phone = "604-544-8744";
			HSAT_fax = "604-544-8745";
			break;

		case "CPAP_Pros_NW":
			web = "https://cpappros.ca/";
			LocationName = "CPAP Pros - New Westminster";
			subject = "CPAP Pros NW";
			address = "405-625 5th Ave, New Westminster";
			eMail = "info@cpappros";
			HSAT_phone = "604-229-1630";
			HSAT_fax = "1-833-490-1315";
			break;

		case "Advanced_Sleep_PoCo":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep - PoCo";
			subject = "Advanced Sleep PoCo";
			address = "A113-2099 Lougheed Hwy, Pt Coquitlam";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-2056";
			HSAT_fax = "844-487-5557";
			break;

		case "CanSleep_Coq":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep Coquitlam";
			subject = "CanSleep NW";
			address = "101–2963 Glen Dr, Coquitlam";
			eMail = "info@cansleep.ca";
			HSAT_phone = "604-468-5854";
			HSAT_fax = "604-468-5858";
			break;

		case "CanSleep_SoCoq":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep MedWeight";
			subject = "CanSleep MedWeight";
			address = "1550 United Blvd, Coquitlam";
			eMail = "info@cansleep.ca";
			HSAT_phone = "844-753-3740";
			HSAT_fax = "844-753-3750";
			break;

		case "Coastal_Sleep_Coq":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Coquitlam";
			subject = "Coastal Sleep Coquitlam";
			address = "602-2950 Glen Dr, Coquitlam";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-939-3270";
			HSAT_fax = "604-939-3260";
			break;

		case "IRS_Coq":
			web = "https://irscanada.ca/";
			LocationName = "IRS - Coquitlam";
			subject = "IRS Coquitlam";
			address = "101-2255 Elgin Ave, Port Coquitlam";
			eMail = "referrals@irscanada.ca";
			HSAT_phone = "877-236-2994";
			HSAT_fax = "call for appt";
			break;

		case "RHS_Coq":
			web = "https://rhscanada.com/";
			LocationName = "Respiratory Homecare Solutions";
			subject = "RHS Coquitlam";
			address = "211-3030 Lincoln Ave, Coquitlam";
			eMail = "serviceforlife@rhscanada.com";
			document.getElementById("HSAT_name").title = "now VitalAire";
			HSAT_phone = "604-630-1212";
			HSAT_fax = "604-630-0100";
			break;

		case "CanSleep_Burnaby":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep Burnaby";
			subject = "CanSleep Burnaby";
			address = "420 Beresford St, Burnaby";
			eMail = "info@cansleep.ca";
			HSAT_phone = "778-379-6570";
			HSAT_fax = "844-753-3750";
			break;

		case "ClinicalSleepSolutions_Burnaby":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions Burnaby";
			address = "115-5050 Kingsway, Burnaby";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-432-9271";
			HSAT_fax = "604-432-9471";
			break;

		case "Coastal_Sleep_Burnaby":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Burnaby";
			subject = "Coastal Sleep Burnaby";
			address = "601-7300 Edmonds St, Burnaby";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-553-7325";
			HSAT_fax = "604-553-7355";
			break;

		case "Mainland_Burnaby":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep Clinic";
			subject = "Mainland Burnaby";
			address = "103-7885 6th St, Burnaby";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-544-5068";
			HSAT_fax = "604-544-5064";
			break;

		case "MedSleep_Burnaby":
			web = "https://medsleep.com/locations/british-columbia/burnaby/";
			LocationName = "MedSleep";
			subject = "MedSleep Burnaby";
			address = "601-7300 Edmonds St, Burnaby";
			eMail = "vancouver@medsleep.com";
			HSAT_phone = "877-855-7431-1";
			HSAT_fax = "844-652-7386";
			break;

		case "RHS_Burnaby":
			web = "https://rhscanada.com/";
			LocationName = "Respiratory Homecare Solutions";
			subject = "RHS Burnaby";
			address = "3959 Kingsway, Burnaby";
			eMail = "serviceforlife@rhscanada.com";
			HSAT_phone = "800-839-9046";
			HSAT_fax = "866-812-0202";
			document.getElementById("HSAT_name").title = "now VitalAire";
			break;

		case "Sleep_Well_Bby_HighGate":
			web = "https://sleepwellbc.ca/";
			LocationName = "Sleep Well - Highgate";
			subject = "Sleep Well Highgate Burnaby";
			address = "202-7315 Edmonds St, Burnaby";
			eMail = "info@sleepwellbc.ca";
			HSAT_phone = "604-724-9284";
			HSAT_fax = "604-357-1700";
			break;

		case "Sleep_Well_Bby_Imperial":
			web = "https://sleepwellbc.ca/";
			LocationName = "Sleep Well - Imperial";
			subject = "Sleep Well Imperial Burnaby";
			address = "4648 Imperial St, Burnaby";
			eMail = "info@sleepwellbc.ca";
			HSAT_phone = "604-724-9284";
			HSAT_fax = "604-357-1700";
			break;

		case "SnoreMD_Burnaby":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Burnaby";
			subject = "SnoreMD Burnaby";
			address = "125-6540 Hastings St, Burnaby";
			eMail = "info@SnoreMDcanada.ca";
			HSAT_phone = "236-454-6450";
			HSAT_fax = "236-454-6450";
			break;

		case "CanSleep_Guildford":
			web = "https://cansleep.ca/";
			LocationName = "CanSleep Guildford";
			subject = "CanSleep Guildford";
			address = "106-14888 104th St, Surrey";
			eMail = "info@cansleep.ca";
			HSAT_phone = "778-293-4450";
			HSAT_fax = "844-753-3750";
			break;

		case "ClinicalSleepSolutions_WhiteRock":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions White Rock";
			address = "107-1461 Johnston Rd, White Rock";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-542-2276";
			HSAT_fax = "604-542-2216";
			break;

		case "Coastal_Sleep_Surrey":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Surrey";
			subject = "Coastal Sleep Surrey";
			address = "602-13737 96th Ave, Surrey";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-590-0100";
			HSAT_fax = "604-590-0199";
			break;

		case "Coastal_Sleep_WhiteRock":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - White Rock";
			subject = "Coastal Sleep White Rock";
			address = "90-1959 152 St, White Rock";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-385-1200";
			HSAT_fax = "604-385-1221";
			break;

		case "iScope_Surrey":
			web = "https://myiscope.ca/";
			LocationName = "iScope Concussion and Pain Clinic";
			subject = "iScope Surrey";
			address = "301-9639 137A Ave, Surrey";
			eMail = "info@myiscope.ca";
			HSAT_phone = "604-900-7007";
			HSAT_fax = "604-900-7676";
			break;

		case "Mainland_Cloverdale":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep - Cloverdale";
			subject = "Mainland Cloverdale";
			address = "102-17660 65A Ave, Surrey";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-372-1455";
			HSAT_fax = "604-544-5064";
			break;

		case "Mainland_SurreyCentral":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep - Surrey Central";
			subject = "Mainland Surrey Central";
			address = "107-13737 96 Ave, Surrey";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-498-2145";
			HSAT_fax = "604-544-5064";
			break;

		case "RHS_South_Surrey":
			web = "https://rhscanada.com/";
			LocationName = "Respiratory Homecare Solutions";
			subject = "RHS South Surrey";
			address = "202-15388 24th Ave, South Surrey";
			eMail = "serviceforlife@rhscanada.com";
			document.getElementById("HSAT_name").title = "now VitalAire";
			HSAT_phone = "604-630-1212";
			HSAT_fax = "604-630-0100";
			break;

		case "RHS_Surrey":
			web = "https://rhscanada.com/";
			LocationName = "Respiratory Homecare Solutions";
			subject = "RHS Surrey";
			address = "15149 Fraser Hwy, Surrey";
			eMail = "serviceforlife@rhscanada.com";
			document.getElementById("HSAT_name").title = "now VitalAire";
			HSAT_phone = "604-630-1212";
			HSAT_fax = "604-630-0100";
			break;

		case "MRG_Surrey":
			web = "https://www.maplerespiratory.ca/";
			LocationName = "Maple Respiratory Group";
			subject = "MRG Surrey";
			address = "Room B, 15149 Fraser Hwy, Surrey";
			eMail = "info@maplerespiratory.com";
			HSAT_phone = "1-877-674-4778";
			HSAT_fax = "N/A";
			break;

		case "Sleep_Better_Surrey":
			web = "https://sleepbetterlivebetter.ca/";
			LocationName = "Sleep Better Live Better";
			subject = "Sleep Better Surrey";
			address = "503-13737 96th Ave, Surrey";
			eMail = "infosurrey@sleepbetterlivebetter.ca";
			HSAT_phone = "604-587-5337";
			HSAT_fax = "604-587-5336";
			break;

		case "Sleep_Well_Surrey":
			web = "https://sleepwellbc.ca/";
			LocationName = "Sleep Well Respiratory Care - KGB";
			subject = "Sleep Well Surrey";
			address = "1000-10355 152nd St, Surrey";
			eMail = "info@sleepwellbc.ca";
			HSAT_phone = "604-724-9284";
			HSAT_fax = "604-357-1700";
			break;

		case "VitalAire_Surrey_North":
			web = "https://www.vitalaire.ca/";
			LocationName = "VitalAire - Surrey North";
			subject = "VitalAire North Surrey";
			address = "114-13710 94 Ave, Surrey";
			eMail = "vahomecare.BC@airliquide.com";
			HSAT_phone = "604-881-0214";
			HSAT_fax = "866-812-0202";
			break;

		case "VitalAire_Surrey_South":
			web = "https://www.vitalaire.ca/";
			LocationName = "VitalAire - South Surrey";
			subject = "VitalAire Surrey South";
			address = "212-5460 152nd St, Surrey";
			eMail = "vahomecare.BC@airliquide.com";
			HSAT_phone = "800-637-0202";
			HSAT_fax = "866-812-0202";
			break;

		case "Bayside_Delta":
			web = "https://baysidesleepsolutions.com/";
			LocationName = "Bayside Sleep Solutions";
			subject = "Bayside Surrey South";
			address = "5-1363 56th St, Delta";
			eMail = "N/A";
			HSAT_phone = "604-227-5355";
			HSAT_fax = "call for appt";
			break;

		case "SnoreMD_Ladner":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Ladner";
			subject = "SnoreMD Ladner";
			address = "5249 Ladner Trunk Rd, Delta";
			eMail = "info@SnoreMDcanada.ca";
			HSAT_phone = "778-620-2235";
			HSAT_fax = "778-620-2235";
			break;

		case "Advanced_Sleep_Langley":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep";
			subject = "Advanced Sleep Langley";
			address = "20627 Fraser Hwy, Langley";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-1045";
			HSAT_fax = "844-487-5557";
			break;

		case "Coastal_Sleep_Langley":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Langley";
			subject = "Coastal Sleep Langley";
			address = "109-22314 Fraser Hwy, Langley";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-427-0307";
			HSAT_fax = "604-427-0327";
			break;

		case "IRS_Langley":
			web = "https://irscanada.ca/";
			LocationName = "IRS - Langley";
			subject = "IRS Langley";
			address = "104-5503 206th St, Langley";
			eMail = "referrals@irscanada.ca";
			HSAT_phone = "604-539-9555";
			HSAT_fax = "866-888-6011";
			break;

		case "Mainland_Langley":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep - Langley";
			subject = "Mainland Langley";
			address = "4-22323 48 Ave, Langley";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-370-6775";
			HSAT_fax = "604-544-5064";
			break;

		case "SnoreMD_Langley":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Langley";
			subject = "SnoreMD Langley";
			address = "500-22259 48th Ave, Langley";
			eMail = "info@SnoreMDcanada.ca";
			HSAT_phone = "778-621-2011";
			HSAT_fax = "778-621-2011";
			break;

		case "SnoreMD_Langley_WalnutGrove":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Langley Walnut Grove";
			subject = "SnoreMD Walnut Grove";
			address = "C105-20158 88th Ave, Langley";
			eMail = "info@SnoreMDcanada.ca";
			HSAT_phone = "778-621-2162";
			HSAT_fax = "778-621-2162";
			break;

		case "Advanced_Sleep_CoalHarbour":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep - Coal Harbour";
			subject = "Advanced Sleep Coal Harbour";
			address = "622 Bute St, Vancouver";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-1045";
			HSAT_fax = "844-487-5557";
			break;

		case "Advanced_Sleep_Yaletown":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep - Yaletown";
			subject = "Advanced Sleep Yaletown";
			address = "1296 Pacific Blvd, Vancouver";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-1045";
			HSAT_fax = "844-487-5557";
			break;

		case "ClinicalSleepSolutions_Vancouver":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions Vancouver";
			address = "103-805 W Broadway, Vancouver";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-875-1440";
			HSAT_fax = "604-875-1469";
			break;

		case "Coastal_Sleep_Vancouver":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Vancouver";
			subject = "Coastal Sleep Vancouver";
			address = "515-550 W Broadway, Vancouver";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-325-5667";
			HSAT_fax = "877-241-9245";
			break;

		case "IRS_Vancouver":
			web = "https://irscanada.ca/";
			LocationName = "IRS - Vancouver";
			subject = "IRS Vancouver";
			address = "3651 East 1st Ave, Vancouver";
			eMail = "referrals@irscanada.ca";
			HSAT_phone = "604-291-2222";
			HSAT_fax = "866-888-6011";
			break;

		case "Mainland_Vancouver":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep Clinic";
			subject = "Mainland Vancouver";
			address = "104A 950 W Broadway, Vancouver";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-732-9797";
			HSAT_fax = "604-544-5064";
			break;

		case "MedPro_Vancouver":
			web = "http://www.medprorespiratory.com/";
			LocationName = "MedPro Respiratory Care";
			subject = "MedPro Vancouver";
			address = "200-1847 W Broadway, Vancouver";
			eMail = "HSAT@medprorespiratory.com";
			HSAT_phone = "1-888-310-1444";
			HSAT_fax = "1-888-310-1441";
			break;

		case "Rebel_Sleep":
			web = "https://rebelsleep.ca/";
			LocationName = "Rebel Sleep Institute";
			subject = "Rebel Sleep Vancouver";
			address = "120 - 2490 Birch St, Vancouver";
			eMail = "vancouver@rebelsleep.ca";
			HSAT_phone = "604-307-2686";
			HSAT_fax = "604-549-5807";
			break;

		case "Sleep_Well_Vancouver_RiverDistrict":
			web = "https://sleepwellbc.ca/";
			LocationName = "Sleep Well - River District";
			subject = "Sleep Well River District Vancouver";
			address = "3478 Sawmill Crescent, Vancouver";
			eMail = "info@sleepwellbc.ca";
			HSAT_phone = "604-724-9284";
			HSAT_fax = "604-357-1700";
			break;

		case "SleepWorks_CityView":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - City View";
			subject = "SleepWorks City View Van";
			address = "2480 Heather St, Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SleepWorks_Kerrisdale":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Kerrisdale";
			subject = "SleepWorks Kerrisdale Van";
			address = "2077 W 42 Ave, Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SleepWorks_PtGrey":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Pt Grey";
			subject = "SleepWorks Pt Grey Van";
			address = "4448 W 10th Ave, Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SleepWorks_Sunrise":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Sunrise";
			subject = "SleepWorks Sunrise Van";
			address = "102-2280 E Hastings St, Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SnoreMD_Vancouver":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Vancouver";
			subject = "SnoreMD Vancouver";
			address = "541 W Broadway, Vancouver";
			eMail = "Broadway@SnoreMDcanada.ca";
			HSAT_phone = "604-670-9990";
			HSAT_fax = "604-670-9990";
			break;

		case "Vancouver_Sleep_Solutions":
			web = "https://www.vancouversleepsolutions.com/";
			LocationName = "Vancouver Sleep Solutions";
			subject = "Vancouver Sleep Solutions";
			address = "805-777 Hornby St, Vancouver";
			eMail = "info@vancouversleepsolutions.com";
			HSAT_phone = "604-558-0055";
			HSAT_fax = "604-558-3400";
			break;

		case "UBC_Hospital":
			web = "http://www.vch.ca/Pages/Information-for-physicians.aspx?res_id=566";
			LocationName = "Blackmore Ctr for Sleep Disorders";
			subject = "UBC Hospital";
			address = "Purdy Pav, G34A-2211 Wesbrook Mall";
			eMail = "ubcsleepdisordersclinic@vch.ca";
			HSAT_phone = "604-822-7606";
			HSAT_fax = "604-822-9744";
			break;

		case "VitalAire_Vancouver":
			web = "https://www.vitalaire.ca/";
			LocationName = "VitalAire - Vancouver";
			subject = "VitalAire Vancouver";
			address = "1869 W Broadway, Vancouver";
			eMail = "vahomecare.BC@airliquide.com";
			HSAT_phone = "604-881-0214";
			HSAT_fax = "866-812-0202";
			break;

		case "WestCareSleepRx":
			web = "https://www.westcaremedical.com/index.html";
			LocationName = "West Care Sleep Therapy";
			subject = "West Care Sleep Therapy Vancouver";
			address = "203-650 W 41st Ave, Vancouver";
			eMail = "N/A";
			HSAT_phone = "604-269-0825";
			HSAT_fax = "604-336-8496";
			break;

		case "Advanced_Sleep_NorthVancouver":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep - North Van";
			subject = "Advanced Sleep N Vancouver";
			address = "102 3rd St W, North Vancouver";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-1045";
			HSAT_fax = "844-487-5557";
			break;

		case "ClinicalSleepSolutions_NorthVancouver":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions North Vancouver";
			address = "350-138 E 13th St, North Vancouver";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-985-1440";
			HSAT_fax = "604-985-1567";
			break;

		case "Sleep_Better_NorthVancouver":
			web = "https://sleepbetterlivebetter.ca/";
			LocationName = "Sleep Better Live Better";
			subject = "Sleep Better North Vancouver";
			address = "212-700 Marine Dr, North Van";
			eMail = "info@sleepbetterlivebetter.ca";
			HSAT_phone = "604-987-5337";
			HSAT_fax = "604-987-5336";
			break;

		case "SleepWorks_Lonsdale":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Lonsdale";
			subject = "SleepWorks Lonsdale";
			address = "110-1100 Lonsdale Ave, North Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SleepWorks_Pemberton":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Pemberton";
			subject = "SleepWorks Pemberton";
			address = "1256 Marine Dr, North Vancouver";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SnoreMD_NorthVancouver_Pemberton":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - North Vancouver";
			subject = "SnoreMD Pemberton Plaza N Vancouver";
			address = "1242 Marine Dr, N Vancouver";
			eMail = "NorthVan@SnoreMDcanada.ca";
			HSAT_phone = "778-488-5346";
			HSAT_fax = "778-488-5346";
			break;

		case "SnoreMD_NorthVancouver_ParkGate": // merged with Pemberton
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - North Vancouver";
			subject = "SnoreMD ParkGate N Vancouver";
			address = "150-3650 Mt Seymour Pkwy, North Van";
			eMail = "info@SnoreMDcanada.ca";
			HSAT_phone = "604-210-8456";
			HSAT_fax = "604-210-8456";
			break;

		case "Advanced_Sleep_WestVancouver":
			web = "https://advancedsleep.ca/";
			LocationName = "Advanced Sleep - West Van";
			subject = "Advanced Sleep West Van";
			address = "108-2419 Bellevue Ave, West Vancouver";
			eMail = "info@advancedsleep.ca";
			HSAT_phone = "604-868-1045";
			HSAT_fax = "844-487-5557";
			break;

		case "ClinicalSleepSolutions_Richmond":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions Richmond";
			address = "80-7031 Westminster Hwy, Richmond";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-278-1540";
			HSAT_fax = "604-278-1567";
			break;

		case "Coastal_Sleep_Richmond":
			web = "https://coastalsleep.ca/";
			LocationName = "Coastal Sleep - Richmond";
			subject = "Coastal Sleep Richmond";
			address = "130-7360 Westminster Hwy, Richmond";
			eMail = "info@coastalsleep.ca";
			HSAT_phone = "604-279-9066";
			HSAT_fax = "604-279-9245";
			break;

		case "IRS_Richmond":
			web = "https://irscanada.ca/";
			LocationName = "IRS - Richmond";
			subject = "IRS Richmond";
			address = "250-8120 Cook Rd, Richmond";
			eMail = "referrals@irscanada.ca";
			HSAT_phone = "877-537-0726";
			HSAT_fax = "866-888-6011";
			break;

		case "Mainland_Richmond":
			web = "https://www.mainlandsleep.ca/";
			LocationName = "Mainland Sleep Clinic";
			subject = "Mainland Richmond";
			address = "6071 Gilbert Rd, Richmond";
			eMail = "info@mainlandsleep.ca";
			HSAT_phone = "604-370-6775";
			HSAT_fax = "604-544-5064";
			break;

		case "SleepWorks_RmdOval":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Richmond Oval";
			subject = "SleepWorks Richmond Oval";
			address = "160 6111 River Rd, Richmond";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "SleepWorks_RmdCentral":
			web = "https://www.sleepworksmedical.com/";
			LocationName = "SleepWorks - Richmond Central";
			subject = "SleepWorks Richmond Central";
			address = "150-7997 Westminster Hwy, Richmond";
			eMail = "info@sleepwm.com";
			HSAT_phone = "604-774-6772";
			HSAT_fax = "604-357-1232";
			break;

		case "ClinicalSleepSolutions_Squamish":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions Squamish";
			address = "2-38003 2nd Ave, Squamish";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-390-1130";
			HSAT_fax = "604-390-1131";
			break;

		case "ClinicalSleepSolutions_Sechelt":
			web = "https://www.clinicalsleep.com/";
			LocationName = "Clinical Sleep Solutions";
			subject = "Clinical Sleep Solutions Sechelt";
			address = "106-5682 Wharf Ave, Sechelt";
			eMail = "sleeptest@clinicalsleep.com";
			HSAT_phone = "604-740-4448";
			HSAT_fax = "604-740-4404";
			break;

		case "SnoreMD_Gibsons":
			web = "https://www.snoremdcanada.ca/";
			LocationName = "Snore MD - Gibsons";
			subject = "SnoreMD Gibsons";
			address = "209-1100 Sunshing Coast Hwy, Gibsons";
			eMail = "Gibsons@SnoreMDcanada.ca";
			HSAT_phone = "604-900-9497";
			HSAT_fax = "604-900-9497";
			break;
	}

	document.getElementById("Website").value = web;
	document.FormName.HSAT_name.value = LocationName;
	document.FormName.subject.value = subject;
	document.FormName.HSAT_address.value = address;
	document.FormName.HSAT_eMail.value = eMail;
	document.FormName.HSAT_phone.value = HSAT_phone;
	document.FormName.HSAT_fax.value = HSAT_fax;
}
