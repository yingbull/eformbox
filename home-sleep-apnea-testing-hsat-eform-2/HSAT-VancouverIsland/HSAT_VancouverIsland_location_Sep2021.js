/****************************
Chrome Compatible Location drop-down menu as per P Mehta
****************************/
function SetLocation(i) {
switch(i) {
case "blank":
web = '';
LocationName = '';
subject = '';
address = '';
eMail = '';
HSAT_phone = '';
HSAT_fax = '';
break;

case "CanSleep_central":
web = "https://cansleep.ca/";
LocationName = 'CanSleep';
subject = 'CanSleep Central'; 
address = 'CanSleep Central Intake'
eMail = 'info@cansleep.ca';
HSAT_phone = '1-844-753-3740';
HSAT_fax = '1-844-753-3750';
break;

case "ClinicalSleepSolutions_central":
web = "https://www.clinicalsleep.com/";
LocationName = 'Clinical Sleep Solutions';
subject = 'Clinical Sleep Solutions central'; 
address = 'All Locations/Central Repository'
eMail = 'sleeptest@clinicalsleep.com';
HSAT_phone = '1(800) 732-7985';
HSAT_fax = '(604) 800-8135';
break;

case "MedPro_Island":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro Respiratory Care';
subject = 'MedPro Van Island'; 
address = 'Vancouver Island'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '1-888-310-1444';
HSAT_fax = '1-888-310-1441';
break; 

// end of central intake cases (CanSleep, Clinical Sleep Solutions, MedPro)

case "CanSleep_EagleCreek":
web = "https://cansleep.ca/";
LocationName = 'CanSleep Eagle Creek';
subject = 'CanSleep Eagle Creek'; 
address = '150-29 Helmcken Rd, Victoria'
eMail = 'info@cansleep.ca';
HSAT_phone = '250-940-5652';
HSAT_fax = '1-844-753-3750';
break;

case "CanSleep_OakBay":
web = "https://cansleep.ca/";
LocationName = 'CanSleep Oak Bay';
subject = 'CanSleep Oak Bay'; 
address = '2628 Richmond Rd, Victoria'
eMail = 'info@cansleep.ca';
HSAT_phone = '250-592-7378';
HSAT_fax = '1-844-753-3750';
break;

case "Careica":
web = "https://careicahealth.com/";
LocationName = 'Careica';
subject = 'Careica'; 
address = '3595 Ravine Way, Victoria'
eMail = 'N/A';
HSAT_phone = '250-370-9332';
HSAT_fax = '250-370-9365';
break;

case "ClinicalSleepSolutions_Sechelt":
web = "https://www.clinicalsleep.com/";
LocationName = 'Clinical Sleep Solutions - Sechelt';
subject = 'Clinical Sleep Solutions Sechelt'; 
address = '106-5682 Wharf Ave, Sechelt'
eMail = 'info@clinicalsleep.com';
HSAT_phone = '604-740-4448';
HSAT_fax = '604-740-4404';
break;

case "Coastal_Sleep_Nanaimo":
web = "https://coastalsleep.ca/";
LocationName = 'Coastal Sleep - Nanaimo';
subject = 'Coastal Sleep Nanaimo'; 
address = '6-100 Wallace St, Nanaimo'
eMail = 'info@coastalsleep.ca';
HSAT_phone = '250-591-9936';
HSAT_fax = '1-877-241-9245';
break;

case "IRS_Duncan":
web = "https://irscanada.ca/";
LocationName = 'IRS - Duncan';
subject = 'IRS Duncan'; 
address = '1-2628 Beverly St, Duncan'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '877-965-6204';
HSAT_fax = '866-888-6011';
break;

case "IRS_Nanaimo":
web = "https://irscanada.ca/";
LocationName = 'IRS - Nanaimo';
subject = 'IRS Nanaimo'; 
address = '150-2124 Bowen Rd, Nanaimo'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '877-965-6204';
HSAT_fax = '866-888-6011';
break;

case "IRS_Victoria":
web = "https://irscanada.ca/";
LocationName = 'IRS - Victoria';
subject = 'IRS Victoria'; 
address = '819 Bay St, Victoria'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '877-965-6204';
HSAT_fax = '866-888-6011';
break;

case "Island_CPAP_CampbellRiver":
web = "https://www.islandsleep.com/contact_us#campbell_river";
LocationName = 'Island CPAP - Campbell River';
subject = 'Island CPAP Campbell River'; 
address = '1477 Island Hwy, Campbell River'
eMail = 'info@islandcpap.com';
HSAT_phone = '250-287-5296';
HSAT_fax = '877-816-0395';
break;

case "Island_CPAP_Courtenay":
web = "https://www.islandsleep.com/contact_us#campbell_river";
LocationName = 'Island CPAP - Courtenay';
subject = 'Island CPAP Courtenay'; 
address = '111-750 Comox Rd, Courtenay'
eMail = 'info@islandcpap.com';
HSAT_phone = '250-897-5296';
HSAT_fax = '877-816-0395';
break;

case "Island_CPAP_Nanaimo":
web = "https://www.islandsleep.com/contact_us#nanaimo";
LocationName = 'Island CPAP - Nanaimo';
subject = 'Island CPAP Nanaimo'; 
address = '402-6581 Aulds Rd, Nanaimo'
eMail = 'info@islandcpap.com';
HSAT_phone = '250-390-0787';
HSAT_fax = '250-390-0749';
break;

case "Island_CPAP_PtHardy":
web = "https://www.islandsleep.com/contact_us#port_hardy";
LocationName = 'Island CPAP - Pt Hardy';
subject = 'Island CPAP Pt Hardy'; 
address = '9140 Granville St, Pt Hardy'
eMail = 'info@islandcpap.com';
HSAT_phone = '';
HSAT_fax = '877-816-0395';
break;

case "Island_CPAP_PowellRiver":
web = "https://www.islandsleep.com/contact_us#Powell_river";
LocationName = 'Island CPAP - Powell River';
subject = 'Island CPAP Powell River'; 
address = '4794 Joyce Ave, Powell River'
eMail = 'info@islandcpap.com';
HSAT_phone = '604-344-1555';
HSAT_fax = '877-816-0395';
break;

case "MedPro_Nanaimo":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro - Nanaimo';
subject = 'MedPro Nanaimo'; 
address = '101-5180 Dublin Way, Nanaimo'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '250-714-0423';
HSAT_fax = '1-888-310-1441';
break; 

case "MedPro_Victoria":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro - Victoria';
subject = 'MedPro Victoria'; 
address = '278-2950 Douglas St, Victoria'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '250-388-4987';
HSAT_fax = '1-888-310-1441';
break; 

case "MedPro_Colwood":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro - Colwood';
subject = 'MedPro Colwood'; 
address = '100A-2244 Sooke Rd, Victoria'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '250-388-4987';
HSAT_fax = '1-888-310-1441';
break; 

case "MedSleep_Langford":
web = "https://medsleep.com/locations/british-columbia/Langford/";
LocationName = 'MedSleep';
subject = 'MedSleep Langford'; 
address = '125-735 Goldstream Ave, Victoria'
eMail = 'victoria@medsleep.com';
HSAT_phone = '778-265-3383';
HSAT_fax = '250-391-8400';
break;

case "MedSleep_Saanich":
web = "https://medsleep.com/locations/british-columbia/saanich/";
LocationName = 'MedSleep';
subject = 'MedSleep Saanich'; 
address = '113-3995 Quadra St, Victoria'
eMail = 'victoria@medsleep.com';
HSAT_phone = '778-265-3383';
HSAT_fax = '250-391-8400';
break;

case "Pacific_CampbellRiver":
web = "https://pacificsleep.ca/";
LocationName = 'Pacific Sleep Care';
subject = 'Pacific Campbell River'; 
address = '277 Evergreen Rd, Campbell River'
eMail = 'info@pacificsleep.ca';
HSAT_phone = '250-914-5050';
HSAT_fax = '250-914-5051';
break;

case "Pacific_Courtenay":
web = "https://pacificsleep.ca/";
LocationName = 'Pacific Sleep Care';
subject = 'Pacific Courtenay'; 
address = '1255B Cliffe Ave, Courtenay'
eMail = 'info@pacificsleep.ca';
HSAT_phone = '250-334-0789';
HSAT_fax = '250-334-0758';
break;

case "Pacific_Duncan":
web = "https://pacificsleep.ca/";
LocationName = 'Pacific Sleep Care';
subject = 'Pacific Duncan'; 
address = '101-15 Canada Ave, Duncan'
eMail = 'info@pacificsleep.ca';
HSAT_phone = '888-258-4061';
HSAT_fax = '250-597-3445';
break;

case "Pacific_Nanaimo":
web = "https://pacificsleep.ca/";
LocationName = 'Pacific Sleep Care';
subject = 'Pacific Nanaimo'; 
address = '3-5144 Metral Dr, Nanaimo'
eMail = 'info@pacificsleep.ca';
HSAT_phone = '250-585-6151';
HSAT_fax = '250-585-5421';
break;

case "RHS_Duncan":
web = "https://rhscanada.com/";
LocationName = 'RHS Duncan';
subject = 'RHS Duncan'; 
address = '205-2763 Beverly St, Duncan'
eMail = 'serviceforlife@rhscanada.com';
HSAT_phone = '250-701-0424';
HSAT_fax = '1-877-701-0425';
break;

case "RHS_Langford":
web = "https://rhscanada.com/";
LocationName = 'RHS Langford';
subject = 'RHS Langford'; 
address = '107–2349 Millstream Rd, Victoria'
eMail = 'serviceforlife@rhscanada.com';
HSAT_phone = '250-370-9510';
HSAT_fax = '1-877-701-0425';
break;

case "RHS_PtAlberni":
web = "https://rhscanada.com/";
LocationName = 'RHS Pt Alberni';
subject = 'RHS Pt Alberni'; 
address = '102–4917 Pemberton Rd, Pt Alberni'
eMail = 'serviceforlife@rhscanada.com';
HSAT_phone = '1-877-701-0424';
HSAT_fax = '1-877-701-0425';
break;

case "RHS_Victoria":
web = "https://rhscanada.com/";
LocationName = 'RHS Victoria';
subject = 'RHS Victoria'; 
address = '204-1537 Hillside Ave, Victoria'
eMail = 'serviceforlife@rhscanada.com';
HSAT_phone = '1-877-701-0424';
HSAT_fax = '1-877-701-0425';
break;

case "SleepEasy":
web = "http://www.sleepeasyrespiratoryservices.ca/";
LocationName = 'Sleepeasy Respiratory Services';
subject = 'Sleepeasy Duncan'; 
address = '204-225 Canada Avenue, Duncan'
eMail = 'sleepeasy@shaw.ca';
HSAT_phone = '778-400-9644';
HSAT_fax = 'N/A';
break;

case "SnoreMD_Victoria":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Victoria';
subject = 'SnoreMD Victoria'; 
address = '22-3617 Shelbourne St, Victoria'
eMail = 'info@SnoreMDcanada.ca';
HSAT_phone = '250-853-2211';
HSAT_fax = '250-853-2211';
break;

case "VitalAire_Courtenay":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Courtenay';
subject = 'VitalAire Courtenay'; 
address = '99-1742 Cliffe Ave, Courtenay'
eMail = 'vahomecare.BC@airliquide.com';
HSAT_phone = '800-637-0202';
HSAT_fax = '866-812-0202';
break;

case "VitalAire_Nanaimo":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Nanaimo';
subject = 'VitalAire Nanaimo'; 
address = '5-5769 Turner Rd, Nanaimo'
eMail = 'vahomecare.BC@airliquide.com';
HSAT_phone = '250-390-5193';
HSAT_fax = '866-812-0202';
break;

case "VitalAire_Qualicum":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Qualicum Beach';
subject = 'VitalAire Qualicum Beach'; 
address = '103-664 Beach Rd, Qualicum Beach'
eMail = 'vahomecare.BC@airliquide.com';
HSAT_phone = '800-637-0202';
HSAT_fax = '866-812-0202';
break;

case "VitalAire_Victoria":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Victoria';
subject = 'VitalAire Victoria'; 
address = 'Unit B 3055 Scott St, Victoria'
eMail = 'vahomecare.BC@airliquide.com';
HSAT_phone = '250-744-3577';
HSAT_fax = '866-812-0202';
break;

}

document.getElementById('Website').value = web; 
document.FormName.HSAT_name.value = LocationName;
document.FormName.subject.value = subject; 
document.FormName.HSAT_address.value = address;
document.FormName.HSAT_eMail.value = eMail;
document.FormName.HSAT_phone.value = HSAT_phone ;
document.FormName.HSAT_fax.value = HSAT_fax;
}