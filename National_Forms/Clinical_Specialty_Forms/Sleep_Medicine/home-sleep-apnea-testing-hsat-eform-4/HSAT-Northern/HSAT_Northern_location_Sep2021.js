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

case "MedPro_Northern":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro Respiratory Care';
subject = 'MedPro Northern BC'; 
address = 'Northern BC'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '1-888-310-1444';
HSAT_fax = '1-888-310-1441';
break; 

// end of central intake cases (MedPro)

case "IRS_PrinceGeorge":
web = "https://irscanada.ca/";
LocationName = 'IRS - Prince George';
subject = 'IRS Prince George'; 
address = '411-1669 Victoria St, Prince George'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '250-562-4449';
HSAT_fax = '866-888-6011';
break;

case "MedPro_PrinceGeorge":
web = "http://www.medprorespiratory.com/";
LocationName = 'MedPro Respiratory Care';
subject = 'MedPro Prince George'; 
address = '749 Victoria St, Prince George'
eMail = 'HSAT@medprorespiratory.com';
HSAT_phone = '250-564-2758';
HSAT_fax = '1-888-310-1441';
break;

case "Oxylife_PrinceGeorge":
web = "https://www.sleepapneabc.ca/";
LocationName = 'Oxylife Respiratory Services';
subject = 'Oxylife Prince George'; 
address = '1964 13th Ave, Prince George'
eMail = 'oxylifebc@gmail.com';
HSAT_phone = '250-563-1887';
HSAT_fax = '250-563-1837';
break; 

case "Perfect_PrinceGeorge":
web = "https://sleepapneasecret.com/";
LocationName = 'Perfect Respiratory Services';
subject = 'Perfect Prince George'; 
address = '202-575 Quebec St, Prince George'
eMail = 'info@perfectsleepsolutions.ca';
HSAT_phone = '236-423-6244';
HSAT_fax = 'N/A';
break; 

case "SnoreMD_PrinceGeorge":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Prince George';
subject = 'SnoreMD Prince George'; 
address = '440-5240 Domano Blvd, Prince George'
eMail = 'PrinceGeorge@SnoreMDcanada.ca';
HSAT_phone = '778-764-1758';
HSAT_fax = '778-764-1758';
break;

case "IRS_PrinceRupert":
web = "https://irscanada.ca/";
LocationName = 'IRS - Prince Rupert';
subject = 'IRS Prince Rupert'; 
address = '259-309 2nd Ave, Prince Rupert'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '877-264-6779';
HSAT_fax = '866-888-6011';
break;

case "Perfect_Quesnel":
web = "https://sleepapneasecret.com/";
LocationName = 'Perfect Respiratory Services';
subject = 'Perfect Quesnel'; 
address = '200-533 Reid St, Quesnel'
eMail = 'info@perfectsleepsolutions.ca';
HSAT_phone = '778-414-8444';
HSAT_fax = 'N/A';
break; 

case "IRS_FortStJames":
web = "https://irscanada.ca/";
LocationName = 'IRS - Fort St James';
subject = 'IRS Fort St James'; 
address = '9504 100th St, Fort St James'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '250-787-3003';
HSAT_fax = '866-888-6011';
break;

case "SnoreMD_FortStJames":
web = "https://www.snoremdcanada.ca/";
LocationName = 'Snore MD - Fort St James';
subject = 'SnoreMD Fort St James'; 
address = '102-9203 100 St, Fort St James'
eMail = 'FortStJames@SnoreMDcanada.ca';
HSAT_phone = '778-576-1469';
HSAT_fax = '778-576-1469';
break;

case "IRS_DawsonCreek":
web = "https://irscanada.ca/";
LocationName = 'IRS - Dawson Creek';
subject = 'IRS Dawson Creek'; 
address = '4-829 103rd Ave, Dawson Creek'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '866-218-5084';
HSAT_fax = '866-888-6011';
break;

case "Island_DawsonCreek":
web = "https://www.islandsleep.com/";
LocationName = 'Island CPAP - Dawson Creek';
subject = 'IRS Dawson Creek'; 
address = '4-829 103rd Ave, Dawson Creek'
eMail = 'info@islandcpap.com';
HSAT_phone = '250-784-6608';
HSAT_fax = '877-816-0395';
break;

case "IRS_Smithers":
web = "https://irscanada.ca/";
LocationName = 'IRS - Smithers';
subject = 'IRS Smithers'; 
address = '3842A 3rd Ave, Smithers'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '877-361-8022';
HSAT_fax = '866-888-6011';
break;

case "IRS_Terrace":
web = "https://irscanada.ca/";
LocationName = 'IRS - Terrace';
subject = 'IRS Terrace'; 
address = '202–4634 Park Ave, Terrace'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '250-615-5015';
HSAT_fax = '866-888-6011';
break;

case "IRS_WilliamsLake":
web = "https://irscanada.ca/";
LocationName = 'IRS - Williams Lake';
subject = 'IRS Williams Lake'; 
address = '2–487 Borland St, Williams Lake'
eMail = 'referrals@irscanada.ca';
HSAT_phone = '250-398-7000';
HSAT_fax = '866-888-6011';
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