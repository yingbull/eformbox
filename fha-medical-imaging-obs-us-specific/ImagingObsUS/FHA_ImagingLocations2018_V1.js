/***********************************************************************
*   LOCATION FUNCTION
*   PM Sep 2017
************************************************************************/

function setImagingLocation(i) {
  var hs="";

  switch(i) {
      default:
      address="";
      i="";
      break;
    case "RCH":
      address = 'Royal Columbian Hospital Medical Imaging \n330 East Columbia St, \nNew Westminster, BC, V3L 3W7 \nPhone (604) 520-4640 (XR) \nPhone (604) 520-4642 (US) \nFax (604) 520-4120';
      hs = i; 
      break;
    case "ERH":
      address = 'Eagle Ridge Hospital Medical Imaging \n475 Guildford Way, \nPort Moody, BC, V3H 3W9 \nPhone (604) 469-3172 \nFax (604) 469-3209';
      hs = i; 
      break;
    case "BH":
      address = 'Burnaby Hospital \n3935 Kincaid St, \nBurnaby, BC, V5G 2X6 \nPhone (604) 412-6271 \nFax (604) 412-6181';
      hs = i; 
      break;
    case "RMH":
      address = 'Ridge Meadows Hospital \n11666 Laity St, \nMaple Ridge, BC, V2X 5A3 \nPhone (604) 463-1853 \nFax (604) 463-1879';
      hs = i; 
      break;
    case "JPOSC":
      address = 'Surrey Hospital - Jim Pattison Outpatient Centre \n9750 140th St, \nSurrey, BC, V3T 0G9 \nPhone (604) 582-4550 \nFax (604) 582-3766';
      hs = i; 
      break;
    case "SPH":
      address = "St Paul's Hospital \n1081 Burrard St, \nVancouver, BC, V6Z 1Y6 \nPhone (604)806-8006 (XR); (604) 806-8161 (US) \nFax (604) 806-8437 (XR/CT) \nFax (604) 806-8524 (US)";
      hs = i; 
      break;
    case "MSJ":
      address = "Mount St Joseph's Hospital \n3080 Prince Edward St, \nVancouver, BC, V5T 3N4 \nPhone (604) 877-8323 \nFax (604) 877-8132";
      hs = i; 
      break;
    case "DH":
      address = 'Delta Hospital \n5800 Mountain View Blvd, \nDelta, BC, V4K 3V6 \nPhone (604) 940-3403 \nFax (604) 940-3974';
      hs = i; 
      break;
    case "LMH":
      address = 'Langley Memorial Hospital \n22051 Fraser Highway, \nLangley, BC, V5A 4H4 \nPhone (604) 533-6405 \nFax (604) 533-6456';
      hs = i; 
      break;
    case "ARHCC":
      address = 'Abbotsford Regional Hospital and Cancer Centre \n32900 Marshall Road, \nAbbotsford, BC, V2S 0C2 \nPhone (604) 851-4868 \nFax (604) 851-4904';
      hs = i; 
      break;
    case "MEDRAY":
      address = 'MedRay Imaging \n100 - 3001 Gordon Ave, \nCoquitlam, BC, V3C 2K7 \nPhone (604) 941-7611 (must call for appt) \nFax (604) 942-4612 (do not fax for appt) \nM-F 8:00-5:30 (Th 8:30 pm) Sa 8:30-1:00';
      break;
    case "WCMI_Austin":
      address = 'WCMI Coquitlam \n101 - 1015 Austin Ave, \nCoquitlam, BC, V3K 3N9 \nPhone (604) 937-5588 \nFax (604) 936-8800 \nM-F 8:30-5:30 Sa 8:30-12:30 \nUS Sa 8:30-3:00';
      break;
    case "WCMI_New_West":
      address = 'WCMI New West Royal City Centre \n200 - 610 - 6th St, \nNew Westminster, BC, V3L 3C2 \nPhone (604) 522-6818  \nFax (604) 522-6810\nM-F 8:00-5:30 Sa 8:30-4:00';
      break;
    case "WCMI_Brewery_District":
      address = "WCMI Brewery District \n401 - 233 Nelson's Crescent, \nNew Westminster, BC, V3L 0E4 \nPhone (604) 526-2466 \nFax (604) 521-5904\nM-F 8:00-5:00";
      break;
    case "WCMI_Guildford":
      address = 'WCMI Guildford Health Center\n3 - 15300  105th Ave, \nSurrey, BC, V3R 6A7 \nPhone (604) 581-1101 \nFax (604) 582-8520 \nM-F 8:30-5:15 Sa 8:30-12:30 \nUS M-F 8:00-5:30, Sa 8:00-3:30';
      break;
    case "WCMI_KGB":
      address = 'WCMI City Centre One \n1 - 13737 96 Ave, \nSurrey, BC, V3V 1Z2 \nPhone (604) 581-4616 \nFax (604) 582-9022 \nM-F 8:30-5:30 Sa 8:30-12:30';
      break;
    case "WCMI_Scott_Rd":
      address = 'WCMI Scott Road X-ray Centre\n104 - 8425 - 120th St, \nDelta, BC, V4C 6R2 \nPhone (604) 590-2211 \nFax (604) 581-0405 \nM-F 8:30-6:00, M-W 6:00-7:00 Sa 8:30-4:30 \nMammo M-F 8:30-6:00, Sa 8:30-4:30';
      break;
    case "Brooke_MetroTown":
      address = 'Brooke Radiology Associates\n100 - 4980 Kingsway (Metrotown), \nBurnaby, BC, V5H 4K7\nPhone (604) 434-1345\nFax (604) 435-1309\nM-F 8:00-5:00';
      break;
    case "Brooke_N_Burnaby":
      address = 'Brooke Radiology Associates \n20 - 4218 East Hastings St, \nBurnaby, BC, V5C 2J6 \nPhone (604) 299-2666 \nFax (604) 299-5773 \nM-F 8:30-5:00';
      break;
    case "WCMI_E_Hastings":
      address = 'WCMI East Hastings\n2728 East Hastings St, \nVancouver, BC, V5K 1Z9 \nPhone (604) 254-1687\nFax (604) 254-1687\nM-F 9:30-5:00';
      break;
    case "XRAY_505":
      address = 'XRAY 505, \n505 - 750 West Broadway, \nVancouver, BC, V5Z 1H4 \nPhone (604) 635-1720 \nM-F 8:00-5:00';
      break;
    case "WCMI_Laurel":
      address = 'WCMI Laurel, \n106 - 888 West 8th Ave, \nVancouver, BC, V5Z 3Y1 \nPhone (604) 879-7726 \nFax (604) 879-7725 \nM-F 8:30-5:30';
      break;
	case "WCMI_Arbutus":
      address = 'WCMI Arbutus-Broadway, \n390 - 2184 West Broadway, \nVancouver, BC, V6K 2E1 \nPhone (604) 731-2200 \nFax (604) 736-9314 \nM-F 8:30-5:00';
      break;
    case "WCMI_Oakridge":
      address = 'WCMI Oakridge Plaza \n44 - 5740 Cambie St, \nVancouver, BC, V5Z 3A6 \nPhone (604) 325-3244 \nFax (604) 325-0136 \nM-F 8:00-5:00 Sa 8:00-12:30 \nUS M-F 8:00-5:00, Sa 8:00-12:30';
      break;
    case "Greig_Oakridge":
      address = 'Greig Associates, \n219 - 650 West 41st Ave, \nVancouver, BC, V5Z 2M9 \nPhone (604) 261-3177 \nFax (604) 264-4815 \nM-F 8:00-5:00 Sa 8:00-3:30';
      break;
    case "WCMI_Burrard":
      address = 'WCMI Burrard X-Ray Centre \n270 - 1144 Burrard St, \nVancouver, BC, V6Z 2A5 \nPhone (604) 689-8925 \nFax (604) 689-3364 \nM-F 8:30-5:30';
      break;
    case "Chinatown":
      address = 'Downtown Radiology, Chinatown, \n205 - 180 Keefer St, \nVancouver, BC,  \nPhone (604) 688-9428 \nFax (604) 688-5123 \nM-Sa 8:30-5:00';
      break;
     case "RobsonSq":
      address = 'Downtown Radiology, Robson Square, \n777 Hornby St, \nVancouver, BC, V5Z 1S4 \nPhone (604) 688-9428 \nFax (604) 688-5123 \nM-Sa 9:00-5:00';
      break;
    case "WCMI_E_Broadway":
      address = 'WCMI East Broadway, \n430 - 1669 East Broadway, \nVancouver, BC, V5N 1V9 \nPhone (604) 873-1846 \nFax (604) 873-6318 \nM-F 8:15-6:00 Sa 8:00-2:00 \nMammo Th 8:30-4:30';
      break;
    case "Greig_Victoria_Dr":
      address = 'Greig Associates, \n5732 Victoria Dr, \nVancouver, BC, V5P 3W6 \nPhone (604) 321-6774 \nFax (604) 321-6626 \nXR M-F 8:15-6:30 Sa 8:00-3:30 \nUS M-Th 7:30-9:00 p.m., F-Sa 7:30-5:00';
      break;
    case "NSMI_N_Van":
      address = 'North Shore Medical Imaging \n139 West 16th St, \nNorth Vancouver, BC, V7M 1T3 \nPhone (604) 987-9729 \nFax (604) 984-8395\nM-F 7:30-5:45 (T-Th to 8:15) Sa 7:30-1:45';
      break;
    case "NSMI_W_Van":
      address = 'North Shore Medical Imaging \n110 - 575 16th St, \nWest Vancouver, BC, V7V 4Y1 \nPhone (604) 922-9141 \nFax (604) 922-6348 \nM-F 8:00-4:15';
      break;
    case "Brooke_Richmond_3Rd":
      address = 'Brooke Radiology Richmond #3 \n150 - 5791 No. 3 Road, \nRichmond, BC, V6X 2C9 \nPhone (604) 278-9151 \nFax (604) 278-6315 \nM-F 8:00-5:00';
      break;
    case "Brooke_Richmond_Gilbert":
      address = 'Brooke Radiology Richmond Gilbert\n105 - 6051 Gilbert Road, \nRichmond, BC, V7C 3V3 \nPhone (604) 273-7378  \nFax (604) 273-5861  \nM-F 8:00-4:30';
      break;
    case "VMI_Langley":
      address = 'Valley Medical Imaging \n200 - 5503 - 206th St, \nLangley, BC, V3A 2C6  \nPhone (604) 534-4114 \nFax (604) 534-7877 \nM-F 8:00-5:00';
      break;
    case "VMI_Chilliwack":
      address = 'Valley Medical Imaging \n45731 Patten Ave, \nChilliwack, BC, V2P 1S2  \nPhone (604) 795-7205 \nFax (604) 795-3543 \nM-F 8:30-5:00';
      break;
    case "VMI_Abbotsford":
      address = 'Valley Medical Imaging \n102 - 32475 Simon Ave, \nAbbotsford-Clearbrook, BC, V2T 5E3 \nPhone (604) 855-0112 \nFax (604) 855-0109 \nM-F 8:00-5:00';
      break;
    case "NT_RCH":
      address = 'Royal Columbian Hospital Medical Imaging \nFor NT US\n330 East Columbia St, \nNew Westminster, BC, V3L 3W7 \nPhone (604) 520-4132 \nFax (604) 520-4140 (US NT only)';
      break;
    case "NT_MedRay":
      address = 'MedRay Imaging for NT US \n100 - 3001 Gordon Ave, \nCoquitlam, BC, V3C 2K7 \nPhone (604) 941-7611 Ext 722 (must call for appt) \nFax (604) 942-4612 (do not fax for appt)';
      break;
    case "NT_JPOCSC":
      address = 'Surrey Hospital - Jim Pattison Outpatient Centre \nFor NT US \n9750 140th St, \nSurrey, BC, V3T 0G9 \nPhone (604) 582-4558 Ext 763995 \nFax (604) 582-3798';
      break;
    case "NT_BCWH":
      address = "BC Women's Hospital \nMedical Imaging for NT US \n4500 Oak St, \nVancouver, BC, V6H 3N1 \nPhone (604) 875-2900 \nFax (604) 875-3013";
      break;
  }

  document.FormName.Location.value = address;
  document.FormName.HospitalSite.value = hs; 
}