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

case "ClinicalSleepSolutions_central":
web = "https://www.clinicalsleep.com/";
LocationName = 'Clinical Sleep Solutions';
subject = 'Clinical Sleep Solutions central'; 
address = 'All Locations/Central Repository'
eMail = 'sleeptest@clinicalsleep.com';
HSAT_phone = '1(800) 732-7985';
HSAT_fax = '(604) 800-8135';
break;

case "MedPro_Vancouver":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro Respiratory Care';
subject = 'MedPro Van Fraser Valley'; 
address = 'Vancouver / Fraser Valley'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '1-888-310-1444';
HSAT_fax = '1-888-310-1441';
break; 

// end of central intake cases (CanSleep, Clinical Sleep Solutions, MedPro)

case "ClinicalSleepSolutions_Abbotsford":
web = "https://www.clinicalsleep.com/";
LocationName = 'Clinical Sleep Solutions';
subject = 'Clinical Sleep Solutions Abbotsford'; 
address = '105-1975 McCallum Rd, Abbotsford'
eMail = 'sleeptest@clinicalsleep.com';
HSAT_phone = '604-746-2290';
HSAT_fax = '604-746-2270';
break;

case "ClinicalSleepSolutions_Chilliwack":
web = "https://www.clinicalsleep.com/";
LocationName = 'Clinical Sleep Solutions';
subject = 'Clinical Sleep Solutions Chilliwack'; 
address = '116-9193 Main St, Chilliwack'
eMail = 'sleeptest@clinicalsleep.com';
HSAT_phone = '604-392-5554';
HSAT_fax = '604-392-5541';
break;


case "Coastal_Sleep_Abbotsford":
web = "https://coastalsleep.ca/";
LocationName = 'Coastal Sleep - Abbotsford';
subject = 'Coastal Sleep Abbotsford'; 
address = '302-33140 Mill Lake Rd, Abbotsford'
eMail = 'info@coastalsleep.ca';
HSAT_phone = '604-744-0155';
HSAT_fax = '604-744-0199';
break;

case "IRS_Abbotsford":
web = "https://irscanada.ca/";
LocationName = 'IRS - Abbotsford';
subject = 'IRS Abbotsford'; 
address = '1-2111 McCallum Rd, Abbotsford'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '604-850-7778';
HSAT_fax = '866-888-6011';
break;

case "IRS_Chilliwack":
web = "https://irscanada.ca/";
LocationName = 'IRS - Chilliwack';
subject = 'IRS Chilliwack'; 
address = '101-45389 Luckakuck Way, Chilliwack'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '604-705-0557';
HSAT_fax = '866-888-6011';
break;

case "IRS_MapleRidge":
web = "https://irscanada.ca/";
LocationName = 'IRS - Maple Ridge';
subject = 'IRS Maple Ridge'; 
address = '101-22351 St. Anne Ave, Maple Ridge'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '604-466-0900';
HSAT_fax = '866-888-6011';
break;

case "Mainland_Abbotsford":
web = "https://www.mainlandsleep.ca/";
LocationName = 'Mainland Sleep Clinic';
subject = 'Mainland Abbotsford'; 
address = '303-2180 Gladwin Rd, Abbotsford'
eMail = 'info@mainlandsleep.ca';
HSAT_phone = '604-758-0933';
HSAT_fax = '604-544-5064';
break;

case "MedPro_Abbotsford":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro - Abbotsford';
subject = 'MedPro Abbotsford'; 
address = '211-32900 South Fraser Way, Abbotsford'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '604-864-0298';
HSAT_fax = '604-521-9286';
break; 

case "Oxylife_Chilliwack":
web = "https://www.sleepapneabc.ca/";
LocationName = 'Oxylife Respiratory Services';
subject = 'Oxylife Chilliwack'; 
address = '45601 Hodgins Ave, Chilliwack'
eMail = 'oxylifechilliwack@gmail.com';
HSAT_phone = '604-391-0050';
HSAT_fax = '604-393-3145';
break; 

case "SnoreMD_Abbotsford":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Abbotsford';
subject = 'SnoreMD Abbotsford'; 
address = '30-32700 South Fraser Way, Abbotsford'
eMail = 'abbotsford@snoreMDcanada.ca';
HSAT_phone = '778-771-0169';
HSAT_fax = '778-771-0169';
break;

case "SnoreMD_MapleRidge":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Maple Ridge';
subject = 'SnoreMD Maple Ridge'; 
address = '620-20395 Lougheed Hwy, Maple Ridge'
eMail = 'MapleRidge@snoreMDcanada.ca';
HSAT_phone = '778-619-2002';
HSAT_fax = '778-619-2002';
break;

case "SnoreMD_Mission":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Mission';
subject = 'SnoreMD Mission'; 
address = '250-32530 Lougheed Hwy, Mission'
eMail = 'mission@snoreMDcanada.ca';
HSAT_phone = '236-437-2001';
HSAT_fax = '236-437-2001';
break;

case "SnoreStop_Chilliwack":
web = "https://www.snoremdcanada.ca/";
LocationName = 'SnoreStop - Chilliwack';
subject = 'SnoreStop Chilliwack'; 
address = '14-45905 Yale Rd, Chilliwack'
eMail = 'info@snorestopsleepclinic.com';
HSAT_phone = '604-792-9200';
HSAT_fax = 'N/A';
break;

case "VitalAire_Abbotsford":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Abbotsford';
subject = 'VitalAire Abbotsford'; 
address = '205-1945 McCallum Rd, Abbotsford'
eMail = 'custserv.bc@airliquide.com';
HSAT_phone = '800-637-0202';
HSAT_fax = '866-812-0202';
break;

case "VitalAire_PittMeadows":
web = "https://www.vitalaire.ca/";
LocationName = 'VitalAire - Pitt Meadows';
subject = 'VitalAire Pitt Meadows'; 
address = '203-12181 Harris Rd, Pitt Meadows'
eMail = 'custserv.bc@airliquide.com';
HSAT_phone = '800-637-0202';
HSAT_fax = '866-812-0202';
break;

case "WestCareSleepRx_Abbotsford":
web = "https://www.westcaremedical.com/index.html";
LocationName = 'West Care Sleep Therapy';
subject = 'West Care Abbotsford'; 
address = '404-2151 McCallum Rd, Abbotsford';
eMail = 'N/A';
HSAT_phone = '???';
HSAT_fax = '???';
break;

case "WestCareSleepRx_Chilliwack":
web = "https://www.westcaremedical.com/index.html";
LocationName = 'West Care Chilliwack';
subject = 'West Care Chilliwack'; 
address = '45424 Hodgins Ave, Chilliwack';
eMail = 'N/A';
HSAT_phone = '???';
HSAT_fax = '???';
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